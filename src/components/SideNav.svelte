<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";


</script>

<aside>
  <div>

  </div>

  <nav>
    <ul>
      <li>
        <a use:link use:active={'/app'} href="/app">Painel</a>
      </li>
      <li>
        <a use:link use:active={'/app/clientes'} href="/app/clientes">Clientes</a>
      </li>
    </ul>
  </nav>
</aside>

<style>
  aside {
    min-width: 240px;
    padding: 24px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  aside ul {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  aside a {
    font-family: 'Urbanist', 'Manrope', sans-serif;
    font-weight: 600;
    font-size: 18px;
    padding: 8px 12px;
    color: #80828D;
    position: relative;
    text-decoration: none;
  }
 
  :global(aside a.active) {
    color: white !important;
  }
  :global(aside a.active::before) {
    content: "";
    display: block;
    height: 25px;
    width: 4px;
    border-radius: 8px;
    position: absolute;
    top: 7px;
    left: -15px;
    background-color: rgb(89, 0, 255);
  }
</style>