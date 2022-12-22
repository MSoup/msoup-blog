<template>
  <header class="pl-5 my-1 mb-1">
    <router-link :to="'/'" class="text-reset text-decoration-none">
      <p>
        {{ headerTitle ? headerTitle : `MSoup's Blog` }}
      </p>
    </router-link>
  </header>
</template>

<script language="ts">

export default {
  props: {
    headerTitle: String,
  }
}
</script>