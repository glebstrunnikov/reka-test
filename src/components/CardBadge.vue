<template>
  <div
    @click="toggleSub(site)"
    v-if="subscribed"
    class="background background-true"
  >
    <img src="../assets/svg/checkmark.svg" alt="" />
    <span class="text-true">Subscribed</span>
  </div>
  <div
    @click="toggleSub(site)"
    v-if="!subscribed"
    class="background background-false"
  >
    <span class="text-false">Subscribe</span>
  </div>
</template>

<script setup lang="ts">
import { useSubsStore } from "../data/store";
const store = useSubsStore();
function toggleSub(siteName: string) {
  store.toggleSub(siteName);
}
defineProps<{ subscribed: boolean; site: string }>();
</script>

<style scoped lang="sass">
*
    cursor: pointer
.background
    border-radius: 16px
    display: flex
    flex-direction: row
    align-items: center
    height: 32px
.background-true
    background-color: rgb(237, 242, 255)
    padding-right: 12px
.background-false
    background-color: rgb(52, 109, 242)
    padding-inline:  12px
.text-true
    color: rgb(52, 109, 242)
.text-false
    color: white
</style>
