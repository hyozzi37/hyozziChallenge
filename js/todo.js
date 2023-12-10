const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //paintToDo 를 push하여 array를 만들자

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} //toDos array의 내용을 localStorage에 넣자
//JSON.stringify() : 어떤 것이든 string으로 바꿈

function deleteTodo(event) {
  const li = event.target.parentElement;
  //target : 클릭된 element parentElement : target의 부모
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id는 지우고 다른 toDo는 남겨두고 싶어. parseInt : string을 num으로 변경해줌
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //li element를 만들어라
  li.id = newTodo.id; //li에 objet id 를 넣어줌 (작성시간)
  const span = document.createElement("span");
  span.innerText = newTodo.text; //handleToDoSubmit 여기서 온 newTodo의 innerText
  const button = document.createElement("button");
  button.innerText = "";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); //span은 li의 자식이다.
  li.appendChild(button); //removeChild 자식을 없애줘 appendChid의 반대
  toDoList.appendChild(li);
} //todo리스트를 그리는것

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //input의 현재 value를 새로운 변수에 복사하는 법
  toDoInput.value = ""; //input에 내용쓰고 엔터치면 내용이 사라짐
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //text를 쓴 시간을 알려줌 (ms기준)
  }; //array에 text가 아닌 object로 바꿔줌
  toDos.push(newTodoObj); //newTodoObj 의 array를 만들자
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if (savedToDos !== null) {
  //null이 아니면
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //새로고침 하여도 toDos를 localStorage에 보관해라
  parsedToDos.forEach(paintToDo);
}

/*parsedToDos.forEach((item)=>console.log("this is the turn of",item); 아래와 같은 것. 더 짧게 쓸 수 있다. (화살표함수)
funtion sayHello(item){
  console.log("this is the turn of",item);
}
*/
