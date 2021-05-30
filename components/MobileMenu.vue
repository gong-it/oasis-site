<template>
  <div id="mobile-menu">
    <div class="mobile-menu__elements">
      <div id="mobileAbout" class="mobile-menu__element">
        <a href="#projects" @click="closeMenu">
          {{ $t('about') }}
        </a>
      </div>
      <div id="mobileHtb" class="mobile-menu__element">
        <a href="#htb" @click="closeMenu">
          {{ $t('how_to_buy') }}
        </a>
      </div>
      <div id="mobileTokenomics" class="mobile-menu__element">
        <a href="#tokenomics" @click="closeMenu">
          {{ $t('tokenomics') }}
        </a>
      </div>
      <div class="mobile-menu__element">
        <div id="mobileSocials" class="mobile-menu__element__socials">
          <a href="https://discord.gg/cryptoasisds" target="_blank">
            <discord-icon></discord-icon>
          </a>
          <a href="https://twitter.com/CryptOasisDS" target="_blank">
            <twitter-icon></twitter-icon>
          </a>
          <a href="https://t.me/CryptOasisChat" target="_blank">
            <telegram-icon></telegram-icon>
          </a>
          <a href="https://bscscan.com/token/0xd9c99510a5e3145359d91fe9caf92dd5d68b603a" target="_blank">
            <bsc-icon></bsc-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./src/MobileMenu.ts">
</script>

<style scoped>
  #mobileAbout {
    opacity: 0;
  }
  #mobileHtb {
    opacity: 0;
  }
  #mobileTokenomics {
    opacity: 0;
  }
  #mobileSocials {
    opacity: 0;
  }
</style>
