let oiiooi = 1
const bossReady = () => {
    setInterval(() => {
        document.querySelector('.boss-dialogue img').style.transform = 'rotate(' + oiiooi + 'deg)'
        oiiooi = oiiooi * 1.1
    })
    setTimeout(() => {
        document.querySelector('.boss-dialogue img').style.display = 'none'
        bossLi.style.display = 'block'
        bossLi.innerText = '他不見了?!'
    }, 1500)
    setTimeout(() => {
        sfx('../sfx/eeeeuuugh.mp3')
        bossLi.innerText = '你找了很久，但是他跑到了下一個更新去了'
    }, 10000)
}