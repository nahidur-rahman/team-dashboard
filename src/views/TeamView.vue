<script setup>
import TeamHeader from "@/components/team/TeamHeader.vue";
import TeamFooter from "@/components/team/TeamFooter.vue";
import TeamTable from "@/components/team/TeamTable.vue";
import { useTeamStore } from "@/stores/TeamStore.js"
import Modal from "@/components/TheModal.vue";
import { ref } from "vue";

const team = useTeamStore()
const show = ref(false)

team.fill()

setTimeout(() => {
  team.spot = 10;
  console.log(team.spot)
}, 2000);
</script>

<template>
  <TeamHeader @add="show = true " />

  <div
      class=" flex flex-col gap-y-3"
      style="width: 50vw; height: 80vh; margin: auto;"
  >
  <TeamTable />
  </div>

  <TeamFooter />


</template>
