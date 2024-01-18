<script>
  import { link } from "svelte-spa-router";


</script>

<aside>
  <div>

  </div>

  <nav>
    <ul>
      <li>
        <a use:link href="/app">Dashboard</a>
      </li>
      <li>
        <a use:link href="/app/clientes">Clientes</a>
      </li>
    </ul>
  </nav>
</aside>

<style>
  aside {
    padding: 24px;
    color: white;
  }
</style>