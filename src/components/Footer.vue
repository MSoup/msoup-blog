<template>
  <div
    class="text-center mt-5 py-2"
    :style="`background-color: ${VUE_APP_FOOTER_BG_CSS_COLOR}; color: ${VUE_APP_FOOTER_TEXT_CSS_COLOR};`"
  >
    <router-link
      :to="'/'"
      class="text-reset"
    >
      <p class="m-0 p-0">
        MSoup's Blog v{{ version }}
      </p>
    </router-link>
  </div>
</template>

<script language="ts">
import { defineComponent } from 'vue'
import { version } from '../../package.json'
import blogConfig from '../blog_config'

const { VUE_APP_FOOTER_BG_CSS_COLOR, VUE_APP_FOOTER_TEXT_CSS_COLOR = 'white' } = blogConfig

export default defineComponent({
  data () {
    return {
      version,
      VUE_APP_FOOTER_BG_CSS_COLOR,
      VUE_APP_FOOTER_TEXT_CSS_COLOR
    }
  }
})
</script>
