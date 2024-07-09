document.querySelector(".dialogue .content img").src = null
let characters = [
    {
        name: "店員",
        id: "shopkeeper",
        statusMaxIndex: 1,
        idleIndex: 0,
    },
    {
        name: "???",
        id: 'mystery',
        statusMaxIndex: 0,
        idleIndex: 0,
    },
    {
        name: '西瓜貓',
        id: 'cat',
        statusMaxIndex: 0,
        idleIndex: 0,
    }
];

characters.forEach((c) => (c.statusAmount = c.statusMaxIndex + 1));

let dialogueQueue = [];

const pd = (character, text, speed, onclick, buttons, promptText, pc, textStyle) => {
    dialogueQueue.push({
        character, text, speed, onclick, buttons, promptText, pc, textStyle
    })
}

const dialogue = (d) => {
    let { character, text, speed, onclick, buttons, promptText, pc, textStyle } = d[0]
    if (!character || !text) return alertModal("ERROR");
    let dialogueModal = document.querySelector(".dialogue");
    let dialogueTextBox = document.querySelector(".dialogue .content .text-box");
    let characterImg = document.querySelector(".dialogue .content img");
    let characterName = document.querySelector(
        ".dialogue .content .text-box .name",
    );
    let dialogueText = document.querySelector(
        ".dialogue .content .text-box .dialogue-text",
    );
    dialogueText.classList.forEach(e => {
        if(e === 'dialogue-text') return
        dialogueText.classList.remove(e)
    })
    characterName.innerText = character.name;
    if(promptText) {
        let r = prompt(promptText)
        while(!r) {
            alert('你要寫東西啊')
            r = prompt(promptText)
        }
        text = text.replaceAll('{prompt}', r)
        if(pc) pc(r)
    }
    dialogueText.innerHTML = "";
    let i = text.length;
    let si = 1;
    dialogueModal.classList.add("show");
    text = text.trim();
    const { statusMaxIndex, idleIndex, statusAmount } = character;
    if(typeof buttons === 'array' || buttons instanceof Array) {
        let e = setInterval(() => {
            if(i > 0) return;
            buttons.forEach(button => {
                let b = document.createElement('button')
                b.classList.add('dialogueButton')
                b.innerText = button.text
                b.onclick = () => {
                    if(dialogueQueue.length > 1) {
                        dialogueQueue.shift();
                        dialogue(dialogueQueue)
                    } else {
                        dialogueModal.classList.remove("show");
                    }
                    b.disabled = true;
                    if(button.callback) {
                        dialogueQueue.shift()
                        button.callback()
                    }
                    document.querySelectorAll('.dialogueButton').forEach(bb => bb.remove())
                }
                dialogueTextBox.append(b)
            })
            clearInterval(e)
        })
    }
    
    let j = setInterval(() => {
        if (i > 0) {
            if (statusMaxIndex >= 1 || statusAmount > 1) {
                characterImg.src = `../images/characters/${character.id}/${character.id}${si}.png`;
            }
            dialogueText.innerHTML += text.charAt(text.length - i);
            i--;
        } else {
            characterImg.src = `../images/characters/${character.id}/${character.id}${idleIndex}.png`;
            clearInterval(j);
        }
    }, speed || 100);
    if(typeof textStyle === 'string' || textStyle instanceof String) dialogueText.classList.add(textStyle)
    else if(typeof textStyle === 'array' || textStyle instanceof Array) {
        textStyle.forEach(style => dialogueText.classList.add(style))
    }
    let jin = setInterval(() => {
        if (i > 0) {
            dialogueModal.onclick = () => {
                if (i > 0) {
                    console.log("e");
                    i = 0;
                    clearInterval(j);
                    dialogueText.innerHTML = text;
                }
            };
            return;
        }
        if(buttons) return
        if(dialogueQueue.length > 1) {
            dialogueModal.onclick = () => {
                if (i > 0) return;
                clearInterval(jin)
                dialogueQueue.shift();
                dialogue(dialogueQueue)
                if(onclick) {
                    dialogueQueue.shift()
                    onclick()
                }
                dialogueModal.onclick = null;
            };
            return
        }
        dialogueModal.onclick = () => {
            if (i > 0) return;
            clearInterval(jin)
            dialogueModal.classList.remove("show");
            dialogueQueue.shift()
            if(onclick) onclick()
            dialogueModal.onclick = null;
        };
    });
};

if(date(7,26)) {
    pd(characters[0], '聽說今天是迪米生日')
    pd(characters[0], '我們祝他生日快樂吧!')
    pd(characters[0], '生日快樂!', 100, () => {
        confetti({
            particleCount: antilag? 50 : 200,
            spread: 360,
            origin: { y: 0.6 },
        });
        giveAch('birthday')
    })
    dialogue(dialogueQueue)
}