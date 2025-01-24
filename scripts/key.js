const limboKeys = (onWin = () => console.log('you won1!!')) => {

    if (!isMuted) music.pause();
    sfx('key').onLoad(() => {
        $('.limbo-keys').addClass('show')
        const correctKeyIndex = rng(7)
        console.log(correctKeyIndex)
        $.each($('.limbo-key'), (i, e) => {
            e.style.left = `${((i - i%2) * (e.offsetWidth + 10))/2}px`
            e.style.top = `${i % 2 * (e.offsetHeight + 10)}px`
            if (i === correctKeyIndex) {
                setTimeout(() => e.style.animation = 'rightKey 0.8s', 1800)
            }
        })
        setTimeout(() => {
            $.each($('.limbo-key'), (i, e) => { e.style.transition = 'left 0.2s ease, top 0.2s ease' })
        }, 1100)
        const cp = (k1, k2) => {
            let key1 = $('.limbo-key')[k1]
            let key2 = $('.limbo-key')[k2]
            let key1Top = key1.style.top
            let key1Left = key1.style.left
            let key2Top = key2.style.top
            let key2Left = key2.style.left
            key1.style.top = key2Top
            key1.style.left = key2Left
            key2.style.top = key1Top
            key2.style.left = key1Left
        }
        const tcp = (k1, k2, k3) => {
            let key1 = $('.limbo-key')[k1]
            let key2 = $('.limbo-key')[k2]
            let key3 = $('.limbo-key')[k3]
            let key1Top = key1.style.top
            let key1Left = key1.style.left
            let key2Top = key2.style.top
            let key2Left = key2.style.left
            let key3Top = key3.style.top
            let key3Left = key3.style.left
            key1.style.top = key2Top
            key1.style.left = key2Left
            key2.style.top = key3Top
            key2.style.left = key3Left
            key3.style.top = key1Top
            key3.style.left = key1Left
        }
        const qcp = (k1, k2, k3, k4) => {
            let key1 = $('.limbo-key')[k1]
            let key2 = $('.limbo-key')[k2]
            let key3 = $('.limbo-key')[k3]
            let key4 = $('.limbo-key')[k4]
            let key1Top = key1.style.top
            let key1Left = key1.style.left
            let key2Top = key2.style.top
            let key2Left = key2.style.left
            let key3Top = key3.style.top
            let key3Left = key3.style.left
            let key4Top = key4.style.top
            let key4Left = key4.style.left
            key1.style.top = key2Top
            key1.style.left = key2Left
            key2.style.top = key3Top
            key2.style.left = key3Left
            key3.style.top = key4Top
            key3.style.left = key4Left
            key4.style.top = key1Top
            key4.style.left = key1Left
        }
        const end = () => {
            let key = $('.limbo-key')[correctKeyIndex]
            $.each($('.limbo-key'), (i, e) => {
                e.onclick = () => {
                    alertModal('選錯了!', [
                        {
                            text: '重來',
                            onclick: () => limboKeys(onWin),
                        },
                        {
                            text: '離開',
                            onclick: () => {
                                $('.limbo-keys').removeClass('show')
                                if (!isMuted) music.play();
                            },
                        }
                    ])
                    $.each($('.limbo-key'), (i, e) => {
                        e.style.transform = '';
                        e.style.animation = '';
                        e.onclick = null;
                    })
                    return false
                }
            })
            key.onclick = () => {
                if (!isMuted) music.play();
                confetti({
                    particleCount: antilag ? 50 : 200,
                    spread: 360,
                    origin: { y: 0.6 },
                });
                $.each($('.limbo-key'), (i, e) => {
                    e.style.transform = '';
                    e.style.animation = '';
                    e.onclick = null;
                })
                alertModal('選對了!', [
                    {
                        text: '好欸',
                        onclick: () => {
                            $('.limbo-keys').removeClass('show')
                            onWin()
                        },
                    }
                ])
                return true;
            }
        }
        setTimeout(() => {
            $('.limbo-key')[correctKeyIndex].style.animation = ''
            let iteration = 0
            let int = setInterval(() => {
                iteration++
                if (iteration === 13) {
                    $('.key-display')[0].style.transform = 'rotate(180deg)'
                }
                if (iteration > 12 && iteration < 17) return
                if (iteration === 1) {
                    qcp(0, 1, 2, 3)
                    qcp(4, 5, 6, 7)
                    return;
                }
                if (iteration === 17) {
                    tcp(0, 1, 2)
                    tcp(4, 5, 6)
                    return;
                }
                if (iteration === 33) {
                    $('.key-display')[0].style.transform = 'rotate(0deg)'
                    clearInterval(int)
                    end()
                    return;
                }
                let a = rng(7)
                let b = rng(7)
                while (a === b) {
                    a = rng(7)
                    b = rng(7)
                }
                cp(a, b)
            }, 275);
        }, 4850)
    });
}