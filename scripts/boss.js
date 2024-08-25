let oiiooi = 1;
let player;
let lbossFightMode = false;
let finalBossMode = false;
let isGameOver = false;
let bossColor = "#fff";

let idkAnymore = false;

let canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
let bossFightStarting = false;

let x = 0;
let y = 0;
let vxr = 0;
let vxl = 0;
let vyu = 0;
let vyd = 0;

let bullets = [];
let betterBullets = [];
const bbSpeed = 7.5
let text = String.fromCharCode(rng(122, 97));
let bx = x + 15;
let by = y + 15;
setInterval(() => {
    by = y + 15;
    bx = x + 15;
});

let dd = 20;
let d = dd;
let hj = false;

let bossX = canvas.width / 2;
let bossY = 20;
let bossW = 200;
let bossH = 300;

const bossShootBullets = (type, width, height, amount, rate, speed, isChildren, sx, sy, w, h) => {
    if (!type) type = "default";
    if (!width) width = 5;
    if (!height) height = 15;
    if (!amount) amount = 10;
    if (!rate) rate = 100;
    if (!speed) speed = 5;
    if (!isChildren) setInterval(() => {
        sx = bossX
        sy = bossY
        w = bossW
        h = bossH
    })
    if (type === "default") {
        let i = setInterval(() => {
            amount--;
            bdb.push({
                x: sx + w / 2,
                y: sy + h,
                width,
                height,
                speed: speed,
            });
            if (amount <= 0) clearInterval(i);
        }, rate);
    } else if (type === "horizontal") {
        let i = setInterval(() => {
            amount--;
            bhba.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
                id: bhb.length,
            });
            if (amount <= 0) clearInterval(i);
        }, rate);
    } else if (type === "diagonal") {
        let i = setInterval(() => {
            amount--;
            bdib.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
                id: bdib.length,
            });
            if (amount <= 0) clearInterval(i);
        }, rate);
    } else if (type === "top") {
        let i = setInterval(() => {
            amount--;
            btb.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
            });
            if (amount <= 0) clearInterval(i);
        }, rate);
    } else if (type === "all") {
        let i = setInterval(() => {
            amount--;
            bdb.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
            });
            btb.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
            });
            bdib.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
                id: bdib.length,
            });
            bhba.push({
                x: sx + w / 2,
                y: sy + h / 2,
                width,
                height,
                speed: speed,
                id: bhb.length,
            });
            if (amount <= 0) clearInterval(i);
        }, rate);
    }
};

let children = [];

const makeChildren = (cx, cy, health, vx, vy, bounce) => {
    if (!cx) cx = 0;
    if (!cy) cy = 0;
    if (!health) health = 1;
    if (!vx && vx !== 0) vx = 5;
    if (!vy && vy !== 0) vy = 5;
    if (!bounce) bounce = true;
    let child = {
        x: cx,
        y: cy,
        health,
        vx,
        vy,
        bounce,
        color: '#fff'
    };
    children.push(child);
    return child;
};

const makeManyChildren = (amount, gap, type) => {
    if(!amount) return
    if(!type) type = {}
    let int = setInterval(() => {
        if(amount <= 0) return clearInterval(int)
        makeChildren(type.cx, type.cy, type.health, type.vx, type.vy, type.bounce)
        amount--
    }, gap)
}

const bossLaser = (type, color, thickness) => {
    if (!type) type = "default";
    if (!color) color = "#fff";
    if (!thickness) thickness = window.height / 3;
    if (type === "default") {
        let y = rng(window.height) - thickness;
        if (y < 0) y = 0;
        dlaser.push({
            x: 0,
            y,
            thickness,
            color,
        });
    }
};

let dli = 0;
let invisibleframes = 180;
let ifi = 0;
let timelastframe = [];
let childcd = 120
let fps = 0
const update = () => {
    if (ph < 0) ph = 0;
    if (bdb > 100) bdb.shift();
    if (bhba > 100) bhb.shift();
    if (bdib > 100) bdib.shift();
    if (btb > 100) bdb.shift();
    if (!minigamemode) {
        modalText = glitch(10);
        wordmeaning = glitch(10);
        let asdf = glitch(2) + "重來" + glitch(2);
        document.querySelector(".content h4").innerText = gameOverStatus;
        document.querySelector(".content p#ans").innerHTML =
            `<p id="ans">${modalText}<b>${currentWord}</b> </p>`;
        document.querySelector(".content p#meaning b").innerText = wordmeaning;
        document.querySelector(".play-again").innerText = asdf;

        if (ph <= 0 && !isGameOver) {
            gameOver(false);
            isGameOver = true;
            gameOverStatus = "加油! 我相信你!";
            document.querySelector(".play-again").innerText = asdf;
            pab.removeEventListener("click", getRandomWord);
            pab.addEventListener("click", () => {
                window.location.reload();
            });
        }
    }
    if (isGameOver) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (window.innerWidth < 726) {
        document.head.querySelectorAll("meta")[2].content =
            "width=device-width, initial-scale=0.75";
        document.querySelector(".hangman-box").style.display = "none";
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timelastframe.push(Date.now());
    let deltatime = 1;
    if (timelastframe.length > 1) {
        deltatime =
            (timelastframe[timelastframe.length - 1] -
                timelastframe[timelastframe.length - 2]) /
            15;
    }
    timelastframe = timelastframe.slice(-2);
    x += vxr * deltatime;
    x += vxl * deltatime;
    y += vyu * deltatime;
    y += vyd * deltatime;
    if (x > canvas.width - 70) x = canvas.width - 70;
    if (x < 0) x = 0;
    if (y > canvas.height - 70) y = canvas.height - 70;
    if (y < 0) y = 0;
    if (deg < 0) deg = (deg + 360) % 360;
    ctx.fillStyle = "#0f0";
    if (funMode) ctx.fillStyle = `rgb(${rng(rmv)}, ${rng(rmv)}, ${rng(rmv)}`;
    if (ifi > 0) {
        ifi -= deltatime;
        if (Math.round(ifi) % 2 === 0) ctx.fillStyle = "#f00";
        else ctx.fillStyle = "#0f0";
    }
    if (
        lbossFightMode &&
        x + 70 > bossX &&
        x <= bossX + bossW &&
        y + 70 > bossY &&
        y <= bossY + bossH
    ) {
        if (ifi <= 0) {
            ifi = invisibleframes;
            ph--;
            phbb.innerText = ph + "/" + phm;
            sfx("boom");
        }
    }
    ctx.fillRect(x, y, 70, 70);
    ctx.fillStyle = "#003c00";
    ctx.fillRect(x + 10, y + 10, 50, 50);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px Noto Sans TC";
    ctx.fillText(text.toUpperCase(), x + 28, y + 42);
    if (im) {
        ctx.beginPath();
        ctx.moveTo(x + 35, y + 35);
        ctx.lineTo(x + 35, 0);
        ctx.stroke();
        ctx.closePath();
    }
    d -= deltatime;
    if (d <= 0) {
        if(finalBossMode) {
            ctx.fillRect(x + 55 / 2, by, 15, 15)
            ctx.fillRect(x + 55 / 2, y, 15, 15)
            ctx.fillRect(bx, y + 55 / 2, 15, 15)
            ctx.fillRect(x, y + 55 / 2, 15, 15)
            d = dd
            betterBullets.push({
                x: x + 55 / 2,
                y: by,
                d: 'up'
            }, {
                x: x + 55 / 2,
                y: y,
                d: 'down'
            }, {
                x: bx,
                y: y + 55 / 2,
                d: 'right'
            }, {
                x: x,
                y: y + 55 / 2,
                d: 'left'
            })
        } else {
            ctx.fillRect(x + 35, by, 5, 15);
            d = dd;
            bullets.push({
                x: x,
                y: by,
            });
        }
    }
    bullets.forEach((b) => {
        if (
            lbossFightMode &&
            bossX + bossW - 35 > b.x &&
            bossX - 35 <= b.x + 5 &&
            bossY + bossH > b.y &&
            bossY <= b.y + 15
        ) {
            bossColor = "#f00";
            bh--;
            bhbb.innerText = bh + "/" + bhm;
            bullets = bullets.filter(e => e !== b)
            sfx("fart");
        } else bossColor = "#fff";
        bullets = bullets.filter(e => {
            e.x < window.innerWidth ||
            e.y < window.innerHeight ||
            e.x > 0 || e.y > 0;
        })
        b.y -= 5 * deltatime;
        ctx.fillStyle = "#fff";
        ctx.fillRect(b.x + 35, b.y, 5, 15);
    });
    betterBullets.forEach((b) => {
        if(b.d === 'up') {
            b.y -= bbSpeed * deltatime;
            ctx.fillStyle = "#fff";
            ctx.fillRect(b.x, b.y, 15, 15);
        }
        if(b.d === 'down') {
            b.y += bbSpeed * deltatime;
            ctx.fillStyle = "#fff";
            ctx.fillRect(b.x, b.y, 15, 15);
        }
        if(b.d === 'right') {
            b.x += bbSpeed * deltatime;
            ctx.fillStyle = "#fff";
            ctx.fillRect(b.x, b.y, 15, 15);
        }
        if(b.d === 'left') {
            b.x -= bbSpeed * deltatime;
            ctx.fillStyle = "#fff";
            ctx.fillRect(b.x, b.y, 15, 15);
        }
        if (
            lbossFightMode &&
            bossX + bossW > b.x &&
            bossX <= b.x + 15 &&
            bossY + bossH > b.y &&
            bossY <= b.y + 15
        ) {
            bossColor = "#f00";
            bh -= 5;
            bhbb.innerText = bh + "/" + bhm;
            betterBullets = betterBullets.filter(e => e !== b)
            sfx("fart");
        } else bossColor = bhy?"cyan":"#fff";
        bullets = bullets.filter(e => {
            e.x < window.innerWidth ||
            e.y < window.innerHeight ||
            e.x > 0 || e.y > 0;
        })
    })
    bdb.forEach((b) => {
        b.y += b.speed * deltatime;
        ctx.fillStyle = "#fff";
        ctx.fillRect(b.x, b.y, b.width, b.height);
        if (
            lbossFightMode &&
            x + 70 > b.x &&
            x <= b.x + b.width &&
            y + 70 > b.y &&
            y <= b.y + b.height
        ) {
            if (ifi <= 0) {
                ifi = invisibleframes;
                ph--;
                phbb.innerText = ph + "/" + phm;
                sfx("boom");
            }
        }
    });
    bdib.forEach((b) => {
        if (b.id / 4 === Math.floor(b.id / 4)) {
            b.x += b.speed * deltatime;
            b.y += b.speed * deltatime;
        } else if (b.id / 2 === Math.floor(b.id / 2)) {
            b.x -= b.speed * deltatime;
            b.y += b.speed * deltatime;
        } else if (b.id / 4 - Math.floor(b.id / 4) === 0.25) {
            b.x += b.speed * deltatime;
            b.y -= b.speed * deltatime;
        } else {
            b.x -= b.speed * deltatime;
            b.y -= b.speed * deltatime;
        }
        if (funMode && rmv !== 0)
            ctx.fillStyle = `rgb(${rng(rmv)}, ${rng(rmv)}, ${rng(rmv)}`;
            ctx.fillRect(b.x, b.y, b.width, b.height);
        if (
            lbossFightMode &&
            x + 70 > b.x &&
            x <= b.x + b.width &&
            y + 70 > b.y &&
            y <= b.y + b.height
        ) {

            if (ifi <= 0) {
                ifi = invisibleframes;
                ph--;
                phbb.innerText = ph + "/" + phm;
                sfx("boom");
            }
        }
    });
    btb.forEach((b) => {
        b.y -= b.speed * deltatime;
        ctx.fillRect(b.x, b.y, b.width, b.height);
        if (
            lbossFightMode &&
            x + 70 > b.x &&
            x <= b.x + b.width &&
            y + 70 > b.y &&
            y <= b.y + b.height
        ) {
            if (ifi <= 0) {
                ifi = invisibleframes;
                ph--;
                phbb.innerText = ph + "/" + phm;
                sfx("boom");
            }
        }
    });
    let ghghgh = 0;
    bhba.forEach((b) => {
        if (ghghgh / 2 === Math.floor(ghghgh / 2)) b.x += b.speed * deltatime;
        else b.x -= b.speed * deltatime;
        ghghgh++;
        ctx.fillRect(b.x, b.y, b.width, b.height);
        if (
            lbossFightMode &&
            x + 70 > b.x &&
            x <= b.x + b.width &&
            y + 70 > b.y &&
            y <= b.y + b.height
        ) {

            if (ifi <= 0) {
                ifi = invisibleframes;
                ph--;
                phbb.innerText = ph + "/" + phm;
                sfx("boom");
            }
        }
    });
    children.forEach(child => {
        child.x += child.vx * deltatime;
        child.y += child.vy * deltatime;
        if(bounce) {
            if(child.x + 50 > window.innerWidth) {
                child.x = window.innerWidth - 50
                child.vx = -child.vx
            }
            if(child.x < 0) {
                child.x = 0
                child.vx = -child.vx
            }
            if(child.y + 50 > window.innerHeight) {
                child.y = window.innerHeight - 50
                child.vy = -child.vy
            }
            if(child.y < 0) {
                child.y = 0
                child.vy = -child.vy
            }
        } else {
            children = children.filter(kid => kid.x < window.innerWidth || kid.x > 0 || kid.y < window.innerHeight || kid.y > 0)
        }
        ctx.fillStyle = child.color;
        ctx.fillRect(child.x, child.y, 50, 50);
        childcd -= deltatime
        if (
            lbossFightMode &&
            x + 70 > child.x &&
            x <= child.x + 50 &&
            y + 70 > child.y &&
            y <= child.y + 50
        ) {
            if (ifi <= 0) {
                ifi = invisibleframes;
                ph--;
                phbb.innerText = ph + "/" + phm;
                sfx("boom");
            }
        }
        if(child.color !== '#fff') child.color = '#fff'
        betterBullets.forEach(b => {
            if (
                lbossFightMode &&
                child.x + 50 > b.x &&
                child.x <= b.x + 15 &&
                child.y + 50 > b.y &&
                child.y <= b.y + 15
            ) {
                child.health -= 1;
                betterBullets = betterBullets.filter(e => e !== b)
                child.color = '#f00'
                sfx("fart");
            }
            if(child.health <= 0) {
                if(rng(25) === 1) {
                    ph++
                    phbb.innerText = ph + "/" + phm;
                }
                children = children.filter(c => c !== child)
            }
            bullets = bullets.filter(e => {
                e.x < window.innerWidth ||
                e.y < window.innerHeight ||
                e.x > 0 || e.y > 0;
            })
        })
        childcd--
        if(childcd <= 0) {
            childcd = 240
            bossShootBullets('all', 5, 5, 1, 1, 1, true, child.x, child.y, 50, 50)
        }
    })
    if (hj) {
        ctx.fillStyle = bossColor;
        ctx.fillRect(bossX, bossY, bossW, bossH);
        let sticksSprite = new Image();
        sticksSprite.src = "../images/sticksgbg.png";
        if(finalBossMode) ctx.drawImage(sticksSprite,bossX + 5, bossY + 5, bossW - 10, bossH - 10)
    }
    requestAnimationFrame(update);
};

setInterval(() => {
    if(ph >= 10 || ph === 0) return
    ph++
    phbb.innerText = ph + "/" + phm;
}, 10000)

let byap;

const bossReady = () => {
    if (!fbd) {
        let gugugu = setInterval(() => {
            document.querySelector(".boss-dialogue img").style.transform =
                "rotate(" + oiiooi + "deg)";
            oiiooi = oiiooi * 1.1;
        });
        setTimeout(() => {
            document.querySelector(".boss-dialogue img").style.opacity = "0";
            bossLi.style.display = "block";
            bossLi.innerText = "他不見了?!";
        }, 1500);
        setTimeout(() => {
            update();
            bossLi.innerText = "...";
            bossFightStarting = true;
            document.querySelector("body").appendChild(canvas);
        }, 10000);
        setTimeout(() => {
            clearInterval(gugugu);
            document.querySelector(".boss-dialogue img").style.transform =
                "rotate(0deg)";
            bossLi.innerText = "WASD或方向鍵來移動";
            if (isMobile())
                bossLi.innerText = "使用手指移動「你」（那個綠色正方形）";
            hj = true;
        }, 15000);
        setTimeout(() => {
            bossLi.innerText = "你：啊你怎麼變長方形了";
        }, 20000);
        setTimeout(() => {
            bossX = canvas.width / 2;
            bossLi.innerText = "他：因為我爆炸了";
            byap = setInterval(() => {
                bossX += rng(6) - 3;
                bossY += rng(6) - 3;
            }, 200);
        }, 25000);
        setTimeout(() => {
            clearInterval(byap);
            bossFightMode = true;
            lbossFightMode = true;
            $.jStorage.set("bossFightMode", true);
            showHealthBars();
            music.src = "../sfx/nighthawk-Isolation.mp3";
            if (funMode) music.src = "../sfx/speedofpaul.mp3";
            music.play();
            fight();
        }, 30000);
        return;
    }
    document.querySelector("body").appendChild(canvas);
    update();
    idkAnymore = true
    hj = true
    canvas.style.zIndex = 500;
    canvas.style.position = 'fixed'
    bossLi.innerText = '我要破壞一切'
    bossFightStarting = true;
    $.jStorage.set("bossFightMode", true);
    thingsThatFell.forEach(asd => asd.style.display = 'none')
    $('.boss-dialogue')[0].style.display = 'block'
    document.querySelector(".boss-dialogue img").style.opacity = "0";
    coolAnim()
    setTimeout(() => {
        bossLi.innerText = '你: 你怎麼把鍵盤從我平板上拔出來的'
        $('.dropdown')[0].style.display = 'none'
        $('.navbar')[0].style.display = 'none'
    }, 5000)
    setTimeout(() => {
        bossLi.innerText = '不管了就開始了'
    }, 7500)
    setTimeout(() => {
        keyboardDiv.style.animation = 'holy-this-is-very-cool-i-think 20s linear infinite normal, yummy 2.5s linear';
    }, 10000)
    setTimeout(() => {
        bossFightMode = true;
        lbossFightMode = true;
        keyboardDiv.classList.add('eaten')
        keyboardDiv.display = 'none'
        keyboardDiv.remove()
        game.display = 'none'
        bossLi.style.display = 'none'
        showHealthBars();
        music.src = "../sfx/nighthawk-Isolation-remix.mp3";
        music.play();
        finalBossFight()
    }, 12500)
};
