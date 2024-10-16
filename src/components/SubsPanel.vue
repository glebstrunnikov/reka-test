<template>
  <div class="main-wrapper">
    <div class="side-dummy"></div>
    <div class="subs-panel-main">
      <div class="subs-header-wrapper">
        <div>
          <h3>Ok, let’s change your preferences</h3>
          <p class="text-gray">
            To unsubscribe, please uncheck the appropriate box(es).
          </p>
        </div>
        <div class="unsub-header-whitespace"></div>
        <div>
          <button @click="store.toggleModal(true)" class="unsub-btn">
            Unsubscribe from all
          </button>
        </div>
        <div
          class="unsub-header-dummy"
          :style="`width: ${rightDummyWidth}px`"
        ></div>
      </div>
      <div ref="panelDiv" class="sub-cards-wrapper">
        <SubCard v-for="site in sites" :data="site" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubCard from "./SubCard.vue";
import { SiteData } from "../types";
import { ref, computed } from "vue";
import { useSubsStore } from "../data/store";
const store = useSubsStore();
const sites: SiteData[] = store.sites;
const panelDiv = ref<HTMLElement | null>(null);
const rightDummyWidth = computed<number | undefined>(() => {
  if (!panelDiv.value?.offsetWidth || panelDiv.value?.offsetWidth <= 708) {
    return 0;
  } else {
    return (panelDiv.value?.offsetWidth + 24) % 342;
  }
});
</script>

<style scoped lang="sass">
@import '../variables'
.main-wrapper
    display: flex
    flex-direction: row
    background-color: rgb(241, 241, 241)
.side-dummy
    position: relative
    min-width: 320px
    height: 100%
    background-color: blue
    @media only screen and (max-width: $breakpointMedium)
        display: none
.subs-panel-main
    width: 100%
    height: 100%
    margin: 108px
    @media only screen and (max-width: $breakpointMedium)
        margin: 0

.unsub-btn
    color: rgba(52, 109, 241, 1)
    font-size: 16px
    border: 1px solid rgba(204, 204, 204, 1)
    border-radius: 4px
h3
    font-size: 24px
    font-weight: 400
    margin-top: 0
.subs-header-wrapper
    display: flex
    flex-direction: row
    align-items: start
    justify-content: space-between
    margin: 20px
    @media only screen and (max-width: $breakpointSmall)
        flex-direction: column
        align-items: center

.unsub-header-whitespace
    flex: 999

.sub-cards-wrapper
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 24px
    margin: 20px
    @media only screen and (max-width: $breakpointSmall)
        flex-direction: column
        align-items: center
</style>
