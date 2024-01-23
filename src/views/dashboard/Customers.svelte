<script>
  import { onMount } from "svelte";
  import Button from "../../components/Button.svelte";
  import { pbStore } from "../../lib/store";
  import Modal from "../../components/Modal.svelte";

  let customers = [],
      newCustomerShow = false,
      customerInfo = {full_name: '', email: '', tel: '', notes: ''};

  const showCustomerModal = () => {
    newCustomerShow = true;
  }
  onMount(() => {
    $pbStore.collection('customers').getFullList()
    .then(res => customers = res)
  })

  const addNewCustomer = event => {
    event.preventDefault();

    $pbStore.collection('customers').create(customerInfo)
    .then(() => {newCustomerShow = false; window.location.reload()})
  }
</script>
<svelte:head>
  <title>Clientes | Proartivo</title>
</svelte:head>

<header class="header-admin">
  <h1>Clientes</h1>
  <Button text="+ Novo cliente" onClick={showCustomerModal} />
</header>
<Modal on:close={() => newCustomerShow = false} active={newCustomerShow}>
  <div slot="card-header">
    <h2>Cadastrar novo cliente</h2>
  </div>

  <form on:submit={addNewCustomer} class="form-customer" slot="card-body">
    <div class="form-group">
      <label for="">Nome</label>
      <input bind:value={customerInfo.full_name} class="input" type="text">
    </div>
    <div class="form-group">
      <label for="">Telefone</label>
      <input bind:value={customerInfo.tel} class="input" type="text">
    </div>
    <div class="form-group">
      <label for="">E-mail</label>
      <input bind:value={customerInfo.email} class="input" type="email">
    </div>
    <div class="form-group">
      <label for="">Observações</label>
      <textarea bind:value={customerInfo.notes} class="input" type="text" />
    </div>

    <Button submitButton={true} text="Criar cliente"/>
  </form>
</Modal>
<table>
  <thead>
    <tr>
      <th>Nome completo</th>
      <th>E-mail</th>
      <th>Telefone</th>
      <th>Observações</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    {#each customers as customer}
    <tr>
      <td>{customer.full_name}</td>
      <td>{customer.email}</td>
      <td>{customer.tel}</td>
      <td>{customer.notes}</td>
      <td>
        <div class="actions">
          <a href={`https://api.whatsapp.com/send?phone=55${customer.tel}`} target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-trash"></i>
        </div>
      </td>
    </tr>
    {/each}
  </tbody>
</table>


<style>
  .input {
    width: 100%;
  }
  .form-customer {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  label {
    margin-bottom: 5px;
  }
  .actions {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  .actions i {
    font-size: 20px;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  table {
    width: 100%;
    border: 0.5px solid #EBEBF9;
    margin-top: 50px;
    border-radius: 20px;
    border-collapse: collapse;
    box-shadow: 8px 8px 16px 4px rgba(137, 143, 150, 0.04);
  }

  table th {
    border-bottom: 1px solid #EBEBF9;
    background-color: rgba(236, 236, 236, 0.438);
  }
  table th, table td {
    text-align: left;
    padding: 20px;
  }
  table td {
    transition: all .2s ease-in-out;
    padding: 15px 20px;
    background-color: white;
  }
  tbody tr {
    cursor: pointer;
  }
  tbody tr:hover td {
    background-color:#fafafa;
  }
</style>