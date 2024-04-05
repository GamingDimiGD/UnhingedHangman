let um = document.querySelector('.update-modal')
let umud = um.querySelector('.description')
if($.jStorage.get('version') !== version) {
    $.jStorage.set('version', version)
    um.classList.add('show')
}
let updateInfo = [
    {
        title: '小小小更新',
        version: 'v1.1.1',
        description: [
            {
                title: '新增載入畫面',
                text: '就醬'
            },
            {
                title: '修復bug',
                text: '修復動態背景的bug 以及其他bug'
            }
        ]
    },
    {
        title: '遊戲自訂義更新!',
        version: 'v1.1.0',
        description: [
            {
                title: '新貨幣!',
                text: '閃(✧)是一個可以在商店買東西的貨幣，可以靠詞彙量和連勝贏得一些閃。',
            },
            {
                title: '初始畫面大改版!',
                text: '你現在可以等著"它"打到角落，一直看下去......'
            },
            {
                title: '更改遊戲介面和更多!',
                text: '可以在新的商店裡買"更改背景圖片"和"更改鍵盤邊緣顏色"。'
            },
            {
                title: '更多秘密!',
                text: '更多秘密給你找，一定找得到的!'
            },
            {
                title: '修復bug',
                text: '修復部分詞彙意思，以免學錯。'
            }
        ],
    },
]
updateInfo.forEach(u => {
    umud.innerHTML += `<h2>${u.version} - ${u.title}</h2>`
    u.description.forEach(d => {
        umud.innerHTML += `<h3>${d.title}</h3>`
        umud.innerHTML += `<p>${d.text}</p>`
    })
})
umud.querySelectorAll('h2').forEach(e => {
    e.style.color = '#003c00'
    e.style.textAlign = 'center'
})
umud.style.textAlign = 'left';