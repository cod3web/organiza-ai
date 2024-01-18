<main>
  <section>
    <div class="left-part">

    </div>

    <div class="right-part">
      <h1>Lorem Ipsum</h1>
      <h2>Entrar na sua conta</h2>
      <p>Lorem ipsum is simply dummy text of the printing.</p>
      <form>
        <label for="email">E-mail</label>
        <input placeholder="Insira seu e-mail" class="input" type="email" name="email" id="email">
        <label for="password">Senha</label>
        <input class="input" placeholder="Insira sua senha" type="password" name="password" id="password">
        <button>Entrar</button>
      </form>
      <p>&copy; Lorem ipsum 2023</p>
    </div>
  </section>
</main>

<style>
  section {
    display: flex;
    background: linear-gradient(to right, rgb(76, 76, 189) 50%, white 50%);

  }
  section > * {
    width: 50%;
  }
  .left-part {
    height: 100vh;
  }

  .right-part {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
</style>