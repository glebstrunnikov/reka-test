<template>
  <SidePanel></SidePanel>
  <SubsPanel></SubsPanel>
  <TheModal v-if="store.modalOpen" TheModal></TheModal>
</template>

<script setup lang="ts">
import SidePanel from "./components/SidePanel.vue";
import SubsPanel from "./components/SubsPanel.vue";
import TheModal from "./components/TheModal.vue";
import { useSubsStore } from "./data/store.ts";
const store = useSubsStore()
</script>

<style lang="sass">
.text-gray
  color: rgba(102, 102, 102, 1)
</style>
