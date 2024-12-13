let r = 0;
let g = 0;
let b = 0;
let styleText = `rgb(${r},${g},${b})`;
let cs = 5;
let snow = () => {
    requestAnimationFrame(snow);
    if (antiLag) return;
    skew = Math.max(0.8, skew - 0.001);
    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: 100,
        origin: {
            x: Math.random(),
            y: Math.random() * skew - 0.2,
        },
        colors: ["#ffffff"],
        shapes: ["circle", "square", 'triangle', "hexagon"],
        gravity: rng(0.6, 0.4),
        scalar: rng(1, 0.4),
        drift: rng(0.4, -0.4),
    });
}

const streakText = document.querySelector(".streak");
let rList = [
    document.querySelector(".navbar"),
    streakText,
]
setInterval(() => {
    if (rmv === 0) {
        document.querySelector(".hangman-box img").style.border =
            "3px solid var(--theme)";
        document.querySelector(".navbar").style.color = "var(--navbar)";
        streakText.style.border = "none";
        streakText.style.color = "var(--text)";
        keyboardDiv.querySelectorAll("button").forEach((btn) => {
            btn.style.color = "var(--text2)";
        });
        return;
    }
    // if (r > 255) r = 255;
    // if (g > 255) g = 255;
    // if (b > 255) b = 255;
    // if (r < 0) r = 0;
    // if (g < 0) g = 0;
    // if (b < 0) b = 0;
    // if (r !== 255 && g === 0 && b === 0) {
    //     styleText = `rgb(${r + cs},${g},${b})`;
    //     r = r + cs;
    // } else if (r === 255 && g !== 255 && b === 0) {
    //     styleText = `rgb(${r},${g + cs},${b})`;
    //     g = g + cs;
    // } else if (r === 255 && g === 255 && b !== 255) {
    //     styleText = `rgb(${r - cs},${g},${b + cs})`;
    //     r = r - cs;
    //     b = b + cs;
    // } else if (r !== 255 && g === 255 && b === 255) {
    //     styleText = `rgb(${r + cs},${g - cs},${b})`;
    //     g = g - cs;
    //     r = r + cs;
    // } else if (r === 255 && g !== 255 && b === 255) {
    //     styleText = `rgb(${r},${g + cs},${b - cs})`;
    //     b = b - cs;
    //     r = r + cs;
    // } else if (r !== 255 && g === 255 && b !== 255) {
    //     styleText = `rgb(${r - cs},${g},${b + cs})`;
    //     r = r - cs;
    //     b = b + cs;
    // } else if (r !== 255 && g !== 255 && b === 255) {
    //     styleText = `rgb(${r + cs},${g - cs},${b})`;
    //     g = g - cs;
    //     r = r + cs;
    // } else if (r >= 255 && g !== 255 && b !== 255) {
    //     styleText = `rgb(${r},${g + cs},${b - cs})`;
    //     b = b - cs;
    //     g = g + cs;
    // }
    if (ckcRainbow) {
        // setVar('custom-key-color', styleText)
        // setVar('ckc-b', styleText)
        setVar('ckc-animation', 'rainbow')
    } else setVar('ckc-animation', 'unset')
    if (fmrainbow) {
        ask = styleText;
    }
    if ($.jStorage.get('customBGIMG')) {
        $.jStorage.set("t", t);
        t = $.jStorage.get("t");
    }
    if (!finalBossMode && !idkAnymore && !fbd) {
        if (t && winStreak < 5) game.style.background = getVar('w') + "3c";
        else if (t && winStreak >= 5 && winStreak < 10)
            game.style.background = getVar('y') + '3c';
        else if (t && winStreak >= 10) game.style.background = getVar('p') + "3c";
        else if (!t && winStreak < 5) game.style.background = getVar('w');
        else if (!t && winStreak >= 5 && winStreak < 10)
            game.style.background = getVar('y');
        else if (!t && winStreak >= 10) game.style.background = getVar('p');
    } else {
        game.style.background = getVar('w')
    }
    let textbox = document.querySelector(".text-box");
    let e = textbox.style
}, 10);
let si;
const checkStreak = (amount) => {
    winStreak++;
    if (winStreak > hiStreak && amount !== 0) hiStreak++;
    if (amount !== 0) {
        if (hiStreak >= 5 || winStreak >= 5) giveAch("5streak");
        if (hiStreak >= 10 || winStreak >= 10) giveAch("10streak");
        if (hiStreak >= 50 || winStreak >= 50) giveAch("50streak");
    }

    document.querySelector(".hi-streak").innerText =
        "最高連勝紀錄: " + hiStreak;
    $.jStorage.set("hiStreak", hiStreak);
    if (!isNaN(amount)) winStreak = amount;
    streakText.innerText = winStreak + " 連勝";
    if (winStreak < 5) {
        clearInterval(si);
        document.querySelector(".hangman-box img").style.border =
            "3px solid var(--theme)";
        document.querySelector(".navbar").style.color = "var(--navbar)";
        streakText.style.border = "none";
        streakText.style.color = "var(--text)";
        keyboardDiv.querySelectorAll("button").forEach((btn) => {
            btn.style.color = "var(--text2)";
        });
        game.style.border = "none";
        rList.forEach(e => {
            e.style.animation = 'unset';
        })
        keyboardDiv.querySelectorAll("button").forEach((btn) => {
            btn.style.animation = 'unset';
        });
        if (bossFightMode || speedRunMode) return;
        if (!music.src.includes("Wallpaper.mp3") && !$.jStorage.get('customMusic') && music.src !== "")
            music.src = "../sfx/Wallpaper.mp3";
        else if ($.jStorage.get('customMusic') && music.src !== "" && !(music.src === $.jStorage.get('customMusic')))
            music.src = $.jStorage.get('customMusic');
    } else if (winStreak >= 5 && winStreak < 10) {
        clearInterval(si);
        document.querySelector(".hangman-box img").style.border =
        "5px solid var(--r)";
        streakText.style.color = "var(--r)";
        streakText.style.borderRadius = "2px";
        streakText.style.border = "3px solid var(--r)";
        si = setInterval(() => {
            streakText.style.margin = rng(3) + "px";
        });
        rList.forEach(e => {
            e.style.animation = 'unset';
        })
        keyboardDiv.querySelectorAll("button").forEach((btn) => {
            btn.style.animation = 'unset';
        });
    } else if (winStreak >= 10) {
        clearInterval(si);
        game.style.border = "5px solid var(--c)";
        si = setInterval(() => {
            streakText.style.margin = rng(3) + "px";
        });
        rList.forEach(e => {
            e.style.animation = 'rainbowText 5s infinite';
        })
        keyboardDiv.querySelectorAll("button").forEach((btn) => {
            btn.style.animation = 'rainbowText 5s infinite';
        });
        if (bossFightMode || speedRunMode) return;
        if (!music.src.includes("Creo-Sphere.mp3") && music.src !== "" && !$.jStorage.get('custom10StreakMusic'))
            music.src = "../sfx/Creo-Sphere.mp3";
        else if ($.jStorage.get('custom10StreakMusic') && music.src !== "" && !(music.src === $.jStorage.get('custom10StreakMusic')))
            music.src = $.jStorage.get('custom10StreakMusic');
        
    }
};
