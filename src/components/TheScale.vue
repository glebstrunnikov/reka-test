<template>
  <div class="fun-wrapper">
    <p class="text-small">harry.simon@yahoo.com</p>
    <div>
      <p class="text-tiny text-gray">FUN YOU GET</p>
      <div class="scale-number-wrapper">
        <div class="scale-wrapper">
          <div class="scale-total"></div>
          <div :class="scaleClass" :style="`width: ${store.percent}%`"></div>
        </div>
        <span class="text-gold">{{ store.percent }}%</span>
      </div>
    </div>
    <p class="text-small text-grey">
      <a @click="store.toggleAllSubs(true)" href="#">Subscribe</a> to all our
      fun sites to upgrade your fun progress
    </p>
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
.text-tiny
    font-size: 12px
    line-height: 18px
    margin: 0px


a > p.text-tiny
    text-decoration: underline
    color: rgba(102, 102, 102, 1)

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
</style>
