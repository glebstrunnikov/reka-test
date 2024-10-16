<template>
  <div class="side-panel">
    <div class="side-panel-top">
      <img src="../assets/svg/main-logo.svg" alt="" />
      <p class="text-medium">How much fun do you want in your life?</p>
      <div class="fun-wrapper">
        <p class="text-small">harry.simon@yahoo.com</p>
        <div>
          <p class="text-tiny text-gray">FUN YOU GET</p>
          <div class="scale-number-wrapper">
            <div class="scale-wrapper">
              <div class="scale-total"></div>
              <div
                :class="scaleClass"
                :style="`width: ${store.percent}%`"
              ></div>
            </div>
            <span class="text-gold">{{ store.percent }}%</span>
          </div>
        </div>
        <p class="text-small text-grey">
          <a @click="store.toggleAllSubs(true)" href="#">Subscribe</a> to all
          our fun sites to upgrade your fun progress
        </p>
      </div>
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
  <div class="top-panel">
    <div class="top-wrapper">
      <div class="logo-mobile">
        <img class="logo-mobile" src="../assets/svg/main-logo.svg" alt="" />
      </div>
      <div>
        <p class="text-tiny text-gray">FUN YOU GET</p>
        <div class="scale-number-wrapper">
          <div class="scale-wrapper">
            <div class="scale-total"></div>
            <div :class="scaleClass" :style="`width: ${store.percent}%`"></div>
          </div>
          <span class="text-gold">{{ store.percent }}%</span>
        </div>
        <p class="text-small text-grey">
          <a @click="store.toggleAllSubs(true)" href="#">Subscribe</a> to all
          our fun sites to upgrade your fun progress
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSubsStore } from "../data/store";
import { computed } from "vue";
const scaleClass = computed<string>(() => {
  if (store.percent < 95) {
    return "scale-current scale-edge-straight";
  } else {
    return "scale-current scale-edge-rounded";
  }
});
const store = useSubsStore();
</script>

<style scoped lang="sass">
@import '../variables'
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

.text-medium
    font-size: 20px

.text-small
    font-size: 14px

.text-tiny
    font-size: 12px
    line-height: 18px
    margin: 0px


a > p.text-tiny
    text-decoration: underline
    color: rgba(102, 102, 102, 1)

p.text-small a
    color: rgba(52, 109, 241, 1)
    text-decoration: none


.scale-number-wrapper
    display: flex
    gap: 16px
    align-items: center
.text-gold
    color: rgb(240, 181, 0)
    font-size: 16px
.scale-wrapper
    width: 176px
    height: 16px
    position: relative
    @media only screen and (max-width: $breakpointMedium)
        width: 80%
.scale-total
    height: 100%
    width: 100%
    z-index:1
    background-color: rgb(51, 51, 51)
    position: absolute
    border-radius: 8px
.scale-current
    height: 100%
    z-index:2
    background-color: rgb(248, 179, 0)
    position: absolute
.scale-edge-straight
    border-radius: 8px 0 0 8px
.scale-edge-rounded
    border-radius: 8px


.top-panel
    // height: 120px
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
    // @media only screen and (max-width: $breakpointSmall)

.logo-mobile
    max-height: 100%
img.logo-mobile
    max-width: 100%
    max-height: 100%
</style>
