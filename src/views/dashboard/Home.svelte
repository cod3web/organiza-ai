<script>
  import Badge from "../../components/Badge.svelte";
import Card from "../../components/Card.svelte";

  let firstName = localStorage.userName.split(' ')[0];

  
</script>
<svelte:head>
  <title>Painel | Proartivo</title>
</svelte:head>
<header>
  <h1>Painel</h1>
</header>
<h2 class="greetings">Olá, {firstName}!</h2>

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
  header {
    padding: 20px 0;
    border-bottom: 1px solid #EBEBF9;
  }
  header h1 {
    font-size: 28px;
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