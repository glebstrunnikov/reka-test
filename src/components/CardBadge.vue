<template>
  <div @click="switchSub(site)" v-if="subscribed" class="background color-true">
    <img src="../assets/svg/checkmark.svg" alt="" />
    <span class="text-true">Subscribed</span>
  </div>
  <div
    @click="switchSub(site)"
    v-if="!subscribed"
    class="background color-false"
  >
    <span class="text-false">Subscribe</span>
  </div>
</template>

<script setup lang="ts">
import { useSubsStore } from "../data/store";
const store = useSubsStore();
function switchSub(siteName: string) {
  store.switch(siteName);
}
defineProps<{ subscribed: boolean; site: string }>();
</script>

<style scoped lang="sass">
.background
    border-radius: 16px
    display: flex
    flex-direction: row
    align-items: center
    padding: 4px
.color-true
    background-color: rgb(237, 242, 255)
.color-false
    background-color: rgb(52, 109, 242)
.text-true
    color: rgb(52, 109, 242)
.text-false
    color: white
</style>
