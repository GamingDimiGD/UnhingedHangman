let muted = false;
if ($.jStorage.get('muted')) $('#muteA')[0].click();
const sfx = (sound, speed, keeppitch) => {
    sound = '../sfx/' + sound + '.mp3'
    if(muted) return
    let audio = new Audio(sound)
    if(!speed) speed = 1
    audio.playbackRate = speed;
    audio.mozPreservesPitch = keeppitch;
    audio.preservesPitch = keeppitch;
    audio.play()
}