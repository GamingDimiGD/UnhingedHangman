const glitch = (amount) => {
    let text = ''
    for (amount; amount > 0; amount--) {
        const random = Math.floor(Math.random() * 65536);
        text = text + String.fromCharCode(random);
    }
    return text
}