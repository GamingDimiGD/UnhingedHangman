const autosaveIndicator = document.querySelector('.autosave-text')
const saveButton = $('#save')[0]

const save = () => {
    $.jStorage.set('vocab', vocab)
    $.jStorage.set('vocabAmount', vocabAmount)
    autosaveIndicator.innerText = '已儲存👍'
    autosaveIndicator.style.color = 'var(--text)'
    saveButton.innerText = '已儲存👍'
    setTimeout(() => {
        autosaveIndicator.innerText = autosaveText
        autosaveIndicator.style.color = 'var(--text)'
        saveButton.innerText = '儲存'
    }, 1000)
}
setInterval(() => {
    stats.innerHTML = ''
    $.jStorage.set('data', data)
    for (const prop in data) {
        const span = document.createElement('span');
        span.innerText = `${dataCH[prop]}: ${data[prop]}`;
        stats.appendChild(span);
    }
})

setInterval(save, 10000)