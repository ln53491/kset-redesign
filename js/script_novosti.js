const panels = document.querySelectorAll('.panel')
const todayPanel = document.getElementsByClassName('.today')



setTimeout(function (){
    document.body.style.opacity = '1'
    document.body.style.transition = 'opacity 0.3s ease-in;'
}, 1)

if(document.documentElement.clientWidth < 1500){
    resizeFunct()
}

window.addEventListener('resize', resizeFunct);

var panelsNo = panels.length
var todayIndex = 0
var i = 0;
// console.log(panelsNo)

var panelsValues = panels.values()
panels.forEach(el => {
    if(el.className.includes('active')){
        todayIndex = i
        var today = el
    }
    i++
});

resizeFunct()

function resizeFunct(){
        var panelsNo = panels.length
        var todayIndex = 0
        var i = 0;

        var panelsValues = panels.values()
        panels.forEach(el => {
            if(el.className.includes('active') == false){
                if(document.documentElement.clientWidth < 1500){
                    el.style.display = 'none'
                    document.body.style.resize = 'none'
                }
                else{
                    el.style.display = 'unset'
                    refresh()
                }
            }
        });
}




refresh()

// if(todayIndex == 0){
//     console.log(todayIndex)
//     document.getElementById('prev').disabled = true;
// } else{
//     document.getElementById('prev').disabled = false;
// }

document.getElementById('next').addEventListener('click', () => {

    var panelsNo = panels.length
    var todayIndex = 0
    var i = 0;
    // console.log(panelsNo)
    
    var panelsValues = panels.values()
    panels.forEach(el => {
        if(el.className.includes('active')){
            todayIndex = i
            var today = el
        }
        i++
    });

    if(todayIndex < panelsNo-1){
        panels.item(todayIndex).classList.toggle('active')
        // panels.item(todayIndex).classList.toggle('today')
        panels.item(todayIndex+1).classList.toggle('active')
        // panels.item(todayIndex+1).classList.toggle('today')
        todayIndex++

        // panels.forEach(el => {
        //     el.style.opacity = '0'
        //     el.style.transition = 'opacity 1s ease-in'
        // });


        // setTimeout(function(){}

        // , 2000)

        // document.body.style.opacity = '0'

        // setTimeout(function (){
        //     document.body.style.opacity = '0'
        //     document.body.style.transition = 'opacity 0s ease-in;'
        // }, 1)
        // // document.body.style.transition = 'opacity 0.5s ease-in'

        // setTimeout(refresh(), 2000)

        refresh()

        // setTimeout(function (){
        //     document.body.style.opacity = '1'
        //     document.body.style.transition = 'opacity 0.3s ease-in;'
        // }, 1000)
        // document.body.style.transition = 'opacity 0.5s ease-in'

        // document.body.style.opacity = '0'
        // document.body.style.transition = 'opacity 0.3s ease-in'
    }
})

document.getElementById('prev').addEventListener('click', () => {

    var panelsNo = panels.length
    var todayIndex = 0
    var i = 0;
    // console.log(panelsNo)
    
    var panelsValues = panels.values()
    panels.forEach(el => {
        if(el.className.includes('active')){
            todayIndex = i
            var today = el
        }
        i++
    });

    if(todayIndex > 0){
        panels.item(todayIndex).classList.toggle('active')
        // panels.item(todayIndex).classList.toggle('today')
        panels.item(todayIndex-1).classList.toggle('active')
        // panels.item(todayIndex-1).classList.toggle('today')
        todayIndex--
        refresh()
    }
})

document.getElementById('today').addEventListener('click', () => {

    var panelsNo = panels.length
    var todayIndex = 0
    var activeIndex = 0
    var i = 0;
    // console.log(panelsNo)
    
    var panelsValues = panels.values()
    panels.forEach(el => {
        if(el.className.includes('today')){
            todayIndex = i
            var today = el
        }
        i++
    });

    var i = 0;
    panels.forEach(el => {
        if(el.className.includes('active')){
            activeIndex = i
            var today = el
        }
        i++
    });

        panels.item(todayIndex).classList.toggle('active')
        // panels.item(todayIndex).classList.toggle('today')
        panels.item(activeIndex).classList.toggle('active')
        // panels.item(todayIndex-1).classList.toggle('today')
        // todayIndex--
        refresh()
})

document.getElementById('last').addEventListener('click', () => {

    var panelsNo = panels.length
    var todayIndex = 0
    var activeIndex = 0
    var i = 0;
    // console.log(panelsNo)
    
    var panelsValues = panels.values()
    panels.forEach(el => {
        if(el.className.includes('active')){
            activeIndex = i
            var today = el
        }
        i++
    });

        panels.item(activeIndex).classList.toggle('active')
        // panels.item(todayIndex).classList.toggle('today')
        panels.item(panelsNo-1).classList.toggle('active')
        // panels.item(todayIndex-1).classList.toggle('today')
        // todayIndex--
        refresh()
})

// refresh()


function refresh(){

    panels.forEach(el => {
        el.style.display = 'unset'
        el.style.opacity = '1'
        el.style.height = '80vh'
    });

    var panelsNo = panels.length
    var todayIndex = 0
    var i = 0;
    // console.log(panelsNo)
    
    const panelsValues = panels.values()
    panels.forEach(el => {
        if(el.className.includes('active')){
            todayIndex = i
            const today = el
        }
        i++
    });


    

for(i=todayIndex-4; todayIndex-i-4 != 3 && i>=0; i--){
    panels.item(i).style.display = 'none'
}

for(i=todayIndex+4; todayIndex-i+4 != 3 && i<panelsNo; i++){
    panels.item(i).style.display = 'none'
}

for(i=todayIndex-4; i>=0; i--){
    panels.item(i).style.display = 'none'
}

// for(i=todayIndex-4; todayIndex-i-4 != 3 && i>=0; i--){
//     panels.item(i).style.display = 'none'
// }

if(todayIndex == 0 || todayIndex == 1 || todayIndex == 2){


if(todayIndex == 0 && todayIndex+4 < panelsNo){
    panels.item(todayIndex+4).style.display = 'unset';
    panels.item(todayIndex+4).style.opacity = '10%';
    panels.item(todayIndex+4).style.height = '45vh';
}

if(todayIndex == 0 && todayIndex+5 < panelsNo){
    panels.item(todayIndex+5).style.display = 'unset';
    panels.item(todayIndex+5).style.opacity = '5%';
    panels.item(todayIndex+5).style.height = '40vh';
}

if(todayIndex == 0 && todayIndex+6 < panelsNo){
    panels.item(todayIndex+6).style.display = 'unset';
    panels.item(todayIndex+6).style.opacity = '3%';
    panels.item(todayIndex+6).style.height = '35vh';
}

if(todayIndex == 1 && todayIndex+4 < panelsNo){
    panels.item(todayIndex+4).style.display = 'unset';
    panels.item(todayIndex+4).style.opacity = '10%';
    panels.item(todayIndex+4).style.height = '45vh';
}

if(todayIndex == 1 && todayIndex+5 < panelsNo){
    panels.item(todayIndex+5).style.display = 'unset';
    panels.item(todayIndex+5).style.opacity = '5%';
    panels.item(todayIndex+5).style.height = '40vh';
}

if(todayIndex == 2 && todayIndex+4 < panelsNo){
    panels.item(todayIndex+4).style.display = 'unset';
    panels.item(todayIndex+4).style.opacity = '10%';
    panels.item(todayIndex+4).style.height = '45vh';
}


}
else{


    if(todayIndex == panelsNo-1 && todayIndex-4 >= 0){
        panels.item(todayIndex-4).style.display = 'unset';
        panels.item(todayIndex-4).style.opacity = '10%';
        panels.item(todayIndex-4).style.height = '45vh';
    }
    
    if(todayIndex == panelsNo-1 && todayIndex-5 >= 0){
        panels.item(todayIndex-5).style.display = 'unset';
        panels.item(todayIndex-5).style.opacity = '5%';
        panels.item(todayIndex-5).style.height = '40vh';
    }
    
    if(todayIndex == panelsNo-1 && todayIndex-6 >= 0){
        panels.item(todayIndex-6).style.display = 'unset';
        panels.item(todayIndex-6).style.opacity = '3%';
        panels.item(todayIndex-6).style.height = '35vh';
    }

    
    if(todayIndex == panelsNo-2 && todayIndex-4 >= 0){
        panels.item(todayIndex-4).style.display = 'unset';
        panels.item(todayIndex-4).style.opacity = '10%';
        panels.item(todayIndex-4).style.height = '45vh';
    }
    
    if(todayIndex == panelsNo-2 && todayIndex-5 >= 0){
        panels.item(todayIndex-5).style.display = 'unset';
        panels.item(todayIndex-5).style.opacity = '5%';
        panels.item(todayIndex-5).style.height = '40vh';
    }

    if(todayIndex == panelsNo-3 && todayIndex-4 >= 0){
        panels.item(todayIndex-4).style.display = 'unset';
        panels.item(todayIndex-4).style.opacity = '10%';
        panels.item(todayIndex-4).style.height = '45vh';
    }
    
    }
    



if(todayIndex-1 >= 0){
    panels.item(todayIndex-1).style.opacity = '75%';
    panels.item(todayIndex-1).style.height = '60vh';
}

if(todayIndex+1 < panelsNo){
    panels.item(todayIndex+1).style.opacity = '75%';
    panels.item(todayIndex+1).style.height = '60vh';
}

if(todayIndex-2 >= 0){
    panels.item(todayIndex-2).style.opacity = '40%';
    panels.item(todayIndex-2).style.height = '55vh';
}

if(todayIndex+2 < panelsNo){
    panels.item(todayIndex+2).style.opacity = '40%';
    panels.item(todayIndex+2).style.height = '55vh';
}

if(todayIndex-3 >= 0){
    panels.item(todayIndex-3).style.opacity = '15%';
    panels.item(todayIndex-3).style.height = '50vh';
}

if(todayIndex+3 < panelsNo){
    panels.item(todayIndex+3).style.opacity = '15%';
    panels.item(todayIndex+3).style.height = '50vh';
}



if(todayIndex == 1 && todayIndex+4 < panelsNo){
    panels.item(todayIndex+4).style.display = 'unset';
    panels.item(todayIndex+4).style.opacity = '10%';
    panels.item(todayIndex+4).style.height = '45vh';
}

if(todayIndex == 1 && todayIndex+5 < panelsNo){
    panels.item(todayIndex+5).style.display = 'unset';
    panels.item(todayIndex+5).style.opacity = '5%';
    panels.item(todayIndex+5).style.height = '40vh';
}

if(todayIndex == 2 && todayIndex+4 < panelsNo){
    panels.item(todayIndex+4).style.display = 'unset';
    panels.item(todayIndex+4).style.opacity = '10%';
    panels.item(todayIndex+4).style.height = '45vh';
}

panels.item(todayIndex).style.opacity = '1'
panels.item(todayIndex).style.height = '80vh'

// panels.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         // panels.item(todayIndex).style.transition = 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)'
//         // panels.item(todayIndex).style.transform = 'scale(1.05)'
//     })
    
//     el.addEventListener('mouseleave', () => {
//         // panels.item(todayIndex).style.transition = 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)'
//         // panels.item(todayIndex).style.transform = 'scale(1)'
//     })
// })


// panels.item(todayIndex).addEventListener('mouseenter', () => {
//     panels.item(todayIndex).style.transition = 'transform 1s cubic-bezier(0.19, 1, 0.22, 1)'
//     panels.item(todayIndex).style.transform = 'scale(1.05)'
// }, {
//     // once: true
// })

// panels.item(todayIndex).addEventListener('mouseleave', () => {
//     panels.item(todayIndex).style.transition = 'transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)'
//     panels.item(todayIndex).style.transform = 'scale(1)'
// })

// panels.item(todayIndex).addEventListener('mouseenter', () => {
//     panels.item(todayIndex).
// })

// panels.item(todayIndex).addEventListener('mouseleave', () => {
    
// })

}



// panels.forEach((p) => {
//     p.addEventListener('click', () => {
//         removeActiveClasses();
//         p.classList.add('active');
//     });
// });

// function removeActiveClasses(){
//     panels.forEach((p1) => {
//         p1.classList.remove('active');
//     })
// }