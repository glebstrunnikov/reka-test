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
const store = useSubsStore();
</script>

<style lang="sass">
@import "./variables"
.text-gray
  color: rgba(102, 102, 102, 1)
</style>

<!-- 
1. сделать шкалу компонентом
2. добавить комментов
3. убрать торчащий край строки во второй карточке
4. пофиксить модальник в мобиле
5. 
-->
