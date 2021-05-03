<template>
  <div>
    <nav-bar />
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div id="landing" class="section">
        <el-container>
          <el-main>
            <h1 class="hero__header">
              What is
              <vue-typed-js :strings="projectsWithQuestionMarks" :show-cursor="false" :back-speed="80" :loop="true">
                <span class="typing text-red" />
              </vue-typed-js>
            </h1>
            <div id="logo" style="margin: 0 0 60px auto; text-align: center; width: 547px">
              <img src="/logo.png" alt="Oasis" style="width: 20%;">
            </div>
            <p id="about-description" class="hero__paragraph">
              <span class="hero__paragraph__first-letter">
                W
              </span>e are just a small community with lots of dumb big brains, making money in crypto. Safemoon is stupid. We r better. Simple as that. If u no fuck w tha vision vro, have fun being poor. Anyways, here’s
              <a href="https://www.youtube.com/watch?v=6hzrDeceEKc" target="_blank" class="text-orange">Wonderwall</a>
            </p>
            <btc-icon class="bg-image bg-image-1" />
            <bnb-icon class="bg-image bg-image-2" />
            <zil-icon class="bg-image bg-image-3" />
            <eth-icon class="bg-image bg-image-4" />
          </el-main>
        </el-container>
      </div>
      <div id="about" class="section">
        <el-container>
          <el-main>
            <h1 class="hero__header">
              About us
            </h1>
          </el-main>
        </el-container>
      </div>
    </full-page>
  </div>
</template>

<script lang="ts" src="./src/index.ts"></script>
<style>

</style>
