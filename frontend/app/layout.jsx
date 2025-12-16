import "./globals.css";

export const metadata = {
  title: "Услуги Мастера",
  description: "Сервис заказа услуг мастеров"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <h1>Услуги Мастера</h1>
          <nav>
            <a href="/">Главная</a>
            <a href="/services">Услуги</a>
            <a href="/cart">Корзина</a>
            <a href="/auth/login">Вход</a>
          </nav>
        </header>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <p>Услуги Мастера © 2025</p>
          <div className="socials">
            <span>VK</span>
            <span>Telegram</span>
            <span>RuTube</span>
          </div>
        </footer>
      </body>
    </html>
  );
}