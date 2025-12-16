export default function LoginPage() {
  return (
    <section>
      <div className="container">
        <div
          style={{
            maxWidth: "420px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <h1>Вход</h1>
          <p>
            Войдите в аккаунт, чтобы управлять заказами.
          </p>

          {/* Form */}
          <div
            className="card"
            style={{ marginTop: "40px" }}
          >
            <form>
              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="example@mail.ru"
                />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={labelStyle}>Пароль</label>
                <input
                  type="password"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "8px",
};
