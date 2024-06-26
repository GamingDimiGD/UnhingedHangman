let oiiooi = 1
let player
let lbossFightMode = false
let isGameOver = false
let bossColor = '#fff'

let canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

let x = 0
let y = 0
let vxr = 0
let vxl = 0
let vyu = 0
let vyd = 0

let bullets = []
let text = String.fromCharCode(rng(122, 97))
let by = y + 15
setInterval(() => {
    by = y + 15
})

let dd = 20
let d = dd
let hj = false

let bossX = canvas.width / 2
let bossY = 20
let bossW = 200
let bossH = 300

const bossShootBullets = (type, width, height, amount, rate, speed) => {
    if (!type) type = 'default'
    if (!width) width = 5
    if (!height) height = 15
    if (!amount) amount = 10
    if (!rate) rate = 100
    if (!speed) speed = 5
    if (type === 'default') {
        let i = setInterval(() => {
            amount--
            bdb.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed
            })
            if (amount <= 0) clearInterval(i)
        }, rate)
    } else if (type === 'horizontal') {
        let i = setInterval(() => {
            amount--
            bhba.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed,
                id: bhb.length
            })
            if (amount <= 0) clearInterval(i)
        }, rate)
    } else if (type === 'diagonal') {
        let i = setInterval(() => {
            amount--
            bdib.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed,
                id: bdib.length
            })
            if (amount <= 0) clearInterval(i)
        }, rate)
    } else if (type === 'top') {
        let i = setInterval(() => {
            amount--
            btb.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed
            })
            if (amount <= 0) clearInterval(i)
        }, rate)
    } else if (type === 'all') {
        let i = setInterval(() => {
            amount--
            bdb.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed
            })
            btb.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed
            })
            bdib.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed,
                id: bdib.length
            })
            bhba.push({
                x: bossX + bossW / 2,
                y: bossY + bossH / 2,
                width,
                height,
                speed: speed,
                id: bhb.length
            })
            if (amount <= 0) clearInterval(i)
        }, rate)
    }
}

const bossLaser = (type, color, thickness) => {
    if (!type) type = 'default'
    if (!color) color = '#fff'
    if (!thickness) thickness = window.height / 3
    if (type === 'default') {
        let y = rng(window.height) - thickness
        if (y < 0) y = 0
        dlaser.push({
            x: 0,
            y,
            thickness,
            color,
        })
    }
}

let dli = 0
let invisibleframes = 180
let ifi = 0

const update = () => {
    if (ph < 0) ph = 0
    if(bdb > 1000) bdb.shift()
    if(bhba > 1000) bhb.shift()
    if(bdib > 1000) bdib.shift()
    if(btb > 1000) bdb.shift()
    if (!minigamemode) {
        modalText = glitch(10)
        wordmeaning = glitch(10)
        let asdf = glitch(2) + '重來' + glitch(2)
        document.querySelector('.content h4').innerText = gameOverStatus
        document.querySelector('.content p#ans').innerHTML = `<p id="ans">${modalText}<b>${currentWord}</b> </p>`
        document.querySelector('.content p#meaning b').innerText = wordmeaning
        document.querySelector('.play-again').innerText = asdf

        if (ph <= 0 && !isGameOver) {
            gameOver(false)
            isGameOver = true
            gameOverStatus = '加油! 我相信你!'
            document.querySelector('.play-again').innerText = asdf
            pab.removeEventListener('click', getRandomWord)
            pab.addEventListener('click', () => {
                window.location.reload()
            });
        }
    }
    if(isGameOver) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    if(window.innerWidth < 726) {
        document.head.querySelectorAll('meta')[2].content = 'width=device-width, initial-scale=0.75'
        document.querySelector('.hangman-box').style.display = 'none'
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    x += vxr
    x += vxl
    y += vyu
    y += vyd
    if (x > canvas.width - 70) x = canvas.width - 70
    if (x < 0) x = 0
    if (y > canvas.height - 70) y = canvas.height - 70
    if (y < 0) y = 0
    if (deg < 0) deg = (deg + 360) % 360
    ctx.fillStyle = '#0f0'
    if(funMode) ctx.fillStyle = `rgb(${rng(rmv)}, ${rng(rmv)}, ${rng(rmv)}`
    if (ifi > 0) {
        ifi--
        if (ifi % 2 === 0) ctx.fillStyle = '#f00'
        else ctx.fillStyle = '#0f0'
    }
    if (lbossFightMode && x + 70 > bossX && x <= bossX + bossW && y + 70 > bossY && y <= bossY + bossH) {
        console.log('colliding')
        if (ifi === 0) {
            ifi = invisibleframes
            ph--
            phbb.innerText = ph + '/' + phm
            sfx('../sfx/boom.mp3')
        }
    }
    ctx.fillRect(x, y, 70, 70)
    ctx.fillStyle = '#003c00'
    ctx.fillRect(x + 10, y + 10, 50, 50)
    ctx.fillStyle = '#fff'
    ctx.font = 'bold 20px Noto Sans TC'
    ctx.fillText(text.toUpperCase(), x + 28, y + 42)
    if (im) {
        ctx.beginPath()
        ctx.moveTo(x + 35, y + 35)
        ctx.lineTo(x + 35, 0)
        ctx.stroke();
        ctx.closePath();
    }
    d--
    if (d === 0) {
        ctx.fillRect(x + 35, by, 5, 15)
        d = dd
        bullets.push({
            x: x,
            y: by,
        })
    }
    bullets.forEach(b => {
        if (lbossFightMode && bossX + bossW - 35 > b.x && bossX - 35 <= b.x + 5 && bossY + bossH > b.y && bossY <= b.y + 15) {
            bossColor = '#f00'
            bh--
            bhbb.innerText = bh + '/' + bhm
            bullets.shift()
            sfx('../sfx/fart.mp3')
        } else bossColor = '#fff'
        b.y -= 5
        ctx.fillStyle = '#fff'
        ctx.fillRect(b.x + 35, b.y, 5, 15)
    })
    bdb.forEach(b => {
        b.y += b.speed
        ctx.fillStyle = '#fff'
        ctx.fillRect(b.x, b.y, b.width, b.height)
        if (lbossFightMode && x + 70 > b.x && x <= b.x + b.width && y + 70 > b.y && y <= b.y + b.height) {
            console.log('colliding')
            if (ifi === 0) {
                ifi = invisibleframes
                ph--
                phbb.innerText = ph + '/' + phm
                sfx('../sfx/boom.mp3')
            }
        }
    })
    bdib.forEach(b => {
        if (b.id / 4 === Math.floor(b.id / 4)) {
            b.x += b.speed
            b.y += b.speed
        } else if (b.id / 2 === Math.floor(b.id / 2)) {
            b.x -= b.speed
            b.y += b.speed
        } else if (b.id / 4 - Math.floor(b.id / 4) === 0.25) {
            b.x += b.speed
            b.y -= b.speed
        } else {
            b.x -= b.speed
            b.y -= b.speed
        }
        if(funMode && rmv !== 0) ctx.fillStyle = `rgb(${rng(rmv)}, ${rng(rmv)}, ${rng(rmv)}`
        ctx.fillRect(b.x, b.y, b.width, b.height)
        if (lbossFightMode && x + 70 > b.x && x <= b.x + b.width && y + 70 > b.y && y <= b.y + b.height) {
            console.log('colliding')
            if (ifi === 0) {
                ifi = invisibleframes
                ph--
                phbb.innerText = ph + '/' + phm
                sfx('../sfx/boom.mp3')
            }
        }
    })
    btb.forEach(b => {
        b.y -= b.speed
        ctx.fillRect(b.x, b.y, b.width, b.height)
        if (lbossFightMode && x + 70 > b.x && x <= b.x + b.width && y + 70 > b.y && y <= b.y + b.height) {
            console.log('colliding')
            if (ifi === 0) {
                ifi = invisibleframes
                ph--
                phbb.innerText = ph + '/' + phm
                sfx('../sfx/boom.mp3')
            }
        }
    })
    let ghghgh = 0
    bhba.forEach(b => {
        if (ghghgh / 2 === Math.floor(ghghgh / 2)) b.x += b.speed
        else b.x -= b.speed
        ghghgh++
        ctx.fillRect(b.x, b.y, b.width, b.height)
        if (lbossFightMode && x + 70 > b.x && x <= b.x + b.width && y + 70 > b.y && y <= b.y + b.height) {
            console.log('colliding')
            if (ifi === 0) {
                ifi = invisibleframes
                ph--
                phbb.innerText = ph + '/' + phm
                sfx('../sfx/boom.mp3')
            }
        }
    })

    // dlaser.forEach(l => {
    //     dli++
    //     if (dli < 25) {
    //         if (dli === 1 || dli === 2 || dli === 5 || dli === 6 || dli === 9 || dli === 10 || dli === 13 || dli === 14 || dli === 17 || dli === 18 || dli === 21 || dli === 22) ctx.strokeStyle = "#f00"
    //         if (dli === 3 || dli === 4 || dli === 7 || dli === 8 || dli === 11 || dli === 12 || dli === 15 || dli === 16 || dli === 19 || dli === 20 || dli === 23 || dli === 24) ctx.strokeStyle = "#fff"
    //         ctx.lineWidth = '5'
    //         ctx.beginPath()
    //         ctx.moveTo(l.x, l.y + l.width / 2)
    //         ctx.lineTo(canvas.width, l.y + l.width / 2)
    //     } else {
    //         ctx.fillStyle = l.color
    //         ctx.fillRect(l.x, l.y, canvas.width, l.thickness)
    //         if (dli > 180) {
    //             dlaser.shift()
    //             dli = 0
    //         }
    //     }
    // })
    if (bullets.length > 100) bullets.shift(bullets[0])
    if (hj) {
        ctx.fillStyle = bossColor
        ctx.fillRect(bossX, bossY, bossW, bossH)
    }
    requestAnimationFrame(update)
}

let byap

const bossReady = () => {
    let gugugu = setInterval(() => {
        document.querySelector('.boss-dialogue img').style.transform = 'rotate(' + oiiooi + 'deg)'
        oiiooi = oiiooi * 1.1
    })
    setTimeout(() => {
        document.querySelector('.boss-dialogue img').style.opacity = '0'
        bossLi.style.display = 'block'
        bossLi.innerText = '他不見了?!'
    }, 1500)
    setTimeout(() => {
        update()
        if (isMobile()) {
            // let div = document.createElement('div')
            // div.className = 'controls'
            // div.style.position = "absolute"
            // div.style.bottom = "7px"
            // div.style.left = "7px"
            // div.style.width = "120px"
            // div.style.height = div.style.width
            // div.style.display = 'flex'
            // div.style.flexWrap = 'wrap'
            // let cb = document.createElement('button')
            // document.querySelector('body').appendChild(div)
            // let jaj = '⬉↑⬈←◇→⬋↓⬊'
            // let imvd = []
            // jaj.split("").forEach(e => {
            //     imvd.push('<button class="control-button" style="padding: 12px;">' + e + '</button>')
            // })
            // div.innerHTML = imvd.join('')
            // div.querySelectorAll('.control-button').forEach(e => {
            //     e.addEventListener('click', () => {
            //         if (e.innerText === '⬉') {
            //             vxl = -5
            //             vyu = -5
            //         } else if (e.innerText === '↑') {
            //             vyu = -5
            //         } else if (e.innerText === '⬈') {
            //             vxr = 5
            //             vyu = -5
            //         } else if (e.innerText === '←') {
            //             vxl = -5
            //         } else if (e.innerText === '◇') {

            //         } else if (e.innerText === '→') {
            //             vxr = 5
            //         } else if (e.innerText === '⬋') {
            //             vxl = -5
            //             vyd = 5
            //         } else if (e.innerText === '↓') {
            //             vyd = 5
            //         } else if (e.innerText === '⬊') {
            //             vxr = 5
            //             vyd = 5
            //         }
            //     })
            //     e.addEventListener("touchend", () => {
            //         if (e.innerText === '⬉') {
            //             vxl = 0
            //             vyu = 0
            //         } else if (e.innerText === '↑') {
            //             vyu = 0
            //         } else if (e.innerText === '⬈') {
            //             vxr = 0
            //             vyu = 0
            //         } else if (e.innerText === '←') {
            //             vxl = 0
            //         } else if (e.innerText === '◇') {

            //         } else if (e.innerText === '→') {
            //             vxr = 0
            //         } else if (e.innerText === '⬋') {
            //             vxl = 0
            //             vyd = 0
            //         } else if (e.innerText === '↓') {
            //             vyd = 0
            //         } else if (e.innerText === '⬊') {
            //             vxr = 0
            //             vyd = 0
            //         }
            //     })
            // })
        }
        bossLi.innerText = '...'
        document.querySelector('body').appendChild(canvas)
    }, 10000)
    setTimeout(() => {
        clearInterval(gugugu)
        document.querySelector('.boss-dialogue img').style.transform = 'rotate(0deg)'
        bossLi.innerText = 'WASD或方向鍵來移動'
        if (isMobile()) bossLi.innerText = '使用手指移動「你」（那個綠色正方形）'
        hj = true
    }, 15000)
    setTimeout(() => {
        bossLi.innerText = '你：啊你怎麼變長方形了'
    }, 20000)
    setTimeout(() => {
        bossX = canvas.width / 2
        bossLi.innerText = '他：因為我爆炸了'
        byap = setInterval(() => {
            bossX += rng(6) - 3
            bossY += rng(6) - 3
        }, 200)
    }, 25000)
    setTimeout(() => {
        clearInterval(byap)
        bossFightMode = true
        lbossFightMode = true
        $.jStorage.set('bossFightMode', true)
        showHealthBars()
        music.src = '../sfx/nighthawk-Isolation.mp3'
        if(funMode) music.src = '../sfx/speedofpaul.mp3'
        music.play()
        fight()
    }, 30000)
}