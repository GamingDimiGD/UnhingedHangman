let dictionaryApiURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
/*

    <div class="m">

        <span>英文意思: </span><br>
        <span>例句: </span>

    </div>
*/
$('.advmeaningb')[0].onclick = () => {
    $('.li').show()
    $('.js-input-here').html('')
    $('.meaning').addClass('show')
    $('.mwd').html(currentWord)
    $.getJSON(`${dictionaryApiURL}${currentWord}`).done(data => {
        $('.li').hide()
        $('.js-input-here').empty()
        $.each(data, (i, m) => {
            $('.js-input-here')[0].innerHTML += `<h2>念法與KK音標 (${i + 1})</h2>`
            $.each(m.phonetics, (i, p) => {
                $('.js-input-here')[0].innerHTML += `
                <span>${p.audio[p.audio.length - 5] === 'k' ? '英式' : '美式'}KK音標 (${i + 1}) :${p.text}</span><br>
                ${p.audio === "" ? "沒給念法" : `<audio src="${p.audio}" controls></audio>`}<br>`
            });
            $.each(m.meanings, (i, t) => {
                $('.js-input-here')[0].innerHTML += `<br>
                <div class="mtype">
                <span>第${i + 1}種用法 詞性: ${t.partOfSpeech}</span>
                
                <div class="meanings-list">
                </div>
                
                <span>同義詞: ${t.synonyms.length > 0? t.synonyms.join(' ').trim():"無"}</span><br>
                <span class="antonyms">反義詞: ${t.antonyms.length > 0? t.antonyms.join(' ').trim():"無"}</span><br>
                </div>`
                $.each(t.definitions, (i, d) => {
                    $('.js-input-here')[0].innerHTML += `
    <div class="m">
        <span>英文意思 (${i + 1}): ${d.definition}</span><br>
        <span>例句: ${d.example?d.example:'無'}</span>
    </div>`
                })
            })
        })
    })
        .fail((e, status, error) => {
            if (e.status === 404) {
                $('.li').html(`${currentWord} 不在字典上，可以自己去查?`)
                return
            }
            $('.li').html(`發生錯誤! 代碼: ${e.status} 字典說: ${status}, ${error} <br>你可以先檢查網路是否有問題，若沒問題，那我就不知道了`)
        })
}