import "./globals.css";

export const metadata = {
  title: "Услуги Мастера",
  description: "Сервис заказа услуг мастеров",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {/* HEADER */}
        <header>
          <div className="container header-inner">
            <div className="logo">
              Услуги Мастера
            </div>

            <nav>
              <a href="/">Главная</a>
              <a href="/services">Услуги</a>
              <a href="/cart">Корзина</a>
              <a href="/auth/login" className="btn-outline">
                Вход
              </a>
            </nav>
          </div>
        </header>

        {/* MAIN */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <footer>
          <div className="container">
            <p>Услуги Мастера © 2025</p>

            <div
              style={{
                display: "flex",
                gap: "24px",
                marginTop: "16px",
              }}
            >
              <span>VK</span>
              <span>Telegram</span>
              <span>RuTube</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
