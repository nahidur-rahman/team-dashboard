<script setup>
import { useTeamStore } from "@/stores/TeamStore";

const team = useTeamStore()
</script>

<template>
  <footer class="mt-12 bg-gray-100 py-4 text-center" style="height: auto">
    <h5 class="text-lg">{{ team.name }} - {{ team.spot }} members team</h5>

    <div id="hello">
      Hello There Mate!
    </div>
  </footer>


</template>

<style scoped>

</style>