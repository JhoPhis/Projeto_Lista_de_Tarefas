let botaoAdd = document.getElementById('botao');
let entrada = document.getElementById('entrada-tarefa');
let tarefas = document.getElementById('tarefas');
let marcado = false;

botaoAdd.addEventListener('click', function() {
    if (entrada.value != '') {
        let tarefa = document.createElement('p');
        tarefas.appendChild(tarefa);
        tarefa.innerText = '• ' + entrada.value + ' ';
        entrada.value = '';
        tarefa.addEventListener('click', function() {
            if (!marcado) {
                tarefa.style.textDecoration = 'line-through';
                marcado = true;
            }
            else {
                tarefa.style.textDecoration = '';
                marcado = false;
            }
        })
        tarefa.addEventListener('dblclick', function() {
            tarefas.removeChild(tarefa);
        })
    }
})
