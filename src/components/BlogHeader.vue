<template>
  <div class="text-center my-5">
    <router-link
      :to="'/'"
      class="text-reset text-decoration-none"
      > 
      <p class="display-4">
        {{headerTitle? headerTitle: `MSoup's Blog`}}
      </p>
    </router-link>
  </div>
</template>

<script language="ts">

export default {
  props: {
    headerTitle: String,
  }
}
</script>