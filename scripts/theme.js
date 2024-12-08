
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

$.jStorage.get('theme').forEach(color => setVar(color.id, color.value))

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
    reset.innerText = '重置'
    reset.onclick = () => {
        setVar(color.id, color.default)
        button.style.background = getVar(color.id)
        input.value = color.default
        let themedata = $.jStorage.get('theme')
        themedata.find(c => c.id === color.id).value = color.default
        $.jStorage.set('theme', themedata)
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
    }
    box.append(b, button, input, cssPicker, reset)
    $(".theme-colors").append(box)
    input.addEventListener('change', (e) => {
        setVar(color.id, e.target.value)
        button.style.background = getVar(color.id)
        let themedata = $.jStorage.get('theme')
        themedata.find(c => c.id === color.id).value = e.target.value
        $.jStorage.set('theme', themedata)
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

let themeNames = [
    'classic-dark',
    'bloody',
    'cyan',
    'modern-white',
    'modern-black',
    'green',
    'purple',
    'dreamy',
    'snowy',
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
            categories: ['綠色系', '亮色系'],
            data: defaultTheme
        },
    ]
    pushPreset(themes[0])
    themeNames.forEach(name => {
        fetch(`../themes/data/${name}.json`)
            .then(response => response.json())
            .then(theme => {
                themes.push(theme)
                pushPreset(theme)
            })
    })
}

const pushPreset = (theme) => {
    let box = document.createElement('div')
    box.classList.add('preset-item')
    let img = document.createElement('img')
    img.src = `../themes/thumbnail/${theme.id}.png`
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