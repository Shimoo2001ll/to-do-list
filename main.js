// let taskin = document.querySelector(".task");
// let addbtn = document.querySelector(".btn");
// let alert = document.querySelector(".alert");
// addbtn.addEventListener("click", (e) => {
//     e = taskin.value;
//     if (e == "") {
//         alertfill();
//         // console.log('hi it is empty')
//     } else {
//         addtasks();
//         taskin.value = "";
//         localStorage.setItem('tasks', e)

//     }
// });
// //  add task in the body

// function addtasks(tasks) {
//     tasks = taskin.value;
//     if (tasks != "") {
//         let div = document.createElement("div");
//         let container = document.createElement("div");
//         let text = document.createTextNode(`${tasks}`);
//         let btnDelet = document.createElement("button");
//         let textbtn = document.createTextNode(`delete`);
//         container.appendChild(text);
//         div.appendChild(container);
//         div.appendChild(btnDelet);
//         btnDelet.appendChild(textbtn);
//         btnDelet.classList.add("delbtn");
//         document.querySelector(".showTask").appendChild(div);
//         div.classList.add("divTask");
//         container.classList.add("contain");
//         //  delet btn  work
//         btnDelet.addEventListener("click", function() {
//             div.style.display = "none";
//         });
//     }
// }

// //show alert to fill the input filed

// function alertfill() {
//     if (taskin.value == "") {
//         alert.style.display = "block";

//         setTimeout(() => {
//             alert.style.display = "none";
//         }, 3000);
//     }
// }

// //store data to local storage
// function storedata() {
//     e = taskin.value;
//     localStorage.setTimeout("Taskes", e);
// }
// ------------------------------------------------------
let taskin = document.querySelector(".task");
let addbtn = document.querySelector(".btn");
let alert = document.querySelector(".alert");
// create the arr of taskes
let tasksarr;
if (localStorage.Tskes !== "") {
    tasksarr = JSON.parse(localStorage.Tskes)

} else {
    tasksarr = [];
}
// let tasksarr = [];

addbtn.onclick = function() {
        if (taskin.value != '') {

            let task = {
                id: new Date,
                title: taskin.value
            }
            tasksarr.push(task)
                // savew to local storage
            localStorage.setItem('Tskes', JSON.stringify(tasksarr))
            showTasks()
            taskin.value = ''
        } else {
            alertfill()

        }

    }
    // //show alert to fill the input filed

function alertfill() {
    if (taskin.value == "") {
        alert.style.display = "block";

        setTimeout(() => {
            alert.style.display = "none";
        }, 3000);
    }
}
//  show data in the screen

function showTasks() {
    let table = ''
    for (let i = 0; i < tasksarr.length; i++) {
        table += `   <tr>
        <td>${tasksarr[i].id}</td>
        <td>${tasksarr[i].title}</td>
        <td>
            <button class="btn delbtn">delete</button>
        </td>
    </tr>`

    }
    document.querySelector('.tableBody').innerHTML = table;
}
showTasks()
btnDelet.addEventListener("click", function() {
    div.style.display = "none";
});