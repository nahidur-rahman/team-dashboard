<script setup>
import TeamMember from "@/components/team/TeamMember.vue";
import { useTeamStore } from "@/stores/TeamStore";

const team = useTeamStore()
</script>

<template>

    <table class="border-spacing-1 border-separate">
      <thead>
      <tr>
        <th class="text-left px-6 py-2">Name</th>
        <th class="text-left px-6 py-2">Email</th>
        <th class="text-left px-6 py-2">Status</th>
      </tr>
      </thead>

      <tbody>
        <TeamMember v-for="(member,index) in team.members" :key="index" :name="member.name" :email="member.email" :status="member.status"/>
      </tbody>
    </table>
    <p v-if="! team.spotRemaining" class="text-right text-gray-600 italic">There is no spot left. Upgrade to add more</p>

</template>

<style scoped>

</style>