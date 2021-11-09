<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section">
        <h1 class="hero__header" style="color: #AAAAA2;z-index: 1;position: relative; letter-spacing: .25em; padding-top: 6rem; text-align: center">
          Site is under reconstruction
        </h1>
        <div style="display: flex; justify-content: space-between; width: 200px; margin: auto auto 36px auto; position: relative; z-index: 1;">
          <a href="https://discord.gg/cryptoasisds" target="_blank">
            <discord-icon />
          </a>
          <a href="https://twitter.com/CryptOasisDS" target="_blank">
            <twitter-icon />
          </a>
        </div>
        <div id="buttons" style="display: flex; min-width: 500px; max-width: 600px; justify-content: space-between; margin: auto">
          <a target="_blank" href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=8oiPhiFrmXS93iC98M4ATev8emQ6XGtf8pz8sntbbqGt" class="btn btn--danger" style="margin: auto; text-align: center; display: block; width: 240px; position: relative; z-index: 1;">
            Buy
          </a>
          <a target="_blank" href="/oasis.pdf" class="btn btn--primary" style="margin: auto; text-align: center; display: block; width: 240px; position: relative; z-index: 1;">
            Presentation
          </a>
        </div>
        <img style="position: absolute; bottom: 0; left: 0; right: 0; width: 100%" src="/palm.png" alt="palm">
      </section>
    </full-page>
  </div>
</template>

<script lang="ts" src="./src/index.ts">
</script>
<style>
  @media (max-width: 540px) {
    #buttons {
      width: 100%;
      flex-direction: column;
    }
    #buttons a:first-child {
      margin-bottom: 36px !important;
    }
  }
</style>
