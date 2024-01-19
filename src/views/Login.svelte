<script>
  import { pbStore } from "../lib/store";
  import Button from "../components/Button.svelte";

  
  let emailValue, passwordValue;

  function login(ev) {
    ev.preventDefault();

    const authData = $pbStore.collection('users')
      .authWithPassword(
        emailValue,
        passwordValue
      )
      .then(res => {
        localStorage.token = res.token
      })
  }
</script>
<main>
  <section>
    <div class="left-part">

    </div>

    <div class="right-part">
      <h1 class="title">Lorem Ipsum</h1>
      <h2 class="subtitle">Entrar na sua conta</h2>
      <p class="intro">Lorem ipsum is simply dummy text of the printing.</p>
      <form on:submit={login}>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input bind:value={emailValue} required placeholder="Insira seu e-mail" class="input" type="email" name="email" id="email">
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input bind:value={passwordValue} required class="input" placeholder="Insira sua senha" type="password" name="password" id="password">
        </div>
        <Button submitButton={true} text="Entrar" />
      </form>
      <p class="copy">&copy; Codeweb Studios {new Date().getFullYear()}</p>
    </div>
  </section>
</main>

<style>
  section {
    display: flex;
    background: linear-gradient(to right, #151561 50%, white 50%);

  }
  section > * {
    width: 50%;
  }
  label {
    font-family: 'Urbanist';
    font-weight: 500;
  }
  .left-part {
    height: 100vh;
  }
  label {
    margin-bottom: 5px;
  }
  .right-part {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
  }
  form {
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 20px;
  }
  input {
    width: 100%;
  }
  .title {
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 30px;
    color: #b468d3;
  }
  .subtitle {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .intro {
    color: #B8B8B8;
    font-size: 16px;
  }

  @media screen and (max-width: 992px) {
    section {
      background: white;
    }
    .right-part {
      width: 100%;
    }
    .left-part {
      display: none;
    }
  }
</style>