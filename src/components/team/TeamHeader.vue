<script setup>
import { useTeamStore } from "@/stores/TeamStore.js";
import AddMemberModal from "@/components/AddMemberModal.vue";

const team = useTeamStore();
</script>

<template>
  <header class="flex justify-between mt-4 mr-7 ml-5">
    <div>
      <AddMemberModal />
    </div>
    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        {{ team?.name }} Team
        <div class="bg-green-500 w-5 h-5 text-xs text-white rounded-full  flex justify-center items-center absolute -right-4 -top-2">
          {{ team?.spot }}
        </div>
      </h3>
    </div>
  </header>
</template>

<style scoped>

</style>