<template>
  <div class="side-panel">
    <div class="side-panel-top">
      <img src="../assets/svg/main-logo.svg" alt="" />
      <p class="text-medium">How much fun do you want in your life?</p>
      <TheScale />
    </div>
    <div class="side-panel-bottom">
      <div></div>
      <p class="text-tiny">EntertainMeMore</p>
      <p class="text-tiny">11807 Westheimer 550 PMB617</p>
      <p class="text-tiny">Houston, TX 77077</p>
      <div>
        <a href="#">
          <p class="text-tiny">contact@entertainmemore.com</p>
        </a>
      </div>
      <div>
        <a href="#">
          <p class="text-tiny">Privace Policy</p>
        </a>
      </div>
    </div>
  </div>
  <!-- Все, что выше, показывается при размере экрана больше брейкпойнта $breakpointMedium, ниже - меньше -->
  <div class="top-panel">
    <div class="top-wrapper">
      <div class="logo-mobile">
        <img class="logo-mobile" src="../assets/svg/main-logo.svg" alt="" />
      </div>
      <TheScale />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheScale from "./TheScale.vue";
</script>

<style scoped lang="sass">
@import '../styles/variables'
// Стили, относящиеся к боковой панели:
.side-panel
    position: fixed
    height: calc(100vh - 96px)
    width: 224px
    background-color: white
    left: 0
    top: 0
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: start
    padding: 48px
    @media only screen and (max-width: $breakpointMedium)
        display: none
.side-panel-top > *
    margin-top: 64px
    max-width: 224px
.side-panel-bottom > div
    margin-top: 24px

// Стили, относящиеся к верхней панели:
.top-panel
    width: 100vw
    background-color: white
    @media only screen and (min-width: $breakpointMedium)
        display: none
.top-wrapper
    height: calc(100% - 40px)
    width: calc(100% - 60px)
    padding: 20px 30px
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
    @media only screen and (max-width: $breakpointSmall)
        flex-direction: column
.logo-mobile
    max-height: 100%
img.logo-mobile
    max-width: 100%
    max-height: 100%
</style>
