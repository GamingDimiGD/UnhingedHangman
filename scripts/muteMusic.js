let isMuted = false
const muteMusic = () => {
    if(!isMuted) {
        document.querySelector('.navbar audio').pause()
        isMuted = true
        document.getElementById('mute').innerText = '開音樂'
    } else {
        document.querySelector('.navbar audio').play()
        isMuted = false
        document.getElementById('mute').innerText = '關音樂'
    }
}