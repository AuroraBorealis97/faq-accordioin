const arrows = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');

for(let i = 0; i < arrows.length; i++){
arrows[i].addEventListener('click', () => {
    if(answers[i].classList.contains('display') === true){
        closeAll();
            open(i);
    }
        else{
            answers[i].classList.add('display');
            questions[i].style.fontWeight = '400';
            arrows[i].style.transform = "rotateX(360deg)";
        }
    })
}

function open(i){
    arrows[i].style.transform = "rotateX(180deg)";
    answers[i].classList.toggle('display');
    questions[i].style.fontWeight = '700';
}

function closeAll(){
for(let i = 0; i < arrows.length; i++){
    answers[i].classList.add('display');
    questions[i].style.fontWeight = '400';
    arrows[i].style.transform = "rotateX(360deg)";
}
}