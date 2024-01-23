<script>
  import Badge from "../../components/Badge.svelte";
import Card from "../../components/Card.svelte";

  let firstName = localStorage.userName.split(' ')[0];

  
</script>
<svelte:head>
  <title>Painel | Proartivo</title>
</svelte:head>
<header class="header-admin" style="margin-bottom: 30px;">
  <h1>Olá, {firstName}</h1>
</header>

<Card>
  <div class="card-header" slot="card-header">
    <h2>Nesse mês você fez:</h2>
  </div>
  <div class="card-body" slot="card-body">
    <div class="sales-number">78 vendas <Badge percentage={30} /></div>
    
    <a href="">Ver mais -></a>
    
  </div>

</Card>

<style>
  .greetings {
    margin-top: 24px;
    margin-bottom: 48px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sales-number {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
</style>