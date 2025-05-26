function openSection(section) {
    const content = document.getElementById("content");
    if (section === 'lessons') {
      content.innerHTML = `
        <h2>Урок 1: Present Simple</h2>
        <p>Это базовое время в английском языке, обозначающее действия в настоящем.</p>
        <button onclick="markCompleted()">✅ Пройдено</button>
      `;
    } else if (section === 'tests') {
      content.innerHTML = `
        <h2>Тест 1: Present Simple</h2>
        <p>1. She ___ to school every day.</p>
        <button>A) go</button>
        <button>B) goes</button>
        <button>C) going</button>
      `;
    } else if (section === 'vocab') {
      content.innerHTML = `
        <h2>Словарь</h2>
        <ul>
          <li>run — бегать</li>
          <li>eat — есть</li>
          <li>read — читать</li>
        </ul>
      `;
    }
  }
  
  function markCompleted() {
    alert("Урок отмечен как пройден!");
    // В будущем: отправим прогресс в Telegram бота
  }