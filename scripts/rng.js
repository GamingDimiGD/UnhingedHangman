const rng = (max, min) => {
    if (!min) min = 0
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    return num
}