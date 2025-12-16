export default function CartPage() {
  return (
    <section>
      <div className="container">
        {/* Header */}
        <h1>Корзина</h1>
        <p>
          Проверьте выбранные услуги перед оформлением заказа.
        </p>

        {/* Cart list */}
        <div style={{ marginTop: "48px" }}>
          <div className="card">
            {/* Item */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "16px",
                borderBottom: "1px solid #e5e5e5",
              }}
            >
              <div>
                <h3>Установка розетки</h3>
                <p>Электромонтажные работы</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{ fontWeight: 500 }}>1500 ₽</p>
                <button className="btn-outline">
                  Удалить
                </button>
              </div>
            </div>

            {/* Item */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "16px",
              }}
            >
              <div>
                <h3>Ремонт смесителя</h3>
                <p>Сантехнические работы</p>
              </div>

              <div style={{ textAlign: "right" }}>
                <p style={{ fontWeight: 500 }}>1200 ₽</p>
                <button className="btn-outline">
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h2>Итого: 2700 ₽</h2>

          <button className="btn-primary">
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
}
