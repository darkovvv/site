export default function LoginPage() {
  return (
    <section>
      <h2>Вход</h2>

      <form>
        <input type="email" placeholder="Email" />
        <br /><br />
        <input type="password" placeholder="Пароль" />
        <br /><br />
        <button type="submit">Войти</button>
      </form>
    </section>
  );
}
