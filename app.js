
//video controls to Play/pause
const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide');
        video.pause();
    } else {
        btn.classList.remove('slide');
        video.play();
    }
})


//Adding a preloader in the app

const preloader = document.querySelector('.preloader');

addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})