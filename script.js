const tarefas = [];

const input = document.getElementById("taskInput");
const botao = document.getElementById("addBtn");
const lista = document.getElementById("lista");

const total = document.getElementById("total");
const pendentes = document.getElementById("pendentes");
const concluidas = document.getElementById("concluidas");

function atualizarEstatisticas() {

  total.textContent = tarefas.length;

  pendentes.textContent =
    tarefas.filter(t => !t.concluida).length;

  concluidas.textContent =
    tarefas.filter(t => t.concluida).length;
}

function renderizar() {

  lista.innerHTML = "";

  tarefas.forEach((tarefa, index) => {

    const div = document.createElement("div");

    div.className =
      `tarefa ${tarefa.concluida ? "concluida" : ""}`;

    div.innerHTML = `
      <div class="esquerda">

        <input
          type="checkbox"
          ${tarefa.concluida ? "checked" : ""}
        >

        <span class="texto">
          ${tarefa.texto}
        </span>

      </div>

      <div class="acoes">

        <span class="status ${
          tarefa.concluida
            ? "finalizada"
            : "pendente"
        }">
          ${
            tarefa.concluida
              ? "Concluída"
              : "Pendente"
          }
        </span>

        <button class="excluir">
          <i class="fa-solid fa-trash"></i>
        </button>

      </div>
    `;

    div.querySelector("input")
      .addEventListener("change", () => {

        tarefa.concluida =
          !tarefa.concluida;

        renderizar();
      });

    div.querySelector(".excluir")
      .addEventListener("click", () => {

        tarefas.splice(index, 1);

        renderizar();
      });

    lista.appendChild(div);
  });

  atualizarEstatisticas();
}

botao.addEventListener("click", () => {

  const texto = input.value.trim();

  if (!texto) return;

  tarefas.push({
    texto,
    concluida: false
  });

  input.value = "";

  renderizar();
});

input.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {
    botao.click();
  }
});

renderizar();