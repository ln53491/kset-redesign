const boxes = document.querySelectorAll('.box')
const boxes2 = document.querySelectorAll('.box2')
const boxes3 = document.querySelectorAll('.box3')

// setTimeout(function (){
//     document.body.style.transition = 'background 0.7s ease-in'
//     document.body.style.background = "url('imgs/bg_kontakt.jpg')"
// }, 700)

// var l=0;

window.addEventListener('scroll', checkBoxes)
window.addEventListener('scroll', checkBoxes2)
window.addEventListener('scroll', checkBoxes3)

checkBoxes()
checkBoxes2()
checkBoxes3()

function checkBoxes(){
    var l=0
    const triggerBottom = window.innerHeight / 5 * 2
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const boxBottom = box.getBoundingClientRect().bottom
        if(boxTop < triggerBottom && boxBottom >= triggerBottom){
            l = 0
            box.classList.add('show')
        } else{
            l += 1
            box.classList.remove('show')
        }
    })
    // console.log(l)
    if(l == 0){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/bicikli_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 1){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/tech_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 2){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/foto_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 3){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/pi_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 4){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/comp_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 5){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/video_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 6){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/dramska_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 7){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/glazbena_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 8){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/disco_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
    if(l == 9){
        document.body.style.transition = 'background 0.4s ease-in'
        document.body.style.background = "url('imgs/sekcije_bgs/kset_bg.png')"
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundAttachment = "fixed"
    }
}

// function checkBoxess(){
//     const triggerBottom = window.innerHeight / 5 * 3
//     boxes.forEach(box => {
//         const boxBottom = box.getBoundingClientRect().bottom
//         if(boxBottom > window.innerHeight - triggerBottom){
//             box.classList.add('show')
//         } else{
//             box.classList.remove('show')
//         }
//     })
// }

function checkBoxes2(){
    const triggerBottom = window.innerHeight / 5 * 2
    boxes2.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const boxBottom = box.getBoundingClientRect().bottom
        if(boxTop < triggerBottom && boxBottom >= triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}

function checkBoxes3(){
    const triggerBottom = window.innerHeight / 5 * 2
    boxes3.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const boxBottom = box.getBoundingClientRect().bottom
        if(boxTop < triggerBottom && boxBottom >= triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}