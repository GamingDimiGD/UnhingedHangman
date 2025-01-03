const saveUpload = document.querySelector(".save-upload");
const all = {
    string: () => {
        return localStorage.getItem("jStorage");
    },
    object: () => {
        return JSON.parse(localStorage.getItem("jStorage"));
    },
    pure: () => {
        let e = all.object();
        delete e.__jstorage_meta;
        e.bgData = localStorage.getItem("customBGIMG");
        return e;
    },
};

const repairSave = () => {
    let dontDelete = [
        'jStorage', 'jStorage_update'
    ]
    for (let key in localStorage) {
        if (!dontDelete.includes(key)) {
            localStorage.removeItem(key);
        }
    }
    window.location.reload()
}

const exportSaveData = () => {
    let e = JSON.stringify(all.pure());
    return e;
};

const exportSave = () => {
    let e = exportSaveData();
    let blob = new Blob([e], { type: "text/uhs" });
    let a = document.createElement("a");
    a.download = "Unhinged Hangman 檔案.uhs";
    a.href = URL.createObjectURL(blob);
    a.click();
};

const importSave = (importSaveData) => {
    let e = JSON.parse(importSaveData);
    $.jStorage.flush()
    Object.keys(e).forEach((key) => {
        if (key === 'bgData') return localStorage.setItem("customBGIMG", e[key]);
        $.jStorage.set(key, e[key]);
    });
    window.location.reload()
};

saveUpload.addEventListener('change', () => {
    let fr = new FileReader()
    fr.readAsText(saveUpload.files[0])
    fr.onload = () => {
        console.log(fr.result)
        importSave(fr.result)
    }
})

const confirmFlush = () => {
    alertModal('確定要刪除一切嗎? 按了回不去喔! (除非你有遊戲的檔案)', [
        {
            text: '確定',
            onclick: () => {
                $.jStorage.flush();
                window.location.reload();
            }
        }, '不要'
    ])
}