const shop = document.querySelector(".shop-modal");
const stuff = document.querySelector(".shop-modal .content .stuff");
let types = [];
let ckcRainbow = false;
let t = false
if($.jStorage.get("t")) t = true

class ShopItem {
    constructor(name, price, description, image, type, id, onBuy) {
        price = parseInt(price);
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.type = type;
        this.id = id;
        this.onBuy = onBuy;

        if (!types.find((t) => t === this.type)) {
            let category = document.createElement("h1");
            category.innerHTML = this.type;
            category.style.width = "100%";
            stuff.append(category);
            types.push(this.type);
        }
        let item = document.createElement("div");
        item.innerHTML = `<img src="${this.image}" alt="${this.name}" /><h2>${this.name}</h2><p>${this.description}</p><button>${this.price}✧</button>`;
        item.querySelector("img").style.width = "calc(100% - 20px)";
        item.querySelector("button").style.padding = "5px 10px";
        item.querySelector("button").addEventListener("click", () => {
            if ($.jStorage.get("sparkles") < this.price)
                return showNotif("你買不起!", 1);
            takeSparkles(this.price);
            this.onBuy();
        });
        this.item = item;
        stuff.append(item);
    }
    buy() {
        this.onBuy();
    }
    disable(isDisabled, customText) {
        this.item.querySelector("button").disabled = isDisabled;
        if (isDisabled) {
            this.item.querySelector("button").innerText =
                customText || "已購買";
        }
    }
    changeButton(callback) {
        callback(this.item.querySelector("button"));
    }
    save(e) {
        $.jStorage.set(this.id, e);
    }
}
let customKeyColor = new ShopItem(
    "自訂鍵盤邊框顏色",
    100,
    "用 rgb 或 16進位顏色號碼或英文都可，像是rgb(0, 128, 0) 或 #00ff00 或 white",
    "../images/custom-key-color.jpeg",
    "外觀",
    "customKeyColor",
    () => {
        let color = prompt("請輸入顏色");
        if (!color) color = "#00ff00";
        if (color.toLowerCase() === "rainbow" || color === "彩虹") {
            ckcRainbow = true;
        } else ckcRainbow = false;
        document
            .querySelectorAll(".keyboard button")
            .forEach((a) => (a.style.border = "3px solid " + color));
        customKeyColor.price = 0;
        customKeyColor.changeButton((b) => {
            b.innerText = "變換顏色";
        });
        if ($.jStorage.get("customBGIMG")) {
            giveAch("new");
        }
        customKeyColor.save(color);
    },
);
if ($.jStorage.get("customKeyColor")) {
    customKeyColor.price = 0;
    let color = $.jStorage.get("customKeyColor");
    if (color.toLowerCase() === "rainbow" || color === "彩虹") {
        ckcRainbow = true;
    } else ckcRainbow = false;
    document
        .querySelectorAll(".keyboard button")
        .forEach((a) => (a.style.border = "3px solid " + color));
    customKeyColor.changeButton((b) => {
        b.innerText = "變換顏色";
    });
}
let dbgi = $.jStorage.get('dbgi') || 0;
let customBGIMG = new ShopItem(
    "自訂背景圖片",
    200,
    "上傳圖片來改深綠色背景!",
    "../images/custom-bg-img.jpeg",
    "外觀",
    "customBGIMG",
    () => {
        customBGIMG.price = 0;
        customBGIMG.changeButton((b) => {
            b.innerText = "變換圖片";
            if (!customBGIMG.item.querySelector("input")) {
                let input = document.createElement("input");
                input.type = "file";
                input.accept = "image/png, image/jpg, image/jpeg, image/gif";
                input.style.display = "none";
                customBGIMG.item.append(input);
            }
        });
        let input = customBGIMG.item.querySelector("input");
        input.onchange = () => {
            img = URL.createObjectURL(input.files[0]);
            document.body.style.backgroundImage = "url(" + img + ")";
            document.body.style.backgroundSize = "cover";
            localStorage.setItem("customBGIMG", img);
        };
        if (customBGIMG.item.querySelectorAll("button").length <= 3) {
            let o = document.createElement("button");
            o.innerText = "半透明遊戲視窗";
            o.style.marginTop = "10px";
            o.style.padding = "5px 10px";
            customBGIMG.item.append(o);
            let rb = document.createElement("button");
            rb.innerText = "清除圖片";
            rb.style.marginTop = "10px";
            rb.style.padding = "5px 10px";
            customBGIMG.item.append(rb);
            let dbg = document.createElement("button");
            dbg.innerText = '動態背景' + (dbgi + 1) + '號';
            dbg.style.marginTop = "10px";
            dbg.style.padding = "5px 10px";
            dbg.classList.add('beta')
            customBGIMG.item.append(dbg);
        }
        let o = customBGIMG.item.querySelectorAll("button")[1];
        o.addEventListener("click", () => {
            t = !t;
            game.classList.toggle("transparent");
        });
        let rb = customBGIMG.item.querySelectorAll("button")[2];
        rb.addEventListener("click", () => {
            localStorage.removeItem("customBGIMG");
            document.body.style.backgroundImage = "none";
        });
        let dbg = customBGIMG.item.querySelectorAll("button")[3];
        dbg.addEventListener("click", () => {
            dbgi++;
            if (dbgi > dynamicBGList.length - 1) {
                dynamicBGList[dbgi - 1].remove();
                dbgi = 0;
            }
            dbg.innerText = '動態背景' + (dbgi + 1) + '號';
            if(dynamicBGList[dbgi - 1]) dynamicBGList[dbgi - 1].remove();
            dynamicBGList[dbgi].play();
            $.jStorage.set('dbgi', dbgi)
        });
        input.click();
        if ($.jStorage.get("customKeyColor")) {
            giveAch("new");
        }
        customBGIMG.save(true);
    },
);
if ($.jStorage.get("customBGIMG")) {
    customBGIMG.price = 0;
    customBGIMG.changeButton((b) => {
        b.innerText = "變換圖片";
        if (!customBGIMG.item.querySelector("input")) {
            let input = document.createElement("input");
            input.type = "file";
            input.accept = "image/png, image/jpg, image/jpeg, image/gif";
            input.style.display = "none";
            customBGIMG.item.append(input);
        }
    });
    if (customBGIMG.item.querySelectorAll("button").length <= 3) {
        let o = document.createElement("button");
        o.innerText = "半透明遊戲視窗";
        o.style.marginTop = "10px";
        o.style.padding = "5px 10px";
        customBGIMG.item.append(o);
        let rb = document.createElement("button");
        rb.innerText = "清除圖片";
        rb.style.marginTop = "10px";
        rb.style.padding = "5px 10px";
        customBGIMG.item.append(rb);
        let dbg = document.createElement("button");
        dbg.innerText = '動態背景' + (dbgi + 1) + '號';
        dbg.style.marginTop = "10px";
        dbg.style.padding = "5px 10px";
        dbg.classList.add('beta')
        customBGIMG.item.append(dbg);
    }
    let o = customBGIMG.item.querySelectorAll("button")[1];
    o.addEventListener("click", () => {
        t = !t;
        game.classList.toggle("transparent");
    });
    let rb = customBGIMG.item.querySelectorAll("button")[2];
    rb.addEventListener("click", () => {
        localStorage.removeItem("customBGIMG");
        document.body.style.backgroundImage = "none";
    });
    let dbg = customBGIMG.item.querySelectorAll("button")[3];
    dbg.addEventListener("click", () => {
        dbgi++;
        if (dbgi > dynamicBGList.length - 1) {
            dynamicBGList[dbgi - 1].remove();
            dbgi = 0;
        }
        dbg.innerText = '動態背景' + (dbgi + 1) + '號';
        if(dynamicBGList[dbgi - 1]) dynamicBGList[dbgi - 1].remove();
        dynamicBGList[dbgi].play();
        $.jStorage.set('dbgi', dbgi)
    });
    document.addEventListener('DOMContentLoaded', () => {
        if($.jStorage.get('dbgi')) dynamicBGList[dbgi].play();
    })
    let img = localStorage.getItem("customBGIMG");
    document.body.style.backgroundImage = "url(" + img + ")";
    document.body.style.backgroundSize = "cover";
}
let catLevel = $.jStorage.get("catLevel") || 1;
let a = new ShopItem(
    "西瓜貓",
    10,
    "可愛的西瓜貓陪你一下",
    "../images/2.png",
    "其他",
    "cat",
    () => {
        if ($.jStorage.get("cat")) {
            catLevel++;
            $.jStorage.set("catLevel", catLevel);
            a.price = 2 ** catLevel;
            if (a.price < 10) a.price = 16;
            a.changeButton((b) => {
                b.innerText = a.price + "✧ 升級 等級" + catLevel;
            });
            if (catLevel >= 10) {
                catLevel = 10;
                $.jStorage.set("catLevel", catLevel);
                a.disable(true);
                a.changeButton((b) => {
                    b.innerText = "已達到最高等!";
                });
            }
            let rate = (60 * 5) / catLevel;
            rate = rate.toString().slice(0, 5);
            a.item.querySelector("p").innerText =
                "每" + rate + "秒 1 ~ " + 10 * catLevel + "✧";

            return;
        }
        let cat = document.createElement("img");
        cat.src = "../images/2.png";
        cat.style.height = "250%";
        document.querySelector(".navbar").appendChild(cat);
        setInterval(
            () => {
                let adsf = rng(10 * catLevel, 1);
                giveSparkles(adsf);
                showNotif("西瓜貓找到了" + adsf + "✧!!", 1);
            },
            (1000 * 60 * 5) / catLevel,
        );
        a.save(true);
        a.price = 10 * catLevel;
        a.changeButton((b) => {
            b.innerText = a.price + "✧ 升級 等級" + catLevel;
        });
        a.item.querySelector("p").innerText =
            "每" + (60 * 5) / catLevel + "秒 1 ~ " + 10 * catLevel + "✧";
        giveAch("cat");
    },
);
if ($.jStorage.get("cat")) {
    if ($.jStorage.get("catLevel") > 1) {
        a.price = 2 ** catLevel;
        a.changeButton((b) => {
            b.innerText = a.price + "✧ 升級 等級" + catLevel;
        });
        if (catLevel >= 10) {
            catLevel = 10;
            $.jStorage.set("catLevel", catLevel);
            a.disable(true);
            a.changeButton((b) => {
                b.innerText = "已達到最高等!";
            });
        }
    }
    let cat = document.createElement("img");
    cat.src = "../images/2.png";
    cat.style.height = "250%";
    document.querySelector(".navbar").appendChild(cat);
    setInterval(
        () => {
            let adsf = rng(10 * catLevel, 1);
            giveSparkles(adsf);
            showNotif("西瓜貓找到了" + adsf + "✧!!", 1);
        },
        (1000 * 60 * 5) / catLevel,
    );
    a.save(true);
    if (catLevel < 10) {
        a.changeButton((b) => {
            b.innerText = a.price + "✧ 升級 等級" + catLevel;
        });
    }
    let rate = (60 * 5) / catLevel;
    rate = rate.toString().slice(0, 5);
    a.item.querySelector("p").innerText =
        "每" + rate + "秒 1 ~ " + 10 * catLevel + "✧";
    giveAch("cat");
}
let scam = new ShopItem(
    "無限✧!!",
    999,
    "無限✧!!1",
    "../images/scam.jpeg",
    "其他",
    "scam",
    () => {
        giveAch("scammed");
        alert(`哈哈笑死被騙了`);
        scam.disable(true);
        scam.save(true);
    },
);
if ($.jStorage.get("scam")) {
    scam.disable(true);
}
