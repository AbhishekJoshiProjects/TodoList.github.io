const inputText = document.querySelector('.todo-input');
const TodoButton = document.querySelector('.todo-button');
const List = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter');
var today = new Date();
var hrs = today.getHours()
var min = today.getMinutes();


TodoButton.addEventListener("click", addTodo);
List.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", filterTodo);


function addTodo(e) {
    e.preventDefault();
    // console.log("hey u clicked + ") ;

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodoDiv = document.createElement('li')

    newTodoDiv.innerHTML = `<div class="box"><span class="inputValue">${inputText.value}</span> <span class="time"> &#128337
        ${hrs} : ${min}</span></div>`;

    newTodoDiv.classList.add('todo-list');
    todoDiv.appendChild(newTodoDiv);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    const DeleteButton = document.createElement('button');
    DeleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    DeleteButton.classList.add('delete-btn');
    todoDiv.appendChild(DeleteButton);


    List.appendChild(todoDiv);

    // clear todo input valuues :

    inputText.value = "";
}
function deleteCheck(e) {
    // console.log(e.target) ;
    const item = e.target;

    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;

        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e) {
    const todos = List.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "ToBeDone":
                {
                    if (todo.classList.contains('completed')) {
                        todo.style.display = "none";
                    }
                    else {
                        todo.style.display = "flex";
                    }
                }
                break;
        }
    });
}






















