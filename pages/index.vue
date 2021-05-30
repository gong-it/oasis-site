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
              {{ $t('first_screen_header_first_part') }} <a href="https://youtu.be/6hzrDeceEKc?t=16" target="_blank">{{ $t('wonderwall') }}</a>
              <br>
              <b>
                {{ $t('first_screen_header_second_part') }}
              </b>
            </h1>
            <div id="big-mobile"></div>
            <div id="description" class="hero__description">
              <a id="description-mobile-button" class="btn btn--primary d-inline-block" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
                {{ $t('buy_token') }}
              </a>
              <hero-logo style="width: 100%" />
              <div class="hero__description__right">
                <p class="hero__paragraph">
                  {{ $t('first_screen_paragraph_first_part') }}
                  <br>
                  <br>
                  {{ $t('first_screen_paragraph_second_part') }}
                </p>
                <a class="btn btn--primary d-inline-block" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
                  {{ $t('buy_token') }}
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
                {{ $t('second_screen_header') }}
              </b>
            </h1>

            <p class="hero__paragraph" style="margin-bottom: 80px; max-width: 900px">
              {{ $t('second_screen_paragraph_first_part') }}
              <br>
              <br>
              {{ $t('second_screen_paragraph_second_part') }}
            </p>
            <div class="hero__description hero__description--second-screen align-items-center">
              <div id="schema-animation"></div>
              <div class="hero__description__big">
                <template v-html="$t('second_screen_hero')"></template>
                <particle-5 id="particle-5"></particle-5>
              </div>
            </div>
            <p class="hero__paragraph" style="margin-bottom: 80px; max-width: 900px">
              {{ $t('projects_description') }}
              <br>
              <br>
              <span class="text-red-light">Sand:</span>
              {{ $t('sand_description') }}
              <br>
              <span class="text-red-light">Mineral:</span>
              {{ $t('mineral_description') }}
              <br>
              <span class="text-red-light">Gem:</span>
              {{ $t('gem_description') }}
              <br>
              <span class="text-red-light">Shadow:</span>
              {{ $t('shadow_description') }}
              <br>
              <span class="text-red-light">Papyrus:</span>
              {{ $t('papyrus_description') }}
              <br>
              <span class="text-red-light">Ray:</span>
              {{ $t('ray_description') }}
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
                {{ $t('how_to_buy') }}
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
                  <p v-html="$t('how_to_buy_first')" />
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
                  <p v-html="$t('how_to_buy_second')" />
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
                  <p v-html="$t('how_to_buy_third')" />
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
                  <p v-html="$t('how_to_buy_fourth')" />
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
                    {{ $t('how_to_buy_fifth') }}
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
                  <p v-html="$t('how_to_buy_sixth')" />
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
                    {{ $t('how_to_buy_seventh_first') }}
                    <br><br>
                    {{ $t('how_to_buy_seventh_second') }}
                    <br>
                    {{ $t('how_to_buy_seventh_third') }}
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
                    {{ $t('how_to_buy_eighth_first') }}
                    <br><br>
                    {{ $t('how_to_buy_eighth_second') }}
                    <br><br>
                    {{ $t('how_to_buy_eighth_third') }}
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
                {{ $t('tokenomics') }}
              </b>
            </h1>
            <div class="tokenomics">
              <div class="tokenomics__left">
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    {{ $t('original_supply') }}:
                  </div>
                  <div class="tokenomics__item__value">
                    1,000,000,000,000,000 Oasis
                  </div>
                </div>
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    {{ $t('supply') }}:
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
                  {{ $t('supply') }}
                  <br>
                  <a href="https://bscscan.com/tx/0x17f604bdba8df3bf672934cfa44621a1a04e36bb2f8dde83d97649d4f2d34707" target="_blank">
                    {{ $t('burn_tx') }}
                  </a>
                </div>
              </div>
              <div class="tokenomics__right">
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    {{ $t('pre_sale_price') }}:
                  </div>
                  <div class="tokenomics__item__value">
                    1 BNB = 5,000,000,000,000 Oasis
                  </div>
                </div>
                <div class="tokenomics__item">
                  <div class="tokenomics__item__label">
                    {{ $t('launch_price') }}:
                  </div>
                  <div class="tokenomics__item__value">
                    1 BNB = 1,250,000,000,000 Oasis
                  </div>
                </div>
              </div>
            </div>
            <div class="tokenomics-column">
              <p v-html="$t('redistributed_to_holders')" />
              <p v-html="$t('locked_liquidity')" />
              <node style="margin-bottom: 45px" />
              <p>
                {{ $t('contract') }}
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
                    <b>{{ $t('notable_members') }}</b>
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
