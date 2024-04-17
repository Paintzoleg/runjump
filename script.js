// const dude = document.getElementById("dude");
const dude = document.querySelector("#dude");

// const cone = document.getElementById("cone");
const cone = document.querySelector("#cone");

document.addEventListener('keydown', function (event) {
    jump();
});

function jump(){
    // dude.classList.add('jump');
    if (dude.classList != 'jump') {
        dude.classList.add('jump')
    }
    setTimeout(function(){
        playAudio = new Audio('audio/jump.mp3');
        playAudio.play();
        dude.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval(function(){
    let dudeTop = parseInt(window.getComputedStyle(dude).getPropertyValue('top'));
    let coneLeft = parseInt(window.getComputedStyle(cone).getPropertyValue('left'));

    if(coneLeft < 40 && coneLeft > 0 && dudeTop >= 140){
        alert('GAME OVER!!!')
    }
}, 10);

function myFunc() {
    // let wind = document.getElementById("about");
    let wind = document.querySelector('#about');
    wind.className = 'show';
    setTimeout(function(){
        wind.className = wind.className.replace('show', "");
    }, 3000)

};







