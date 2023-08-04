<script setup>
defineProps({
  show: Boolean
})
</script>

<template>
<!--  here enter-t-class & leave-from-class are redundant code. No need to use them.-->
  <transition
      enter-from-class="opacity-0 scale-150"
      enter-to-class="opacity-100 scale-100"
      enter-active-class="transition duration-400"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-125"
  >
<!--  <transition name="modal">-->
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div>
          <slot name="default">Default Body</slot>
        </div>

        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>

</template>

<style scoped>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 70vw;
  max-width: 600px;
  border-radius: 10px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 2px;
  padding-top: 0.5rem;
  font-size: 0.9rem;
}

.modal-footer button {
  background: #ddd;
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
}

.modal-footer button:hover {
  background: #c8c8c8;
}

/*.modal-enter-active, .modal-leave-active {*/
/*  transition: opacity 0.5s;*/
/*}*/

/*.modal-enter-from, .modal-leave-to {*/
/*  opacity: 0;*/
/*  transform: scale(1.5);*/
/*}*/

/*.modal-enter-to, .modal-leave-from {*/
/*  opacity: 100;*/
/*  transform: scale(1);*/
/*//}*/

</style>