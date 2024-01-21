let taskin = document.querySelector(".task");
let addbtn = document.querySelector(".btn");
let alert = document.querySelector('.alert')
addbtn.addEventListener('click', (e) => {
        e = taskin.value;
        if (e == '') {
            alertfill()
            console.log('hi it is empty')
        } else {
            addtasks()


        }
    })
    //  add task in the body

function addtasks(tasks) {
    tasks = taskin.value;
    if (tasks != '') {
        let div = document.createElement('div')
        let container = document.createElement('div')
        let text = document.createTextNode(`${tasks}`)
        let btnDelet = document.createElement('button')
        let textbtn = document.createTextNode(`delete`)
        container.appendChild(text)
        div.appendChild(container)
        div.appendChild(btnDelet)
        btnDelet.appendChild(textbtn)
        btnDelet.classList.add('delbtn')
        document.querySelector('.showTask').appendChild(div)
        div.classList.add('divTask')
        container.classList.add('contain')



    }
}

//show alert to fill the input filed

function alertfill() {
    if (taskin.value == '') {
        alert.style.display = 'block';


        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    }
}