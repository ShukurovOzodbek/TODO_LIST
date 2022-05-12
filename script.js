let form = document.forms.todo
let inp = form.querySelector('input')
let todos = [

]


form.onsubmit = (event) => {
    event.preventDefault()

    let task = {
        id: Math.random(),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        isDone: false
    }


    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    if(inp.value === '') {

    }else{
        todos.push(task);
        reload(todos)
    }
}

let container = document.querySelector('.container')
let no = document.querySelector('.no')
let nothing = document.querySelector('.nothing')

function reload(arr) {

    container.innerHTML = ''
    inp.value = ''
    for(let item of arr) {
        no.style.display = 'none'
        nothing.style.display = 'none'
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let div2 = document.createElement('div')
        let span = document.createElement('span')
        let button = document.createElement('img')
        let input = document.createElement('input')

        div.classList.add('box')
        div2.className = 'div2'
        h1.innerHTML = item.task
        span.innerHTML = item.time
        span.classList.add('fword')
        button.setAttribute('src', './assets/icons/cancel_FILL0_wght400_GRAD0_opsz48.png')
        button.classList.add('btn')
        input.setAttribute('type', 'checkbox')
        input.classList.add('check')

        container.append(div, div2)
        div2.append(h1, button)
        div.append(div2, span)
        div.prepend(input)

        button.onclick = (e) => {
            let id = e.target.parentNode.id

            let idx = todos.findIndex(item => item.id == id)

            todos.splice(idx, 1)
            reload(todos)
        }
        input.onclick = (event) => {
            let a = event.target.nextSibling
            console.log(a);
            if (a.classList.contains('active')) {
                a.classList.remove('active')
                div.style.opacity = "1"   
            }else{
                a.classList.add('active')
                div.style.opacity = ".4"   
            }
        }
    }
}

