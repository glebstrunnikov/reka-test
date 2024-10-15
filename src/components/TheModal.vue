<template>
  <div @click="closeModal" class="modal-background">
    <div class="modal-window modal-body">
      <div class="modal-header-wrapper modal-body">
        <div class="modal-header modal-body">Are you sure?</div>
        <div @click="store.toggleModal(false)" class="modal-close-btn">
          <img src="../assets/svg/cross.svg" alt="" />
        </div>
      </div>
      <div class="modal-text modal-body">
        Please confirm that you want to unsubscribe from all and lose
        {{ store.percent }}% fun.
      </div>
      <button @click="unsubscribe" class="modal-confirm-btn modal-body">
        Affirmative
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSubsStore } from "../data/store.ts";
const store = useSubsStore();
function closeModal(event: Event) {
  const target = <HTMLElement>event.target;
  if (target && !target.classList.contains("modal-body")) {
    store.toggleModal(false);
  }
}
function unsubscribe() {
  store.toggleAllSubs(false);
  store.toggleModal(false);
}
</script>

<style scoped lang="sass">
.modal-background
    position: fixed
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    z-index: 2
    backdrop-filter: blur(3px)
    // background-color: rgba(0, 0, 0, 0.2)
    background-color: rgba(109,119,159,0.5)
    display: flex
    justify-content: center
    align-items: center
.modal-window
    width: 512px
    height: 200px
    border-radius: 8px
    z-index: 3
    position: relative
    background-color: white
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: 20px 24px
.modal-header-wrapper
    display: flex
    justify-content: space-between
.modal-header
    font-size: 20px
    font-weight: 500
    line-height: 28px
    color: #0C1C60
.modal-close-btn
    cursor: pointer
.modal-text
    font-size: 16px
    line-height: 24px
    font-weight: 400
    color: #666666
.modal-confirm-btn
    align-self: end
    color: white
    background-color: #346DF1
    border-width: 0
    border-radius: 4px
    width: 118px
    height: 36px
    font-size: 16px
    font-weight: 600
    cursor: pointer
</style>
