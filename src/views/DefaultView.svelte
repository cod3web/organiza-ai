<script>
  import Router from "svelte-spa-router";
  import { routes } from "../routes/adminRoutes";
  import SideNav from "../components/SideNav.svelte";

  const prefix = '/app';
</script>

<div class="page-wrapper">
  <SideNav />
  <main>
    <Router {routes} {prefix} />
  </main>
</div>


<style>
  main {
    width: 100%;
    background-color: white;
    height: 100vh;
    border-radius: 30px;
    padding: 24px;
  }
  .page-wrapper {
    display: flex;
    background-color:  #24242B;
  }
</style>