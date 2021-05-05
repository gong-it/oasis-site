<template>
  <div id="loading">
    <h1 class="hero__header">
      <vue-typed-js :strings="['Loading...', 'Loading...', 'Loading...']" :showCursor="false" :backSpeed="100" :loop="true">
        <span class="text-orange typing"></span>
      </vue-typed-js>
    </h1>
  </div>
</template>

<script lang="ts" src="./src/Loading.ts">
</script>
<style scoped>
  #loading {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
