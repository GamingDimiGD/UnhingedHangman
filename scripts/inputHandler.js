const isMobile = () => {
    return navigator.maxTouchPoints > 0
}

const findButton = (letter) => {
    if (!letter) return 'none';
    let but
    keyboardDiv.querySelectorAll('button').forEach(button => {
        if (button.innerText.toLowerCase() === letter.toLowerCase()) {
            but = button
            return;
        }
    })
    return but
}
const anyModalsShown = () => {
    let ba
    document.querySelectorAll('.modal').forEach(m => {
        if (m.classList.contains('show')) {
            ba = true
        }
    })
    return ba
}

addEventListener('keydown', e => {
    if (!$('.dialogue').hasClass('show') && $('.game-modal').hasClass('show') && !$('.meaning.modal').hasClass('show') && e.code === 'Enter') pab.click()
    else if ($('.dialogue').hasClass('show') && e.code === 'Enter') $('.dialogue')[0].click()
    if (!anyModalsShown() && !fbd) {
        $.each($('.shortcut-buttons .shortcut-button'), (i, b) => {
            if (Number(e.key) === i + 1) $(b)[0].click()
        })
        if (e.code === 'KeyA') initGame(findButton('a'), 'a');
        if (e.code === 'KeyB') initGame(findButton('b'), 'b');
        if (e.code === 'KeyC') initGame(findButton('c'), 'c');
        if (e.code === 'KeyD') initGame(findButton('d'), 'd');
        if (e.code === 'KeyE') initGame(findButton('e'), 'e');
        if (e.code === 'KeyF') initGame(findButton('f'), 'f');
        if (e.code === 'KeyG') initGame(findButton('g'), 'g');
        if (e.code === 'KeyH') initGame(findButton('h'), 'h');
        if (e.code === 'KeyI') initGame(findButton('i'), 'i');
        if (e.code === 'KeyJ') initGame(findButton('j'), 'j');
        if (e.code === 'KeyK') initGame(findButton('k'), 'k');
        if (e.code === 'KeyL') initGame(findButton('l'), 'l');
        if (e.code === 'KeyM') initGame(findButton('m'), 'm');
        if (e.code === 'KeyN') initGame(findButton('n'), 'n');
        if (e.code === 'KeyO') initGame(findButton('o'), 'o');
        if (e.code === 'KeyP') initGame(findButton('p'), 'p');
        if (e.code === 'KeyQ') initGame(findButton('q'), 'q');
        if (e.code === 'KeyR') initGame(findButton('r'), 'r');
        if (e.code === 'KeyS') initGame(findButton('s'), 's');
        if (e.code === 'KeyT') initGame(findButton('t'), 't');
        if (e.code === 'KeyU') initGame(findButton('u'), 'u');
        if (e.code === 'KeyV') initGame(findButton('v'), 'v');
        if (e.code === 'KeyW') initGame(findButton('w'), 'w');
        if (e.code === 'KeyX') initGame(findButton('x'), 'x');
        if (e.code === 'KeyY') initGame(findButton('y'), 'y');
        if (e.code === 'KeyZ') initGame(findButton('z'), 'z');
    }
    if (isGameOver) return
    if (!bossFightStarting) return
    if (e.code === 'KeyD' || e.code === 'ArrowRight') vxr = 5
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') vxl = -5
    if (e.code === 'KeyS' || e.code === 'ArrowDown') vyd = 5
    if (e.code === 'KeyW' || e.code === 'ArrowUp') vyu = -5
})

addEventListener('keyup', e => {
    if (e.code === 'KeyD' || e.code === 'ArrowRight') vxr = 0
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') vxl = 0
    if (e.code === 'KeyS' || e.code === 'ArrowDown') vyd = 0
    if (e.code === 'KeyW' || e.code === 'ArrowUp') vyu = 0
})

let im = false
let mx, my, dx, dy, rad, deg

// class Bullet {
//     constructor(x, y, speed, damage) {
//         this.x = x
//         this.y = y
//         this.speed = speed
//         this.damage = damage

//         this.width = 5
//         this.height = 15
//         this.color = '#fff'
//     }

//     draw(ctx) {
//         ctx.fillStyle = this.color
//         this.y =- this.speed
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }

// class BulletController {
//     bullets = []
//     timerTillNextBullet = 0
//     constructor(canvas) {
//         this.canvas = canvas
//     }

//     shoot(x, y, speed, damage, delay) {
//         if(this.timerTillNextBullet <= 0) {
//             this.bullets.push(new Bullet(x, y, speed, damage))
//             this.timerTillNextBullet = delay
//         }
//         this.timerTillNextBullet--
//     }

//     draw(ctx) {
//         this.bullets.forEach(e => {
//             e.draw(ctx)
//         })
//     }
// }

// let bc

// setTimeout(() => {
//     bc = new BulletController(canvas)
// }, 10)

let mouseX, mouseY

addEventListener('mousedown', e => {
    im = true
    // mx = e.x
    // my = e.y
    // dx = x - mx
    // dy = y - my
    // rad = Math.atan2(dy, dx)
    // deg = Math.round(rad * (180 / Math.PI))
})

addEventListener('mousemove', e => {

    mx = e.x
    my = e.y
    dx = x - mx
    dy = y - my
    rad = Math.atan2(dy, dx)
    deg = Math.round(rad * 180 / Math.PI)
})

addEventListener('mouseup', e => {
    im = false
})

let ist = false

addEventListener('touchstart', e => {
    ist = true
    if (e.touches[0].clientX > x && e.touches[0].clientY > y && e.touches[0].clientX < x + 70 && e.touches[0].clientY < y + 70) {
        console.log('touch')
        x = e.touches[0].clientX - 35
        y = e.touches[0].clientY - 35
    }
})

addEventListener('touchmove', e => {
    if (e.touches[0].clientX > x && e.touches[0].clientY > y && e.touches[0].clientX < x + 70 && e.touches[0].clientY < y + 70) {
        console.log('touch')
        x = e.touches[0].clientX - 35
        y = e.touches[0].clientY - 35
    }
})

addEventListener('mousemove', e => {
    $('.hover-text')[0].style.transform = `translate(${e.clientX + 30}px,${e.clientY + 30}px)`
    if (e.clientX + 30 + $('.hover-text')[0].offsetWidth > window.innerWidth) {
        $('.hover-text')[0].style.transform = `translate(${window.innerWidth - $('.hover-text')[0].offsetWidth}px,${e.clientY + 30}px)`
    }
    mouseX = e.clientX
    mouseY = e.clientY
    let radioX = $('.shop-music-img')[0].getBoundingClientRect().x
    let radioY = $('.shop-music-img')[0].getBoundingClientRect().y
    let distance = (Math.sqrt((mouseX - radioX) ** 2 + (mouseY - radioY) ** 2) / 100)
    $('.shop-music')[0].volume = 1 / (distance > 1 ? distance : 1)
})
let htq;
$('[data-hover-text]').each((i, el) => {
    $(el).on('mouseover', e => {
        if (typeof htq === 'number') clearTimeout(htq);
        $('.hover-text')[0].style.opacity = '1'
        $('.hover-text').html($(el).data('hover-text'))
    })
    $(el).on('mouseout', e => {
        $('.hover-text')[0].style.opacity = '0'
        htq = setTimeout(() => {
            $('.hover-text').html('')
            htq = false;
        }, 400)
    })
})


if (window.location.href !== 'http://127.0.0.1:5501/html/index.html' && window.location.href !== 'http://127.0.0.1:5502/html/index.html') {
    DisableDevtool();
} 