const giveSparkles = (amount) => {
    let d = 20
    if(amount >= 100) d = 10
    if(amount >= 500) d = 1
    if(amount >= 1000 || $.jStorage.get('sparkles') + amount >= 1000) giveAch('1ksparkles')
    let i = setInterval(() => {
        if(amount <= 0) {
            clearInterval(i)
            return
        }
        let b = 1
        if(amount >= 200) b = amount.toString().length
        if(amount >= 500) b = amount.toString().length * 2
        if(amount >= 1000) b = amount.toString().length * 3
        if(amount >= 2000) b = amount.toString().length * 10
        if(amount === 2147) b = 2147
        if(amount.toString().length >= 5) b = 64**amount.toString().length
        if(b > amount) b = amount
        $.jStorage.set('sparkles', $.jStorage.get('sparkles') + b)
        document.getElementById('sparkles').innerText = $.jStorage.get('sparkles')
        amount -= b
        if(amount < 0) amount = 0
    }, d)
    return i, amount
}
const takeSparkles = (amount) => {
    let d = 20
    if(amount >= 100) d = 10
    if(amount >= 500) d = 1
    let i = setInterval(() => {
        if(amount <= 0) {
            clearInterval(i)
            return
        }
        let b = 1
        if(amount >= 200) b = amount.toString().length
        if(amount >= 500) b = amount.toString().length * 2
        if(amount >= 1000) b = amount.toString().length * 3
        if(amount >= 2000) b = amount.toString().length * 10
        if(amount === 2147) b = 2147
        if(amount.toString().length >= 5) b = 222222^amount.toString().length
        if(b > amount) b = amount
        $.jStorage.set('sparkles', $.jStorage.get('sparkles') - b)
        document.getElementById('sparkles').innerText = $.jStorage.get('sparkles')
        amount -= b
        if(amount < 0) amount = 0
    }, d)
    return i, amount
}