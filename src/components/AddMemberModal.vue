<script setup>
import Modal from "@/components/TheModal.vue";
import {ref} from "vue";
import { useTeamStore } from "@/stores/TeamStore";

const show = ref(false)
// let loaded = ref(false)
const team = useTeamStore()

// setTimeout(() => {
//   loaded.value = true;
// }, 2000);

</script>

<template>
  <button
      class="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      :disabled="! team.spotRemaining"
      @click="show = true"
  >
    Add member ({{ team.spotRemaining }} spots left)
  </button>

  <teleport to="body">
<!--  <teleport v-if="loaded" to="#hello">-->
    <Modal
        :show="show"
        @close="show = false"
    >
      <div>
        <p>Need to add a new member?</p>
        <form class="mt-2 mb-2">
          <div class="flex gap-2">
            <input type="email" placeholder="Add email..." class="flex-1">
            <button class="border bg-green-200 p-2 hover:bg-green-300">Add</button>
          </div>
        </form>
      </div>
    </Modal>
  </teleport>
</template>

<style scoped>

</style>