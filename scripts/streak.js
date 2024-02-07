let r = 0
let g = 0
let b = 0
let styleText = `rgb(${r},${g},${b})`
let cs = 5
setInterval(() => {
    if (rmv === 0) {
        document.querySelector('.hangman-box img').style.border = "3px solid #003c00"
        document.querySelector('.navbar').style.color = '#003c00'
        streakText.style.border = 'none'
        streakText.style.color = '#000'
        keyboardDiv.querySelectorAll('button').forEach(btn => {
            btn.style.color = '#fff'
        })
        return
    }
    if (r > 255) r = 255
    if (g > 255) g = 255
    if (b > 255) b = 255
    if (r < 0) r = 0
    if (g < 0) g = 0
    if (b < 0) b = 0
    if(r !== 255 && g === 0 && b === 0) {
        styleText = `rgb(${r + cs},${g},${b})`
        r = r + cs
    } else if(r === 255 && g !== 255 && b === 0) {
        styleText = `rgb(${r},${g + cs},${b})`
        g = g + cs
    } else if(r === 255 && g === 255 && b !== 255) {
        styleText = `rgb(${r - cs},${g},${b + cs})`
        r = r - cs
        b = b + cs
    } else if(r !== 255 && g === 255 && b === 255) {
        styleText = `rgb(${r + cs},${g - cs},${b})`
        g = g - cs
        r = r + cs
    } else if(r === 255 && g !== 255 && b === 255) {
        styleText = `rgb(${r},${g + cs},${b - cs})`
        b = b - cs
        r = r + cs
    } else if(r !== 255 && g === 255 && b !== 255) {
        styleText = `rgb(${r - cs},${g},${b + cs})`
        r = r - cs
        b = b + cs
    } else if(r !== 255 && g !== 255 && b === 255) {
        styleText = `rgb(${r + cs},${g - cs},${b})`
        g = g - cs
        r = r + cs
    } else if(r >= 255 && g !== 255 && b !== 255) {
        styleText = `rgb(${r},${g + cs},${b - cs})`
        b = b - cs
        g = g + cs
    }
    if (winStreak >= 10) {
        document.querySelector('.hangman-box img').style.border = "5px solid " + styleText
        document.querySelector('.navbar').style.color = styleText
        streakText.style.border = "3px solid " + styleText
        streakText.style.color = styleText
        keyboardDiv.querySelectorAll('button').forEach(btn => {
            btn.style.color = styleText
        })
    }
})
const streakText = document.querySelector('.streak')
let si
const checkStreak = (amount) => {
    winStreak++
    if (!isNaN(amount)) winStreak = amount
    streakText.innerText = winStreak + ' 連勝'
    if(winStreak < 5) {
        clearInterval(si)
        game.style.background = '#fff'
        document.querySelector('.hangman-box img').style.border = "3px solid #003c00"
        document.querySelector('.navbar').style.color = '#003c00'
        streakText.style.border = 'none'
        streakText.style.color = '#000'
        keyboardDiv.querySelectorAll('button').forEach(btn => {
            btn.style.color = '#fff'
        })
        game.style.border = 'none'
    } else if (winStreak >= 5 && winStreak < 10) {
        game.style.background = '#fff000'
        document.querySelector('.hangman-box img').style.border = "5px solid #ff0000"
        streakText.style.color = '#ff0000'
        streakText.style.borderRadius = "2px"
        streakText.style.border = "3px solid #ff0000"
        si = setInterval(() => {
            streakText.style.margin = rng(3) + 'px'
        })
    } else if(winStreak >= 10) {
        game.style.background = '#cc77ff'
        game.style.border = '5px solid cyan'
        
        si = setInterval(() => {
            streakText.style.margin = rng(3) + 'px'
        })
    }
}