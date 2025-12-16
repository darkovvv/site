export default function HomePage() {
  return (
    <section>
      <div className="container">
        {/* HERO */}
        <h1>Добро пожаловать!</h1>
        <p>
          Сервис для заказа услуг профессиональных мастеров.
        </p>

        <div style={{ marginTop: "32px" }}>
          <button className="btn-primary">
            Заказать услугу
          </button>
        </div>

        {/* SERVICES */}
        <div style={{ marginTop: "96px" }}>
          <h2>Наши мастера</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            <div className="card">
              <h3>Электрик</h3>
              <p>
                Установка и ремонт электропроводки, розеток и освещения.
              </p>
              <button className="btn-outline">
                Подробнее
              </button>
            </div>

            <div className="card">
              <h3>Сантехник</h3>
              <p>
                Монтаж и ремонт труб, сантехники и отопления.
              </p>
              <button className="btn-outline">
                Подробнее
              </button>
            </div>

            <div className="card">
              <h3>Отделочник</h3>
              <p>
                Внутренняя отделка, покраска, плитка, ремонт помещений.
              </p>
              <button className="btn-outline">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
