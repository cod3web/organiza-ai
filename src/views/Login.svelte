<script>
  import { pbStore } from "../lib/store";
  import Button from "../components/Button.svelte";
  import { push } from "svelte-spa-router";

  
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
        if(localStorage.token) {
          push('/app')
        }
      })
  }
</script>
<main>
  <section>
    <div class="left-part">
      <div class="overlay">
        <div class="overlay-content">
          <h1>Seja muito bem-vindo(a)</h1>
          <p>Transforme sua paixão em negócio. Simplificamos, você <b>cria</b>. Descubra o poder do <a href="https://proartivo.codewebstudios.com.br" target="_blank">Proartivo</a> para impulsionar o seu artesanato.</p>
        </div>

      </div>
      <video src="/media/login.mp4" autoplay loop playsinline muted></video>
    </div>

    <div class="right-part">
      <h1 class="title">Proartivo</h1>
      <h2 class="subtitle">Entrar na sua conta</h2>
      <p class="intro">Você está a um passo de organizar tudo da sua loja!</p>
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
  }
  video {
    object-fit: cover;
    display: block;
    position: absolute;
    height: 100% !important;
    width: 100% !important;
    max-width: 100% !important;
    top: 0;
    border-radius: 0 200px 185px 0;
    left: 0;
    background-color: #000;
  }
  .left-part .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% + 20px);
    z-index: 200;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 0 100px 85px 0;
    background-color: rgba(83, 51, 223, 0.4);
  }
  .overlay .overlay-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -120px;
  }
  .overlay h1 {
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }
  .overlay p {
    text-align: center;
    font-size: 18px;
    line-height: 1.5;
    max-width: 800px;
    font-weight: 600;
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
    position: relative;
  }
  label {
    margin-bottom: 5px;
  }
  .right-part {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 200px;
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
    text-align: center;
  }

  @media screen and (max-width: 992px) {
    section {
      background: white;
    }
    .right-part {
      margin-top: 50px;
      width: 100%;
    }
    .left-part {
      display: none;
    }
  }
</style>