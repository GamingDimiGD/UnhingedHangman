const alist = document.querySelector('.alist')
const notif = document.querySelector('.notification')
const aa = document.getElementById('aa')
const yaa = document.getElementById('yaa')
let achievements = [
    {
        name: '遊戲救世主',
        description: '恭喜打敗柴柴！',
        id: 'bossFightBadge',
    },
    {
        name: '贏家',
        description: '贏一局遊戲',
        id: 'won',
    },
    {
        name: '我英文很好',
        description: '成功贏得5連勝',
        id: '5streak'
    },
    {
        name: '厲害的10連勝',
        description: '成功贏得10連勝',
        id: '10streak'
    },
    {
        name: '不可能的任務',
        description: '成功贏得50連勝',
        id: '50streak'
    },
    {
        name: '我詞彙量還好',
        description: '擁有100詞彙',
        id: '100words'
    },
    {
        name: '四分之一強',
        description: '累積500詞彙量',
        id: '500words',
    },
    {
        name: '學生程度',
        description: '擁有1000詞彙量',
        id: '1kwords',
    },
    {
        name: 'Endgame',
        description: 'Have all the vocabulary',
        id: 'endgame',
    },
    {
        name: '好好玩⋯⋯',
        description: '找到好玩模式',
        id: 'fun',
    },
]

aa.innerText = achievements.length

let showNotif = (text, time) => {
    if(!time) time = 5
    notif.querySelector('p').innerText = text
    notif.style.opacity = '1'
    setTimeout(() => {
        notif.style.opacity = '0'
    }, time * 1000)
}

let playerAchievements = []
const checkAchievements = () => {
    playerAchievements = []
    achievements.forEach(a => {
        if ($.jStorage.get(a.id) === true) playerAchievements.push(a)
    })
    alist.innerHTML = ''
    yaa.innerText = playerAchievements.length
    if(!playerAchievements[0]) {
        alist.innerHTML = '<h3>你還沒有任何成就！</h3>'
        return
    }
    playerAchievements.forEach(a => {
        let li = document.createElement('li')
        li.innerHTML = `${a.name} - <b>${a.description}</b>`
        li.classList.add('achievement')
        alist.appendChild(li)
    })
}
checkAchievements()

const giveAch = (id) => {
    if($.jStorage.get(id) === true) return
    $.jStorage.set(id, true)
    showNotif('你獲得新成就！')
    checkAchievements()
}