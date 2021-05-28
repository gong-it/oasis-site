<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <section class="section">
        <particle-1 id="particle-1" />
        <div id="big"></div>
        <nav-bar />
        <el-container>
          <el-main id="first-screen">
            <h1 id="header" class="hero__header text-uppercase">
              There is a <a href="https://youtu.be/6hzrDeceEKc?t=16" target="_blank">wonderwall</a>
              <br>
              <b>
                in the defi wild west.
              </b>
            </h1>
            <div id="big-mobile"></div>
            <div id="description" class="hero__description">
              <a id="description-mobile-button" class="btn btn--primary d-inline-block" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
                Buy token
              </a>
              <hero-logo style="width: 100%" />
              <div class="hero__description__right">
                <p class="hero__paragraph">
                  Oasis is a token created by a small community of crypto-enthusiasts, programmers and digital design experts. Our token will provide users with the ability to interact with various parts of the Oasis Dashboard and Discord Bots. On this dashboard and on discord we will have multiple products which will all be listed below! Oasis will also start a rug certification label to make sure there will be fewer scams on the network! Everything a crypto trader wants we will serve. The mirage is behind you. Relax, take a breath and drink from the pool. 
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
      </section>
      <section class="section">
        <el-container>
          <el-main>
            <h1 class="hero__header">
              <b>
                One token to rule them all
              </b>
            </h1>

            <p class="hero__paragraph" style="margin-bottom: 80px; max-width: 900px">
              Oasis token will provide its holders with access to a wide range of the projects developed by the community.
              <br>
              <br>
            </p>
              We will provide charting and tools with memory, limit orders on both bsc and uniswap, a snipe bot for new listings and presales with an automated buy/sell, tracked wallet mirroring, news and feeds for selected coins, podcasts, a discussion board, portfolio trackers for your favorite coins, in depth research reports and Technical analysis, rug sniffers to keep the community safe, and more! There will also be Oasis Discord bots to show new listings and tracked wallet movements, and tailored tippings bots to new coins.
            </p>
            <div class="hero__description hero__description--second-screen align-items-center">
              <div id="schema-animation"></div>
              <div class="hero__description__big">
                <span class="text-orange">Hold one token -</span> use
                <br>
                multiple projects,
                <br>
                simple as that.
                <particle-5 id="particle-5"></particle-5>
              </div>
            </div>
            <p class="hero__paragraph" style="margin-bottom: 80px; max-width: 900px">
              Oasis token will provide its holders with access to a wide range of the projects developed by the community.
              <br>
              <br>
              <span class="text-red-light">Sand:</span> 
              Customizable Discord/TG tipping and price bot. Compatible with BSC, ZIL, ETH, and SOL tokens.
              <br>
              <span class="text-red-light">Mineral:</span>
               Filterable new listing bot. Compatible with AVAX, BSC, ETH, and SOL tokens.
              <br>
              <span class="text-red-light">Gem:</span>
               Wallet tracking bot of known wallets we have access to, or wallets of your choice.
              <br>
              <span class="text-red-light">Shadow:</span>
               Tracked wallet copy trading via mempool. This will give you the ability frontrun known whales and get in and out before they change the price too hard.
              <br>
              <span class="text-red-light">Papyrus:</span>
               Automated rug detection to provide safety from potential loss of funds.
              <br>
              <span class="text-red-light">Ray:</span>
               Manual or automated snipe LP/presale snipe bot.
              
              <br><br>
            </p>
          </el-main>
        </el-container>
      </section>
      <section class="section">
        <particle-6 id="particle-6"></particle-6>
        <particle-7 id="particle-7"></particle-7>
        <particle-8 id="particle-8"></particle-8>
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
                    Download <a href="https://metamask.io/download.html" target="_blank">Metamask</a> App to your browser if you are using a laptop or pc. Download <a href="https://trustwallet.com/" target="_blank">TrustWallet</a> if you're on iOS or Android.
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
                    Transfer BNB to your wallet. You can use <a href="https://www.binance.com/" target="_blank">Binance</a> to purchase BNB, or buy it through TrustWallet and convert it to Smart Chain BSC if you don't have access to Binance.
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
                    If you're using TrustWallet, access the Dapps tab on the bottom of your screen and click on PancakeSwap. If you're using Metamask, just click <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603aHere" target="_blank">Here</a> and connect using WalletConnect.
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
                    iPhone Users users will need to enable the TrustWallet Browser tab. <a href="trust://browser_enable" target="_blank">Click this link</a> in safari to enable the browser.
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
                    If you're using TrustWallet App, click on "Select a currency" and paste our Contract into the search Tab:
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
                    To access PancakeSwap from a laptop or PC, <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">click here</a>.
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
                    <br><br>
                    Now you're ready to buy Oasis! Set the amount of Oasis you want in BNB. 
                    <br>
                    You might have to remove the last digit of Oasis and add it again to get it to work.
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
                    Click on Swap and confirm your transaction.
                    <br><br>
                    After the transaction confirms, you'll have Oasis in your wallet.
                    <br><br>
                    Congratualtions, and welcome to The Oasis!
                  </p>
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </section>
      <section class="section">
        <particle-9 id="particle-9"></particle-9>
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

              <iframe width="100%" height="497" src="https://charts.bogged.finance/?token=0xd9c99510a5E3145359d91fE9CaF92dd5d68b603A" frameborder="0" style="margin-bottom: 60px"></iframe>

              <div class="notable-members">
                <oasis />
                <div class="notable-members__content">
                  <h1 class="hero__header">
                    <b>Notable members</b>
                  </h1>
                  <el-row v-for="(chunk, index) in notableMembersChunks" :key="`notable-members-chunk-${index}`" :gutter="140">
                    <el-col
                      v-for="member in chunk"
                      :key="`notable-member-${member.toLowerCase()}`"
                      :xs="12"
                      :sm="6"
                      :md="6"
                      :lg="6"
                      :xl="6"
                    >
                      <div :id="member.toLowerCase() === 'savemeharry' ? 'harry' : null" class="notable-members__member" @click="harry(member.toLowerCase())">
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
            <a href="https://discord.gg/cryptoasisds" style="color: #fff" target="_blank">Oasis community (c) 2021</a>
          </div>
        </footer>
      </section>
    </full-page>
  </div>
</template>

<script lang="ts" src="./src/index.ts">
</script>
