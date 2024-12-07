const bossLi = document.querySelector('.boss-dialogue li')
const bossDialogue = document.querySelector('.boss-dialogue')
let bi
let mp = false

const bossSays = (wordsToSay, seconds, stopThatFromHappeningIg) => {
    clearInterval(bi)
    music.controls = false
    music.pause()
    bossLi.innerText = wordsToSay
    bossDialogue.style.display = "block"
    game.style.opacity = '0'
    game.style.pointerEvents = 'none'
    setTimeout(() => {
        game.style.opacity = '1'
        game.style.pointerEvents = 'auto'
    }, seconds * 1000)
    if (stopThatFromHappeningIg) return;
    bd = bd - 1
    bi = setInterval(() => {
        if (!mp) {
            music.src = '' // guess i never filled this in
            music.play()
            mp = true
        }
        keyboardDiv.querySelectorAll('button').forEach(btn => {
            if (btn.innerText !== ' ') {
                btn.style.background = `rgb(${rng(10 - bd)},${rng(10 - bd)},${rng(10 - bd)})`
                if (btn.disabled) btn.style.background = `rgba(${rng(10 - bd)},${rng(10 - bd)},${rng(10 - bd)},${rng(10 - bd)})`
                btn.style.margin = `-${rng(10 - bd)}px`
            }
        })
    }, bd * 200)
}