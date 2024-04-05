let isMuted = false
const muteMusic = () => {
    if(!isMuted) {
        document.querySelector('.navbar audio').muted = true
        isMuted = true
        document.getElementById('mute').innerText = '開音樂'
        document.getElementById('mute2').innerText = '開音樂'
    } else {
        document.querySelector('.navbar audio').muted = false
        isMuted = false
        document.getElementById('mute').innerText = '關音樂'
        document.getElementById('mute2').innerText = '關音樂'
    }
}