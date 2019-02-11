function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    if (!audio) return; // stops the function from running all together
    audio.currentTime = 0; // rewinds it to the start of the audio file
    audio.play();
    key.classList.add('playing');
}
function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip it if it is not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);