<template>
  <div id="app" class="flex flex-col items-center justify-center">
    <h1 v-if="chainId !== '0x38'">
      You need to change metamask to use binance smart chain network.
    </h1>
    <h1 v-if="tip && tip.error && chainId === '0x38' ">
      You need to initiate a tip on the discord first and use the link from the bot.
    </h1>
    <div v-if="tip && !tip.error && chainId === '0x38'" class="flex">
      <img :src="tip.avatar" alt="" class="rounded-full">
      <div class="p-1 align-self-end">
        <h1>
          Tip <span class="user-tag">{{ tip.tag }}</span><br>
        </h1>
        <h1 class="text-align-right">
          {{ tip.amount }} <span class="oasis">oasis</span>
        </h1>
      </div>
    </div>

    <div v-if="tip && !tip.error && chainId === '0x38'" class="mt-5 flex justify-space-between">
      <!-- Connect button is disabled if we have the from address which is the person who is connected -->
      <button v-if="!fromAddress" class="btn btn--primary" @click="requestAccount">
        Connect
      </button>
      <!-- Send tip button is disabled if we dont have the address -->
      <button v-else class="btn btn--primary" :disabled="txid !== null" @click="sendTransaction">
        Send tip
      </button>
    </div>
  </div>
</template>

<script lang="ts" src="./src/tip.ts">
</script>
<style scoped>
  :root {
    --dark: #18171c;
    --grey: #28272d;
    --red: #e8422a;
    --red-light: #e6332a;
    --yellow: #f9b234;
    --blue: #39cad2;
    --orange: #f25b21;
  }
  body {
    min-height: 100vh;
    max-height: 100vh;
  }
  #app {
    height: 100vh;
  }
  h1 {
    font-family: "Saira";
    color: white;
    margin: 0;
    line-height: 1;
  }
  .user-tag {
    color: var(--blue);
  }
  .oasis {
    color: var(--orange);
  }
  button:disabled {
    background: var(--grey);
    cursor: not-allowed;
  }
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .rounded-full {
    border-radius: 100%;
  }
  .align-self-end {
    align-self: flex-end;
  }
  .p-1 {
    padding: 1rem;
  }
  .text-align-right {
    text-align: right;
  }
  .mt-5 {
    padding: 5rem;
  }
  .w-4 {
    width: 4rem;
  }
</style>
