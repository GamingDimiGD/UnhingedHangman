const modsListDisplay = $(".mods-list")[0];
if (MOD_DATA.length > 0) {
    try {
        if (MOD_DATA.length !== $.jStorage.get("mods").length) {
            alertModal("有模組沒有填入資訊! 已移除沒有資訊的模組。");
        } else {
            MOD_DATA.forEach((data) => {
                let details = document.createElement("details");
                let summary = document.createElement("summary");
                let modName = document.createElement("b");
                let removeBtn = document.createElement("button");
                modName.innerHTML = data.title;
                removeBtn.innerHTML = "移除";
                removeBtn.classList.add("remove-mod");
                removeBtn.classList.add(data.title + "-button");
                summary.append(modName, removeBtn);
                details.append(summary);
                details.innerHTML += `作者: ${data.author}<br />${data.description}`;
                modsListDisplay.append(details);
            });
        }
    } catch (error) {
        console.log(error);
    }
}

let modScripts = document.querySelectorAll("mod-script");
let deleteModButtons = document.querySelectorAll(".remove-mod");
deleteModButtons.forEach((button, index) => {
    button.onclick = () => {
        alertModal('確定要刪除嗎? 會重新整理畫面', [
            {
                text: '確定',
                onclick: () => {
                    $.jStorage.set(
                        "mods",
                        $.jStorage
                            .get("mods")
                            .filter((mod) => $.jStorage.get("mods").indexOf(mod) !== index),
                    );
                    window.location.reload();
                }
            }, '不要'
        ])
    };
});
