class MarketItem extends ShopItem {
    constructor(name = '', price = 0, description = '', image = '', type = '', id = '', onBuy = () => console.log('no onbuy specified'), coolDown = 0, saveCD = false, vocabAmountRequired = 0, si = 1, customRequirements = () => { return true }, customRequirementText = '你沒有資格買這個商品!') {
        /*
         * Create a new item in the shop using this class lol
         * @param {string} name - The name of the item
         * @param {number} price - The price of the item
         * @param {string} description - The description of the item
         * @param {string} image - The image of the item
         * @param {string} type - The type/category of the item
         * @param {string} id - The jStorage id of the item
         * @param {function} onBuy - The function to run when the item is bought
         * @param {number} coolDown - The cool down of the item (in seconds)
         * @param {boolean} saveCD - Whether to save the cool down of the item or not
         * @param {number} vocabAmountRequired - The vocabulary amount required to buy the item
         */
        super(name, price, description, image, type, id, onBuy, coolDown, saveCD, si)
        this.vocabAmountRequired = vocabAmountRequired;
        this.customRequirements = customRequirements;
        this.customRequirementText = customRequirementText;
        if (this.vocabAmountRequired > 0) {
            this.item.querySelector('button').innerText = `${this.vocabAmountRequired}詞彙量解鎖`;
        }
        this.item.querySelector("button").addEventListener('click', () => {
            if (this.si === 0) return
            if (vocabAmount < this.vocabAmountRequired) return showNotif(`你還需要${this.vocabAmountRequired - vocabAmount}個詞彙才能購買這東西！`)
            if (!this.customRequirements()) return showNotif(this.customRequirementText)
            if ($.jStorage.get("sparkles") < this.price)
                return showNotif("你買不起!", 1);
            takeSparkles(this.price);
            if (this.coolDown > 0) {
                $.jStorage.set(this.id + "-cd", Date.now() + this.coolDown * 1000);
                setInterval(() => {
                    let b = this.item.querySelector("button")
                    if ($.jStorage.get(this.id + "-cd") < Date.now()) {
                        b.disabled = false
                        b.innerText = this.price + "✧";
                    } else {
                        b.disabled = true
                        b.innerText = `還有${Math.floor(($.jStorage.get(this.id + "-cd") - Date.now()) / 1000)}秒`
                    }
                })
            }
            this.onBuy();
        });
    }
    disable(isDisabled = true, customText) {
        this.item.querySelector("button").disabled = isDisabled;
        if (isDisabled) {
            this.item.querySelector("button").innerText =
                this.price > 0 ? customText || "已購買" : customText || "已解鎖";
        } else {
            this.item.querySelector("button").innerText = this.price > 0 ? this.price + "✧" : `${this.vocabAmountRequired}詞彙量解鎖`;
        }
    }
}
let tips = [
    '你可以點7下某個圖片可以解成就',
    '西瓜貓會幫你賺閃',
    '隔壁那家店有個商品會騙人',
    '我需要你詞彙量累積到' + oVocab.length + '，剩下我之後再跟你講',
    '你知道，在4月1日，鍵盤直接壞掉',
    '7月26日是遊戲迪米生日',
    ['沒有東西是完美的', '就連這個世界也不例外。'],
    '你知道你按鍵盤可以猜字，以前不能。',
    ['你按下數字鍵可以按捷徑的按鈕', `比如說你的捷徑是: 切換鍵盤 時間回朔 更換單字`, '你按 1 可以切換鍵盤，按 2 可以時間回朔，以此類推'],
    ['你知道西瓜貓看似再挖閃', '實際上他用魔法把它變出來的。'],
]

let teach = new MarketItem("教學", 0, "教店員英文領取獎勵", "teach", "其他", "teach", () => {
    let grn = rng(120, 80)
    giveSparkles(grn)
    showNotif(`你教店員一個英文單字，獲得${grn * sparkleMultiplier}✧！`)
}, 240 * 60, true, 20)
let protip = new MarketItem("你知道嗎", 100, "給一個找到秘密的提示", "protip", "其他", "protip", () => {
    if (isNaN(vocabAmount)) {
        pd(characters[0], '(他不在', 0)
        return dialogue(dialogueQueue)
    }
    let tip = tips[rng(tips.length - 1)]
    if (typeof tip === 'string' || tip instanceof String) pd(characters[0], tip)
    else if (typeof tip === 'array' || tip instanceof Array) {
        tip.forEach(text => {
            pd(0, text)
        });
    } else if (typeof tip === 'function' || tip instanceof Function) {
        tip()
    }
    dialogue(dialogueQueue)
}, 15 * 60, true, 0)

let shortcut = new MarketItem('捷徑', 500, '可以把一些按鈕放在鍵盤下方! 而且可以加快速鍵! 不懂的話買了就知道了。', 'shortcut', '其他', 'shortcut', () => {
    pd(0, '感謝你買我的發明')
    pd(0, '蠻想試試看的')
    pd(0, '我在鍵盤下方放了一個按鈕，你按它可以更改捷徑')
    dq()
    let button = document.createElement('button')
    button.classList.add('qwerty')
    button.classList.add('shortcut-toggle')
    button.innerText = '自訂捷徑'
    button.onclick = () => {
        document.querySelector('.shortcut.modal').classList.add('show')
    }
    document.querySelector('.shortcut-button-area').append(button)
    shortcut.disable(true)
    shortcut.save()
})

shortcut.ownedOnLoad(() => {
    let button = document.createElement('button')
    button.classList.add('qwerty')
    button.classList.add('shortcut-button')
    button.innerText = '自訂捷徑'
    button.onclick = () => {
        document.querySelector('.shortcut.modal').classList.add('show')
    }
    document.querySelector('.shortcut-button-area').append(button)
    shortcut.disable(true)
})