const imgChecked = "assets/images/checkbox-checked.svg"
const imgUnchecked = "assets/images/checkbox-unchecked.svg"

let todoItems = []
let filter = "all"

var close = document.getElementsByClassName("close");

window.onload = function(){
  todoItems = loadTodoItems()

  renderTodoItems(todoItems)

  document.getElementById("select-filter-items").addEventListener("change", function(e){
    filter = this.value
    renderTodoItems(todoItems)
  }, false)
}

function loadTodoItems() {
  return JSON.parse(localStorage.getItem("todoItems") || "[]")
}

function storeTodoItems() {
  localStorage.setItem("todoItems", JSON.stringify(todoItems))
}

// Create a new list item when clicking on the "Add" button
function addTodoItem() {
  const input = document.getElementById("todo-input");

  if (input.value === '') {
    alert("You must write something!");
    return
  }
  else if(todoItems.length >= 5) {
    alert("You only can add up to 5 items");
    return
  }

  todoItems.push(
    { 
      id: Math.floor(Math.random() * 90000) + 10000, 
      isChecked: false,
      text: input.value
    }
  )
  
  input.value = "";

  renderTodoItems(todoItems)
}

function renderTodoItems(items) {
  storeTodoItems()

  // Clear all item
  document.getElementById("ul-todo-items").innerHTML = "";


  // Reinsert all item
  items.forEach(item => {

    if (
      (filter == "completed" && !item.isChecked) ||
      (filter == "uncompleted" && item.isChecked)
    ) {
      console.log("masok")
      return
    }

    // Create checkbox img and 
    var cb = document.createElement("img");
    cb.src = item.isChecked ? imgChecked : imgUnchecked
    cb.className = "checkbox";
    cb.addEventListener('click', function(ev) {
      item.isChecked = !item.isChecked
      renderTodoItems(todoItems)
    }, false);

    // Create li tag
    var li = document.createElement("li");
    li.className = item.isChecked ? "todo-item checked" : "todo-item"
    // li.addEventListener('click', function(ev) {
    //   item.isChecked = !item.isChecked
    //   renderTodoItems(items)
    // }, false);

    // Add Checkbox to li
    li.appendChild(cb);

    // Create text and add to li
    var text = document.createTextNode(item.text);
    li.appendChild(text);

    // Create delete img and add to li
    var del = document.createElement("img");
    del.src = "assets/images/delete-todos.svg"
    del.className = "close";
    del.addEventListener('click', function(ev) {
      todoItems = todoItems.filter(e => e.id !== item.id)
      renderTodoItems(todoItems)
    }, false);
    li.appendChild(del);

    // Add li to ul
    document.getElementById("ul-todo-items").appendChild(li);
    // input.value = "";

  });
  
  document.getElementById("total-items").innerHTML = `${todoItems.length} of 5 Items added`
  console.log(todoItems)
}