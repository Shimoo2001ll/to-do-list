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
        let text = document.createTextNode(`${tasks}`)
        let btnDelet = document.createElement('button')
        div.appendChild(text)
        div.appendChild(btnDelet)
        document.querySelector('.showTask').appendChild(div)
        div.style.padding = '2%'
        div.style.backgroundColor = 'white'
        div.style.borderRadius = '7px'


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