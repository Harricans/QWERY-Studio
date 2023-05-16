function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //the key element div
    if (!audio) return; //stop the funciton from running all together
    audio.currentTime = 0; //rewind to start
    audio.play()
    key.classList.add('playing')
}
function removeTransition(e) {
    if (e.propertyName !== "transform") return; //skip it if its not a transition
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener("keydown", playSound)
