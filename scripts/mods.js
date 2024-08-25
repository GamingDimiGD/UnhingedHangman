let MOD_DATA = [] // only use this in modHandler.js or inside a mod, not in this file you stupid ai autofilling thing
const modSubmit = document.querySelector('.mods-link-button')
const modInput = document.querySelector('.mods-link-input')
let mods = $.jStorage.get('mods') || [] // the list
if(!$.jStorage.get('mods')) $.jStorage.set('mods', [])

$.jStorage.get('mods').forEach(mod => {
    let script = document.createElement('script')
    script.src = mod
    script.defer = true
    script.classList.add('mod-script')
    document.head.append(script)
})
let modHandler = document.createElement('script')
modHandler.src = '../scripts/modHandler.js'
modHandler.defer = true
document.head.append(modHandler)

modSubmit.onclick = () => {
    if (modInput.value.length === 0 || !modInput.value.includes('https://')) return alertModal('輸入的不是網址!');
    if (mods.includes(modInput.value)) return alertModal('這個模組已經下載過了!');
    mods.push(modInput.value)
    $.jStorage.set('mods', mods)
    window.location.reload()
}