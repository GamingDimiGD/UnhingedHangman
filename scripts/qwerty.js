const qwerty = document.querySelector(".qwerty");
let isQwerty = false;
const qwertyKeyboard = 'qwertyuiopasdfghjkl zxcvbnm  '

const changeToQwerty = () => {
    if(isQwerty) {
        qwerty.innerText = '使用 qwerty 鍵盤'
        keyboardDiv.innerHTML = ""
        for (let i = 97; i <= 122; i++) {
            let ib = i
            if(new Date().getDate() === 1 && new Date().getMonth() + 1 === 4) {
                ib++
                if(ib > 122) ib = 97
            }
            const button = document.createElement("button")
            button.innerText = String.fromCharCode(ib)
            keyboardDiv.appendChild(button)
            button.addEventListener('click', e => initGame(e.target, String.fromCharCode(ib)))
        }
        isQwerty = false
        $.jStorage.set("qwerty", isQwerty)
        console.log('changed to abc')
    } else {
        qwerty.innerText = '使用 abc 鍵盤'
        keyboardDiv.innerHTML = ""
        for (let i = 0; i <= qwertyKeyboard.length - 1; i++) {
            let ib = i
            if(new Date().getDate() === 1 && new Date().getMonth() + 1 === 4) {
                ib++
                if(ib > qwertyKeyboard.length - 1) ib = 0
            }
            const button = document.createElement("button")
            button.innerText = qwertyKeyboard[ib]
            if(button.innerText === ' ') {
                button.disabled = true
                button.style.opacity = '0'
                button.style.width = 'calc(100% / 9 - 20px)'
            }
            button.style.width = 'calc(100% / 9 - 10px)'
            keyboardDiv.appendChild(button)
            button.addEventListener('click', e => initGame(e.target, qwertyKeyboard[ib]))
        }
        isQwerty = true
        $.jStorage.set("qwerty", isQwerty)
        console.log('changed to qwerty')
    }
    document.querySelectorAll(`.keyboard button`).forEach(b => {
        b.style.border = '3px solid ' + $.jStorage.get('customKeyColor')
    })
}

qwerty.addEventListener('click', changeToQwerty) 