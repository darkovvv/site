export default function ServicesPage() {
  return (
    <section>
      <div className="container">
        {/* Заголовок */}
        <h1>Услуги</h1>
        <p>
          Выберите нужную услугу и добавьте её в корзину.
        </p>

        {/* Список услуг */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {/* Card 1 */}
          <div className="card">
            <h3>Установка розетки</h3>
            <p>Электромонтажные работы</p>

            <button className="btn-primary">
              В корзину
            </button>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h3>Ремонт смесителя</h3>
            <p>Сантехнические работы</p>

            <button className="btn-primary">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
