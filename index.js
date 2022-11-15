const body = document.body;

const todoForm = document.querySelector(".todo-form");

const todoInput = document.querySelector(".todo-form input[type='text']");

const todoList = document.querySelector(".todo-list");

const login = document.querySelector("#show-login"); //clink on sign in

const popup = document.querySelector(".popup"); // give login form

const popin = document.querySelector(".close-btn"); // close the login form

const container = document.querySelector(".container");

const todoSelection = document.querySelector(".section-todo");

const hide = document.querySelector(".hidden"); // to hide the form

const signup = document.querySelector("#sign-up");

const signup2 = document.querySelector(".signup");

const login2 = document.querySelector("#login2");

login.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.add("active");
});

popin.addEventListener("click", function() {
    popup.classList.remove("active");
    signup2.classList.remove("active");
});

signup.addEventListener("click", function(e) {
    e.preventDefault();
    signup2.classList.add("active");
});




todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
                <div class="todo-buttons">
                  <button class="todo-btn done">done</button>
                    <button class="todo-btn remove">remove</button>
                </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
})

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("done")) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
        liSpan.style.color = "red";
    }
    if (e.target.classList.contains("remove")) {
        const removeLi = e.target.parentNode.parentNode;
        removeLi.remove();
    }
});