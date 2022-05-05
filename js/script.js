const container = document.getElementsByClassName('.container')

const novosti = document.getElementById('novosti')
const kontakt = document.getElementById('kontakt')
const prijava = document.getElementById('prijava')

const left = document.getElementById('left')
const middle = document.getElementById('middle')
const right = document.getElementById('right')

const btns = [novosti, kontakt, prijava]

setTimeout(function (){
    document.body.style.transition = 'opacity 0.5s ease-in;'
    document.body.style.opacity = '1'
}, 1)

function toggleOn(el){
    document.body.style.transition = 'background 0.4s linear'
    document.body.style.background = "url('imgs/bg_alt.png')"
    el.classList.toggle('hidden')
    el.classList.toggle('show')
}

function toggleOff(el){
    document.body.style.transition = 'background 0.2s linear'
    document.body.style.background = "url('imgs/bg.jpg')"
    el.classList.toggle('hidden')
    el.classList.toggle('show')
}


// novosti
function click1(){
    novosti.setAttribute('disabled', 'true')
    left.style.display = 'none'
    middle.style.display = 'none'
    right.style.display = 'none'
    kontakt.style.opacity = '0'
    prijava.style.opacity = '0'
    document.body.style.transition = 'background 0.5s linear'
    document.body.style.background = "url('imgs/bg_novosti.png')"
    setTimeout(function (){
        window.location = "novosti.html"
    }, 200)
}

// kontakt
function click2(){
    novosti.setAttribute('disabled', 'true')
    left.style.display = 'none'
    middle.style.display = 'none'
    right.style.display = 'none'
    novosti.style.opacity = '0'
    prijava.style.opacity = '0'
    // document.body.style.transition = 'background 0.5s linear'
    // document.body.style.background = "url('imgs/bg_kontakt.jpg')"
    setTimeout(function (){
        window.location = "kontakt.html"
    }, 200)
}

// prijava
function click3(){
    novosti.setAttribute('disabled', 'true')
    left.style.display = 'none'
    middle.style.display = 'none'
    right.style.display = 'none'
    kontakt.style.opacity = '0'
    novosti.style.opacity = '0'
    document.body.style.transition = 'background 0.5s linear'
    document.body.style.background = "url('imgs/bg_prijava.png')"
    setTimeout(function (){
        window.location = "login/index.php"
    }, 500)
}

novosti.addEventListener('mouseenter', () => toggleOn(left));
novosti.addEventListener('mouseleave', () => toggleOff(left));
kontakt.addEventListener('mouseenter', () => toggleOn(middle));
kontakt.addEventListener('mouseleave', () => toggleOff(middle));
prijava.addEventListener('mouseenter', () => toggleOn(right));
prijava.addEventListener('mouseleave', () => toggleOff(right));

novosti.addEventListener('click', () => click1())
kontakt.addEventListener('click', () => click2())
prijava.addEventListener('click', () => click3())

