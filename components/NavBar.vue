<template>
  <el-container style="z-index: 24">
    <el-main>
      <el-header id="menu">
        <nav class="navbar">
          <div class="navbar__left">
            <a href="/">
              <oasis-logo />
            </a>
          </div>
          <div class="navbar__right">
            <div class="navbar__mobile">
              <button :class="{ 'navbar__mobile--active': menu }" @click="toggleMobileMenu()">
                <burger-icon />
              </button>
            </div>
            <div class="navbar__inline">
              <a class="navbar__item" href="#projects">
                {{ $t('about') }}
              </a>
              <a class="navbar__item" href="#htb">
                {{ $t('how_to_buy') }}
              </a>
              <a class="navbar__item" href="#tokenomics">
                {{ $t('tokenomics') }}
              </a>
              <el-select class="navbar__item language-selector" v-model="language" placeholder="Language">
                <el-option
                  v-for="locale in $i18n.locales"
                  :key="`locale-${locale}`"
                  :label="$t(locale)"
                  :value="locale">
                  <nuxt-link :to="switchLocalePath(locale)">
                    {{ $t(locale) }}
                  </nuxt-link>
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="navbar__socials">
            <a href="https://discord.gg/cryptoasisds" target="_blank">
              <discord-icon />
            </a>
            <a href="https://twitter.com/CryptOasisDS" target="_blank">
              <twitter-icon />
            </a>
            <a href="https://t.me/CryptOasisChat" target="_blank">
              <telegram-icon />
            </a>
            <a href="https://bscscan.com/token/0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
              <bsc-icon />
            </a>
          </div>
        </nav>
      </el-header>
    </el-main>
    <transition
      @enter="enterAnimation"
      @leave="leaveAnimation"
    >
      <mobile-menu v-if="menu" @close="toggleMobileMenu" />
    </transition>
  </el-container>
</template>

<script lang="ts" src="./src/NavBar.ts">
</script>
<style scoped>
  .el-main {
    z-index: 21;
  }
</style>
