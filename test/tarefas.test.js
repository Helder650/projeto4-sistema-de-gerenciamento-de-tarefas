const {
  adicionarTarefa,
  concluirTarefa
} = require("../tarefas");

describe("Sistema de tarefas", () => {

  test("Adicionar tarefa válida", () => {

    const lista = [];

    const resultado =
      adicionarTarefa(lista, "Estudar Jest");

    expect(resultado).toBe(true);

    expect(lista.length).toBe(1);
  });

  test("Adicionar tarefa vazia", () => {

    const lista = [];

    const resultado =
      adicionarTarefa(lista, "");

    expect(resultado).toBe(false);

    expect(lista.length).toBe(0);
  });

  test("Concluir tarefa", () => {

    const tarefa = {
      texto: "Projeto",
      concluida: false
    };

    concluirTarefa(tarefa);

    expect(tarefa.concluida).toBe(true);
  });

});