export default function AdminPage() {
  return (
    <section>
      <div className="container">
        {/* Header */}
        <h1>Админ-панель</h1>
        <p>
          Управление услугами: добавление, редактирование и удаление.
        </p>

        {/* Actions */}
        <div style={{ marginTop: "32px" }}>
          <button className="btn-primary">
            Добавить услугу
          </button>
        </div>

        {/* Services table */}
        <div style={{ marginTop: "64px" }}>
          <h2>Список услуг</h2>

          <div
            className="card"
            style={{ marginTop: "24px", overflowX: "auto" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Название</th>
                  <th style={thStyle}>Категория</th>
                  <th style={thStyle}>Цена</th>
                  <th style={thStyle}>Действия</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={tdStyle}>Установка розетки</td>
                  <td style={tdStyle}>Электрика</td>
                  <td style={tdStyle}>1500 ₽</td>
                  <td style={tdStyle}>
                    <button className="btn-outline">Редактировать</button>
                  </td>
                </tr>

                <tr>
                  <td style={tdStyle}>Ремонт смесителя</td>
                  <td style={tdStyle}>Сантехника</td>
                  <td style={tdStyle}>1200 ₽</td>
                  <td style={tdStyle}>
                    <button className="btn-outline">Редактировать</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "12px 8px",
  borderBottom: "1px solid #e5e5e5",
  fontSize: "14px",
  fontWeight: 600,
};

const tdStyle = {
  padding: "12px 8px",
  borderBottom: "1px solid #f0f0f0",
  fontSize: "14px",
};
