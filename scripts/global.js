let version = 'v1.3.1'
let bossFightBadge = false
document.querySelectorAll('.version').forEach(e => e.innerText = version)
let bossFightMode = false
if($.jStorage.get('bossFightMode')) bossFightMode = true
if($.jStorage.get('bossFightBadge')) bossFightBadge = true
if(bossFightBadge) {
    document.querySelector('.boss-fight-badge').innerText = '打敗過柴柴'
    document.querySelector('.boss-fight-badge').style.color = '#f00'
}
setInterval(() => {
    if(!$) return
    if(bossFightBadge) $.jStorage.set('bossFightMode', true)
    if(!bossFightMode) $.jStorage.set('bossFightMode', false)
})

console.log(`
████████████████   
       ██
     ██████
   ██  ██  ██
██     ██     ██
       ██
       
████████████████
    ██    ██    
████████████████
██  ██    ██  ██
████████████████
    ██    ██
████████████████
  ██       ██
██       ██
  ████████
  ██    ██
██        ████

  ██      ██████████
██████        ██
  ██          ██
  ████        ██
████          ██
  ██        ████

        ██
██████████████████
██              ██
   ████████████
             ██
          ██
██████████████████
        ██
        ██
     ████
`)

const compareArray = (a, b) => {
    if(a.length !== b.length) return false
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) return false
    }
    return true
}