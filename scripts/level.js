const levelDisplay = document.querySelector(".level-display b");
const levelMeter = document.querySelector(".level-display meter");
let xpMultiplier = 1

if (!$.jStorage.get("level")) $.jStorage.set("level", 1);
if (!$.jStorage.get("xp")) $.jStorage.set("xp", 0);

let levelSystem = [
    {
        level: 1,
        xpForNextLevel: 2,
    },
    {
        level: 2,
        xpForNextLevel: 3,
    },
    {
        level: 3,
        xpForNextLevel: 4,
    },
    {
        level: 4,
        xpForNextLevel: 5,
    },
    {
        level: 5,
        xpForNextLevel: 10,
    },
    {
        level: 6,
        xpForNextLevel: 12,
    },
    {
        level: 7,
        xpForNextLevel: 14,
    },
    {
        level: 8,
        xpForNextLevel: 16,
    },
    {
        level: 9,
        xpForNextLevel: 18,
    },
    {
        level: 10,
        xpForNextLevel: 20,
    },
    {
        level: 11,
        xpForNextLevel: 30,
    },
    {
        level: 12,
        xpForNextLevel: 40,
    },
    {
        level: 13,
        xpForNextLevel: 50,
    },
    {
        level: 14,
        xpForNextLevel: 50,
    },
    {
        level: 15,
        xpForNextLevel: 50,
    },
    {
        level: 16,
        xpForNextLevel: 50,
    },
    {
        level: 17,
        xpForNextLevel: 50,
    },
    {
        level: 18,
        xpForNextLevel: 50,
    },
    {
        level: 19,
        xpForNextLevel: 75,
    },
    {
        level: 20,
        xpForNextLevel: 100,
    },
    {
        level: 21,
        xpForNextLevel: 100,
    },
    {
        level: 22,
        xpForNextLevel: 150,
    },
    {
        level: 23,
        xpForNextLevel: 200,
    },
    {
        level: 24,
        xpForNextLevel: 300,
    },
    {
        level: 25,
        xpForNextLevel: 350,
    },
    {
        level: 26,
        xpForNextLevel: 400,
    },
    {
        level: 27,
        xpForNextLevel: 450,
    },
    {
        level: 28,
        xpForNextLevel: 500,
    },
    {
        level: 29,
        xpForNextLevel: 500,
    },
    {
        level: 30,
        xpForNextLevel: 1,
    },
];
let levelCreditsDisplay = $(".lcd")[0]
levelCreditsDisplay.innerText = $.jStorage.get('levelCredits')

levelDisplay.innerText = $.jStorage.get("level");
if (levelSystem.find((l) => l.level === $.jStorage.get("level")).xpForNextLevel)
    levelMeter.max = levelSystem.find(
        (l) => l.level === $.jStorage.get("level"),
    ).xpForNextLevel;
levelMeter.value = $.jStorage.get("xp");

let giveXP = (amount) => {
    amount *= xpMultiplier
    if ($.jStorage.get("level") >= 30) return;
    let originalLevel = $.jStorage.get("level");
    let currentLevel = levelSystem.find(
        (l) => l.level === $.jStorage.get("level"),
    );
    $.jStorage.set("xp", $.jStorage.get("xp") + amount);
    while (
        currentLevel.xpForNextLevel &&
        $.jStorage.get("xp") >= currentLevel.xpForNextLevel
    ) {
        if ($.jStorage.get("level") >= 30) return;
        $.jStorage.set(
            "xp",
            $.jStorage.get("xp") - currentLevel.xpForNextLevel,
        );
        $.jStorage.set("level", $.jStorage.get("level") + 1);
        levelDisplay.innerText = $.jStorage.get("level");
        levelMeter.value = $.jStorage.get("xp");
        if (levelSystem.find((l) => l.level === $.jStorage.get("level")).xpForNextLevel)
            levelMeter.max = levelSystem.find(
                (l) => l.level === $.jStorage.get("level"),
            ).xpForNextLevel;
        currentLevel = levelSystem.find(
            (l) => l.level === $.jStorage.get("level"),
        );
        $.jStorage.set("levelCredits", $.jStorage.get("levelCredits") + 1);
        levelCreditsDisplay.innerText = $.jStorage.get("levelCredits");
        $('#levels')[0].style.border = '3px solid #f00'
    }
    levelDisplay.innerText = $.jStorage.get("level");
    levelMeter.value = $.jStorage.get("xp");
    if (levelSystem.find((l) => l.level === $.jStorage.get("level")).xpForNextLevel)
        levelMeter.max = levelSystem.find(
            (l) => l.level === $.jStorage.get("level"),
        ).xpForNextLevel;
    if ($.jStorage.get('level') >= 30) giveAch('lvl30')
};
if ($.jStorage.get('level') >= 30) giveAch('lvl30')

if ($.jStorage.get('level') && !$.jStorage.get('levelCredits') && $.jStorage.get('levelCredits') !== 0) {
    $.jStorage.set('levelCredits', $.jStorage.get('level'))
    levelCreditsDisplay.innerText = $.jStorage.get('levelCredits')
}
if (!$.jStorage.get('levelsGiven') && !isNaN(vocabAmount)) {
    giveXP(vocabAmount * 2)
    $.jStorage.set('levelsGiven', true)
}

let qw = 0;
levelSystem.forEach((l) => {
    qw += l.xpForNextLevel;
});

// instinct, luck, fortune, forgiveness, experience, remove

let levelEnchants = [
    {
        name: '本能',
        id: 'instinct',
        description: '有機會送出單字答案的一個字母',
    },
    {
        name: '幸運',
        id: 'luck',
        description: '讓時間回朔有機會不減少次數',
    },
    {
        name: '財富',
        id: 'fortune',
        description: '有機會賺較多閃 (2倍)',
    },
    {
        name: '原諒',
        id: 'forgiveness',
        description: '讓你答錯有機會不會算進去 (1局1次)',
    },
    {
        name: '經驗',
        id: 'experience',
        description: '經驗有機會收集到更多 (2倍)',
    },
    {
        name: '消除',
        id: 'remove',
        description: '有機會預先淘汰一個錯誤字母',
    },
]

if ($.jStorage.get('levelCredits') > 0) $('#levels')[0].style.border = '3px solid #f00'
else $('#levels')[0].style.border = '3px solid var(--main)'

levelEnchants.forEach(enchant => {
    if (!$.jStorage.get(enchant.id)) $.jStorage.set(enchant.id, 0)
    let details = document.createElement('details')
    details.classList.add('enchant-div')
    details.classList.add(enchant.id)
    let summary = document.createElement('summary')
    let enchantName = document.createElement('b')
    let enchantMeter = document.createElement('meter')
    let enchantButton = document.createElement('button')
    let enchantLevel = document.createElement('b')
    enchantName.innerText = enchant.name
    enchantMeter.min = 0
    enchantMeter.max = 5
    enchantMeter.optimum = 0
    enchantMeter.value = $.jStorage.get(enchant.id)
    enchantButton.innerHTML = '<i class="fa-solid fa-plus"></i>'
    enchantButton.classList.add('enchant-button')
    enchantButton.id = enchant.id
    enchantLevel.innerText = $.jStorage.get(enchant.id)
    summary.append(enchantName, enchantMeter, enchantButton, enchantLevel)
    details.append(summary)
    details.innerHTML += enchant.description
    $('.levels .content')[0].append(details)
})

document.querySelectorAll('.enchant-button').forEach(b => {
    b.onclick = () => {
        let enchant = b
        let d = document.querySelector('.' + b.id)
        let enchantMeter = d.querySelector('meter')
        let enchantLevel = d.querySelectorAll('b')[1]
        if ($.jStorage.get(enchant.id) >= 5 || $.jStorage.get('levelCredits') <= 0) return;
        $.jStorage.set(enchant.id, $.jStorage.get(enchant.id) + 1)
        enchantMeter.value = $.jStorage.get(enchant.id)
        enchantLevel.innerText = $.jStorage.get(enchant.id)
        $.jStorage.set('levelCredits', $.jStorage.get('levelCredits') - 1)
        levelCreditsDisplay.innerText = $.jStorage.get('levelCredits')
        if ($.jStorage.get('levelCredits') > 0) $('#levels')[0].style.border = '3px solid #f00'
        else $('#levels')[0].style.border = '3px solid var(--main)'
    }
})