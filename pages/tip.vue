<template>
  <section id="app">
    <figure-1 id="figure-1"></figure-1>
    <figure-2 id="figure-2"></figure-2>
    <figure-3 id="figure-3"></figure-3>
    <figure-4 id="figure-4"></figure-4>
    <figure-5 id="figure-5"></figure-5>
    <figure-6 id="figure-6"></figure-6>
    <el-container style="z-index: 24; height: 100%">
      <el-main style="display: flex; flex-direction: column">
        <el-header id="menu">
          <nav class="navbar navbar--small">
            <div class="navbar__left">
              <a href="/">
                <logo-black></logo-black>
              </a>
            </div>
          </nav>
        </el-header>
        <div class="middle">
          <div class="form">
            <h1 v-if="!isBsc">
              You need to change metamask to use Binance Smart Chain network.
            </h1>
            <h1 v-if="tip && tip.error && isBsc">
              You need to initiate a tip on the discord first and use the link from the bot.
            </h1>
            <div v-if="tip && !tip.error && isBsc">
              <div class="info">
                <img :src="tip.avatar" alt="" class="avatar">
                <div class="info__tip">
                  <h1>
                    Tip <span class="user-tag">{{ formatTag(tip.tag) }}</span><br>
                  </h1>
                  <div class="info__tip__amount">
                    <small-logo></small-logo>
                    <div>
                      {{ tip.amount }}
                      <br>
                      <span class="text-red">oasis</span>
                    </div>
                  </div>
                </div>
              </div>
              <button v-if="!fromAddress" class="btn btn--danger d-inline-block w-100" @click="requestAccount">
                Connect wallet
              </button>
              <button v-else class="btn btn--danger d-inline-block w-100" :disabled="txid !== null" @click="sendTransaction">
                Send tip
              </button>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </section>
</template>

<script lang="ts" src="./src/tip.ts">
</script>
<style scoped>
  #app {
    background: linear-gradient(180deg, #15FFFB -1.1%, #F7A732 49.48%, #F0752F 79.83%, #EB512C 98.51%, #E73B2B 107.84%, #E6332A 123.41%);
    height: 100vh;
  }
  .middle {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
  .form {
    border-radius: 10px;
    background: #fff;
    padding: 83px 52px 35px;
    color: #18181C;
    max-width: 482px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;
  }
  .info__tip {
    margin-left: 27px;
  }
  .info__tip__amount {
    margin-top: 25px;
    display: flex;
    align-items: center;
  }
  .info__tip__amount svg {
    margin-right: 14px;
  }
  .avatar {
    border-radius: 50%;
    height: 110px;
  }
  .user-tag {
    word-break: break-all;
  }
  h1 {
    font-size: 24px;
    line-height: 110%;
    text-transform: uppercase;
    letter-spacing: 0.015em;
  }
  #figure-1 {
    position: absolute;
    right: 0;
    top: 140px;
  }
  #figure-2 {
    position: absolute;
    right: 502px;
    top: 415px;
  }
  #figure-3 {
    position: absolute;
    left: 363px;
    top: 445px;
  }
  #figure-4 {
    position: absolute;
    left: 0;
    top: 476px;
  }
  #figure-5 {
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    bottom: 140px;
  }
  #figure-6 {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  @media (max-width: 1380px) {
    #figure-1 {
      top: 40px;
    }
    #figure-2 {
      display: none;
    }
  }
  @media (max-width: 1130px) {
    #figure-3 {
      display: none;
    }
    #figure-4 {
      top: auto;
      bottom: 0;
    }
  }
  @media (max-width: 1030px) {
    #figure-5 {
      display: none;
    }
  }
  @media (max-width: 680px) {
    #figure-4 {
      display: none;
    }
  }
  @media (max-width: 540px) {
    #figure-1 {
      display: none;
    }
  }
  @media (max-width: 440px) {
    .form {
      padding: 35px 25px 35px;
    }
  }
  @media (max-height: 900px) {
    #figure-6 {
      display: none;
    }
  }
</style>
