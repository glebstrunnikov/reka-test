<template>
  <InfoPanel></InfoPanel>
  <SubsPanel></SubsPanel>
  <TheModal v-if="store.modalOpen"></TheModal>
</template>

<script setup lang="ts">
import InfoPanel from "./components/InfoPanel.vue";
import SubsPanel from "./components/SubsPanel.vue";
import TheModal from "./components/TheModal.vue";
import { useSubsStore } from "./data/store.ts";
const store = useSubsStore();
</script>

<style lang="sass">
@import "./styles/variables"
.text-gray
  color: rgba(102, 102, 102, 1)
.text-tiny
    font-size: 12px
    line-height: 18px
    margin: 0px
a > p.text-tiny
    text-decoration: underline
    color: rgba(102, 102, 102, 1)
.text-medium
    font-size: 20px
</style>
