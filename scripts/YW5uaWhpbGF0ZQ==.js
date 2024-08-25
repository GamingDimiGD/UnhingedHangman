let bossProgram, bossConsole
let bossScript = () => {
    let pre = document.createElement('pre')
    pre.innerText = ''
    bossConsole = document.createElement('div')
    bossConsole.style.position = 'fixed'
    bossConsole.style.textAlign = 'left'
    bossConsole.style.justifyContent = 'left'
    bossConsole.style.alignItems = 'flex-start'
    bossConsole.style.top = '0'
    bossConsole.style.left = '0'
    bossConsole.style.color = '#0f0'
    bossConsole.style.background = '#000'
    bossConsole.style.width = '100%'
    bossConsole.style.height = '100%'
    bossConsole.style.overflowY = 'hidden'
    pre.style.fontFamily = '"IBM Plex Mono", monospace'
    document.body.append(bossConsole)
    bossConsole.append(pre)
    setTimeout(() => {
        bossProgram = setInterval(() => {
            pre.innerText = `Removed person ${faker.name.firstName()} ${faker.name.lastName()} from U:\\Galaxies\\Milkyway\\SolarSystem\\Planets\\Earth\\ \n` + pre.innerText
        }, 100)
    }, 5000)
    return e
}

let removeBP = () => {
    bossConsole.remove()
}
