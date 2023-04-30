window.addEventListener('keydown', function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const div = this.document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (audio){
        audio.currentTime = 0;
        audio.play();
        div.classList.add('active');
    }
})

function removeTransition(e){
    // if (e.propertyName !== 'transform') return;
    setTimeout(this.classList.remove('active'), 5000)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));