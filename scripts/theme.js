let themeColorList = [
    {
        name: '遊戲板背景',
        default: '#ffffff',
        id: 'w'
    },
    {
        name: '主要',
        default: '#00ff00',
        id: 'main'
    },
    {
        name: '主題',
        default: '#003c00',
        id: 'theme'
    },
    {
        name: '導航欄文字',
        default: '#003c00',
        id: 'navbar'
    },
    {
        name: '背景',
        default: '#003c00',
        id: 'bg'
    },
    {
        name: '半透明主題',
        default: '#003c003c',
        id: 'd',
    },
    {
        name: '對話背景',
        default: '#004c00',
        id: 'dialogue'
    },
    {
        name: '暗文字',
        default: '#000000',
        id: 'text'
    },
    {
        name: '亮文字',
        default: '#ffffff',
        id: 'text2',
    },
    {
        name: '5連勝背景',
        default: '#fff000',
        id: 'y'
    },
    {
        name: '10連勝背景',
        default: '#cc77ff',
        id: 'p'
    },
    {
        name: '5連勝邊框',
        default: 'red',
        id: 'r',
    },
    {
        name: '10連勝邊框',
        default: 'cyan',
        id: 'c',
    },
    {
        name: '選擇按鈕文字',
        default: '#ffffff',
        id: 'bh'
    },
    {
        name: '連結文字',
        default: '#00ff00',
        id: 'link'
    },
    {
        name: '選擇連結文字',
        default: '#003c00',
        id: 'lh'
    },
    {
        name: '輸贏文字',
        default: '#003c00',
        id: 'wintext'
    },
    {
        name: '通知文字',
        default: '#00ff00',
        id: 'notif'
    }
]

let defaultTheme = []
themeColorList.forEach(color => {
    if (color.opacityHex) {
        defaultTheme.push({
            id: color.id,
            value: color.default + color.opacityHex
        })
        return
    }
    defaultTheme.push({
        id: color.id,
        value: color.default
    })
})

if (!$.jStorage.get('theme')) $.jStorage.set('theme', defaultTheme);

$.jStorage.get('theme').forEach(color => {
    setVar(color.id, color.value)
    if (!$.jStorage.get('customKeyColor') && color.id === 'main') {
        setVar('custom-key-color', color.value)
        setVar('ckc-b', color.value)
    }
})

themeColorList.forEach(color => {
    let box = document.createElement('div')
    box.classList.add('theme-box')
    let b = document.createElement('b')
    b.innerText = color.name
    let input = document.createElement('input')
    input.type = 'color'
    input.value = getVar(color.id)
    let button = document.createElement('button')
    button.classList.add('picker')
    button.style.background = getVar(color.id)
    button.classList.add(color.id + '-picker')
    button.onclick = () => input.click()
    let reset = document.createElement('button')
    reset.innerText = '重設'
    reset.onclick = () => {
        setVar(color.id, color.default)
        button.style.background = getVar(color.id)
        input.value = color.default
        let themedata = $.jStorage.get('theme')
        themedata.find(c => c.id === color.id).value = color.default
        $.jStorage.set('theme', themedata)
        if (!$.jStorage.get('customKeyColor')) {
            setVar('custom-key-color', getVar('main'))
            setVar('ckc-b', getVar('main'))
        }
    }
    box.style.alignItems = 'center'
    box.style.justifyContent = 'center'
    let cssPicker = document.createElement('button')
    cssPicker.innerText = 'CSS顏色代號'
    cssPicker.onclick = () => {
        let e = prompt('輸入CSS顏色代號(可使用半透明)')
        if (!e) return;
        setVar(color.id, e)
        button.style.background = getVar(color.id)
        let themedata = $.jStorage.get('theme')
        themedata.find(c => c.id === color.id).value = e
        $.jStorage.set('theme', themedata)
        if (!$.jStorage.get('customKeyColor')) {
            setVar('custom-key-color', getVar('main'))
            setVar('ckc-b', getVar('main'))
        }
    }
    box.append(b, button, input, cssPicker, reset)
    $(".theme-colors").append(box)
    input.addEventListener('change', (e) => {
        setVar(color.id, e.target.value)
        button.style.background = getVar(color.id)
        let themedata = $.jStorage.get('theme')
        themedata.find(c => c.id === color.id).value = e.target.value
        $.jStorage.set('theme', themedata)
        if (!$.jStorage.get('customKeyColor')) {
            setVar('custom-key-color', getVar('main'))
            setVar('ckc-b', getVar('main'))
        }
    })
})

let themes = [
    {
        id: 'classic',
        name: '經典',
        description: 'UnhingedHangman 的預設顏色!',
        author: '遊戲迪米',
        categories: ['綠色系', '亮色系'],
        data: defaultTheme
    },
]

const presetList = $('.preset-list')
const loadPresets = () => {
    $(presetList).empty()
    themes = [
        {
            id: 'classic',
            name: '經典',
            description: 'UnhingedHangman 的預設顏色!',
            author: '遊戲迪米',
            categories: ['綠色系', '亮色系', '高對比度'],
            data: defaultTheme
        },
    ]
    pushPreset(themes[0])
}

const url = `https://gamingdimigd.github.io/UHThemes/`

const loadMorePresets = () => {
    $.ajax({
        url: `${url}idList.json`,
        success: (data) => {
            console.log(data)
            data.forEach(id => {
                $.ajax({
                    url: `${url}themes/data/${id}.json`,
                    success: (theme) => {
                        theme.thumbnail = `${url}/themes/thumbnail/${id}.png`
                        if (theme.customMusicURL) theme.customMusicURL = `${url}/themes/music/${id}.mp3`;
                        if (theme.custom10StreakMusicURL) theme.custom10StreakMusicURL = `${url}/themes/streakMusic/${id}.mp3`;
                        themes.push(theme)
                        pushPreset(theme)
                    }
                })
            })
        }
    });
}

const pushPreset = (theme) => {
    let box = document.createElement('div')
    box.classList.add('preset-item')
    let img = document.createElement('img')
    img.src = theme.thumbnail || `../themes/thumbnail/${theme.id}.png`
    let title = document.createElement('h2')
    title.innerText = theme.name
    let description = document.createElement('p')
    description.innerHTML = theme.description
    let category = document.createElement('b')
    category.innerText = theme.categories.join(' ').trim()
    let author = document.createElement('b')
    author.innerText = "製作人: " + theme.author
    let use = document.createElement('button')
    use.innerText = '套用'
    use.onclick = () => {
        theme.data.forEach(color => setVar(color.id, color.value))
        $.jStorage.set('theme', theme.data)
        $.jStorage.get('theme').forEach(t => {
            document.querySelector(`.${t.id}-picker`).style.background = t.value
        });
        if (!$.jStorage.get('customKeyColor')) {
            setVar('custom-key-color', getVar('main'))
            setVar('ckc-b', getVar('main'))
        }
        if (theme.customCss && theme.customCss.length < 2500) $.jStorage.set('customCss', theme.customCss)
        else removeCss()
        applyCss()
        if (theme.customMusicURL) $.jStorage.set('customMusic', theme.customMusicURL)
        if (theme.custom10StreakMusicURL) $.jStorage.set('custom10StreakMusic', theme.customMusicURL)
        showNotif('已套用', 1)
    }
    let info = document.createElement('div')
    info.classList.add('preset-info')
    info.append(title, category, author, description, use)
    box.append(img, info)
    presetList.append(box)
}


const exportTheme = () => {
    let e = JSON.stringify($.jStorage.get('theme'));
    let blob = new Blob([e], { type: "text/uht" });
    let a = document.createElement("a");
    a.download = "Unhinged Hangman 主題檔案.uht";
    a.href = URL.createObjectURL(blob);
    a.click();
}

const importTheme = (importSaveData) => {
    let e = JSON.parse(importSaveData);
    $.jStorage.set('theme', e)
    $.jStorage.get('theme').forEach(color => setVar(color.id, color.value))
    $.jStorage.get('theme').forEach(t => {
        if(!document.querySelector(`.${t.id}-picker`)) return console.log('Theme color id: ' + t.id + ' doesnt exist you idiot')
        document.querySelector(`.${t.id}-picker`).style.background = t.value
    });
};

let themeInput = $('.ti')[0]

themeInput.addEventListener('change', () => {
    let fr = new FileReader()
    fr.readAsText(themeInput.files[0])
    fr.onload = () => {
        console.log(fr.result)
        importTheme(fr.result)
    }
    if (!$.jStorage.get('customKeyColor')) {
        setVar('custom-key-color', getVar('main'))
        setVar('ckc-b', getVar('main'))
    }
})


const applyCss = () => {
    if (!$.jStorage.get('customCss')) return;
    $('.custom-css').text($.jStorage.get('customCss'))
}

applyCss()

const removeCss = () => {
    $.jStorage.deleteKey('customCss');
    $('.custom-css').empty()
}

const importResourcePack = (data) => {
    let e = JSON.parse(data);
    let preview = document.createElement('img');
    preview.classList.add('preset-item')
    preview.classList.add('resource-pack-preview')
    preview.src = e.id ? `${url}/themes/thumbnail/${e.id}.png` : e.thumbnail ? e.thumbnail : `${url}/themes/thumbnail/thumbnail-placeholder.png`
    if (e.thumbnail && e.thumbnail.startsWith(url + '/themes/thumbnail/')) preview.style.filter = 'blur(0)'
    else preview.style.filter = 'blur(10px)'
    let eleText = `<div class="preset-info"><h2>${e.name}</h2><b>${e.categories.join(' ')}</b><b>製作人: ${e.author}</b>
<p>${e.description}</p>
<button>套用</button></div>`
    $('.resource-pack-preview').empty()
    $('.resource-pack-preview').append(preview, eleText)
    $('.resource-pack-preview button').on('click', () => {
        importTheme(JSON.stringify(e.data))
        if (e.customCss && e.customCss.length < 2500) $.jStorage.set('customCss', e.customCss)
        else removeCss()
        if (e.customMusicURL) $.jStorage.set('customMusic', e.customMusicURL)
        if (e.custom10StreakMusicURL) $.jStorage.set('custom10StreakMusic', e.customMusicURL)
        applyCss()
        $('.import-rp')[0].classList.remove('show')
    })
    $('.import-rp')[0].classList.add('show')
};

$('.rpi').on('change', () => {
    let fr = new FileReader()
    fr.readAsText($('.rpi')[0].files[0])
    fr.onload = () => {
        console.log(fr.result)
        importResourcePack(fr.result)
    }
    if (!$.jStorage.get('customKeyColor')) {
        setVar('custom-key-color', getVar('main'))
        setVar('ckc-b', getVar('main'))
    }
})

$('.submit-music-link')[0].onclick = () => {
    let url = prompt('請輸入音樂連結，上傳YT影片連結沒用')
    if (!url) return;
    $.jStorage.set('customMusic', url)
    music.src = url
}

$('.submit-10streak-music-link')[0].onclick = () => {
    let url = prompt('請輸入音樂連結，上傳YT影片連結沒用')
    if (!url) return;
    $.jStorage.set('custom10StreakMusic', url)
}
$.each($('.custom-music .content button'), (i, b) => {
    b.addEventListener('click', () => {
        music.src = $.jStorage.get('customMusic') || '../sfx/Wallpaper.mp3'
    })
})

$('.upload-css-input')[0].addEventListener('change', () => {
    if ($('.upload-css-input')[0].files[0].size > 2500) return alertModal('超過2500字元! 請上傳小一點的檔案!')
    let fr = new FileReader();
    fr.readAsText($('.upload-css-input')[0].files[0]);
    fr.onload = () => {
        $.jStorage.set('customCss', fr.result);
        applyCss()
    }
})

$('.remove-css').on('click', () => {
    alertModal('確定刪除自訂CSS?', [
        {
            text: '確定',
            onclick: () => {
                removeCss()
            }
        },
        {
            text: '取消'
        }
    ])
})

$('.create-rp-btn').on('click', () => {
    let name = $('.rp-name-input').val(),
        description = $('.rp-description-input').val(),
        author = $('.rp-author-input').val(),
        categories = $('.rp-categories-input').val(),
        thumbnail = $('.rp-thumbnail-input').val(),
        css = $('.rp-include-css')[0].checked ? $.jStorage.get('customCss') : undefined,
        customMusicURL = $('.rp-include-music')[0].checked ? $.jStorage.get('customMusic') : undefined,
        custom10StreakMusicURL = $('.rp-include-10music')[0].checked ? $.jStorage.get('custom10StreakMusic') : undefined;
    if (!name || !description || !author || !categories) return alertModal('資料沒填完整!')
    if (description.length > 50) return alertModal('簡介已超過50字!')
    let data = {
        name, description, author, thumbnail, customMusicURL, custom10StreakMusicURL,
        categories: categories.split(' ').map(c => c.trim()),
        data: $.jStorage.get('theme'),
        customCss: css
    }
    let e = JSON.stringify(data);
    let blob = new Blob([e], { type: "text/json" });
    let a = document.createElement("a");
    a.download = name + ".json";
    a.href = URL.createObjectURL(blob);
    a.click();
})