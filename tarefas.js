function adicionarTarefa(lista, texto) {

  if (!texto || texto.trim() === "") {
    return false;
  }

  lista.push({
    texto,
    concluida: false
  });

  return true;
}

function concluirTarefa(tarefa) {
  tarefa.concluida = true;
  return tarefa;
}

module.exports = {
  adicionarTarefa,
  concluirTarefa
};