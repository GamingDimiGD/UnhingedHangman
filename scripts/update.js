let um = document.querySelector('.update-modal')
let umud = um.querySelector('.description')
if($.jStorage.get('version') !== version) {
    $.jStorage.set('version', version)
    um.classList.add('show')
}
let updateInfo = [
    {
        title: "修復部分 Bug 更新",
        version: 'v1.3.1',
        description: [
            {
                title: "更新內容",
                text: "修復詞彙錯誤以及增加每日登入按鈕",
            }
        ],
    },
    {
        title: '暑假大更新!',
        version: 'v1.3.0',
        description: [
            {
                title: '時間回朔!',
                text: '不小心點錯了可以用!'
            },
            {
                title: '等級與附魔!',
                text: '可以讓遊戲便稍微簡單一點'
            },
            {
                title: '支援鍵盤功能!',
                text: '你可以用鍵盤猜字!'
            },
            {
                title: '模組!',
                text: '你現在可以製作/安裝模組!'
            },
            {
                title: '斗內機制!',
                text: '現在可以斗內我! 不強制你斗內:)'
            },
            {
                title: '檢舉bug!',
                text: '現在你可以檢舉bug，避免有問題'
            },
            {
                title: '更多詞彙!',
                text: '等你到最高就知道了，有"一點點小難"'
            },
            {
                title: '設定與遊戲存檔設定!',
                text: '現在你可以在設定裡面調整部分設定，也可以轉移存檔以及備份存檔'
            },
            {
                title: '更改部分介面，增加成就和秘密',
                text: '對就這樣'
            },
            {
                title: '修復奇特的bug',
                text: '有一個在檢舉bug最上面的圖片'
            }
        ]
    },
    {
        title: '聽說這是個好的更新',
        version: 'v1.2.0',
        description: [
            {
                title: '生日7月!',
                text: '7/26是迪米生日，整個月都可以有2倍閃，7/26那天登入會解成就!'
            },
            {
                title: '統計!',
                text: '現在開始你做什麼都會統計，像是遊玩次數。'
            },
            {
                title: '教學教你怎麼玩!',
                text: '現在第一次玩的人都會有教學。',
            },
            {
                title: '新商店!新商品!',
                text: '現在商店按鈕變商城，商城內目前有2個商店，"冷凍知識庫"是新的。\n不會閃的快閃閃店內多了一些遊玩模式以及切換單字。'
            },
            {
                title: '新成就!',
                text: '現在有了有關生日和閃的成就'
            },
            {
                title: '增加秘密以及修復bug',
                text: '增加了一些秘密，以及修復了一些bug'
            }
        ]
    },
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