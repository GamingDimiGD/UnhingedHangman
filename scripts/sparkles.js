let sparkleMultiplier = 1;

const giveSparkles = (amount) => {
    amount *= (sparkleMultiplier + ($.jStorage.get('increaseSparkleMultiplier')? $.jStorage.get('increaseSparkleMultiplier')/10 : 0))
    amount = Math.round(amount)
    let d = 20
    if (amount >= 100) d = 10
    if (amount >= 500) d = 1
    if (amount >= 1000 || $.jStorage.get('sparkles') + amount >= 1000) giveAch('1ksparkles');
    if (amount >= 10000 || $.jStorage.get('sparkles') + amount >= 10000) giveAch('10ksparkles');
    if (amount >= 100000 || $.jStorage.get('sparkles') + amount >= 100000) giveAch('100ksparkles');
    if (amount >= 1000000 || $.jStorage.get('sparkles') + amount >= 1000000) giveAch('1mSparkles');
    let originalSparkles = $.jStorage.get('sparkles');
    let addedAmount = 0
    let i = setInterval(() => {
        if (amount <= 0) {
            clearInterval(i)
            return
        }
        let b = 1
        if (amount >= 200) b = amount.toString().length
        if (amount >= 500) b = amount.toString().length * 2
        if (amount >= 1000) b = amount.toString().length * 3
        if (amount >= 2000) b = amount.toString().length * 10
        if (amount === 2147) b = 2147
        if (amount.toString().length >= 5) b = 64 ** amount.toString().length
        if (amount > 10000) b = Math.floor(amount / 2)
        if (b > amount) b = amount
        addedAmount += b
        document.getElementById('sparkles').innerText = originalSparkles + addedAmount;
        amount -= b
        if (amount < 0) amount = 0
    }, d)
    $.jStorage.set('sparkles', $.jStorage.get('sparkles') + amount)
    data.totalSparkles += amount
    return { i, amount }
}

const takeSparkles = (amount) => {
    $.jStorage.set('sparkles', $.jStorage.get('sparkles') - amount)
    document.getElementById('sparkles').innerText = $.jStorage.get('sparkles')
    data.sparklesSpent += amount
    return amount
}