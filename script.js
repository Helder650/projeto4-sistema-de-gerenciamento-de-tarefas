const tarefas = [];

const input = document.getElementById("taskInput");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const botao = document.getElementById("addBtn");

function renderizar() {

  lista.innerHTML = "";

  tarefas.forEach((tarefa) => {

    const li = document.createElement("li");

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    li.innerHTML = `
      <span>${tarefa.texto}</span>
      <button>Concluir</button>
    `;

    li.querySelector("button")
      .addEventListener("click", () => {

        tarefa.concluida = true;

        renderizar();
      });

    lista.appendChild(li);
  });

  contador.textContent =
    `Tarefas: ${tarefas.length}`;
}

botao.addEventListener("click", () => {

  const texto = input.value.trim();

  if (texto === "") {
    return;
  }

  tarefas.push({
    texto,
    concluida: false
  });

  input.value = "";

  renderizar();
});