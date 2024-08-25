let bh = 5000;
let ph = 10;
// its short for player health

let bhy = false

let bhm = 5000;
let phm = 10;

const phb = document.querySelector(".phb");
const bhb = document.querySelector(".bhb");

const phbb = document.querySelector(".phb b");
const bhbb = document.querySelector(".bhb b");

// boss (type) bullets

// default
let bdb = [];

// horizontal
let bhba = [];

// diagonal
let bdib = [];

// top
let btb = [];

// lasers
let dlaser = []; // default
let vlaser = []; // vertical
let slaser = []; // shoot

let minigamemode = false;

const showHealthBars = () => {
    const healthBars = document.querySelectorAll(".health-bar");
    phbb.innerText = ph + "/" + phm;
    bhbb.innerText = bh + "/" + bhm;
    healthBars.forEach((healthBar) => {
        healthBar.style.display = "block";
        healthBar.style.opacity = 1;
    });
    bossLi.style.display = "none";
};

const bossTP = (bX, bY) => {
    bossX = bX;
    bossY = bY;
};

const bossGetRandomWord = () => {
    minigamemode = true;
    vocab = oVocab;
    game.style.display = "flex";
    game.style.position = "absolute";
    document.querySelector(".hangman-box").style.opacity = "0";
    getRandomWord();
    vocab = [];
    clearInterval(bi);
    changeToQwerty();
    changeToQwerty();
    let wtuiouio = setInterval(() => {
        if (!minigamemode) {
            if (bh <= 0) endFight();
            else fight();
            clearInterval(wtuiouio);
        }
    }, 250);
};

const bossMoveX = (destination, speed) => {
    let timelastframe = [];
    let fasdfjk = setInterval(() => {
        timelastframe.push(Date.now());
        let deltatime = 1;
        if (timelastframe.length > 1) {
            deltatime =
                (timelastframe[timelastframe.length - 1] -
                    timelastframe[timelastframe.length - 2]) /
                15;
        }
        timelastframe = timelastframe.slice(-2);
        bossX += speed * deltatime;
        if (speed < 0 && bossX <= destination) {
            bossX = destination;
            clearInterval(fasdfjk);
        } else if (bossX >= destination) {
            bossX = destination;
            clearInterval(fasdfjk);
        }
    });
};
const bossMoveY = (destination, speed) => {
    let timelastframe = [];
    let fasdfjk = setInterval(() => {
        timelastframe.push(Date.now());
        let deltatime = 1;
        if (timelastframe.length > 1) {
            deltatime =
                (timelastframe[timelastframe.length - 1] -
                    timelastframe[timelastframe.length - 2]) /
                15;
        }
        timelastframe = timelastframe.slice(-2);
        bossY += speed * deltatime;
        if (speed < 0 && bossY <= destination) {
            bossY = destination;
            clearInterval(fasdfjk);
        } else if (bossY >= destination) {
            bossY = destination;
            clearInterval(fasdfjk);
        }
    });
};

const endFight = () => {
    if (isGameOver) return;
    isGameOver = true;
    document.head.querySelectorAll("meta")[2].content =
        "width=device-width, initial-scale=1";
    vocab = oVocab;
    vocabAmount = 0;
    canvas.width = 0;
    canvas.height = 0;
    let heheheh = document.createElement("img");
    heheheh.src = "../images/hahalol.gif";
    heheheh.style.width = "100%";
    document.body.appendChild(heheheh);
    bossFightMode = false;
    bossFightBadge = true;
    $.jStorage.set("bossFightBadge", true);
    setTimeout(() => {
        gameOver(true);
        modalText = "你把柴柴（白色方形）打敗了！";
        wordmeaning = glitch(10);
        let asdf = glitch(2) + "重來" + glitch(2);
        document.querySelector(".content h4").innerText = "你贏了！！！";
        document.querySelector(".content p#ans").innerHTML =
            `<p id="ans">${modalText}<b>${currentWord}</b> </p>`;
        document.querySelector(".content p#meaning b").innerText = wordmeaning;
        document.querySelector(".play-again").innerText = "好棒！";
        pab.removeEventListener("click", getRandomWord);
        pab.addEventListener("click", () => {
            window.location.reload();
        });
    }, 10000);
    giveAch("bossFightBadge");
};

const fight = () => {
    if (!bossFightMode || isGameOver) return;
    bossShootBullets();
    setTimeout(() => bossShootBullets("all", 4, 4, 200, 50), 500);
    setTimeout(() => bossTP(rng(canvas.width), rng(canvas.height)), 1000);
    setTimeout(() => bossTP(rng(canvas.width), rng(canvas.height)), 2000);
    setTimeout(() => bossTP(rng(canvas.width), rng(canvas.height)), 3000);
    setTimeout(() => bossTP(canvas.width / 2, canvas.height / 2), 4000);
    setTimeout(() => bossLaser(), 4000);
    setTimeout(() => bossShootBullets("all", 15, 15, 10000, 1, 10), 5000);
    setTimeout(() => {
        let timelastframe = [];
        let fasdfjk = setInterval(() => {
            timelastframe.push(Date.now());
            let deltatime = 1;
            if (timelastframe.length > 1) {
                deltatime =
                    (timelastframe[timelastframe.length - 1] -
                        timelastframe[timelastframe.length - 2]) /
                    15;
            }
            timelastframe = timelastframe.slice(-2);
            bossX -= 10 * deltatime;
            if (bossX < 60) clearInterval(fasdfjk);
        });
    }, 6000);
    setTimeout(() => {
        let timelastframe = [];
        let fasdfjk = setInterval(() => {
            timelastframe.push(Date.now());
            let deltatime = 1;
            if (timelastframe.length > 1) {
                deltatime =
                    (timelastframe[timelastframe.length - 1] -
                        timelastframe[timelastframe.length - 2]) /
                    15;
            }
            bossX += 10 * deltatime;
            if (bossX > canvas.width / 2) clearInterval(fasdfjk);
        }, 10);
        let fasdfjk2 = setInterval(() => {
            timelastframe.push(Date.now());
            let deltatime = 1;
            if (timelastframe.length > 1) {
                deltatime =
                    (timelastframe[timelastframe.length - 1] -
                        timelastframe[timelastframe.length - 2]) /
                    15;
            }
            bossY -= 10 * deltatime;
            if (bossY < canvas.height / 2) clearInterval(fasdfjk2);
        }, 10);
    }, 8000);
    setTimeout(() => {
        bossShootBullets("all", 15, 15, 10000, 1, 10);
        let olololo = 0;
        let fasdfjk = setInterval(() => {
            bossTP(rng(canvas.width), rng(canvas.height));
            olololo++;
            if (olololo > 10) clearInterval(fasdfjk);
        }, 1000);
    }, 10000);
    setTimeout(bossGetRandomWord, 21000);
};

let asdfjkasdf = setInterval(() => {
    if (finalBossMode) return clearInterval(asdfjkasdf)
    if (bh <= 0) {
        endFight();
        clearInterval(asdfjkasdf);
    }
}, 200);

let phase = 1

const clear = () => {
    children = [];
    bdb = [];
    bhba = [];
    bdib = [];
    btb = [];
    betterBullets = [];
    sfx("SHOCKWAVE");
};

const end = () => {
    ph = 10
    phbb.innerText = ph + "/" + phm;
    bossShootBullets('all', 15, 15, 1)
    hj = false
    sfx('SHOCKWAVE')
    music.src = "../sfx/Wallpaper.mp3";
    setTimeout(() => {
        pd(3, '歐', {
            textStyle: 'bigtext'
        })
        pd(3, '買', {
            textStyle: 'bigtext'
        })
        pd(3, '尬', {
            textStyle: 'bigtext'
        })
        pd(3, '酷到爆')
        pd(1, '他不見了欸')
        pd(1, '太好了!', {
            textStyle: 'bigtext',
            sound: 'sfx/yay.mp3'
        })
        pd(0, '你有沒有發現一件事情')
        pd(1, '??')
        pd(0, '這都是廢墟')
        pd(1, '你不是有時光機')
        pd(0, '欸對欸')
        pd(1, '可以用用看')
        pd(0, '用在地球上有點危險')
        pd(1, '不然要幹嘛')
        pd(1, '在這餓死嗎')
        pd(0, '那我們試試看吧')
        pd(0, '...', {
            sound: 'timemachine2',
            onclick: removeBP
        })
        pd(3, '啊!', {
            sound: 'timemachine1',
            textStyle: 'bigtext'
        })
        pd(1, '較什麼東西')
        pd(3, '差點跌倒')
        pd(1, '...')
        pd(0, '這哪裡')
        pd(1, '你看辜狗地圖')
        pd(0, '我看看...')
        pd(0, '呃')
        pd(0, '巴拉圭', {
            textStyle: 'bigtext'
        })
        pd(1, '...')
        pd(3, '巴拉圭在哪')
        pd(0, '剛好在地球另一端')
        pd(1, '有飛機欸，我們是不是在機場附近')
        pd(0, '旁邊是機場')
        pd(1, '快追飛機啊!', {
            textStyle: 'bigtext'
        })
        pd(3, '我用滾的')
        pd(0, '...', {
            textStyle: 'smalltext',
            sound: 'running',
            onclick: () => {
                $.jStorage.set('fbb', true)
                window.location.reload()
            }
        })
        dq()
    }, 2000)
}

const thisIsTheEnd = () => {
    clear()
    bh = 0.1
    bhbb.innerText = bh + "/" + bhm;
    clearInterval(bossProgram)
    bossFightStarting = false;
    bossFightMode = false;
    d = NaN
    bossX = 10
    bossY = 10
    x = bossW / 2 + 5
    y = bossH + 80
    pd(1, '玩家!', {
        textStyle: 'bigtext'
    })
    pd(1, '打爆他吧!', {
        textStyle: 'bigtext',
        onclick: () => {
            d = 0
            setTimeout(() => d = NaN, 100)
        }
    })
    dq()
    let i = setInterval(() => {
        if(bh <= 0) {
            bh = 0
            clearInterval(i)
            end()
            return
        }
    })
}

const phase5 = () => {
    if(phase > 5) return;
    clear()
    bhy = true
    bossColor = 'cyan'
    let checkend = setInterval(() => {
        if(bh <= 0) {
            clearInterval(hy)
            clearInterval(hy2)
            clearInterval(checkend)
            return thisIsTheEnd()
        }
    })
    bossTP(100, 100)
    
    let hy = setInterval(() => {
        bh += 5
        bhbb.innerText = bh + "/" + bhm;
    }, 1000)
    let hy2 = setInterval(() => {
        makeChildren(
            rng(canvas.width),
            rng(canvas.height),
            5,
            rng(2, -2),
            rng(2, -2),
            true,
        );
    }, 3000)
}

const phase4 = () => {
    if (phase > 4) return;
    if (ph < 10) ph = 10;
    phbb.innerText = ph + "/" + phm;
    clear();
    bossTP(canvas.width / 2 + bossW / 2, canvas.height / 2 + bossH / 2);
    let amount = 0
    let atp41 = setInterval(() => {
        makeManyChildren(
            5,
            500,
            {
                cx: rng(canvas.width),
                cy: rng(canvas.height),
                health: 5,
                vx: rng(1, -1),
                vy: rng(1, -1),
                bounce: true
            }
        )
    },10000)
    let atp42 = setInterval(() => {
        bossShootBullets("all", 15, 15, 30, 50)
        bossTP(rng(canvas.width), rng(canvas.height))
        amount++
        if(amount %5 === 0) return;
        setTimeout(() => {
            bossMoveY(canvas.height - bossH, 7.5)
        })
    }, 1500)
    let checkBH = setInterval(() => {
        if(bh <= 500) {
            if(phase >= 5 || amount %5 === 0) return
            clearInterval(atp41)
            clearInterval(atp42)
            clearInterval(checkBH)
            phase++
            phase5()
        }
    })
}

const phase3 = () => {
    if (phase > 3) return
    clear();
    bossTP(canvas.width / 2 + bossW / 2, canvas.height / 2 + bossH / 2);
    bossShootBullets("all", 15, 15, 100, 50)
    let atp31 = setInterval(() => {
        bossShootBullets("all", 15, 15, 120, 50)
        makeChildren(
            rng(canvas.width),
            rng(canvas.height),
            10,
            rng(2, -2),
            rng(2, -2),
            true,
        );
    }, 6000)
    let atp32 = setInterval(() => {
        bossTP(rng(canvas.width) - bossW/2, rng(canvas.height) - bossH/2)
        makeChildren(
            rng(canvas.width),
            rng(canvas.height),
            1,
            rng(20, -20),
            rng(20, -20),
            true,
        );
    }, 15000)
    let cbh = setInterval(() => {
        if (bh <= 2000) {
            if(phase >= 4) return;
            clearInterval(cbh);
            clearInterval(atp31);
            clearInterval(atp32);
            phase4()
            phase++;
        }
    })
};

const phase2 = () => {
    clear();
    let timelastframe = [];
    bossTP(canvas.width / 2 + bossW, canvas.height / 2 + bossH);
    amount = 0;
    let checkBH = setInterval(() => {
        if (bh <= 3000) {
            if(phase === 3 || amount % 5 === 0) return;
            phase = 3
            clearInterval(keepmovin);
            clearInterval(loop);
            clearInterval(checkBH)
            phase3();
            return;
        }
    }, 5000)
    let keepmovin = setInterval(() => {
        if (amount % 5 === 0) return;
        timelastframe.push(Date.now());
        let deltatime = 1;
        if (timelastframe.length > 1) {
            deltatime =
                (timelastframe[timelastframe.length - 1] -
                    timelastframe[timelastframe.length - 2]) /
                15;
        }
        bossX -= 4 * deltatime;
        bossY -= 4 * deltatime;
    });
    let loop = setInterval(() => {
        amount++;
        bossTP(rng(canvas.width), rng(canvas.height));
        setTimeout(() => bossShootBullets("all", 15, 15, 100, 50), 500);
        if (amount % 2 === 0)
            makeChildren(
                rng(canvas.width),
                rng(canvas.height),
                3,
                rng(7, -7),
                rng(7, -7),
                true,
            );
    }, 1000);
};

const finalBossFight = () => {
    let amt = 6;
    let lidk = setInterval(() => {
        makeChildren(
            rng(canvas.width),
            rng(canvas.height),
            3,
            rng(10, -10),
            rng(10, -10),
            true,
        );
        amt--;
        if (amt <= 0) clearInterval(lidk);
    }, 1000);

    let amounts = 5;
    let righty = setInterval(() => {
        if (children.length > 0 && bh > 4000) return;
        amounts--;
        if (amounts <= 0) {
            bossMoveX(window.innerWidth + 300, 5);
            let checkD = setInterval(() => {
                if (bossX >= window.innerWidth + 300) {
                    sfx("YW5uaWhpbGF0ZQ==");
                    bossScript();
                    setTimeout(() => {
                        bossTP(
                            rng(canvas.width) - bossW,
                            rng(canvas.height) - bossH,
                        );
                        let amt = 5;
                        let lidk = setInterval(() => {
                            makeChildren(
                                bossX + bossW / 2,
                                bossY + bossH / 2,
                                5,
                                rng(2, -2),
                                rng(2, -2),
                                true,
                            );
                            amt--;
                            if (amt <= 0) clearInterval(lidk);
                        }, 1000);
                        let times = 10;
                        let lkk = setInterval(() => {
                            times--;
                            bossTP(rng(canvas.width), rng(canvas.height));
                            if (times <= 0) clearInterval(lkk);
                        }, 1000);
                        let atp1 = setInterval(() => {
                            console.log("attack pattern 1");
                            let checkBossHealth = setInterval(() => {
                                if (bh < 3500) {
                                    if(phase === 2) return;
                                    phase = 2
                                    console.log("attack pattern 2");
                                    if (ph < 10) ph = 10;
                                    phbb.innerText = ph + "/" + phm;
                                    phase2();
                                    clearInterval(checkBossHealth);
                                    clearInterval(lidk);
                                    clearInterval(lkk);
                                    clearInterval(atp1);
                                    return;
                                }
                            });
                            let amt = 5;
                            let lidk = setInterval(() => {
                                makeChildren(
                                    bossX + bossW / 2,
                                    bossY + bossH / 2,
                                    5,
                                    rng(2, -2),
                                    rng(2, -2),
                                    true,
                                );
                                amt--;
                                if (amt <= 0) clearInterval(lidk);
                            }, 1000);
                            let times = 10;
                            let lkk = setInterval(() => {
                                times--;
                                bossTP(rng(canvas.width), rng(canvas.height));
                                if (times <= 0) clearInterval(lkk);
                            }, 1000);
                        }, 15000);
                    }, 7000);
                    return clearInterval(checkD);
                }
            }, 1000);
            return clearInterval(righty);
        }
        bossShootBullets("all", 10, 10, 1000, 60);
        bossMoveX(window.innerWidth - bossW, 5);
        setTimeout(
            () =>
                bossTP(
                    rng(0, window.innerWidth - bossW),
                    rng(0, window.innerHeight - bossH),
                ),
            1000,
        );
    }, 1000);
};

let backslash = String.fromCharCode(92);
console.log(`
                              ill update later




                            /${backslash}
                           /  ${backslash}
__________________________/____${backslash}_____________________________`);
