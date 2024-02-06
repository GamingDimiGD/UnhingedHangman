const qwerty = document.querySelector(".qwerty");
let isQwerty = false
const qwertyKeyboard = 'qwertyuiopasdfghjkl zxcvbnm  '


const changeToQwerty = () => {
    if(isQwerty) {
        qwerty.innerText = '使用 qwerty 鍵盤'
        keyboardDiv.innerHTML = ""
        for (let i = 97; i <= 122; i++) {
            const button = document.createElement("button")
            button.innerText = String.fromCharCode(i)
            keyboardDiv.appendChild(button)
            button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)))
        }
        isQwerty = false
        return console.log('changed to abc')
    } else {
        qwerty.innerText = '使用 abc 鍵盤'
        keyboardDiv.innerHTML = ""
        for (let i = 0; i <= qwertyKeyboard.length - 1; i++) {
            const button = document.createElement("button")
            button.innerText = qwertyKeyboard[i]
            if(button.innerText === ' ') {
                button.disabled = true
                button.style.opacity = '0'
                button.style.width = 'calc(100% / 9 - 20px)'
            }
            button.style.width = 'calc(100% / 9 - 10px)'
            keyboardDiv.appendChild(button)
            button.addEventListener('click', e => initGame(e.target, qwertyKeyboard[i]))
        }
        isQwerty = true
        return console.log('changed to qwerty')
    }
}

qwerty.addEventListener('click', changeToQwerty) 