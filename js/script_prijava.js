const labels_login = document.querySelectorAll('.form-control label')
const labels_reg = document.querySelectorAll('.form-control-regime label')
const inputs_login = document.querySelectorAll('.form-control')
const inputs_reg = document.querySelectorAll('.form-control-regime')

setTimeout(function (){
    document.body.style.transition = 'opacity 0.2s ease-in'
    document.body.style.opacity = '1'
}, 1)

inputs_login.forEach(input => {
    input.addEventListener('focusin', () => {
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/bg_prijava_alt.png')"
    })
    input.addEventListener('focusout', () => {
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/bg_prijava.png')"
    })
})

inputs_reg.forEach(input => {
    input.addEventListener('focusin', () => {
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/bg_prijava_alt.png')"
    })
    input.addEventListener('focusout', () => {
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/bg_prijava.png')"
    })
})

labels_login.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx*2}ms">${letter}</span>`)
        .join('')
})

labels_reg.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx*2}ms">${letter}</span>`)
        .join('')
})

document.getElementById('reg').addEventListener('click', () => {
    document.getElementById('container_login').style.transition = 'opacity 0.2s ease-in'
    document.getElementById('container_login').style.opacity = '0'
    document.getElementById('container_register').style.opacity = '1'
    document.getElementById('container_register').style.transition = 'opacity 0.2s ease-in'

    setTimeout(function (){
        document.getElementById('container_login').style.display = "none"
        document.getElementById('container_register').style.display = "unset"
    }, 200)

})

document.getElementById('login').addEventListener('click', () => {
    document.getElementById('container_register').style.transition = 'opacity 0.2s ease-in'
    document.getElementById('container_register').style.opacity = '0'
    document.getElementById('container_login').style.opacity = '1'
    document.getElementById('container_login').style.transition = 'opacity 0.2s ease-in'

    setTimeout(function (){
        document.getElementById('container_register').style.display = "none"
        document.getElementById('container_login').style.display = "unset"
    }, 200)
})