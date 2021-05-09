<template>
  <div id="loading">
    <div class="spinner">
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
    </div>
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
