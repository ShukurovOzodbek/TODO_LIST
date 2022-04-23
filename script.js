let cont = document.querySelector('.container')
let form = document.forms[0]
let inputs = form.querySelectorAll('input')
let tasks = [
    // {
    //     id: Math.random(),
    //     task: 'something',
    //     time: "10:45",
    //     isChecked: false
    // },
    // {
    //     id: Math.random(),
    //     task: 'something',
    //     time: "10:45",
    //     isChecked: false
    // },
    // {
    //     id: Math.random(),
    //     task: 'something',
    //     time: "10:45",
    //     isChecked: false
    // }
]

form.onsubmit = (event) => {
    event.preventDefault()
    
    submit()
    inputs.forEach(element => {
        element.value = ''
    });
}
let no = document.querySelector('.no')
let nothing = document.querySelector('.nothing')

function submit() {
    let user = {
        id: Math.random()
    }
    
    let fm = new FormData(form)
    
    fm.forEach((value, key) => {
        user[key] = value
    })
    
    tasks.push(user);
    

    inputs.forEach(element => {
        if(element.value === '') {
    
        }else{
            reload(tasks)
        }
    });  
}

reload(tasks)


function reload(arr) {
    cont.innerHTML = ""
    
    for(let item of arr) {
        no.style.display = 'none'
        nothing.style.display = 'none'
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        let span = document.createElement('span')
        let button = document.createElement('img')
        let input = document.createElement('input')

        div.classList.add('box')
        div.setAttribute('id', item.id)
        h1.innerHTML = item.task
        span.innerHTML = item.time
        span.classList.add('fword')
        button.setAttribute('src', './cancel_FILL0_wght400_GRAD0_opsz48.png')
        button.classList.add('btn')
        input.setAttribute('type', 'checkbox')
        input.classList.add('check')

        div.append(h1, span, button)
        cont.append(div)
        div.prepend(input)

        button.onclick = (e) => {
            let id = e.target.parentNode.id

            let idx = tasks.findIndex(item => item.id == id)

            tasks.splice(idx, 1)

            reload(tasks)
        }
        input.onclick = (event) => {
            let a = event.target.nextSibling
            // a.classList.add('active')
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
