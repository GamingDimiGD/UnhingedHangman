const isMobile = () => {
    return navigator.maxTouchPoints > 0
}


addEventListener('keydown', e => {
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
    if(e.touches[0].clientX > x && e.touches[0].clientY > y && e.touches[0].clientX < x + 70 && e.touches[0].clientY < y + 70) {
        console.log('touch')
        x = e.touches[0].clientX - 35
        y = e.touches[0].clientY - 35
    }
})

addEventListener('touchmove', e => {
    if(e.touches[0].clientX > x && e.touches[0].clientY > y && e.touches[0].clientX < x + 70 && e.touches[0].clientY < y + 70) {
        console.log('touch')
        x = e.touches[0].clientX - 35
        y = e.touches[0].clientY - 35
    }
})

addEventListener('touchend', e => {
    //console.log(e)
})