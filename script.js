const btnCriaTarefa = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaOl = document.querySelector('#lista-tarefas');


// ============================== Requisito 5 Criar Tarefas ==============================

function criaTarefas() {
  let tarefaLi = [];
  tarefaLi = document.createElement('li');
  tarefaLi.classList.add('tarefas');
  tarefaLi.innerText = inputTarefa.value;
  listaOl.appendChild(tarefaLi);
  inputTarefa.value = '';
}
btnCriaTarefa.addEventListener('click', criaTarefas);

// ============================ Requisito 7 Add BackgroundColor Grey ============================

function addBackgroundColor(event) {
  const tarefasLi = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < tarefasLi.length; index += 1) {
    tarefasLi[index].classList.remove('gray');
  }
  event.target.classList.add('gray');
  listaOl.classList.remove('gray');
}
listaOl.addEventListener('click', addBackgroundColor);

// ============================== Requisito 10 Apagar Tarefas ==============================
