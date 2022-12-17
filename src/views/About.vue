<template>
    <PatchMeta :title="'About Me'" />

    <div class="container my-4 my-md-5">
    <BlogHeader headerTitle="About Me" />

    <span class="markdown-body"
      :style="`background-color: ${VUE_APP_MAIN_BG_CSS_COLOR}; color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`"
      v-html="postHtml" />
    <button type="button" :style="`color: ${VUE_APP_MAIN_TEXT_CSS_COLOR};`" class="border btn mt-4"
      @click="hasHistory() ? router.go(-1) : router.push('/')">
      &laquo; Back
    </button>
  </div>

  </template>
  
  <script lang="ts">
    import { defineComponent, inject } from 'vue'
    import BlogHeader from '../components/BlogHeader.vue'
    import PatchMeta from '../components/PatchMeta.vue'
    import blogConfig from '../blog_config'
    import router from '../router'
    import axios from 'redaxios'
    import MarkdownIt from 'markdown-it'
    import emoji from 'markdown-it-emoji'
    import hljs from 'highlight.js'
    import 'highlight.js/styles/github.css';
    import { onBeforeRouteUpdate } from 'vue-router'

    const { VUE_APP_MAIN_BG_CSS_COLOR, VUE_APP_MAIN_TEXT_CSS_COLOR } = blogConfig
    const markDownIt = new MarkdownIt({
        html: true,
        highlight: function (str: string, lang: string) {
            if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
            }

            return ''; // use external default escaping
        }
        }).use(emoji)

    export default defineComponent({
        components: {
        PatchMeta,
        BlogHeader
        },
        props: {
            // No props yet
        },
        async setup (props) {
            const url: string = inject('aboutMe', 'blog_store/about.md')
            onBeforeRouteUpdate(() => {
                location.reload()
                })

        // Fetch Post markdown and compile it to html
        const {data: markDownSource} = await axios.get(url)
        const postHtml = markDownIt.render(markDownSource)

        // Patch page title
        const [, title] = markDownSource.split('#')

        // Back button helper
        const hasHistory = () => window.history?.length > 2


        return {
            hasHistory,
            VUE_APP_MAIN_BG_CSS_COLOR,
            VUE_APP_MAIN_TEXT_CSS_COLOR,
            postHtml,
            router,
        }
        }
    })
    </script>
    