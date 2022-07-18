
// const pegarbutton = document.getElementById('criar-tarefa');
// const pegarinput = document.getElementById('texto-tarefa');
// const pegarlista = document.getElementById('lista-tarefas');

// // 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza
// function cordeFundo(event) {
//   const selected = document.querySelector('.selected');
//   const evento = event.target;
//   if (selected) {
//     selected.classList.remove('selected');
//   }

//   evento.classList.add('selected');
// }
// // 6 - Adicione três novas tarefas e ordene todas as tarefas da lista por ordem de criação

// function criarTarefa() {
//   const valorInput = pegarinput.value;
//   const novoItem = document.createElement('li');
//   novoItem.addEventListener('click', cordeFundo);
//   const textoItem = document.createTextNode(valorInput);
//   novoItem.appendChild(textoItem);
//   pegarlista.appendChild(novoItem);
//   pegarinput.value = '';
// }
// // pegarbutton.addEventListener('click', criarTarefa);

// const criar = document.querySelector('#criar-tarefa');
// const inputTarefa = document.querySelector('#texto-tarefa');
// const olPai = document.querySelector('#lista-tarefas');
// const btnApagar = document.querySelector('#apaga-tudo');
// const olFilhos = document.querySelectorAll('#lista-tarefas li');

// // ===============================  Adicionar Tarefa  ==================================

// function addCompromisso() {
//   const addTarefa = document.createElement('li');
//   addTarefa.innerText = inputTarefa.value;
//   addTarefa.className = 'grey';
//   olPai.appendChild(addTarefa);
//   inputTarefa.value = '';
// }

// criar.addEventListener('click', addCompromisso);

// // ===============================  Adicionar Background Grey  ==================================

// function addBackgroundLi(event) {
//   const lis = document.querySelectorAll('.grey');
//   if (lis) {
//     lis.classList.remove('grey');
//   }
//   event.target.classList.add('grey');
// }
// olFilhos.addEventListener('click', addBackgroundLi);
// //   const lis = document.querySelectorAll('.tarefas');
// //   for (let index = 0; index < lis.length; index += 1) {
// //     lis[index].className = 'tarefas';
// //   }
// //   event.target.classList.add('grey');
// // }

// // for (let index = 0; index < olFilhos.length; index += 1) {
// //   olFilhos[index].addEventListener('click', addBackgroundLi);
// // }

// // ===============================  Botão Apagar  ==================================

// function removeTodos() {
//   const tarefasLi = document.querySelectorAll('#lista-tarefas li');

//   for (let index = 0; index < tarefasLi.length; index += 1) {
//     tarefasLi[index].remove();
//   }
// }

// btnApagar.addEventListener('click', removeTodos);
