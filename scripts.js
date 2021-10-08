
// --- TO DOS --- //
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event){
  //Prevent form from submitting
  event.preventDefault();
  //TO DO DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Creat LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //CHECK MARK BUTTON
  const completeButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>'
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //CHECK trash BUTTON
  const completeButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-trash"></i>'
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
}




// function myFunction() {
//     location.replace("https://www.w3schools.com")
//   }


// // Apply Ternary Operator
//   var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option")
// }

// // Apply Functions
// function greet (name, lastname) {
//   console.log('Hello' + name + ' ' + lastname)
// }

// greet('John', 'Smith');

// // Apply Objects
// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac & cheese rules', '10 things to make with marmite'],
//   login: function(){
//     console.log('the user logged in');
//   },
//   logout: function(){
//     console.log('the user loged out');
//   },
//   logBlogs: function(){

//   }
// };

// user.login();
// user.logout();

// // Apply Filter Function


// // Apply ForEach Loop










// var a;
// function show_hide()
// {
//     if(a==1)
//         {
//             document.getElementById("main_form").style.display="none";
//             return a=0;
//         }
    
//     else
//         {
//             document.getElementById("main_form").style.display="block";
//             return a=1;
//         }

// }

// const form_fill = document.getElementById("formfill");
// {
//     form_fill.addEventListener("btn", (e) => {
//         e.preventDefault();
//         console.log("Form has been submitted!");
//     });
// } 

// const buttonSubmit = document.getElementById("buttonSubmit");
// buttonSubmit.addEventListener("click",function(e){
//     alert("tes")
// }, false);   

// function submitForm () {

//     // if(document.getElementById("nama").value === "") alert("nama tidak boleh kosong")
//     // else document.getElementById("titleNama").innerText = document.getElementById("nama").value

//     const nama = document.getElementById("nama").value
//     const role = document.getElementById("role").value
//     const availability = document.getElementById("availability").value
//     const usia = document.getElementById("usia").value
//     const lokasi = document.getElementById("lokasi").value
//     const pengalaman = document.getElementById("pengalaman").value
//     const email = document.getElementById("email").value


//     if( nama === "" || 
//         role === "" || 
//         availability === "" || 
//         usia === "" || 
//         lokasi === "" || 
//         pengalaman === "" ||
//         email === "" ) {
        
//         alert("Semua data harus diisi")
//     }
//     else {
//         document.getElementById("labelNama").innerText = nama
//         document.getElementById("labelRole").innerText = role
//         document.getElementById("labelAvailability").innerText = availability
//         document.getElementById("labelUsia").innerText = usia
//         document.getElementById("labelLokasi").innerText = lokasi
//         document.getElementById("labelPengalaman").innerText = pengalaman
//         document.getElementById("labelEmail").innerText = email
//     }
    
//     if(a==1)
//         {
//             document.getElementById("main_form").style.display="block";
//             return a=0;
//         }
    
//     else
//         {
//             document.getElementById("main_form").style.display="none";
//             return a=1;
//         }
 
// }