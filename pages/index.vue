<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section">
        <particle-1 id="particle-1" />
        <particle-2 id="particle-2" />
        <big-logo id="big" />
        <nav-bar />
        <el-container>
          <el-main id="first-screen">
            <h1 id="header" class="hero__header text-uppercase">
              There is wonderwall
              <br>
              <b>
                in the defi wild west.
              </b>
            </h1>
            <big-logo-mobile id="big-mobile" />
            <div id="description" class="hero__description">
              <a id="description-mobile-button" class="btn btn--primary d-inline-block" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
                Buy token
              </a>
              <hero-logo style="width: 100%" />
              <div class="hero__description__right">
                <p class="hero__paragraph">
                  We are a small community of crypto-enthusiasts, programming artisans, and digital design experts. This token represents the community's value within itself. The use-case of the token is interaction within projects built by the community and funding for the larger projects we have in the works for the future.
                  The mirage is behind you. Relax, take a breath, and drink from the pool.
                  <br>
                  <br>
                  Welcome to the Oasis. We hope you enjoy your stay.
                </p>
                <a class="btn btn--primary d-inline-block" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
                  Buy token
                </a>
              </div>
            </div>
            <particle-4 id="particle-4" />
          </el-main>
        </el-container>
        <particle-3 id="particle-3" />
      </section>
      <section class="section">
        <el-container>
          <el-main>
            <h1 class="hero__header">
              <b>
                One token to rule them all
              </b>
            </h1>
            <p class="hero__paragraph" style="margin-bottom: 80px">
              Oasis token will provide its holders with access to a wide range of the projects developed by the community.
              <br>
              <br>
              Pre-sale snipe bot, New listing auto-buy/sell bot, news and feeds for selected coins, discussion board, portfolio tracking, in depth research reports, and more!
            </p>
            <div class="hero__description hero__description--second-screen align-items-center">
              <projects-schema id="schema" />
              <div class="hero__description__big">
                <span class="text-orange">Hold one token</span> - use
                <br>
                multiple projects,
                <br>
                simple as that.
              </div>
            </div>
          </el-main>
        </el-container>
      </section>
      <section class="section">
        <el-container>
          <el-main>
            <h1 class="hero__header text-center" style="margin-bottom: 125px">
              <b>
                How to buy
              </b>
            </h1>
            <el-row class="htb-row" :gutter="40">
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <wallet-icon />
                  </div>
                  <p>
                    Download <a href="https://metamask.io/download.html" target="_blank">Metamask</a> App to your Smartphone or to your browser if you are using a laptop or pc.
                  </p>
                </div>
              </el-col>
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <coin-icon />
                  </div>
                  <p>
                    Transfer BNB to your wallet. You can use <a href="https://www.binance.com/" target="_blank">Binance</a> to purchase BNB.
                  </p>
                </div>
              </el-col>
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <pancake-icon />
                  </div>
                  <p>
                    If you're using TrustWallet, access Dapps tab on the bottom of your screen and click on PancakeSwap.
                  </p>
                </div>
              </el-col>
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <phone-icon />
                  </div>
                  <p>
                    iPhone Users might have to access it through TrustWallet Browser. <a href="https://www.youtube.com/watch?v=-qnlu7A9pkE" target="_blank">Check how</a>.
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row class="htb-row" :gutter="40">
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <address-icon />
                  </div>
                  <p>
                    For the ones on TrustWallet App, click on "Select a currency" and paste our Contract into the search Tab:
                    <br>
                    0xd9c99510a5e3145359d91fe9caf92dd5d68b603a
                  </p>
                </div>
              </el-col>
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <computer-icon />
                  </div>
                  <p>
                    To access PancakeSwap from the laptop or PC, <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">click here</a>.
                  </p>
                </div>
              </el-col>
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <settings-icon />
                  </div>
                  <p>
                    Now, click on the little bar button to set the Slippage to 11% or higher in times of high demand.
                  </p>
                </div>
              </el-col>
              <el-col
                :sm="24"
                :md="6"
                :lg="6"
                :xl="6"
              >
                <div class="htb-step">
                  <div class="htb-step__icon">
                    <oasis-icon />
                  </div>
                  <p>
                    You're ready to Buy Oasis! Click on Swap and confirm your transaction.
                    <br>
                    After the transaction confirms, you'll have Oasis in your wallet.
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </section>
      <section class="section">
        <el-container>
          <el-main>
            <h1 id="tokenomics-header" class="hero__header text-center">
              <b>
                Tokenomics
              </b>
            </h1>
            <div class="tokenomics">
              <div class="tokenomics__left">
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    Original supply:
                  </div>
                  <div class="tokenomics__item__value">
                    1,000,000,000,000,000 Oasis
                  </div>
                </div>
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    Supply:
                  </div>
                  <div class="tokenomics__item__value">
                    500,000,000,000,000 Oasis
                  </div>
                </div>
              </div>
              <div class="tokenomics__center">
                <div class="tokenomics__burn-percent">
                  50%
                </div>
                <div class="tokenomics__burn-label">
                  <burn-icon />
                  <br>
                  Supply
                  <br>
                  <a href="https://bscscan.com/tx/0x17f604bdba8df3bf672934cfa44621a1a04e36bb2f8dde83d97649d4f2d34707" target="_blank">
                    Burn tx
                  </a>
                </div>
              </div>
              <div class="tokenomics__right">
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    Pre-sale price:
                  </div>
                  <div class="tokenomics__item__value">
                    1 BNB = 5,000,000,000,000 Oasis
                  </div>
                </div>
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    Launch price:
                  </div>
                  <div class="tokenomics__item__value">
                    1 BNB = 1,250,000,000,000 Oasis
                  </div>
                </div>
              </div>
            </div>
            <div class="tokenomics-column">
              <p>
                <span class="text-red-light">5%</span>
                of all trades are redistributed to holders
              </p>
              <p>
                <span class="text-red-light">5%</span>
                of all trades are auto-locked inside liquidity provider on PancakeSwap
              </p>
              <node style="margin-bottom: 45px" />
              <p>
                Contract
                <br>
                <a class="font-weight-bold text-red-light" href="https://bscscan.com/address/0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
                  0xd9c99510a5e3145359d91fe9caf92dd5d68b603a
                </a>
              </p>
              <div class="notable-members">
                <oasis />
                <div class="notable-members__content">
                  <h1 class="hero__header">
                    <b>Notable members</b>
                  </h1>
                  <el-row v-for="(chunk, index) in notableMembersChunks" :key="`notable-members-chunk-${index}`" :gutter="70">
                    <el-col
                      v-for="member in chunk"
                      :key="`notable-member-${member.toLowerCase()}`"
                      :xs="12"
                      :sm="6"
                      :md="6"
                      :lg="6"
                      :xl="6"
                    >
                      <div class="notable-members__member">
                        {{ member }}
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
        <footer>
          <div class="content">
            <a href="discord.gg/cryptoasisds" style="color: #fff" target="_blank">Oasis community (c) 2021</a>
          </div>
        </footer>
      </section>
    </full-page>
  </div>
</template>

<script lang="ts" src="./src/index.ts">
</script>
