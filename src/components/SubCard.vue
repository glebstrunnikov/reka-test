<template>
  <div class="card-wrapper">
    <div class="card-stack">
      <img
        :src="`../src/assets/cards/${data.site}.svg`"
        alt=""
        class="card-logo"
      />
      <div ref="textElement" class="card-description-wrapper">
        {{ data.description }}
      </div>
      <CardBadge :site="data.site" :subscribed="data.subscribed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardBadge from "./CardBadge.vue";
import { SiteData } from "../types";
import { ref, onMounted, computed } from "vue";
const textElement = ref<HTMLElement | null>(null);
defineProps<{ data: SiteData }>();
onMounted(() => {
  if (textElement.value?.scrollHeight && textElement.value.textContent) {
    while (textElement.value?.scrollHeight > 48) {
      textElement.value.textContent = textElement.value?.textContent?.replace(
        /.{4}$/,
        "..."
      );
    }
  }
});
</script>

<style scoped lang="sass">
.card-wrapper
    width: 270px
    height: 279px
    background-color: white
    padding: 24px
    display: flex
    align-items: center
    justify-content: center

.card-stack
    display: flex
    flex-direction: column
    align-items: start
    width: 270px
    gap: 16px

.card-logo
    align-self: center
    height: 168px
    width: 100%

.card-description-wrapper
    height: 47px
    line-height: 24px
    overflow: hidden
    text-overflow: ellipsis
</style>
