const defaultShortcuts = [
    'qwerty',
    'undo'
]

let playerShortcuts = $.jStorage.get('shortcuts') || defaultShortcuts;

let shortcutList = [
    'speed',
    'hard',
    'changeWord',
    'customKeyColor',
    'customBGIMG',
    'transparent-button',
    'removebg',
    'dynamicbg',
    'teach',
    'protip',
    'qwerty',
    'undo',
    'adv-ckc-button',
    'shop-button',
    'knowledge-button',
]

let sCHNames = [
    '速通模式',
    '困難模式',
    '更換詞彙',
    '鍵盤邊框顏色',
    '更換背景',
    '半透明遊戲視窗',
    '去除背景',
    '動態背景',
    '教店員',
    '你知道嗎',
    '更換鍵盤',
    '時間回朔',
    '進階鍵盤設定',
    '不會閃的快閃閃電',
    '冷凍知識庫'
]

let shortcutDisplay = $(".shortcut-list");
let shortcutNames = $(".shortcut-names");

const copyStyles = (source, target) => {
    const styles = window.getComputedStyle(source);
    for (let i = 0; i < styles.length; i++) {
        const property = styles[i];
        target.style.setProperty(property, styles.getPropertyValue(property));
    }
}

let reloadShortcuts = () => {
    document.querySelectorAll('.shortcut-buttons .shortcut-button').forEach(b => b.remove())
    $.each(playerShortcuts, (i, shortcut) => {
        let shortcutTarget = document.querySelector("." + shortcut);
        if (!shortcutTarget) return;
        let shortcutButton = document.createElement('button')
        shortcutButton.classList.add('shortcut-button')
        const syncButtonContent = () => {
            let matchingItem = shopItemClasses.find(item => item.id === shortcut)
            if (matchingItem) {
                if (shortcut === 'speed' && $.jStorage.get('speed')) {
                    let cdi = setInterval(() => {
                        shortcutButton.innerHTML = shortcutTarget.innerHTML
                        shortcutButton.disabled = true
                        if (Math.floor(($.jStorage.get('speed').time + speedRunCooldown - Date.now()) / 1000) < 0) {
                            shortcutButton.innerHTML = shortcutTarget.innerHTML
                            shortcutButton.disabled = false
                            clearInterval(cdi)
                            return
                        }
                    })
                }
                if (matchingItem.coolDown) {
                    let cdi = setInterval(() => {
                        shortcutButton.innerHTML = shortcutTarget.innerHTML
                        shortcutButton.disabled = true
                        if ($.jStorage.get(shortcut + '-cd') < Date.now()) {
                            setTimeout(() => shortcutButton.innerHTML = shortcutTarget.innerHTML)
                            shortcutButton.disabled = false
                            return clearInterval(cdi)
                        }
                    })
                }
            }
        }
        shortcutButton.onclick = () => {
            shortcutTarget.click()
            shortcutButton.innerHTML = shortcutTarget.innerHTML
            syncButtonContent()
        }
        shortcutButton.disabled = shortcutTarget.disabled
        if (shortcut === 'undo') {
            shortcutButton.classList.add('undo')
        } else shortcutButton.classList.add('qwerty')
        syncButtonContent()
        shortcutButton.innerHTML = shortcutTarget.innerHTML
        let shortcutName = sCHNames[i]
        $('.shortcut-buttons').append(shortcutButton)
    })
}

reloadShortcuts()
$.each(shortcutList, (i, shortcut) => {
    let shortcutButton = document.createElement('button')
    shortcutButton.classList.add('shortcut-display')
    shortcutButton.innerText = playerShortcuts.includes(shortcut)? `第${playerShortcuts.indexOf(playerShortcuts.find(s => s === shortcut)) + 1}個` : '使用'
    shortcutButton.onclick = () => {
        if(playerShortcuts.includes(shortcut)) {
            playerShortcuts = playerShortcuts.filter(s => s!== shortcut)
        }
        else {
            if(playerShortcuts.length >= 5) return showNotif('最多只能有5個捷徑！')
            playerShortcuts.push(shortcut)
        }
        $.each($('.shortcut-display'), (j, ele) => {
            ele.innerText = playerShortcuts.includes(shortcutList[j])? `第${playerShortcuts.indexOf(playerShortcuts.find(s => s === shortcutList[j])) + 1}個` : '使用'
        })
        $.jStorage.set('shortcuts', playerShortcuts)
        reloadShortcuts()
    }
    let shortcutName = sCHNames[i]
    let name = document.createElement('b')
    name.innerHTML = shortcutName
    shortcutNames.append(name)
    let c = document.createElement('div')
    c.classList.add('shortcut-box')
    c.append(shortcutButton)
    shortcutDisplay.append(c)
})
