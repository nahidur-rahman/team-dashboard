<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TeamView from "@/views/TeamView.vue";
</script>

<template>
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <span>-->
<!--          <RouterLink to="/">Home</RouterLink>-->
<!--&lt;!&ndash;          <RouterLink to="/">Home</RouterLink>&ndash;&gt;-->
<!--          <RouterLink to="/about">About</RouterLink>-->
<!--          <RouterLink to="/contact">Contact</RouterLink>-->
<!--          <RouterLink to="/counter">Counter</RouterLink>-->
<!--        </span>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <RouterView />-->
    <team-view />

</template>


<!--<style scoped>-->
<!--header {-->
<!--  line-height: 2.5;-->
<!--  max-height: 200vh;-->
<!--}-->


<!--nav {-->
<!--  width: 100%;-->
<!--  font-size: 22px;-->
<!--  text-align: center;-->
<!--  margin-top: 4rem;-->
<!--}-->

<!--nav a.router-link-exact-active {-->
<!--  color: var(&#45;&#45;color-text);-->
<!--}-->

<!--nav a.router-link-exact-active:hover {-->
<!--  background-color: transparent;-->
<!--}-->

<!--nav a {-->
<!--  display: inline-list-item;-->
<!--  padding: 0 2rem;-->
<!--  border-left: 1px solid var(&#45;&#45;color-border);-->
<!--}-->

<!--nav a:first-of-type {-->
<!--  border: 0;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  header {-->
<!--    display: flex;-->
<!--    place-items: center;-->
<!--    padding-right: calc(var(&#45;&#45;section-gap) / 2);-->
<!--  }-->

<!--  .logo {-->
<!--    margin: 0 2rem 0 0;-->
<!--  }-->

<!--  header .wrapper {-->
<!--    //display: flex;-->
<!--    place-items: flex-start;-->
<!--    flex-wrap: wrap;-->
<!--  }-->

<!--  nav {-->
<!--    text-align: left;-->
<!--    margin-left: -1rem;-->
<!--    font-size: 1rem;-->

<!--    padding: 1rem 0;-->
<!--    margin-top: 1rem;-->
<!--  }-->
<!--}-->
<!--</style>-->
