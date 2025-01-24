console.log("你好呀 不要在這裡放入文字 除非你是設計遊戲的人");
let funMode = false;
let winStreak = 0;
let hiStreak = 0;
if ($.jStorage.get("hiStreak")) hiStreak = $.jStorage.get("hiStreak");
document.querySelector(".hi-streak").innerText = "最高連勝紀錄: " + hiStreak;
if ($.jStorage.get("funny")) {
    $.jStorage.set("funny", false);
    alertModal("剛剛發生未知錯誤");
}
if ($.jStorage.get("fbb") && !$.jStorage.get("finalBossBadge")) {
    giveAch("finalBossBadge");
    pd(0, "昨天好瘋狂");
    pd(3, "對呀");
    pd(2, "喵");
    pd(1, "哇!好可愛");
    pd(0, "也還好");
    pd(3, `他是${$.jStorage.get("cat") ? "玩家的" : "這裡的"}貓`);
    pd(3, "自從發現西瓜這個水果後就再也放不開了");
    pd(0, "ok");
    dq();
    $.jStorage.set("awfullyHardMode", false);
}
let rmv = 255;
const pngAmount = 3;
const gifAmount = 2;
let giveAmount = 10;
let autosaveText = "每10秒自動儲存";
let keyboardDiv = document.querySelector(".keyboard");
let dictLink = 'https://dictionary.cambridge.org/zht/%E8%A9%9E%E5%85%B8/%E8%8B%B1%E8%AA%9E-%E6%BC%A2%E8%AA%9E-%E7%B9%81%E9%AB%94/'
const worddisplayDiv = document.querySelector(".word-display");
const gameModal = document.querySelector(".game-modal");
const pab = document.querySelector(".play-again");
const hangman = document.querySelector("body");
const game = document.querySelector(".container");
const gameBox = game.querySelector(".game-box");
const ab = document.getElementById("achievements");
const abm = document.querySelector(".achievements-modal");
let currentWord,
    wordmeaning,
    correctLetters,
    wrongGuessCount;
const maxGuesses = 6;
let vocabAmount = 0;
let oVocab = vocab;
let sd = document.getElementById("sparkles");
let hardMode = false;
document.querySelector(".info li b#via").innerText = vocab.length;
if ($.jStorage.get("vocabAmount")) vocabAmount = $.jStorage.get("vocabAmount");
if ($.jStorage.get("vocab")) vocab = $.jStorage.get("vocab");
if (
    $.jStorage.get("bossFightBadge") &&
    !$.jStorage.get("awfullyHardMode") &&
    !$.jStorage.get("finalBossBadge")
) {
    vocab = hardVocab;
    oVocab = hardVocab;
    $.jStorage.set("awfullyHardMode", true);
    hardModeActivation();
    undoAmounts = 5;
    undoAmountsLeft = 5;
    amountDisplay.innerText = `剩${undoAmountsLeft}次`;
}
if ($.jStorage.get("awfullyHardMode") && !$.jStorage.get("finalBossBadge")) {
    oVocab = hardVocab;
    document.querySelector(".info li b#via").innerText =
        oVocab.length + ezVocab.length;
    undoAmounts = 5;
    undoAmountsLeft = 5;
    amountDisplay.innerText = `剩${undoAmountsLeft}次`;
}
if ($.jStorage.get("finalBossBadge")) {
    hardVocab.forEach((v) => {
        oVocab.push(v);
    });
    vocab = oVocab;
    document.querySelector(".info li b#via").innerText = oVocab.length;
    $.jStorage.set("vocab", vocab);
    vocabAmount = "∞";
    $.jStorage.set("vocabAmount", vocabAmount);
}
if (!$.jStorage.get("sparkles")) $.jStorage.set("sparkles", vocabAmount * 10);
sd.innerText = $.jStorage.get("sparkles");
let stats = document.querySelector(".stats .data");
let asd = vocabAmount;
if (isNaN(asd)) asd = 0;
if ($.jStorage.get("bossFightBadge")) vocabAmount + oVocab.length;
let data = $.jStorage.get("data") || {
    dayStarted: new Date().toString(),
    wins: 0,
    loses: 0,
    timesPlayed: 0,
    winRate: 0,
    loseRate: 0,
    totalSparkles: $.jStorage.get("sparkles"),
    sparklesSpent: 0,
    totalGuesses: 0,
    catSparkles: 0,
    bestLoginStreak: $.jStorage.get("loginStreak"),
};
let dataCH = {
    dayStarted: "開始計算時間",
    wins: "贏的次數",
    loses: "輸的次數",
    timesPlayed: "遊玩局數",
    winRate: "贏的機率",
    loseRate: "輸的機率",
    totalSparkles: "贏得的閃",
    sparklesSpent: "花掉的閃",
    totalGuesses: "猜字母次數",
    catSparkles: "西瓜貓找到的閃",
    bestLoginStreak: "最高的連續登入",
};

if ($.jStorage.get("loginStreak") >= 365) sparkleMultiplier *= 999;
else if ($.jStorage.get("loginStreak") >= 100) sparkleMultiplier *= 10;
else if ($.jStorage.get("loginStreak") >= 30) sparkleMultiplier *= 5;
else if ($.jStorage.get("loginStreak") >= 15) sparkleMultiplier *= 4;
else if ($.jStorage.get("loginStreak") >= 10) sparkleMultiplier *= 3;
else if ($.jStorage.get("loginStreak") >= 5) sparkleMultiplier *= 2;

const toggleflash = () => {
    if (rmv === 255) {
        rmv = 0;
        document.getElementById("tfl").innerText = "開啟閃爍";
    } else {
        rmv = 255;
        document.getElementById("tfl").innerText = "關閉閃爍";
    }
    $.jStorage.set('antiFlash', rmv === 0);
};
if ($.jStorage.get('antiFlash')) toggleflash();

oVocab.forEach((word) => {
    if (!vocab.find((a) => a.word === word.word)) return;
    else if (
        word.v !== vocab.find((a) => a.word === word.word).v &&
        word.word === vocab.find((a) => a.word === word.word).word
    ) {
        const newArray = [];
        for (let bi = 0; bi < vocab.length; bi++) {
            if (vocab[bi].word !== word.word) {
                newArray.push(vocab[bi]);
            }
        }
        vocab = newArray;
        vocab.push(word);
    }
    if (word.new) {
        vocab.push(word);
    }
});

const removeWord = (wordToRemove) => {
    const newArray = [];
    for (let i = 0; i < vocab.length; i++) {
        if (vocab[i].word !== wordToRemove) {
            newArray.push(vocab[i]);
        }
    }
    vocabAmount++;
    if (vocabAmount >= 100) giveAch("100words");
    if (vocabAmount >= 500) giveAch("500words");
    if (vocabAmount >= 1000) giveAch("1kwords");
    if (
        vocabAmount !== oVocab.length - newArray.length &&
        !$.jStorage.get("awfullyHardMode")
    )
        vocabAmount = oVocab.length - newArray.length;
    else if (
        vocabAmount !== oVocab.length - newArray.length + ezVocab.length &&
        $.jStorage.get("awfullyHardMode")
    ) {
        vocabAmount = oVocab.length - newArray.length + ezVocab.length;
    }
    return newArray;
};

const resetGame = () => {
    document.querySelector(".info li b#va").innerText = vocabAmount;
    (correctLetters = []), (wrongGuessCount = 0);
    cl = []
    worddisplayDiv.innerHTML = currentWord
        .toLowerCase()
        .split("")
        .map(() => `<li class="letter"></li>`)
        .join("");
    if (currentWord.length > 20) {
        worddisplayDiv.querySelectorAll(".letter").forEach((e) => {
            e.style.width = "5px";
            e.style.fontSize = "0.8rem";
        });
        worddisplayDiv.style.width = "430px";
    } else if (currentWord.length > 12) {
        worddisplayDiv.querySelectorAll(".letter").forEach((e) => {
            e.style.width = "20px";
            e.style.fontSize = "2rem";
        });
        worddisplayDiv.style.width = "auto";
    } else {
        worddisplayDiv.querySelectorAll(".letter").forEach((e) => {
            e.style.width = "28px";
            e.style.fontSize = "2rem";
        });
        worddisplayDiv.style.width = "auto";
    }
    gameModal.classList.remove("show");
    document.querySelector(".guesses-text b").innerText =
        wrongGuessCount + " / " + maxGuesses;
    document.querySelector(".hangman-box img").src =
        `../images/hangman-states/hangman-${wrongGuessCount}.png`;
    document.querySelector(".hangman-box h6").innerText = version;
    keyboardDiv.querySelectorAll("button").forEach((btn) => {
        btn.disabled = false;
        if (btn.innerText === " ") {
            btn.style.opacity = "0";
            btn.style.width = "calc(100% / 9 - 20px)";
            btn.disabled = true;
        }
    });
    qwerty.disabled = false;
    if (vocab[0].word === "") {
        keyboardDiv
            .querySelectorAll("button")
            .forEach((btn) => (btn.disabled = true));
        qwerty.disabled = true;
    }
};

let bda = false;
let bd = 10;

let instinctLetter, forgivenessTriggered, removedLetter;

const getRandomWord = () => {
    instinctLetter = undefined
    forgivenessTriggered = undefined
    removedLetter = undefined

    if (vocab.length === 0) {
        giveAch("endgame");
        if (bossFightMode) bd = 0;
        bda = true;
        if (!bossFightBadge) {
            if (bd === 10) bossSays("哈囉", 7);
            else if (bd === 9) bossSays("你玩太久了", 7);
            else if (bd === 8) bossSays("該休息了", 6);
            else if (bd === 7) bossSays("聽話，不然我會爆炸", 10);
            else if (bd === 6) bossSays("喂", 4);
            else if (bd === 5) bossSays("趕快關頁面", 6);
            else if (bd === 4) bossSays("快點", 4);
            else if (bd === 3) bossSays("不關我要爆炸囉", 4);
            else if (bd === 2) {
                bossSays(
                    "哈阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿阿",
                    4,
                );
                sfx("augh");
            } else if (bd === 1) {
                let dfahjshkjdafshj = 40000;
                if (antiLag) dfahjshkjdafshj = 400;
                bossSays(glitch(dfahjshkjdafshj), 4);
                sfx("ah");
            } else if (bd === 0) {
                game.style.display = "none";
                bossLi.style.display = "none";
                document.querySelector(".navbar").style.display = "none";
                ab.style.display = "none";
                abm.style.display = "none";
                bossSays("", 0.001);
                bossReady();
            }
        } else {
            theFinale();
        }

        vocab.push({
            word:
                String.fromCharCode(
                    Math.floor(Math.random() * (122 - 97)) + 97,
                ) +
                String.fromCharCode(
                    Math.floor(Math.random() * (122 - 97)) + 97,
                ),
            hint: "太厲害了，你把這個遊戲玩完了",
            meaning: "隨機選出來的",
        });
        setInterval(() => {
            if (antiLag) return;
            vocabAmount = glitch(20);
            document.getElementById("va").innerText = vocabAmount;
        }, 200);
    }
    let { word, hint, meaning } =
        vocab[Math.floor(Math.random() * vocab.length)];
    currentWord = word;
    wordmeaning = meaning;
    document.querySelector(".hint-text b").innerText = hardMode
        ? glitch(hint.length + 5)
        : hint;
    if (rng(6 - $.jStorage.get("instinct")) === 0 && $.jStorage.get("instinct") > 0 && currentWord.length > 2) 
        instinctLetter = currentWord.toLowerCase()[rng(currentWord.length - 1)];
    if (rng(6 - $.jStorage.get("remove")) === 0 && $.jStorage.get('remove') > 0) {
        removedLetter = String.fromCharCode(rng(122, 97))
        while(currentWord.toLowerCase().includes(removedLetter)) {
            removedLetter = String.fromCharCode(rng(122, 97))
        }
    }
    resetGame();
};

let modalText, gameOverStatus;
let tutwin;
let clickedLetters = [];

const gameOver = (isVictory) => {
    disableUndoButton(true);
    clickedLetters = [];
    data.timesPlayed++;
    undoAmountsLeft = undoAmounts;
    amountDisplay.innerText = `剩${undoAmountsLeft}次`;
    if(eduMode) $('.advmeaningb')[0].click();
    let xp = rng(8 - $.jStorage.get('experience')) === 0 && $.jStorage.get('experience') > 0;
    if (isVictory) {
        giveAch("won");
        giveXP(2 * (xp?2:1));
        if (!$.jStorage.get("playedBefore")) {
            tutwin = true;
        }
        data.wins++;
        let fortune = rng(8 - $.jStorage.get('fortune')) === 0 && $.jStorage.get('fortune') > 0;
        if (!speedRunMode && !hardMode) giveSparkles((giveAmount + winStreak) * (fortune?2:1));
        else if (speedRunMode && !speedRunEnd) {
            speedRunWins++;
        }
        checkStreak();
        if (!$.jStorage.get("finalBossBadge")) vocab = removeWord(currentWord);
        sfx("yay");
        confetti({
            particleCount: antilag ? 50 : 200,
            spread: 360,
            origin: { y: 0.6 },
        });
        if (funMode) {
            party();
        }
        if (hardMode) {
            giveSparkles((giveAmount + winStreak) * 10);
        }
        if(vocabAmount >= 1000 && !$.jStorage.get('mwsState')) {
            $.jStorage.set('mwsState', 1);
            $('.mwsb')[0].disabled = false
            showNotif('你在商城遠處聽到了轟巄的聲音...')
            sfx('ms')
        }
    } else {
        data.loses++;
        sad();
    }
    if (speedRunMode)
        speedRunWords.push({
            word: currentWord,
            meaning: wordmeaning,
        });
    modalText = isVictory ? `你找到了: ` : `答案是: `;
    gameOverStatus = isVictory ? `你贏了!` : `你輸了!`;
    let pic = isVictory ? "win.png" : "lose.png";
    if (funMode) {
        if (rng(1) === 0) pic = Math.floor(Math.random() * gifAmount) + ".gif";
        else pic = Math.floor(Math.random() * pngAmount) + ".png";
    }
    gameModal.querySelector("img").src = `../images/${pic}`;
    document.querySelector(".content h4").innerText = gameOverStatus;
    document.querySelector(".content p#ans").innerHTML =
        `<p id="ans">${modalText}<b>${currentWord}</b> </p>`;
    document.querySelector(".content p#meaning b").innerText = wordmeaning;
    document.querySelector(".play-again").innerText = isVictory
        ? `繼續遊玩!`
        : `再玩一次!`;
    document.querySelector('.meaning-link').href = `${dictLink}${currentWord}`
    gameModal.classList.add("show");
    if (speedRunMode && !speedRunEnd)
        document.querySelector(".play-again").click();
    if (isVictory === "srw") {
        document.querySelector(".content p#ans").innerHTML =
            `<p id="ans">你贏了<b>${speedRunWins}次</b> </p>`;
        document.querySelector(".content p#meaning b").innerText =
            `得到了${speedRunWins * 2 * giveAmount}✧`;
        giveSparkles(speedRunWins * 2 * giveAmount);
        let button = document.createElement("button");
        button.innerText = "查看詞彙意思";
        button.style.border = "5px solid #f00";
        button.addEventListener("click", () => {
            let wordDisplay = document.createElement("div");
            wordDisplay.style.display = "flex";
            wordDisplay.style.flexDirection = "column";
            speedRunWords.forEach((e) => {
                wordDisplay.innerHTML += `<p>${e.word} - ${e.meaning}</p>`;
            });
            gameModal.querySelector(".content").append(wordDisplay);
            document
                .querySelector(".play-again")
                .addEventListener("click", () => {
                    wordDisplay.remove();
                });
            gameModal.removeChild(button);
            speedRunWords = [];
        });
        gameModal.append(button);
        speedRunEnd = false;
    }
    if (minigamemode && isVictory) {
        pab.removeEventListener("click", getRandomWord);
        bh -= 1000;
        pab.addEventListener("click", () => {
            game.style.display = "none";
            gameModal.classList.remove("show");
            if (bh < 0) bh = 0;
            bhbb.innerText = bh + "/" + bhm;
            if (!ph <= 0) ph += 3;
            phbb.innerText = ph + "/" + phm;
            bossLi.style.display = "block";
            bossLi.innerText = "好痛啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊";
            setTimeout(() => {
                bossLi.innerText = "";
            }, 3000);
        });
        minigamemode = false;
    } else if (minigamemode && !isVictory) {
        ph--;
        if (ph < 0) ph = 0;
        phbb.innerText = ph + "/" + phm;
        bossGetRandomWord();
    }
    pab.disabled = false;
    pab.addEventListener("click", () => {
        pab.disabled = true;
    });
    data.winRate =
        Math.floor((data.wins / data.timesPlayed) * 10000) / 100 + "%";
    data.loseRate =
        Math.floor((data.loses / data.timesPlayed) * 10000) / 100 + "%";
};

const initGame = (button, clickedLetter) => {
    if (fbd) return;
    let forgivenessNum = rng(13 - $.jStorage.get('forgiveness'))
    let forgiveness = forgivenessNum === 0 && $.jStorage.get('forgiveness') > 0 && !forgivenessTriggered;
    if(button.disabled) return
    if (currentWord.toLowerCase().includes(clickedLetter)) {
        if (clickedLetter !== " ") {
            [...currentWord].forEach((letter, index) => {
                if (letter.toLowerCase() === clickedLetter) {
                    correctLetters.push(letter);
                    worddisplayDiv.querySelectorAll("li")[index].innerText =
                        letter;
                    worddisplayDiv
                        .querySelectorAll("li")
                        [index].classList.add("guessed");
                }
            });
        }
    } else if (clickedLetter !== " ") {
        if(forgiveness) {
            forgivenessTriggered = true;
        } else {
            wrongGuessCount++;
            if (wrongGuessCount > 6) wrongGuessCount = 6;
            if (wrongGuessCount < 1) wrongGuessCount = 1;
            document.querySelector(".guesses-text b").innerText =
                wrongGuessCount + " / " + maxGuesses;
            document.querySelector(".hangman-box img").src =
                `../images/hangman-states/hangman-${wrongGuessCount}.png`;
            document.querySelector(".hangman-box h6").innerText = version;
            // welp
            // no more cookies for you
        }
    }
    button.disabled = true;
    cl.push(clickedLetter)
    if (clickedLetter !== " ") {
        data.totalGuesses++;
        if(!forgiveness) {
            if ($.jStorage.get("undo") || undoTest)
                disableUndoButton(false)
            clickedLetters.push({
                letter: clickedLetter,
                isCorrect: currentWord.toLowerCase().includes(clickedLetter),
                button,
            });
        }
    }

    if (wrongGuessCount === maxGuesses) gameOver(false);
    if (correctLetters.length === currentWord.length || compareArray([...new Set(correctLetters.sort())], [...new Set(currentWord.split('').sort())])) gameOver(true);
};

for (let i = 97; i <= 122; i++) {
    if ($.jStorage.get("qwerty")) break;
    let ib = i;
    if (new Date().getDate() === 1 && new Date().getMonth() + 1 === 4) {
        ib++;
        if (ib > 122) ib = 97;
    }
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(ib);
    button.style.setProperty("--position", ib - 96);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) =>
        initGame(e.target, String.fromCharCode(ib)),
    );
}

const activateEnchantments = () => {
    if(instinctLetter !== undefined) {
        initGame(findButton(instinctLetter), instinctLetter)
        findButton(removedLetter).disabled = true
    }
    if(removedLetter !== undefined) {
        if(findButton(removedLetter) === 'none') return
        findButton(removedLetter).disabled = true
        cl.push(removedLetter)
    }
}

getRandomWord();
activateEnchantments();
pab.addEventListener("click", () => {
    getRandomWord();
    activateEnchantments();
});

let funNumber = 0;
const versionText = document.querySelector(".hangman-box h6");
let interval;
let is = 50;

document.querySelector(".hangman-box img").addEventListener("click", () => {
    funNumber++;
    console.log(funNumber, funMode);
    if (funNumber >= 7) {
        giveAch("fun");
        version = "好玩版" + funNumber;
        funMode = true;
        versionText.innerText = version;
        interval = setInterval(fun, is);
    }
});
if (date(4, 1)) {
    giveAch("af");
}

let isBugReportButtonThingChangedToBug = false
setInterval(() => {
    $('.bug-report')[0].innerText = isBugReportButtonThingChangedToBug ? "遊戲問題" : "檢舉 Bug"
    isBugReportButtonThingChangedToBug = !isBugReportButtonThingChangedToBug
}, 2000)


/**
 *  _____
 * /     \
 *(       )
 * \_____/
 *    |
 *  _____
 * /  |  \
 *    |
 *    |
 *    /\
 *   /  \
 *  /    \
 * /      \
 *
 */
