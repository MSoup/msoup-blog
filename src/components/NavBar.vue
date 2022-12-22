<template>
  <nav class="navbar navbar-expand-md navbar-light mb-0"
    :style="`background-color: ${VUE_APP_NAVBAR_BG_CSS_COLOR}; color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`">
    <router-link class="navbar-brand" :to="'/'" :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`">
      {{ title }}
    </router-link>
    <button :class="`navbar-toggler ${collapseMenu ? 'collapsed' : ''}`" type="button" data-toggle="collapse"
      data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" :aria-expanded="!collapseMenu"
      aria-label="Toggle navigation" @click="collapseMenu = !collapseMenu">
      <span class="navbar-toggler-icon" :style="`background-color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`" />
    </button>

    <div id="navbarNavDropdown" :class="`navbar-collapse collapse ${collapseMenu ? '' : 'show'}`">
      <ul class="ml-auto mr-5 navbar-nav">
        <li :class="`nav-item dropleft dropdown ${dropdown.active.value ? 'show' : ''}`">
          <a id="navbarDropdownMenuLink" :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`"
            class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
            :aria-expanded="dropdown.active.value" @click.stop="dropdown.active.value = !dropdown.active.value">
            Sections
          </a>
          <div :class="`dropdown-menu ${dropdown.active.value ? 'show' : ''}`" style="
              max-height: 200px;
              padding: 15px;
              background-color: #e2f0fb;
              min-width: 400px;">
            <router-link v-for="(count, section) of sections" :key="section" class="dropdown-item text-capitalize"
              :to="section === 'all' ? '/' : `/${section}`" @click="dropdown.active.value = false">
              {{ section }} ({{ count }})
            </router-link>
          </div>
        </li>
        <li :class="`nav-item`">
          <router-link class="nav-link" :style="`color: ${VUE_APP_NAVBAR_TEXT_CSS_COLOR};`" :to="'/about'">
            About
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script language="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import blogConfig from "../blog_config";

const { VUE_APP_NAVBAR_BG_CSS_COLOR, VUE_APP_NAVBAR_TEXT_CSS_COLOR } =
  blogConfig;

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
    sections: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const dropdown = {
      active: ref(false),
      close: () => {
        dropdown.active.value = false
      }
    }

    onBeforeUnmount(() => {
      document.removeEventListener('click', dropdown.close)
    })

    onMounted(() => {
      document.addEventListener('click', dropdown.close)
    })

    const showDropdown = ref(false);
    const collapseMenu = ref(true);

    return {
      dropdown,
      showDropdown,
      collapseMenu,
      VUE_APP_NAVBAR_BG_CSS_COLOR,
      VUE_APP_NAVBAR_TEXT_CSS_COLOR,
    };
  },
});
</script>
