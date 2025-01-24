if (!$.jStorage.get('mwsState')) $('.mwsb')[0].disabled = true;

const midwayShopRadio = $('.shop-music')[0]

const openMidwayShop = () => {
    document.querySelector('.midway-shop').classList.add('show')
    document.querySelector('.market').classList.remove('show')
    if (!isMuted) {
        music.pause()
        midwayShopRadio.play()
            // .catch(error => {
            //     console.log('Error playing audio:', error);
            //     pd(1, '喔不，音樂播放器壞掉了')
            //     pd(1, '上面好像寫: "凸^-^凸"')
            //     pd(1, '...')
            //     dq()
            // });
    }
}

if (isMobile()) {
    $('.how-to-play-with-radio').html('可以試試在遠離/靠近商店的音樂播放器的地方點擊一下!')
}

if ($.jStorage.get('mwsState') === 1) $('.mwsb')[0].disabled = false
else if ($.jStorage.get('mwsState') === 2) {
    $('.mwsb')[0].disabled = false
    $('.mwsb')[0].onclick = openMidwayShop
}

let playlist = [
    {
        name: 'WATEVA - Ber Zer Ker (Rob Gasser Remix) [NCS Release]',
        id: 'berzerker',
        link: 'https://youtu.be/DNwEk0gTPuc?si=nb8AnGZCBM1s28Y8'
    },
    {
        name: 'JNATHYN x Bryan Andrew Medina - Clockwork',
        id: 'clockwork',
        link: 'https://youtu.be/eUb4XPIMdkg?si=DXkBR9QQhxqHsDH-'
    },
    {
        name: 'Different Heaven & EH!DE - My Heart',
        id: 'myheart',
        link: 'https://youtu.be/jK2aIUmmdP4?si=Hzi2U4lFezEbmzvo'
    },
    {
        name: 'Nighthawk22 - Isolation',
        id: 'isolation',
        link: 'https://youtu.be/OmahQ9RFOPo?si=bVz2WdwJTn42ntTD'
    },
    {
        name: 'Creo - Flow',
        id: 'flow',
        link: 'https://youtu.be/MM87r7GjzW8?si=KkU0zGgLWyfuGuvX'
    },
    {
        name: 'Dimrain47 - At the Speed of Light',
        id: 'speedoflight',
        link: 'https://youtu.be/1Zrq8FiKS6A?si=80_56XvmtlTkXR-3'
    },
    {
        name: 'Creo - Epilogue',
        id: 'epilogue',
        link: 'https://youtu.be/tOZNh8veU_Y?si=WUN5-v0ApyY9Sof7'
    },
]

midwayShopRadio.src = `../sfx/msmusic/${playlist[rng(playlist.length - 1)].id}.mp3`

let currentTrackIndex = rng(playlist.length - 1);
let playedTimes = 0

function playNextTrack() {
    playedTimes++;
    if (playedTimes > playlist.length + 2 && $('.midway-shop')[0].classList.contains('show')) {
        pd(1, '喔不，音樂播放器壞掉了')
        pd(1, '上面好像寫:')
        pd(1, '"版權問題，無法播放"')
        pd(1, '他每次都這樣，就先不要播放好了')
        dq()
        return;
    }
    const track = playlist[currentTrackIndex];
    midwayShopRadio.src = `../sfx/msmusic/${track.id}.mp3`;
    if ($('.midway-shop')[0].classList.contains('show')) midwayShopRadio.play()
    $('.now-playing')[0].innerText = `正在播放: ${track.name}`;
    $('.now-playing')[0].href = track.link;
    midwayShopRadio.onended = () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        playNextTrack();
    };
}

playNextTrack();

let liftMaxEnchantLevelLimit = new MarketItem('提升最高附魔等級限制', 500000, '部分附魔發生機率提升至100%', 'lmell', '提升限制', 'liftMaxEnchantLevelLimit', () => {
    maxEnchantLevel++
    liftMaxEnchantLevelLimit.disable()
    liftMaxEnchantLevelLimit.save()
    reloadEnchants()
}, 0, false, 0, 2);
liftMaxEnchantLevelLimit.ownedOnLoad(() => {
    maxEnchantLevel++
    liftMaxEnchantLevelLimit.disable()
    liftMaxEnchantLevelLimit.save()
    reloadEnchants()
})

let removeShortcutLimit = new MarketItem('移除捷徑限制', 200000, '可以有無限個捷徑 (限制提升至遊戲擁有的捷徑按鈕的數量)', 'rsl', '提升限制', 'removeShortcutLimit', () => {
    maxShortcuts = shortcutList.length
    removeShortcutLimit.disable()
    removeShortcutLimit.save()
    $('.shortcuts-limit').html(maxShortcuts);
}, 0, false, 0, 2);

removeShortcutLimit.ownedOnLoad(() => {
    maxShortcuts = shortcutList.length
    removeShortcutLimit.disable()
    removeShortcutLimit.save()
    $('.shortcuts-limit').html(maxShortcuts);
})

const catLevelToIncreaseTo = 20

let liftCatLimit = new MarketItem('超級貓飼料', 30000, `提升西瓜貓等級限制至${catLevelToIncreaseTo}等，升級要自己去升`, 'maxCatLevel', '提升限制', 'maxCatLevel', () => {
    maxCatLevel = catLevelToIncreaseTo
    liftCatLimit.disable()
    liftCatLimit.save(maxCatLevel)
    a.disable(false, a.price + "✧ 升級 等級" + $.jStorage.get('catLevel'))
}, 0, false, 0, 2, () => { return $.jStorage.get('catLevel') }, '你要先購買西瓜貓!');

liftCatLimit.ownedOnLoad(() => {
    maxCatLevel = catLevelToIncreaseTo
    liftCatLimit.disable()
    liftCatLimit.save(maxCatLevel)
    a.disable(false, a.price + "✧ 升級 等級" + $.jStorage.get('catLevel'))
})

let increaseSparkleMultiplier = new MarketItem('提升閃倍率', 100000, '閃的倍率變成原本倍率加上0.1，最高增加1倍', 'scam', '倍率', 'increaseSparkleMultiplier', () => {
    console.log(increaseSparkleMultiplier.id)
    if (!$.jStorage.get(increaseSparkleMultiplier.id)) $.jStorage.set(increaseSparkleMultiplier.id, 0)
    let mult = $.jStorage.get(increaseSparkleMultiplier.id) + 1
    increaseSparkleMultiplier.save(mult)
    increaseSparkleMultiplier.changeButton(b => {
        b.innerText = `(+${mult/10}倍) ${increaseSparkleMultiplier.price}✧`
    })
    if (mult >= 10) increaseSparkleMultiplier.disable(true, '已到達最高限制!')
}, 0, false, 0, 2);
increaseSparkleMultiplier.ownedOnLoad(() => {
    let mult = $.jStorage.get(increaseSparkleMultiplier.id)
    increaseSparkleMultiplier.changeButton(b => {
        b.innerText = `(+${mult/10}倍) ${increaseSparkleMultiplier.price}✧`
    })
    if (mult >= 10) increaseSparkleMultiplier.disable(true, '已到達最高限制!')
})

let increaseXPMultiplier = new MarketItem('提升經驗值倍率', 100000, '經驗值的倍率變成原本倍率加上0.1，最高增加1倍', 'ixm', '倍率', 'increaseXPMultiplier', () => {
    console.log(increaseXPMultiplier.id)
    if (!$.jStorage.get(increaseXPMultiplier.id)) $.jStorage.set(increaseXPMultiplier.id, 0)
    let mult = $.jStorage.get(increaseXPMultiplier.id) + 1
    increaseXPMultiplier.save(mult)
    increaseXPMultiplier.changeButton(b => {
        b.innerText = `(+${mult/10}倍) ${increaseXPMultiplier.price}✧`
    })
    if (mult >= 10) increaseXPMultiplier.disable(true, '已到達最高限制!')
}, 0, false, 0, 2);
increaseXPMultiplier.ownedOnLoad(() => {
    let mult = $.jStorage.get(increaseXPMultiplier.id)
    increaseXPMultiplier.changeButton(b => {
        b.innerText = `(+${mult/10}倍) ${increaseXPMultiplier.price}✧`
    })
    if (mult >= 10) increaseXPMultiplier.disable(true, '已到達最高限制!')
})

let tryLimboKeys = new MarketItem('再玩一次鑰匙遊戲', 0, '不會給獎勵', 'key', '沒用的', 'tryLimboKeys', () => {
    limboKeys()
    $('.midway-shop').removeClass('show')
}, 0, false, 0, 2);