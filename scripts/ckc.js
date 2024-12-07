
let ckcPresets = [
    {
        name: 'JS彩虹',
        description: '利用JS邏輯來用出來的彩虹，程式碼看起來很恐怖，但有用就好',
        properties: {
            "custom-key-color": '#000000',
        }
        // customFunctions: () => {
        //     ckcRainbow = !ckcRainbow;
        // },
    },

]

let animations = [
    {
        text: '無',
        value: 'unset',
    },
    {
        text: '跳動',
        value: 'pulseB',
    },
    {
        text: 'CSS彩虹',
        value: 'rainbow',
    },
    {
        text: '旋轉',
        value: 'spinB',
    },
]

let ckcVars = [
    {
        name: '上層顏色',
        id: 'custom-key-color',
        defaultValue: getVar('main'),
        type: 'color',
    },
    {
        name: '底層顏色',
        id: 'ckc-b',
        defaultValue: getVar('main'),
        type: 'color',
    },
    {
        name: '底層模糊/螢光',
        id: 'ckc-blur',
        type: 'number',
        defaultValue: '0',
        unit: 'rem'
    },
    {
        name: 'CSS動畫 (上層)',
        id: 'ckc-animation',
        defaultValue: 'unset',
        type: 'select',
        selectOptions: animations
    },
    {
        name: 'CSS動畫 (底層)',
        id: 'ckc-animation2',
        defaultValue: 'unset',
        type: 'select',
        selectOptions: animations,
    },
    {
        name: '動畫時間(秒)',
        id: 'ckc-duration',
        type: 'number',
        defaultValue: '5',
        unit: 's'
    },
    {
        name: 'CSS動畫移動方式',
        id: 'ckc-easing',
        defaultValue: 'linear',
        type: 'select',
        selectOptions: [
            {
                text: '直線',
                value: 'linear',
            },
            {
                text: '緩和',
                value: 'ease',
            },
            {
                text: '緩和進場',
                value: 'ease-in',
            },
            {
                text: '緩和出場',
                value: 'ease-out',
            },
            {
                text: '緩和進出',
                value: 'ease-in-out',
            },
            {
                text: '彈跳',
                value: 'cubic-bezier(.52,2,.3,.3)'
            },
            {
                text: '向後加速',
                value: 'cubic-bezier(.6,-0.28,.74,.05)',
            },
            {
                text: '跑太遠',
                value: 'cubic-bezier(.18,.89,.32,1.28)',
            },
        ]
    },
    {
        name: '上層不透明度 (0 - 1)',
        id: 'ckc-opacity-a',
        type: 'number',
        defaultValue: '1',
        min: 0,
        max: 1,
        step: 0.01,
    },
    {
        name: '底層不透明度 (0 - 1)',
        id: 'ckc-opacity-b',
        type: 'number',
        defaultValue: '1',
        min: 0,
        max: 1,
        step: 0.01,
    },
]

let defaultOptions = {}
ckcVars.forEach(values => {
    defaultOptions[values.id] = values.defaultValue
})
if (!$.jStorage.get('ckc-options')) $.jStorage.set('ckc-options', defaultOptions);

let addOptions = () => {
    $('.ckc-options').empty();
    ckcVars.forEach(v => {
        if (v.type === 'select') {
            let input = `<div id="${v.id}" class="ckc-option">${v.name}: <select name='${v.name}' class="${v.id}">`
            v.selectOptions.forEach(o => {
                input += `<option value='${o.value}' ${$.jStorage.get('ckc-options')[v.id] ? $.jStorage.get('ckc-options')[v.id] === o.value ? 'selected' : '' : v.defaultValue === o.value ? 'selected' : ''}>${o.text}</option>`
            });
            input += `</select></div>`
            $('.ckc-options').append(input);
            return;
        };
        // let input = document.createElement('input');
        // input.type = v.type || 'text';
        // input.placeholder = v.defaultValue
        // input.name = v.text
        // input.value = $.jStorage.get('ckc-options')[v.id] || ''
        let input = `<div id="${v.id}" class="ckc-option">${v.name}: <input type="${v.type || 'text'}" placeholder="${v.defaultValue}" name="${v.name}" value="${$.jStorage.get('ckc-options')[v.id] || ''}" ${(v.type === 'number')? `min="${v.min}" max="${v.max}" step="${v.step}"`: ""} /></div>`
        $('.ckc-options').append(input);
    })
}

addOptions()

let saveckcButton = document.createElement('button')
saveckcButton.innerText = '儲存變更';

saveckcButton.onclick = () => {
    let options = {}
    ckcVars.forEach(v => {
        if (v.type === 'select') {
            options[v.id] = $(`#${v.id} select`).val() || v.defaultValue;
        } else if (v.type === 'number' && v.min !== undefined && v.max !== undefined) {
            let inp = $(`#${v.id} input`).val()
            if (parseInt(inp) < v.min) {
                inp = v.min
            } else if (parseInt(inp) > v.max) {
                inp = v.max
            } else if (isNaN(parseInt(inp))) {
                inp = v.defaultValue;
            }
            options[v.id] = inp || v.defaultValue;
        } else {
            options[v.id] = $(`#${v.id} input`).val() || v.defaultValue;
        }
    })
    $.jStorage.set('ckc-options', options)
    console.log(options)
    Object.keys(options).forEach(key => {
        setVar(key, options[key] + (ckcVars.find(v => v.id === key).unit || ''))
    })
    showNotif('更改成功!')
}


Object.keys($.jStorage.get('ckc-options')).forEach(key => {
    let options = $.jStorage.get('ckc-options')
    setVar(key, options[key] + (ckcVars.find(v => v.id === key).unit || ''))
})



let resetDefaultButton = document.createElement('button')
resetDefaultButton.innerText = '全部重製';

resetDefaultButton.onclick = () => {
    alertModal('確定重製?', [
        {
            text: '確定',
            onclick: () => {
                $.jStorage.set('ckc-options', defaultOptions)
                let options = {}
                ckcVars.forEach(v => {
                    if (v.type === 'select') {
                        options[v.id] = v.defaultValue;
                    } else {
                        options[v.id] = v.defaultValue;
                    }
                })
                Object.keys(options).forEach(key => {
                    setVar(key, options[key] + (ckcVars.find(v => v.id === key).unit || ''))
                })
                addOptions()
            }
        }, {
            text: '不要',
            onclick: () => {
                console.log('ok')
            }
        }
    ])
}

$('.ckc-buttons').append(resetDefaultButton)
$('.ckc-buttons').append(saveckcButton)