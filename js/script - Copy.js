const panels = document.querySelectorAll('.panel');

panels.forEach((p) => {
    p.addEventListener('click', () => {
        removeActiveClasses();
        p.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach((p1) => {
        p1.classList.remove('active');
    })
}