const lessons = {
    "present-simple": {
      title: "Тест: Present Simple",
      questions: [
        {
          q: "He ___ to school every day.",
          options: ["go", "goes", "went"],
          answer: 1
        },
        {
          q: "They ___ not like coffee.",
          options: ["do", "does", "did"],
          answer: 0
        }
      ]
    },
    "past-simple": {
      title: "Тест: Past Simple",
      questions: [
        {
          q: "She ___ a letter yesterday.",
          options: ["write", "writes", "wrote"],
          answer: 2
        },
        {
          q: "We ___ to the cinema last week.",
          options: ["go", "goes", "went"],
          answer: 2
        }
      ]
    }
  };
  
  let currentTest = null;
  
  function startTest(topic) {
    currentTest = lessons[topic];
    document.getElementById("test-title").innerText = currentTest.title;
  
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";
  
    currentTest.questions.forEach((q, index) => {
      const div = document.createElement("div");
      div.innerHTML = <p><b>${q.q}</b></p>;
      q.options.forEach((opt, i) => {
        div.innerHTML += `
          <label>
            <input type="radio" name="q${index}" value="${i}"> ${opt}
          </label><br>`;
      });
      questionsContainer.appendChild(div);
    });
  
    document.querySelectorAll(".lesson").forEach(el => el.classList.add("hidden"));
    document.getElementById("test-container").classList.remove("hidden");
  }
  
  function submitTest() {
    let score = 0;
  
    currentTest.questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && parseInt(selected.value) === q.answer) {
        score++;
      }
    });
  
    const total = currentTest.questions.length;
    document.getElementById("result-text").innerText = 'Вы набрали ${score} из ${total}';
  
    // Сохраняем прогресс в localStorage
    localStorage.setItem(currentTest.title, `${score}/${total}`);
  
    document.getElementById("test-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
  }
  
  function goBack() {
    document.getElementById("result").classList.add("hidden");
    document.querySelectorAll(".lesson").forEach(el => el.classList.remove("hidden"));
  }