const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener("click", addTodo)
function addTodo(e){
    e.preventDefault();
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const completedBtn = document.createElement('button')
    completedBtn.classList.add('complete-btn')
    completedBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completedBtn)
    completedBtn.addEventListener("click", function(){
        yeniTodo.style.textDecoration = 'line-through'
        yeniTodo.style.textDecorationColor = 'red'
    })

    const yeniTodo = document.createElement('li')
    yeniTodo.classList.add('todo-item')
    yeniTodo.innerText = todoInput.value
    todoInput.value = ""
    todoDiv.appendChild(yeniTodo)

    const deletedBtn = document.createElement('button')
    deletedBtn.classList.add('delete-btn')
    deletedBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoDiv.appendChild(deletedBtn)
    deletedBtn.addEventListener("click", function(){
        todoDiv.remove(yeniTodo)
    })
   

    todoList.appendChild(todoDiv)
}


