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
import { SiteData } from "../data/types";
import { ref, onMounted } from "vue";
const textElement = ref<HTMLElement | null>(null);
defineProps<{ data: SiteData }>();
// Из макета (вторая карточка) понятно, что текст должен обрезаться с заменой на многоточие, если он не влезает по высоте. Я добавил такое js-решение, так как оно, насколько я понимаю, более универсально, так как text-overflow: ellipsis не работает на многострочных текстах без line-clamp, который недоступен в не-webkit браузерах.
onMounted(() => {
  document.fonts.ready.then(() => {
    if (textElement.value?.scrollHeight && textElement.value.textContent) {
      while (textElement.value.scrollHeight > 48) {
        textElement.value.textContent = textElement.value.textContent.replace(
          /.{4}$/,
          "..."
        );
      }
    }
  });
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
    min-height: 47px
    line-height: 24px
    overflow: hidden
</style>
