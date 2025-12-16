export default function RegisterPage() {
  return (
    <section>
      <h2>Регистрация</h2>

      <form>
        <input type="text" placeholder="Имя" />
        <br /><br />
        <input type="email" placeholder="Email" />
        <br /><br />
        <input type="password" placeholder="Пароль" />
        <br /><br />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </section>
  );
}
