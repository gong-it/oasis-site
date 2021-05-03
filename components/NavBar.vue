<template>
  <el-container>
    <el-main>
      <el-header id="menu">
        <nav class="navbar">
          <div class="navbar__left">
            <a href="/">
              <oasis-logo></oasis-logo>
            </a>
          </div>
          <div class="navbar__right">
            <div class="navbar__mobile">
              <button>
                <burger-icon></burger-icon>
              </button>
            </div>
            <div class="navbar__inline">
              <a class="navbar__item" href="#projects">
                About
              </a>
              <a class="navbar__item" href="#htb">
                How to buy
              </a>
              <a class="navbar__item" href="#tokenomics">
                Tokenomics
              </a>
            </div>
          </div>
        </nav>
      </el-header>
    </el-main>
  </el-container>
</template>

<script lang="ts" src="./src/NavBar.ts">
</script>
