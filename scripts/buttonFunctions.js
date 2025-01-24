const music = document.querySelector('.main-channel')
const altChannel = document.querySelector('.alt-channel')
music.src = $.jStorage.get('customMusic') || '../sfx/Wallpaper.mp3';
let isMuted = false;
const muteMusic = () => {
    if (!isMuted) {
        music.muted = true;
        music.pause();
        isMuted = true;
        document.getElementById("mute").innerText = "開音樂";
    } else {
        music.muted = false;
        music.play();
        isMuted = false;
        document.getElementById("mute").innerText = "關音樂";
    }
    $.jStorage.set('muteMusic', isMuted);
};
if ($.jStorage.get('muteMusic')) muteMusic()
music.play().catch(error => {
    if (isMuted) return;
    alertModal('自動播放音樂權限沒開，按OK即可播放音樂', [{
        text: 'OK',
        onclick: () => {
            music.play()
        }
    }])
})

let eduMode = false;
const toggleEduMode = () => {
    eduMode = !eduMode;
    $.jStorage.set('eduMode', eduMode);
    document.getElementById("edumode").innerText = eduMode ? "關閉教育模式" : "開啟教育模式"
    return eduMode;
}

if ($.jStorage.get('eduMode')) toggleEduMode();


const openModal = (className) => {
    document.querySelector(`.${className}`).classList.add('show')
}

const closeModal = (className) => {
    document.querySelector(`.${className}`).classList.remove('show')
}