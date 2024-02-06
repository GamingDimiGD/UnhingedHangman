let vocab = [
    {
        word: 'abbreviation',
        hint: 'Mr. Mrs. 等縮寫',
        meaning: '縮寫，指用一個詞的第一個(或前面幾個)字母和最後一個字母組成一個縮寫，後面再加個點，像Mister => Mr. \nN.'
    },
    {
        word: 'ability',
        hint: '玩這個遊戲可以培養一個"技能"',
        meaning: '1. 能力；才能，才智 N. \n2. 用於把以 -able 或 -ible 結尾的形容詞轉化為名詞，表示這些形容詞具有的特性 如: sustainable => sustainability'
    },
    {
        word: 'about',
        hint: '可以是副詞或介係詞',
        meaning: '1. 正要；快要 adv. \n2. 關於 prep. \n3. 英式英文中的about和around有同樣的意思，但美式英文通常用around adv.'
    },
    {
        word: 'abrupt',
        hint: '"突然"發生一件事情，我完全"沒預料"到',
        meaning: '1. 突然且完全沒預料到的 adj. \n2. 很不禮貌且不友善的 adj.'
    },
    {
        word: 'absolute',
        hint: '你"絕對"猜得出來',
        meaning: '1. 絕對的 adj. \n2. 不受限制的 adj. \n3. 完全的 adj.'
    },
    {
        word: 'acute',
        hint: '數學名詞',
        meaning: '1. 是銳角的 (若要做名詞用，要加 angle => acute angle 銳角) adj. \n2. 十分嚴重的 adj. \n3. 敏銳的，靈敏的；機敏的，有洞察力的 adj.'
    },
    {
        word: 'adjective',
        hint: '縮寫是 adj.',
        meaning: '形容詞，縮寫是adj. N.'
    },
    {
        word: 'adore',
        hint: '愛，尊重 動詞',
        meaning: '1. 愛慕，熱愛；非常喜歡 V. \n2. 崇拜；敬仰 V.'
    },
    {
        word: 'adorable',
        hint: 'cute 的另一種說法',
        meaning: '可愛的；討人喜歡的 adj.'
    },
    {
        word: 'again',
        hint: '當你打輸一個遊戲時，想按 PLAY _____',
        meaning: '1. 再來一次 又來 adv. \n2. 復原 adv.'
    },
    {
        word: 'age',
        hint: '"光陰"似箭，"歲月"如梭',
        meaning: '1. 年齡，年紀 N. \n2. 時代，如石器時代 the stone age N.'
    },
    {
        word: 'agent',
        hint: 'FBI _____',
        meaning: '1. 代理人 N. \n2. 經紀人 N. \n3. 特務、間諜 N. \n4. 原動力、動因；作用劑 N. '
    },
    {
        word: 'agile',
        hint: '可以形容貓咪和兔子',
        meaning: '1. 敏捷的 adj. \n2. 機敏的 adj. \n3. 見機行事的，反應快速的 adj.'
    },
    {
        word: 'agree',
        hint: '每次一個網站要你閱讀什麼東西時候要你做事',
        meaning: '1. 同意，同意這件事 V. \n2. 贊同 V.'
    },
    {
        word: 'ahead',
        hint: '你的螢幕就在你「前方」！',
        meaning: '1. 前方 adv. \n2. 將來 adv. \n3. 佔優勢 adv. \n4. 勝過 adv.'
    },
    {
        word: 'aim',
        hint: '你的"目標"是打贏這個遊戲',
        meaning: '1. 目標 N. \n2. 瞄準 V. \n3. 打算 V.'
    },
    {
        word: 'air',
        hint: '地球上無所不在',
        meaning: '1. 空氣 N. \n2. 搭飛機 N. \n3. 風度 N. \n4. 旋律 N. \n5. 在電視上播放、直播 V. \n6. 公開 V. \n7. （使）什麼物品用什麼方式弄乾或（使）通風 V.'
    },
    {
        word: 'airplane',
        hint: '在空中飛的東西',
        meaning: '飛機 N.'
    },
    {
        word: 'alarm',
        hint: '地震時會叫東西',
        meaning: '1. 警報 N. \n2. 警報器 N. \n3. 鬧鐘 N. \n4. 驚慌 N. \n5. 讓人擔心或害怕 V.'
    },
    {
        word: 'alcohol',
        hint: '在臺灣18歲才能喝',
        meaning: '酒、酒精 N.'
    },
    {
        word: 'alike',
        hint: '可以是形容詞也可以是副詞',
        meaning: '1. 相似的 adv. \n2. 類似的 adj.'
    },
    {
        word: 'alive',
        hint: '不是死的',
        meaning: '活著的 仍然存在的 adj.'
    },
    {
        word: 'allow',
        hint: '允許',
        meaning: '1. 允許，准許 V. \n2. 承認 V.'
    },
    {
        word: 'already',
        hint: '過去的事',
        meaning: '已經 adv.'
    },
    {
        word: 'also',
        hint: '你玩，我"也"要玩',
        meaning: '也 adv.'
    },
    {
        word: 'although',
        hint: '"儘管"如此，我還是不會給答案',
        meaning: '儘管 conj.'
    },
    {
        word: 'altogether',
        hint: '你"總共"在這個遊戲花不知道多少分鐘',
        meaning: '總共 adv.'
    },
    {
        word: 'amaze',
        hint: '哇！',
        meaning: '使驚嘆 V.'
    },
    {
        word: 'ambiguous',
        hint: 'Ỹ̴̨̤͙̗̭̲̫̬̣̗̫̮̮̰̖͓̺̩̲͍͎̦̞̞͍͈̦͖̤̻̗̯͇̜̅̀̊̄̎̅̈́͆̄͒̎̓́̀̽̽̚̚͜͜o̵̡̨̫̖͓̻̦̣̤̞͙̟̼̭̤͇̱͐̈́͂̂́͊́̈́̋̈̀̉͊̈́̂̀͌͠u̶̡̡̢̨̞̦̲͓̳͉̦͚̙͕̞̼̞̲̟̣̰̖͖͍̗̠̜̪̝̞̮̱̪͔̘̣͖̫̙̮̝͇̥̭͙̫̭̓̓ͅͅ ̶̢̧̢̡̛̤͎͇̖͇̯͉̠̣̘̻̼̝̙͇̱̘̤͖̩̟̬͕̤̹̘̙͈͒̄̔̀̏̍͛̓̌͌̇̃̃̉̑͌̎̇͑͌̂͐͐̋̀͋̉̓͂͂̇̃͒͋͊̕̕̕͝͝͝w̴̡̡̡̛̛̹̻̰͚͇̠̘͒̒̀̍͛͛̇̉̈́͆̄̈́̌̀̈́̇̅́̂̍̑̆̈̈́̋̀͑̔̌̏͂̏͊̉͊̇͌̽͗̔̆͋̈͘͘̕͝͝ǫ̵̨̢̡̙̦͙̩̳̣̼͇̘̮̘̹̤̙̯͍̭̜̓̓̀́͒̾̈́̇̾͌͛̈́̊̌͌͜͝͠͝ų̴͉̹͍̮͖̱̈̿̉̇͌́̾̄̀͋̔̔̔̂̋̃̌̂̐̊̂͛͌͋̅̅̈̒̍͋̏̃͝͝ͅl̶̢̡̧̨̛͖̰̲̹̳͈̣̣̞͚̼̖̦̦͓͇̦̜͙̙̣̹͔̩̃̔́͗̇̒́̅̈́̃̆̐͒̎̈̌̌̆̒̆͑̀̓̊́͛̋̚͘͘͘͝͠d̷̡̟̰̩͎͉̹̜̳͈͍̩͇̞͇̳͔̣̪̞͓̜͚̰̹̦͑̉̈́͌̔̆͘͜ͅn̶̨̨̧̧͙͎̼̝̩̤̝̹̳͓͓̪͓̱̪̪̱̝̮͈̗̟̟̥̘͎̩̮͎̳͛̇͒͆̀̆̒͊̓̈͜’̸̨̹͓̝͔̫̟̹̣̺͍͉̬̎͆́̐̾̋̃̾̃͗̉̒̔̍́̄̆̐̄̔̓̾̚͠͠ţ̵̡̨̛̬͍͎̲̱̻̳̺͈͎̲̩͓̪̯͔̖̪͍̪͚͈̜̺̪̮̬̻̼̘̤̻̱̤̙͖̬̆̄̋̇̏́͋̍̂́́́̓́̓́̆͋̕͘̚͜͠͝ͅ ̴͕̥̱̜̥̣͕͐́̌̇̀̈́̏́̐̎̓̾̉̓̋͑̋̑̒̅͋̂̐̀́͛̓͋̆̈͊̈́͋̔̋̾̚̕̚̚̚͘͝͝͠ķ̴̧̧̲̣̠̤̪̹͓̭̘̝̠͈̫̠͚̰̠͔̟͖̳̦͔͚͉̮͐͒̃̒̈̇̾̽͂͛́̈́̀̀̀͌̽̀̈̎̄͌͋͒̑͆͂̎͒͑̒͗̓̈́͑͛̑̑͊͐̌͘͠͝͝n̷̬̤͉̠̞̮̤̞̻͎̼̰̗̆͆̎̀͐͜ͅô̴̢̡̧̧̼̜̖̩̯͎̞̜͉̪͈͔͍̻͓̘͚̠̹͇̟͉̱̈̎̏̾̇͆̔̓͌̌̇ͅw̶̢̪͙͓̗̝̫̦̤̩͍̞̹͇̪̝̥͈̐͑́̒̿̄̄̉̚̚̕͝ ̴̧̝̪̜̞̚',
        meaning: '含糊不清的 adj. \n抱歉提示壞了'
    },
    {
        word: 'ambition',
        hint: '很想完成一件事，像打贏這遊戲',
        meaning: '野心 N.'
    },
    {
        word: 'ambulance',
        hint: 'ㄛㄧㄛㄧ',
        meaning: '1. 救護車 N.'
    },
    {
        word: 'amend',
        hint: '改正錯誤事情',
        meaning: '1. 修正，修訂 V.'
    },
    {
        word: 'amiable',
        hint: '和藹可親的',
        meaning: '1. 和藹可親的 adj.'
    },
    {
        word: 'amid',
        hint: '"在"提示"之中"有答案',
        meaning: '1. 在...之中 prep.'
    },
    {
        word: 'among',
        hint: '太空狼人殺名字（我知道是很久以前的遊戲）',
        meaning: '1. 在...之中 prep.'
    },
    {
        word: 'amount',
        hint: '你的詞彙"量"',
        meaning: '1. 總數 N.'
    },
    {
        word: 'ample',
        hint: '這個遊戲"充滿"未解之謎（真的嗎）',
        meaning: '1. 充足的 adj.'
    },
    {
        word: 'amuse',
        hint: '給別人好玩的東西可以"使"別人"娛樂"',
        meaning: '1. 使娛樂 V.'
    },
    {
        word: 'amusement',
        hint: '打這個遊戲就是它一種',
        meaning: '1. 娛樂 N.'
    },
    {
        word: 'analyze',
        hint: '我每次都要在程式碼裡面做的事情',
        meaning: '1. 分析 V.'
    },
    {
        word: 'ancestor',
        hint: '我父母的父母的父母的父母的父母的...',
        meaning: '1. 祖先 N.'
    },
    {
        word: 'ancient',
        hint: '很久很久以前',
        meaning: '1. 古老的 adj.'
    },
    {
        word: 'and',
        hint: '很常用的連結詞',
        meaning: '1. 和，並且 conj.'
    },
    {
        word: 'anger',
        hint: '當一個遊戲太難使你一直輸，你會做的事',
        meaning: '1. 憤怒 N.'
    },
    {
        word: 'angle',
        hint: '另一個數學名詞',
        meaning: '1. 角度 N.'
    },
    {
        word: 'animal',
        hint: '一種生物',
        meaning: '1. 動物 N.'
    },
    {
        word: 'announce',
        hint: '讓大家知道',
        meaning: '1. 宣布 V.'
    },
    {
        word: 'annoy',
        hint: '太煩人了',
        meaning: '1. 使惱怒 V.'
    },
    {
        word: 'annual',
        hint: '每365天的',
        meaning: '1. 每年的 adj.'
    },
    {
        word: 'another',
        hint: '不是這個',
        meaning: '1. 另一個 adj.'
    },
    {
        word: 'answer',
        hint: '這個遊戲你要"回答"問題',
        meaning: '1. 回答 N. V.'
    },
    {
        word: 'anxiety',
        hint: '一種負面情緒',
        meaning: '1. 焦慮 N.'
    },
    {
        word: 'any',
        hint: '我對這個遊戲沒有"任何"疑問',
        meaning: '1. 任何 adj. pron.'
    },
    {
        word: 'apology',
        hint: '對不起，我不知道答案',
        meaning: '1. 道歉 N.'
    },
    {
        word: 'apparent',
        hint: '我這樣會太明顯，我還是不要加引號好了',
        meaning: '1. 明顯的 adj.'
    },
    {
        word: 'appeal',
        hint: '這遊戲會"吸引"人（會嗎）',
        meaning: '1. 吸引 N. V.'
    },
    {
        word: 'appear',
        hint: '一個野生的詞"出現"了！',
        meaning: '1. 出現 V.'
    },
    {
        word: 'appoint',
        hint: '這只有用過google classroom的人知道，每次你還沒交作業時，繳交專區會寫"已__"，找出他的英文就是答案',
        meaning: '1. 指派 V.'
    },
    {
        word: 'approach',
        hint: '終點正越來越"接近"',
        meaning: '1. 接近 N. V.'
    },
    {
        word: 'approve',
        hint: '我"贊成"這遊戲的說法',
        meaning: '1. 贊成 V.'
    },
    {
        word: 'approximate',
        hint: '我"大約"會花一個月做這個遊戲（看看準不準）',
        meaning: '1. 近似的 adj. V.'
    },
    {
        word: 'arise',
        hint: '"發生"什麼事？',
        meaning: '發生 V.'
    },
    {
        word: 'arm',
        hint: '手臂',
        meaning: '手臂 N.'
    },
    {
        word: 'around',
        hint: '在...周圍',
        meaning: '在...周圍 prep. adv.'
    },
    {
        word: 'arrange',
        hint: '安排',
        meaning: '安排 V.'
    },
    {
        word: 'arrest',
        hint: '逮捕',
        meaning: '逮捕 V.'
    },
    {
        word: 'arrive',
        hint: '到達',
        meaning: '到達 V.'
    },
    {
        word: 'article',
        hint: '文章',
        meaning: '文章 N.'
    },
    {
        word: 'artificial',
        hint: '人造的',
        meaning: '人造的 adj.'
    },
    {
        word: 'as',
        hint: '如同',
        meaning: '如同 conj.'
    },
    {
        word: 'ashamed',
        hint: '感到羞愧的',
        meaning: '感到羞愧的 adj.'
    },
    {
        word: 'aside',
        hint: '在一邊',
        meaning: '在一邊 adv. (Hint: 把東西放在一邊)'
    },
    {
        word: 'ask',
        hint: '問',
        meaning: '問 V.'
    },
    {
        word: 'asleep',
        hint: '睡著的',
        meaning: '睡著的 adj.'
    },
    {
        word: 'aspect',
        hint: '方面',
        meaning: '方面 N.'
    },
    {
        word: 'assault',
        hint: '攻擊',
        meaning: '攻擊 N. V.'
    },
    {
        word: 'assert',
        hint: '斷言',
        meaning: '斷言 V.'
    },
    {
        word: 'assess',
        hint: '評估',
        meaning: '評估 V.'
    },
    {
        word: 'asset',
        hint: '資產',
        meaning: '資產 N.'
    },
    {
        word: 'assign',
        hint: '分配',
        meaning: '分配 V.'
    },
    {
        word: 'assist',
        hint: '協助',
        meaning: '協助 V.'
    },
    {
        word: 'associate',
        hint: '聯想',
        meaning: '聯想 V. \n2. 同事 N. adj.'
    },
    {
        word: 'assume',
        hint: '假設',
        meaning: '假設 V.'
    },
    {
        word: 'athlete',
        hint: '運動員',
        meaning: '運動員 N.'
    },
    {
        word: 'atmosphere',
        hint: '大氣層',
        meaning: '大氣層 N.'
    },
    {
        word: 'attach',
        hint: '附上',
        meaning: '附上 V.'
    },
    {
        word: 'attack',
        hint: '攻擊',
        meaning: '攻擊 N. V.'
    },
    {
        word: 'attempt',
        hint: '嘗試',
        meaning: '嘗試 N. V.'
    },
    {
        word: 'attend',
        hint: '參加',
        meaning: '參加 V.'
    },
    {
        word: 'attention',
        hint: '注意力',
        meaning: '注意力 N.'
    },
    {
        word: 'attitude',
        hint: '態度',
        meaning: '態度 N.'
    },
    {
        word: 'attract',
        hint: '吸引',
        meaning: '吸引 V.'
    },
    {
        word: 'auction',
        hint: '拍賣',
        meaning: '拍賣 N. V.'
    },
    {
        word: 'audience',
        hint: '觀眾',
        meaning: '觀眾 N.'
    },
    {
        word: 'August',
        hint: '我生日後一個月',
        meaning: '八月 N.'
    },
    {
        word: 'aunt',
        hint: '阿姨',
        meaning: '阿姨 N.'
    },
    {
        word: 'authentic',
        hint: '真實的',
        meaning: '真實的 adj.'
    },
    {
        word: 'authority',
        hint: '權威',
        meaning: '權威 N.'
    },
    {
        word: 'automatic',
        hint: '自動的',
        meaning: '自動的 adj.'
    },
    {
        word: 'avenue',
        hint: '大道',
        meaning: '大道 N.'
    },
    {
        word: 'average',
        hint: '平均',
        meaning: '平均 N. adj. V.'
    },
    {
        word: 'avoid',
        hint: '避免',
        meaning: '避免 V.'
    },
    {
        word: 'awake',
        hint: '醒著的',
        meaning: '醒著的 adj.'
    },
    {
        word: 'award',
        hint: '這個遊戲不會給"獎勵"',
        meaning: '獎、獎勵 N. V.'
    },
    {
        word: 'awesome',
        hint: '太讚了',
        meaning: '令人驚嘆的 adj.'
    },
    {
        word: 'awful',
        hint: '太爛了',
        meaning: '糟糕的 adj.'
    },
    {
        word: 'awkward',
        hint: '尷尬的',
        meaning: '尷尬的 adj.'
    },
    {
        word: 'baby',
        hint: '嬰兒',
        meaning: '嬰兒 N.'
    },
    {
        word: 'back',
        hint: '背部',
        meaning: '1. 背部 N. \n2. 後面 adv.'
    },
    {
        word: 'bad',
        hint: '不能形容這遊戲',
        meaning: '不好的 adj.'
    },
    {
        word: 'bag',
        hint: '袋子',
        meaning: '袋子 N.'
    },
    {
        word: 'balance',
        hint: '平衡',
        meaning: '平衡 N. V.'
    },
    {
        word: 'ball',
        hint: '球',
        meaning: '球 N.'
    },
    {
        word: 'band',
        hint: '樂團',
        meaning: '樂團 N.'
    },
    {
        word: 'bank',
        hint: '銀行',
        meaning: '銀行 N. \n2. 河岸 N.'
    },
    {
        word: 'bar',
        hint: '酒吧',
        meaning: '酒吧 N.'
    },
    {
        word: 'bare',
        hint: '赤裸的',
        meaning: '赤裸的 adj.'
    },
    {
        word: 'bargain',
        hint: '交易',
        meaning: '交易 N. V.'
    },
    {
        word: 'barrier',
        hint: '障礙',
        meaning: '障礙 N.'
    },
    {
        word: 'base',
        hint: '基地',
        meaning: '基地 N.'
    },
    {
        word: 'basic',
        hint: '基本的',
        meaning: '基本的 adj.'
    },
    {
        word: 'basket',
        hint: '籃子',
        meaning: '籃子 N.'
    },
    {
        word: 'bath',
        hint: '洗澡',
        meaning: '洗澡 N. V.'
    },
    {
        word: 'battery',
        hint: '電池',
        meaning: '電池 N.'
    },
    {
        word: 'battle',
        hint: '戰鬥',
        meaning: '戰鬥 N. V.'
    },
    {
        word: 'be',
        hint: '英文老師最愛的動詞',
        meaning: 'be動詞 V.'
    },
    {
        word: 'beach',
        hint: '海灘',
        meaning: '海灘 N.'
    },
    {
        word: 'bear',
        hint: '熊',
        meaning: '熊 N.'
    },
    {
        word: 'beat',
        hint: '打敗',
        meaning: '打敗 V.'
    },
    {
        word: 'beautiful',
        hint: '美麗的',
        meaning: '美麗的 adj.'
    },
    {
        word: 'because',
        hint: '因為',
        meaning: '因為 conj.'
    },
    {
        word: 'become',
        hint: '變成',
        meaning: '變成 V.'
    },
    {
        word: 'bed',
        hint: '床',
        meaning: '床 N.'
    },
    {
        word: 'before',
        hint: '在...之前',
        meaning: '在...之前 prep. conj. adv.'
    },
    {
        word: 'begin',
        hint: '那我們要"開始"囉！',
        meaning: '開始 V.'
    },
    {
        word: 'behave',
        hint: '表現',
        meaning: '表現 V.'
    },
    {
        word: 'behind',
        hint: '我在你後面（沒有啦）',
        meaning: '在...後面 prep. adv.'
    },
    {
        word: 'believe',
        hint: '"相信"我，這遊戲有彩蛋',
        meaning: '相信 V.'
    },
    {
        word: 'bell',
        hint: '鈴',
        meaning: '鈴 N.'
    },
    {
        word: 'belong',
        hint: '屬於',
        meaning: '屬於 V.'
    },
    {
        word: 'below',
        hint: '在...下方',
        meaning: '在...下方 prep. adv.'
    },
    {
        word: 'belt',
        hint: '腰帶',
        meaning: '腰帶 N.'
    },
    {
        word: 'bench',
        hint: '長凳',
        meaning: '長凳 N.'
    },
    {
        word: 'beneath',
        hint: '在...下面',
        meaning: '在...下面 prep. adv.'
    },
    {
        word: 'benefit',
        hint: '好處',
        meaning: '好處 N. V.'
    },
    {
        word: 'beside',
        hint: '在...旁邊',
        meaning: '在...旁邊 prep. adv.'
    },
    {
        word: 'best',
        hint: '最好的',
        meaning: '1. 最好的 adj. adv. \n2. 最佳 N.'
    },
    {
        word: 'better',
        hint: '更好的',
        meaning: '更好的 adj. adv.'
    },
    {
        word: 'between',
        hint: '在...之間',
        meaning: '在...之間 prep.'
    },
    {
        word: 'beyond',
        hint: '超過',
        meaning: '超過 prep.'
    },
    {
        word: 'bicycle',
        hint: '自行車',
        meaning: '自行車 N.'
    },
    {
        word: 'big',
        hint: '大的',
        meaning: '大的 adj.'
    },
    {
        word: 'bill',
        hint: '帳單',
        meaning: '帳單 N. \n2. 紙鈔 N.'
    },
    {
        word: 'biology',
        hint: '我國一時第二強的科目',
        meaning: '生物學 N.'
    },
    {
        word: 'bird',
        hint: '會飛很高的內溫動物',
        meaning: '鳥 N.'
    },
    {
        word: 'birth',
        hint: '這件事沒發生就不會有你',
        meaning: '出生 N.'
    },
    {
        word: 'birthday',
        hint: '7月26日',
        meaning: '生日 N.'
    },
    {
        word: 'bit',
        hint: '小片',
        meaning: '1. 小片 N. \n2. 電腦位元，像32-bit或64-bit N.'
    },
    {
        word: 'bite',
        hint: '咬',
        meaning: '1. 咬 V. \n2. 一口 N.'
    },
    {
        word: 'bitter',
        hint: '苦的',
        meaning: '苦的 adj.'
    },
    {
        word: 'black',
        hint: '白色的相反',
        meaning: '黑色的 adj.'
    },
    {
        word: 'blame',
        hint: '不要怪說為什麼沒在這個提示裡加引號',
        meaning: '責怪 V. N.'
    },
    {
        word: 'blanket',
        hint: '毯子',
        meaning: '毯子、被子 N.'
    },
    {
        word: 'block',
        hint: '一個有六個面立體圖形',
        meaning: '1. 區塊 N. \n2. 阻擋 V. \n3. 方塊 N.'
    },
    {
        word: 'blood',
        hint: '受傷時會流出來的東西',
        meaning: '血液 N.'
    },
    {
        word: 'blow',
        hint: '吹',
        meaning: '1. 吹 V. \n2. 打擊 N.'
    },
    {
        word: 'blue',
        hint: '三原色其中一個顏色',
        meaning: '1. 藍色的 adj.'
    },
    {
        word: 'board',
        hint: '木板',
        meaning: '木板 N.'
    },
    {
        word: 'boat',
        hint: '浮在海上東西',
        meaning: '船 N.'
    },
    {
        word: 'body',
        hint: '大家都有的',
        meaning: '身體 N.'
    },
    {
        word: 'boil',
        hint: '可以讓水變水蒸氣',
        meaning: '煮沸 V.'
    },
    {
        word: 'bomb',
        hint: '會爆炸的東西',
        meaning: '1. 炸彈 N. \n2. 失敗 N.'
    },
    {
        word: 'bone',
        hint: '白色的、很硬的、在你身體裡',
        meaning: '骨頭 N.'
    },
    {
        word: 'book',
        hint: '我最討厭讀的東西',
        meaning: '書 N.'
    },
    {
        word: 'border',
        hint: '邊界',
        meaning: '邊界 N.'
    },
    {
        word: 'bore',
        hint: '使厭煩',
        meaning: '使厭煩 V.'
    },
    {
        word: 'borrow',
        hint: '借',
        meaning: '借 V.'
    },
    {
        word: 'both',
        hint: '兩者',
        meaning: '兩者 pron. adj.'
    },
    {
        word: 'bother',
        hint: '打擾',
        meaning: '打擾 V. N.'
    },
    {
        word: 'bottle',
        hint: '瓶子',
        meaning: '瓶子 N.'
    },
    {
        word: 'bottom',
        hint: '底部',
        meaning: '1. 底部 N. \n2. 臀部 N.'
    },
    {
        word: 'boundary',
        hint: '界限',
        meaning: '界限 N.'
    },
    {
        word: 'bow',
        hint: '鞠躬',
        meaning: '鞠躬 V. N.'
    },
    {
        word: 'bowl',
        hint: '碗',
        meaning: '碗 N.'
    },
    {
        word: 'box',
        hint: '盒子',
        meaning: '盒子 N.'
    },
    {
        word: 'boy',
        hint: '男孩',
        meaning: '男孩 N.'
    },
    {
        word: 'brain',
        hint: '頭裡面的東西',
        meaning: '大腦 N.'
    },
    {
        word: 'branch',
        hint: '樹枝',
        meaning: '1. 樹枝 N. \n2. 分支 N.'
    },
    {
        word: 'brave',
        hint: '勇敢的',
        meaning: '勇敢的 adj.'
    },
    {
        word: 'bread',
        hint: '我超愛吃',
        meaning: '麵包 N.'
    },
    {
        word: 'break',
        hint: '打破',
        meaning: '打破 V. N.'
    },
    {
        word: 'breakfast',
        hint: '早餐',
        meaning: '早餐 N.'
    },
    {
        word: 'breath',
        hint: '你現在就在做的事',
        meaning: '呼吸 N.'
    },
    {
        word: 'brick',
        hint: '有些牆壁是用這個做的',
        meaning: '磚塊 N.'
    },
    {
        word: 'bridge',
        hint: '橋',
        meaning: '橋 N.'
    },
    {
        word: 'brief',
        hint: '簡短的',
        meaning: '簡短的 adj.'
    },
    {
        word: 'bright',
        hint: '黑暗的相反',
        meaning: '明亮的 adj.'
    },
    {
        word: 'bring',
        hint: '帶來',
        meaning: '帶來 V.'
    },
    {
        word: 'broad',
        hint: '寬廣的',
        meaning: '寬廣的 adj.'
    },
    {
        word: 'broadcast',
        hint: '廣播',
        meaning: '廣播 N. V.'
    },
    {
        word: 'brother',
        hint: '簡稱 bro.',
        meaning: '兄弟 N.'
    },
    {
        word: 'brown',
        hint: '棕色的',
        meaning: '棕色的 adj.'
    },
    {
        word: 'brush',
        hint: '刷子',
        meaning: '刷子 N. V.'
    },
    {
        word: 'bubble',
        hint: '泡泡',
        meaning: '泡泡 N.'
    },
    {
        word: 'budget',
        hint: '預算',
        meaning: '1. 預算 N. V. \n2. 廉價、廉價的 N. adj.'
    },
    {
        word: 'build',
        hint: '建造',
        meaning: '建造 N. V.'
    },
    {
        word: 'building',
        hint: '建築物',
        meaning: '1. 建築物 N. \n2. 正在建 V.'
    },
    {
        word: 'bullet',
        hint: '子彈',
        meaning: '1. 子彈 N. \n2. 一個清單的其中一點 N.'
    },
    {
        word: 'bump',
        hint: '碰撞',
        meaning: '碰撞 V. N.'
    },
    {
        word: 'burn',
        hint: '燃燒',
        meaning: '燃燒 V. N.'
    },
    {
        word: 'burst',
        hint: '爆裂',
        meaning: '爆裂 V. N.'
    },
    {
        word: 'bury',
        hint: '埋',
        meaning: '埋 V.'
    },
    {
        word: 'bus',
        hint: '公車',
        meaning: '公車 N.'
    },
    {
        word: 'business',
        hint: '事業',
        meaning: '1. 事業 N. \n2. 商業 N.'
    },
    {
        word: 'busy',
        hint: '最近超忙碌，都來不及加引號',
        meaning: '忙碌的 adj.'
    },
    {
        word: 'but',
        hint: '但我就是不會加引號',
        meaning: '但是 conj.'
    },
    {
        word: 'butter',
        hint: '奶油',
        meaning: '奶油 N.'
    },
    {
        word: 'button',
        hint: '按鈕',
        meaning: '1. 按鈕 N. \n2. 扣子 N.'
    },
    {
        word: 'buy',
        hint: '買',
        meaning: '買 V.'
    },
    {
        word: 'by',
        hint: '藉著',
        meaning: '藉著 prep. adv.'
    },
    {
        word: 'cabinet',
        hint: '櫥櫃',
        meaning: '櫥櫃 N.'
    },
    {
        word: 'cable',
        hint: '電纜',
        meaning: '電線、電纜 N.'
    },
    {
        word: 'cake',
        hint: '超好吃點心',
        meaning: '蛋糕 N.'
    },
    {
        word: 'calculate',
        hint: '數學需要做的事',
        meaning: '計算 V.'
    },
    {
        word: 'calendar',
        hint: '日曆',
        meaning: '日曆 N.'
    },
    {
        word: 'call',
        hint: '打電話',
        meaning: '打電話 V. N.'
    },
    {
        word: 'camera',
        hint: '一個可以把東西拍起來東西',
        meaning: '相機 N.'
    },
    {
        word: 'camp',
        hint: '營地',
        meaning: '1. 營地 N. \n2. 錄影 V.'
    },
    {
        word: 'campaign',
        hint: '活動',
        meaning: '1. 活動 N. V. \n2. 選舉時拉票 V.'
    },
    {
        word: 'can',
        hint: '能',
        meaning: '1. 能 aux. \n2. 瓶子、罐子 N.'
    },
    {
        word: 'cancel',
        hint: '取消',
        meaning: '取消 V.'
    },
    {
        word: 'candle',
        hint: '放在蛋糕東西',
        meaning: '蠟燭 N.'
    },
    {
        word: 'candy',
        hint: '小孩最愛吃的東西',
        meaning: '糖果 N.'
    },
    {
        word: 'cap',
        hint: '帽子',
        meaning: '1. 帽子，指這種🧢 N. \n2. 網路用語，形容一件事情是假的 adj.'
    },
    {
        word: 'capital',
        hint: '首都',
        meaning: '1. 首都 N. \n2. 資本 N. \n3. 大寫字母 adj.'
    },
    {
        word: 'capture',
        hint: '捕捉',
        meaning: '捕捉 V. N.'
    },
    {
        word: 'car',
        hint: '汽車',
        meaning: '汽車 N.'
    },
    {
        word: 'card',
        hint: '阿嬤虧"喀"',
        meaning: '卡片 N.'
    },
    {
        word: 'care',
        hint: '關心',
        meaning: '關心 V. N.'
    },
    {
        word: 'careful',
        hint: '小心的',
        meaning: '小心的 adj.'
    },
    {
        word: 'carry',
        hint: '攜帶',
        meaning: '攜帶 V.'
    },
    {
        word: 'case',
        hint: '情況',
        meaning: '情況 N.'
    },
    {
        word: 'cash',
        hint: '現金',
        meaning: '現金 N.'
    },
    {
        word: 'cat',
        hint: '貓',
        meaning: '貓 N.'
    },
    {
        word: 'catch',
        hint: '抓住',
        meaning: '抓住 V.'
    },
    {
        word: 'category',
        hint: '類別',
        meaning: '類別 N.'
    },
    {
        word: 'cause',
        hint: '引起',
        meaning: '引起 V. N.'
    },
    {
        word: 'ceiling',
        hint: '天花板',
        meaning: '天花板 N.'
    },
    {
        word: 'celebrate',
        hint: '慶祝',
        meaning: '慶祝 V.'
    },
    {
        word: 'cell',
        hint: '細胞',
        meaning: '細胞 N.'
    },
    {
        word: 'center',
        hint: '中心',
        meaning: '中心 N.'
    },
    {
        word: 'century',
        hint: '世紀',
        meaning: '世紀 N.'
    },
    {
        word: 'ceremony',
        hint: '典禮',
        meaning: '典禮 N.'
    },
    {
        word: 'chain',
        hint: '鏈',
        meaning: '鏈 N.'
    },
    {
        word: 'chair',
        hint: '椅子',
        meaning: '椅子 N.'
    },
    {
        word: 'challenge',
        hint: '挑戰',
        meaning: '挑戰 N. V.'
    },
    {
        word: 'champion',
        hint: '冠軍',
        meaning: '冠軍 N.'
    },
    {
        word: 'chance',
        hint: '機會',
        meaning: '機會 N.'
    },
    {
        word: 'change',
        hint: '改變',
        meaning: '改變 V. N.'
    },
    {
        word: 'channel',
        hint: '頻道',
        meaning: '頻道 N.'
    },
    {
        word: 'charge',
        hint: '收費',
        meaning: '收費 V. N.'
    },
    {
        word: 'charity',
        hint: '慈善',
        meaning: '慈善 N.'
    },
    {
        word: 'chart',
        hint: '圖表',
        meaning: '圖表 N. V.'
    },
    {
        word: 'chase',
        hint: '追逐',
        meaning: '追逐 V. N.'
    },
    {
        word: 'cheap',
        hint: '便宜的',
        meaning: '便宜的 adj.'
    },
    {
        word: 'check',
        hint: '檢查',
        meaning: '檢查 V. N.'
    },
    {
        word: 'cheese',
        hint: '乳酪',
        meaning: '乳酪 N.'
    },
    {
        word: 'chemical',
        hint: '化學的',
        meaning: '化學的 adj. N.'
    },
    {
        word: 'chest',
        hint: '胸膛',
        meaning: '胸膛 N.'
    },
    {
        word: 'chicken',
        hint: '雞肉',
        meaning: '雞肉 N.'
    },
    {
        word: 'chief',
        hint: '主要的',
        meaning: '主要的 adj. N.'
    },
    {
        word: 'child',
        hint: '孩子',
        meaning: '孩子 N.'
    },
    {
        word: 'childhood',
        hint: '童年',
        meaning: '童年 N.'
    },
    {
        word: 'chip',
        hint: '晶片',
        meaning: '晶片 N. V.'
    },
    {
        word: 'chocolate',
        hint: '巧克力',
        meaning: '巧克力 N.'
    },
    {
        word: 'choice',
        hint: '選擇',
        meaning: '選擇 N.'
    },
    {
        word: 'choose',
        hint: '選擇',
        meaning: '選擇 V.'
    },
    {
        word: 'church',
        hint: '教堂',
        meaning: '教堂 N.'
    },
    {
        word: 'cigarette',
        hint: '香煙',
        meaning: '香煙 N.'
    },
    {
        word: 'circle',
        hint: '圓圈',
        meaning: '圓圈 N. V.'
    },
    {
        word: 'circumstance',
        hint: '情況',
        meaning: '情況 N.'
    },
    {
        word: 'citizen',
        hint: '公民',
        meaning: '公民 N.'
    },
    {
        word: 'city',
        hint: '城市',
        meaning: '城市 N.'
    },
    {
        word: 'civil',
        hint: '公民的',
        meaning: '公民的 adj.'
    },
    {
        word: 'claim',
        hint: '聲稱',
        meaning: '聲稱 V. N.'
    },
    {
        word: 'class',
        hint: '班級',
        meaning: '班級 N.'
    },
    {
        word: 'classic',
        hint: '經典的',
        meaning: '經典的 adj. N.'
    },
    {
        word: 'clean',
        hint: '清潔',
        meaning: '清潔 V. adj.'
    },
    {
        word: 'clerk',
        hint: '店員',
        meaning: '店員 N.'
    },
    {
        word: 'click',
        hint: '點擊',
        meaning: '點擊 V. N.'
    },
    {
        word: 'client',
        hint: '客戶',
        meaning: '客戶 N.'
    },
    {
        word: 'climate',
        hint: '氣候',
        meaning: '氣候 N.'
    },
    {
        word: 'climb',
        hint: '爬升',
        meaning: '爬升 V. N.'
    },
    {
        word: 'clock',
        hint: '時鐘',
        meaning: '時鐘 N.'
    },
    {
        word: 'close',
        hint: '關閉',
        meaning: '關閉 V. adj. adv.'
    },
    {
        word: 'closet',
        hint: '壁櫥',
        meaning: '壁櫥 N.'
    },
    {
        word: 'cloth',
        hint: '布料',
        meaning: '布料 N.'
    },
    {
        word: 'clothes',
        hint: '衣服',
        meaning: '衣服 N.'
    },
    {
        word: 'cloud',
        hint: '雲',
        meaning: '雲 N.'
    },
    {
        word: 'club',
        hint: '俱樂部',
        meaning: '俱樂部 N.'
    },
    {
        word: 'clue',
        hint: '線索',
        meaning: '線索 N.'
    },
    {
        word: 'coach',
        hint: '教練',
        meaning: '教練 N. V.'
    },
    {
        word: 'coal',
        hint: '煤',
        meaning: '煤 N.'
    },
    {
        word: 'coast',
        hint: '海岸',
        meaning: '海岸 N.'
    },
    {
        word: 'coat',
        hint: '外套',
        meaning: '外套 N.'
    },
    {
        word: 'code',
        hint: '代碼',
        meaning: '代碼 N.'
    },
    {
        word: 'coffee',
        hint: '咖啡',
        meaning: '咖啡 N.'
    },
    {
        word: 'coin',
        hint: '硬幣',
        meaning: '硬幣 N.'
    },
    {
        word: 'cold',
        hint: '冷的',
        meaning: '冷的 adj. N.'
    },
    {
        word: 'collaborate',
        hint: '合作',
        meaning: '合作 V.'
    },
    {
        word: 'collapse',
        hint: '崩潰',
        meaning: '崩潰 V. N.'
    },
    {
        word: 'collect',
        hint: '收集',
        meaning: '收集 V.'
    },
    {
        word: 'college',
        hint: '大學',
        meaning: '大學 N.'
    },
    {
        word: 'color',
        hint: '顏色',
        meaning: '顏色 N. V.'
    },
    {
        word: 'combine',
        hint: '結合',
        meaning: '結合 V.'
    },
    {
        word: 'comfort',
        hint: '舒適',
        meaning: '舒適 N. V.'
    },
    {
        word: 'command',
        hint: '命令',
        meaning: '命令 V. N.'
    },
    {
        word: 'comment',
        hint: '評論',
        meaning: '評論 V. N.'
    },
    {
        word: 'commerce',
        hint: '商業',
        meaning: '商業 N.'
    },
    {
        word: 'commit',
        hint: '承諾',
        meaning: '承諾 V.'
    },
    {
        word: 'common',
        hint: '共同的',
        meaning: '共同的 adj.'
    },
    {
        word: 'community',
        hint: '社區',
        meaning: '社區 N.'
    },
    {
        word: 'company',
        hint: '公司',
        meaning: '公司 N.'
    },
    {
        word: 'compare',
        hint: '比較',
        meaning: '比較 V.'
    },
    {
        word: 'compassion',
        hint: '同情心',
        meaning: '同情心 N.'
    },
    {
        word: 'compete',
        hint: '競爭',
        meaning: '競爭 V.'
    },
    {
        word: 'complete',
        hint: '完成',
        meaning: '完成 V. adj.'
    },
    {
        word: 'complex',
        hint: '複雜的',
        meaning: '複雜的 adj.'
    },
    {
        word: 'complicate',
        hint: '使複雜',
        meaning: '使複雜 V.'
    },
    {
        word: 'compose',
        hint: '構成',
        meaning: '構成 V.'
    },
    {
        word: 'computer',
        hint: '電腦',
        meaning: '電腦 N.'
    },
    {
        word: 'concern',
        hint: '擔心',
        meaning: '擔心 V. N.'
    },
    {
        word: 'concert',
        hint: '音樂會',
        meaning: '音樂會 N.'
    },
    {
        word: 'condition',
        hint: '條件',
        meaning: '條件 N.'
    },
    {
        word: 'confident',
        hint: '有信心的',
        meaning: '有信心的 adj.'
    },
    {
        word: 'conflict',
        hint: '衝突',
        meaning: '衝突 N. V.'
    },
    {
        word: 'congratulate',
        hint: '祝賀',
        meaning: '祝賀 V.'
    },
    {
        word: 'connect',
        hint: '連接',
        meaning: '連接 V.'
    },
    {
        word: 'clear',
        hint: '清楚的',
        meaning: '清楚的 adj. V.'
    },
    {
        word: 'crown',
        hint: '皇冠',
        meaning: '皇冠 N.'
    },
    {
        word: 'crucial',
        hint: '關鍵的',
        meaning: '關鍵的 adj.'
    },
    {
        word: 'crush',
        hint: '壓碎',
        meaning: '壓碎 V. N.'
    },
    {
        word: 'cry',
        hint: '哭泣',
        meaning: '哭泣 V. N.'
    },
    {
        word: 'crystal',
        hint: '水晶',
        meaning: '水晶 N.'
    },
    {
        word: 'cube',
        hint: '立方體',
        meaning: '立方體 N.'
    },
    {
        word: 'cultivate',
        hint: '培養',
        meaning: '培養 V.'
    },
    {
        word: 'culture',
        hint: '文化',
        meaning: '文化 N.'
    },
    {
        word: 'cup',
        hint: '杯子',
        meaning: '杯子 N.'
    },
    {
        word: 'curious',
        hint: '好奇的',
        meaning: '好奇的 adj.'
    },
    {
        word: 'current',
        hint: '當前的',
        meaning: '當前的 adj. N.'
    },
    {
        word: 'curtain',
        hint: '窗簾',
        meaning: '窗簾 N.'
    },
    {
        word: 'curve',
        hint: '彎曲',
        meaning: '彎曲 V. N.'
    },
    {
        word: 'custom',
        hint: '習慣',
        meaning: '習慣 N.'
    },
    {
        word: 'customer',
        hint: '顧客',
        meaning: '顧客 N.'
    },
    {
        word: 'cut',
        hint: '剪',
        meaning: '剪 V. N.'
    },
    {
        word: 'cycle',
        hint: '循環',
        meaning: '循環 N. V.'
    },
    {
        word: 'cylinder',
        hint: '圓柱體',
        meaning: '圓柱體 N.'
    },
    {
        word: 'dare',
        hint: '敢',
        meaning: '敢 V.'
    },
    {
        word: 'dark',
        hint: '黑暗',
        meaning: '黑暗 N. adj.'
    },
    {
        word: 'data',
        hint: '數據',
        meaning: '數據 N.'
    },
    {
        word: 'date',
        hint: '日期',
        meaning: '日期 N. V.'
    },
    {
        word: 'daughter',
        hint: '女兒',
        meaning: '女兒 N.'
    },
    {
        word: 'dawn',
        hint: '黎明',
        meaning: '黎明 N.'
    },
    {
        word: 'day',
        hint: '一天',
        meaning: '一天 N.'
    },
    {
        word: 'dead',
        hint: '死的',
        meaning: '死的 adj.'
    },
    {
        word: 'deal',
        hint: '交易',
        meaning: '交易 N. V.'
    },
    {
        word: 'dear',
        hint: '親愛的',
        meaning: '親愛的 adj.'
    },
    {
        word: 'death',
        hint: '死亡',
        meaning: '死亡 N.'
    },
    {
        word: 'debate',
        hint: '辯論',
        meaning: '辯論 V. N.'
    },
    {
        word: 'debt',
        hint: '債務',
        meaning: '債務 N.'
    },
    {
        word: 'decade',
        hint: '十年',
        meaning: '十年 N.'
    },
    {
        word: 'decay',
        hint: '腐爛',
        meaning: '腐爛 V. N.'
    },
    {
        word: 'deceive',
        hint: '欺騙',
        meaning: '欺騙 V.'
    },
    {
        word: 'December',
        hint: '十二月',
        meaning: '十二月 N.'
    },
    {
        word: 'decide',
        hint: '決定',
        meaning: '決定 V.'
    },
    {
        word: 'decision',
        hint: '決定',
        meaning: '決定 N.'
    },
    {
        word: 'declare',
        hint: '宣布',
        meaning: '宣布 V.'
    },
    {
        word: 'decorate',
        hint: '裝飾',
        meaning: '裝飾 V.'
    },
    {
        word: 'decrease',
        hint: '減少',
        meaning: '減少 V. N.'
    },
    {
        word: 'dedicate',
        hint: '奉獻',
        meaning: '奉獻 V.'
    },
    {
        word: 'deep',
        hint: '深的',
        meaning: '深的 adj. adv.'
    },
    {
        word: 'deer',
        hint: '鹿',
        meaning: '鹿 N.'
    },
    {
        word: 'defeat',
        hint: '擊敗',
        meaning: '擊敗 V. N.'
    },
    {
        word: 'defend',
        hint: '保衛',
        meaning: '保衛 V.'
    },
    {
        word: 'define',
        hint: '定義',
        meaning: '定義 V.'
    },
    {
        word: 'degree',
        hint: '學位',
        meaning: '學位 N.'
    },
    {
        word: 'delay',
        hint: '延遲',
        meaning: '延遲 V. N.'
    },
    {
        word: 'delegate',
        hint: '代表',
        meaning: '代表 N. V.'
    },
    {
        word: 'delete',
        hint: '刪除',
        meaning: '刪除 V.'
    },
    {
        word: 'delight',
        hint: '高興',
        meaning: '高興 V. N.'
    },
    {
        word: 'deliver',
        hint: '交付',
        meaning: '交付 V.'
    },
    {
        word: 'demand',
        hint: '要求',
        meaning: '要求 V. N.'
    },
    {
        word: 'democracy',
        hint: '民主',
        meaning: '民主 N.'
    },
    {
        word: 'demonstrate',
        hint: '展示',
        meaning: '展示 V.'
    },
    {
        word: 'dense',
        hint: '密集的',
        meaning: '密集的 adj.'
    },
    {
        word: 'deny',
        hint: '否認',
        meaning: '否認 V.'
    },
    {
        word: 'depart',
        hint: '離開',
        meaning: '離開 V.'
    },
    {
        word: 'depend',
        hint: '依賴',
        meaning: '依賴 V.'
    },
    {
        word: 'deploy',
        hint: '部署',
        meaning: '部署 V.'
    },
    {
        word: 'deposit',
        hint: '存款',
        meaning: '存款 N. V.'
    },
    {
        word: 'depress',
        hint: '沮喪',
        meaning: '沮喪 V.'
    },
    {
        word: 'derive',
        hint: '衍生',
        meaning: '衍生 V.'
    },
    {
        word: 'descend',
        hint: '下降',
        meaning: '下降 V.'
    },
    {
        word: 'describe',
        hint: '描述',
        meaning: '描述 V.'
    },
    {
        word: 'desert',
        hint: '沙漠',
        meaning: '沙漠 N. adj. V.'
    },
    {
        word: 'design',
        hint: '設計',
        meaning: '設計 V. N.'
    },
    {
        word: 'desire',
        hint: '渴望',
        meaning: '渴望 V. N.'
    },
    {
        word: 'desk',
        hint: '書桌',
        meaning: '書桌 N.'
    },
    {
        word: 'destroy',
        hint: '摧毀',
        meaning: '摧毀 V.'
    },
    {
        word: 'detail',
        hint: '細節',
        meaning: '細節 N.'
    },
    {
        word: 'detect',
        hint: '檢測',
        meaning: '檢測 V.'
    },
    {
        word: 'develop',
        hint: '發展',
        meaning: '發展 V.'
    },
    {
        word: 'device',
        hint: '設備',
        meaning: '設備 N.'
    },
    {
        word: 'devote',
        hint: '奉獻',
        meaning: '奉獻 V.'
    },
    {
        word: 'diagnose',
        hint: '診斷',
        meaning: '診斷 V.'
    },
    {
        word: 'diamond',
        hint: '麥塊1.16之前最硬的礦',
        meaning: '鑽石 N.'
    },
    {
        word: 'diary',
        hint: '日記',
        meaning: '日記 N.'
    },
    {
        word: 'dictate',
        hint: '口述',
        meaning: '口述 V.'
    },
    {
        word: 'diet',
        hint: '飲食',
        meaning: '飲食 N.'
    },
    {
        word: 'differ',
        hint: '不同',
        meaning: '不同 V.'
    },
    {
        word: 'different',
        hint: '不同的',
        meaning: '不同的 adj.'
    },
    {
        word: 'difficult',
        hint: '困難的',
        meaning: '困難的 adj.'
    },
    {
        word: 'dig',
        hint: '挖',
        meaning: '挖 V.'
    },
    {
        word: 'dimension',
        hint: '維度',
        meaning: '維度 N.'
    },
    {
        word: 'dine',
        hint: '用餐',
        meaning: '用餐 V.'
    },
    {
        word: 'dip',
        hint: '浸',
        meaning: '浸 V. N.'
    },
    {
        word: 'direct',
        hint: '直接',
        meaning: '直接 adj. V.'
    },
    {
        word: 'direction',
        hint: '方向',
        meaning: '方向 N.'
    },
    {
        word: 'director',
        hint: '導演',
        meaning: '導演 N.'
    },
    {
        word: 'dirt',
        hint: '污垢',
        meaning: '污垢 N.'
    },
    {
        word: 'disagree',
        hint: '不同意',
        meaning: '不同意 V.'
    },
    {
        word: 'disappear',
        hint: '消失',
        meaning: '消失 V.'
    },
    {
        word: 'disappoint',
        hint: '使失望',
        meaning: '使失望 V.'
    },
    {
        word: 'disapprove',
        hint: '不贊成',
        meaning: '不贊成 V.'
    },
    {
        word: 'disaster',
        hint: '災難',
        meaning: '災難 N.'
    },
    {
        word: 'discipline',
        hint: '紀律',
        meaning: '紀律 N. V.'
    },
    {
        word: 'discover',
        hint: '發現',
        meaning: '發現 V.'
    },
    {
        word: 'discuss',
        hint: '討論',
        meaning: '討論 V.'
    },
    {
        word: 'disease',
        hint: '疾病',
        meaning: '疾病 N.'
    },
    {
        word: 'dish',
        hint: '碟子',
        meaning: '碟子 N.'
    },
    {
        word: 'dismiss',
        hint: '解雇',
        meaning: '解雇 V.'
    },
    {
        word: 'disorder',
        hint: '失調',
        meaning: '失調 N.'
    },
    {
        word: 'display',
        hint: '展示',
        meaning: '展示 V. N.'
    },
    {
        word: 'eight',
        hint: '一個數字',
        meaning: '八 N.'
    },
    {
        word: 'either',
        hint: '任一',
        meaning: '任一 adj. pron.'
    },
    {
        word: 'elbow',
        hint: '肘',
        meaning: '肘 N. V.'
    },
    {
        word: 'elderly',
        hint: '年長的',
        meaning: '年長的 adj.'
    },
    {
        word: 'elect',
        hint: '選舉',
        meaning: '選舉 V. adj.'
    },
    {
        word: 'elegant',
        hint: '優雅的',
        meaning: '優雅的 adj.'
    },
    {
        word: 'element',
        hint: '元素',
        meaning: '元素 N.'
    },
    {
        word: 'elevator',
        hint: '電梯',
        meaning: '電梯 N.'
    },
    {
        word: 'else',
        hint: '其他',
        meaning: '其他 pron. adv.'
    },
    {
        word: 'embark',
        hint: '著手',
        meaning: '著手 V.'
    },
    {
        word: 'embrace',
        hint: '擁抱',
        meaning: '擁抱 V. N.'
    },
    {
        word: 'emerge',
        hint: '出現',
        meaning: '出現 V.'
    },
    {
        word: 'emotion',
        hint: '情感',
        meaning: '情感 N.'
    },
    {
        word: 'employ',
        hint: '雇用',
        meaning: '雇用 V.'
    },
    {
        word: 'empty',
        hint: '空的',
        meaning: '空的 adj. V.'
    },
    {
        word: 'enable',
        hint: '使能夠',
        meaning: '使能夠 V.'
    },
    {
        word: 'encounter',
        hint: '遭遇',
        meaning: '遭遇 V. N.'
    },
    {
        word: 'end',
        hint: '結束',
        meaning: '結束 V. N.'
    },
    {
        word: 'endure',
        hint: '忍受',
        meaning: '忍受 V.'
    },
    {
        word: 'enemy',
        hint: '敵人',
        meaning: '敵人 N.'
    },
    {
        word: 'energy',
        hint: '能源',
        meaning: '能源 N.'
    },
    {
        word: 'enforce',
        hint: '實施',
        meaning: '實施 V.'
    },
    {
        word: 'engage',
        hint: '參與',
        meaning: '參與 V.'
    },
    {
        word: 'engine',
        hint: '引擎',
        meaning: '引擎 N.'
    },
    {
        word: 'enhance',
        hint: '增強',
        meaning: '增強 V.'
    },
    {
        word: 'enjoy',
        hint: '享受',
        meaning: '享受 V.'
    },
    {
        word: 'enlist',
        hint: '入伍',
        meaning: '入伍 V.'
    },
    {
        word: 'ensure',
        hint: '確保',
        meaning: '確保 V.'
    },
    {
        word: 'enter',
        hint: '進入',
        meaning: '進入 V.'
    },
    {
        word: 'entertain',
        hint: '娛樂',
        meaning: '娛樂 V.'
    },
    {
        word: 'enthusiasm',
        hint: '熱情',
        meaning: '熱情 N.'
    },
    {
        word: 'entire',
        hint: '整個',
        meaning: '整個 adj.'
    },
    {
        word: 'entrance',
        hint: '出口的相反',
        meaning: '入口 N.'
    },
    {
        word: 'envelope',
        hint: '信封',
        meaning: '信封 N.'
    },
    {
        word: 'environment',
        hint: '環境',
        meaning: '環境 N.'
    },
    {
        word: 'envy',
        hint: '羨慕',
        meaning: '羨慕 V. N.'
    },
    {
        word: 'equal',
        hint: '平等',
        meaning: '平等 adj. V.'
    },
    {
        word: 'equip',
        hint: '裝備',
        meaning: '裝備 V.'
    },
    {
        word: 'era',
        hint: '時代',
        meaning: '時代 N.'
    },
    {
        word: 'erase',
        hint: '擦除',
        meaning: '擦除 V.'
    },
    {
        word: 'error',
        hint: '錯誤',
        meaning: '錯誤 N.'
    },
    {
        word: 'escape',
        hint: '逃脫',
        meaning: '逃脫 V. N.'
    },
    {
        word: 'especially',
        hint: '特別',
        meaning: '特別 adv.'
    },
    {
        word: 'essay',
        hint: '文章',
        meaning: '文章 N.'
    },
    {
        word: 'essential',
        hint: '必要的',
        meaning: '必要的 adj.'
    },
    {
        word: 'establish',
        hint: '建立',
        meaning: '建立 V.'
    },
    {
        word: 'estimate',
        hint: '估計',
        meaning: '估計 V. N.'
    },
    {
        word: 'ethnic',
        hint: '種族的',
        meaning: '種族的 adj.'
    },
    {
        word: 'evacuate',
        hint: '疏散',
        meaning: '疏散 V.'
    },
    {
        word: 'evaluate',
        hint: '評估',
        meaning: '評估 V.'
    },
    {
        word: 'even',
        hint: '甚至',
        meaning: '甚至 adv. adj.'
    },
    {
        word: 'event',
        hint: '事件',
        meaning: '事件 N.'
    },
    {
        word: 'ever',
        hint: '曾經',
        meaning: '曾經 adv.'
    },
    {
        word: 'ever',
        hint: '曾經',
        meaning: '曾經 adv.'
    },
    {
        word: 'every',
        hint: '每個',
        meaning: '每個 adj.'
    },
    {
        word: 'evidence',
        hint: '證據',
        meaning: '證據 N.'
    },
    {
        word: 'evil',
        hint: '邪惡',
        meaning: '邪惡 adj. N.'
    },
    {
        word: 'exact',
        hint: '確切',
        meaning: '確切 adj. V.'
    },
    {
        word: 'example',
        hint: '例子',
        meaning: '例子 N.'
    },
    {
        word: 'exceed',
        hint: '超過',
        meaning: '超過 V.'
    },
    {
        word: 'excel',
        hint: '擅長',
        meaning: '擅長 V.'
    },
    {
        word: 'except',
        hint: '除了',
        meaning: '除了 prep. conj.'
    },
    {
        word: 'exchange',
        hint: '交換',
        meaning: '交換 V. N.'
    },
    {
        word: 'excite',
        hint: '激動',
        meaning: '激動 V.'
    },
    {
        word: 'exclude',
        hint: '排除',
        meaning: '排除 V.'
    },
    {
        word: 'excuse',
        hint: '藉口',
        meaning: '藉口 N. V.'
    },
    {
        word: 'execute',
        hint: '執行',
        meaning: '執行 V.'
    },
    {
        word: 'exercise',
        hint: '運動',
        meaning: '運動 V. N.'
    },
    {
        word: 'exhaust',
        hint: '耗盡',
        meaning: '耗盡 V. N.'
    },
    {
        word: 'exhibit',
        hint: '展覽',
        meaning: '展覽 V. N.'
    },
    {
        word: 'exist',
        hint: '存在',
        meaning: '存在 V.'
    },
    {
        word: 'exit',
        hint: '入口相反',
        meaning: '1. 出口（出門的地方） N. \n2. 出去 V.'
    },
    {
        word: 'expand',
        hint: '擴大',
        meaning: '擴大 V.'
    },
    {
        word: 'expect',
        hint: '期望',
        meaning: '期望 V.'
    },
    {
        word: 'experience',
        hint: '經驗',
        meaning: '經驗 N. V.'
    },
    {
        word: 'expert',
        hint: '專家',
        meaning: '專家 N. adj.'
    },
    {
        word: 'explain',
        hint: '解釋',
        meaning: '解釋 V.'
    },
    {
        word: 'explode',
        hint: '爆炸',
        meaning: '爆炸 V.'
    },
    {
        word: 'explore',
        hint: '探索',
        meaning: '探索 V.'
    },
    {
        word: 'export',
        hint: '進口的相反',
        meaning: '出口（進口到別的地方，不是緊急出口的出口） V.'
    },
    {
        word: 'express',
        hint: '表達',
        meaning: '表達 V. adj.'
    },
    {
        word: 'extend',
        hint: '延伸',
        meaning: '延伸 V.'
    },
    {
        word: 'extra',
        hint: '額外的',
        meaning: '額外的 adj. N.'
    },
    {
        word: 'extreme',
        hint: '極端',
        meaning: '極端 adj. N.'
    },
    {
        word: 'eye',
        hint: '用來看的東西ˋ',
        meaning: '眼睛 N.'
    },
    {
        word: 'face',
        hint: '臉',
        meaning: '1. 臉 N. \n2. 面對 V.'
    },
    {
        word: 'fact',
        hint: '事實',
        meaning: '事實 N.'
    },
    {
        word: 'factory',
        hint: '工廠',
        meaning: '工廠 N.'
    },
    {
        word: 'fade',
        hint: '褪色',
        meaning: '褪色 V.'
    },
    {
        word: 'fail',
        hint: '失敗',
        meaning: '失敗 V.'
    },
    {
        word: 'fair',
        hint: '公平的',
        meaning: '公平的 adj.'
    },
    {
        word: 'faith',
        hint: '信仰',
        meaning: '信仰 N.'
    },
    {
        word: 'fall',
        hint: '你辦到腳時發生的事情',
        meaning: '1. 跌倒 V. \n2. 掉落 V. \n3. 降低 V. \n4. 屬於 V. \n5. 變成 V. \n6. 被打敗 V. \n7. 落敗 V. \n8. 戰死 V. \n9. （板球）打擊手被淘汰出局 V. \n10. 降臨 V. \n11. 下垂 V.'
    },
    {
        word: 'false',
        hint: '真的的相反',
        meaning: '1. 假的 adj. \n2. 虛偽的 adj. \n3. 錯誤的 adj. \n4. 虛情假意的 adj. \n5. 不忠誠；不可靠的 adj.'
    },
    {
        word: 'fame',
        hint: '名譽',
        meaning: '名譽 N.'
    },
    {
        word: 'family',
        hint: '家庭',
        meaning: '家庭 N.'
    },
    {
        word: 'famous',
        hint: '著名的',
        meaning: '著名的 adj.'
    },
    {
        word: 'fan',
        hint: '可以吹風的',
        meaning: '1. 電風扇 N. \n2.球迷 N.'
    },
    {
        word: 'fantasy',
        hint: '幻想',
        meaning: '幻想 N.'
    },
    {
        word: 'far',
        hint: '形容距離',
        meaning: '遠 adv. adj.'
    },
    {
        word: 'farm',
        hint: '農場',
        meaning: '農場 N. V.'
    },
    {
        word: 'fashion',
        hint: '時尚',
        meaning: '時尚 N. V.'
    },
    {
        word: 'fast',
        hint: '形容速度',
        meaning: '1. 快、快的 adj. adv. \n2. 齋戒、齋戒期 N. V.'
    },
    {
        word: 'fat',
        hint: '不運動的後果',
        meaning: '肥胖 adj. N.'
    },
    {
        word: 'father',
        hint: '你的親人',
        meaning: '父親 N.'
    },
    {
        word: 'fault',
        hint: '錯誤',
        meaning: '錯誤（誰的錯） N.'
    },
    {
        word: 'favor',
        hint: '喜愛',
        meaning: '喜愛 N. V.'
    },
    {
        word: 'fear',
        hint: '害怕',
        meaning: '害怕 V. N.'
    },
    {
        word: 'feature',
        hint: '特徵',
        meaning: '特徵 N. V.'
    },
    {
        word: 'fee',
        hint: '費用',
        meaning: '費用 N.'
    },
    {
        word: 'feed',
        hint: '餵養',
        meaning: '餵養 V.'
    },
    {
        word: 'feel',
        hint: '感覺',
        meaning: '感覺 V.'
    },
    {
        word: 'female',
        hint: '女性',
        meaning: '女性 N. adj.'
    },
    {
        word: 'fence',
        hint: '籬笆',
        meaning: '籬笆 N. V.'
    },
    {
        word: 'festival',
        hint: '節日',
        meaning: '節日 N.'
    },
    {
        word: 'fetch',
        hint: '取',
        meaning: '取 V.'
    },
    {
        word: 'fever',
        hint: '發燒',
        meaning: '發燒 N.'
    },
    {
        word: 'few',
        hint: '少數',
        meaning: '少數 adj. pron.'
    },
    {
        word: 'fiber',
        hint: '纖維',
        meaning: '纖維 N.'
    },
    {
        word: 'fiction',
        hint: '小說',
        meaning: '小說 N.'
    },
    {
        word: 'field',
        hint: '領域',
        meaning: '領域 N.'
    },
    {
        word: 'fight',
        hint: '打鬥',
        meaning: '打鬥 V. N.'
    },
    {
        word: 'figure',
        hint: '數字',
        meaning: '1. 輪廓、人影；畫像；身材 N. \n2. 數字 N. \e4. 照片，簡寫fig. N. \n4. 認為 V. \n5. 出現、參加、被包括 V. \n6. 計算 V.'
    },
    {
        word: 'file',
        hint: 'photo.png script.js video.mp4 這些',
        meaning: '文件 N. V.'
    },
    {
        word: 'fill',
        hint: '填充',
        meaning: '填充 V.'
    },
    {
        word: 'film',
        hint: '電影',
        meaning: '電影 N. V.'
    },
    {
        word: 'filter',
        hint: '過濾',
        meaning: '過濾 V. N.'
    },
    {
        word: 'final',
        hint: '最終的',
        meaning: '最終的 adj.'
    },
    {
        word: 'find',
        hint: '找到',
        meaning: '找到 V.'
    },
    {
        word: 'fine',
        hint: '罰款',
        meaning: '罰款 N. adj. V.'
    },
    {
        word: 'finger',
        hint: '手指',
        meaning: '手指 N.'
    },
    {
        word: 'finish',
        hint: '完成',
        meaning: '完成 V. N.'
    },
    {
        word: 'fire',
        hint: '火',
        meaning: '火 N. V.'
    },
    {
        word: 'firm',
        hint: '公司',
        meaning: '公司 N. adj.'
    },
    {
        word: 'first',
        hint: '第一',
        meaning: '第一 adj. adv.'
    },
    {
        word: 'fish',
        hint: '什麼水中游？',
        meaning: '魚 N. V.'
    },
    {
        word: 'fit',
        hint: '合適',
        meaning: '合適 adj. V.'
    },
    {
        word: 'five',
        hint: '數字',
        meaning: '五 N. adj.'
    },
    {
        word: 'fix',
        hint: '修理',
        meaning: '修理 V. N.'
    },
    {
        word: 'flag',
        hint: '旗幟',
        meaning: '旗幟 N.'
    },
    {
        word: 'flame',
        hint: '火焰',
        meaning: '火焰 N. V.'
    },
    {
        word: 'flash',
        hint: '閃光',
        meaning: '閃光 N. V.'
    },
    {
        word: 'flat',
        hint: '平坦的',
        meaning: '平坦的 adj. N.'
    },
    {
        word: 'flavor',
        hint: '味道',
        meaning: '味道 N.'
    },
    {
        word: 'flee',
        hint: '逃走',
        meaning: '逃走 V.'
    },
    {
        word: 'fleet',
        hint: '艦隊',
        meaning: '艦隊 N.'
    },
    {
        word: 'flesh',
        hint: '肉體',
        meaning: '肉體 N.'
    },
    {
        word: 'flex',
        hint: '彎曲',
        meaning: '彎曲 V.'
    },
    {
        word: 'flight',
        hint: '飛行',
        meaning: '飛行 N.'
    },
    {
        word: 'flip',
        hint: '翻轉',
        meaning: '翻轉 V.'
    },
    {
        word: 'float',
        hint: '漂浮',
        meaning: '漂浮 V. N.'
    },
    {
        word: 'flock',
        hint: '群',
        meaning: '群 N. V.'
    },
    {
        word: 'floor',
        hint: '地板',
        meaning: '地板 N.'
    },
    {
        word: 'flower',
        hint: '花',
        meaning: '花 N. V.'
    },
    {
        word: 'fluid',
        hint: '液體',
        meaning: '液體 N. adj.'
    },
    {
        word: 'flush',
        hint: '沖洗',
        meaning: '沖洗 V. N.'
    },
    {
        word: 'fly',
        hint: '飛行',
        meaning: '飛行 V. N.'
    },
    {
        word: 'focus',
        hint: '焦點',
        meaning: '焦點 N. V.'
    },
    {
        word: 'fold',
        hint: '折疊',
        meaning: '折疊 V. N.'
    },
    {
        word: 'follow',
        hint: '跟隨',
        meaning: '跟隨 V.'
    },
    {
        word: 'food',
        hint: '食物',
        meaning: '食物 N.'
    },
    {
        word: 'fool',
        hint: '傻瓜',
        meaning: '傻瓜 N. V.'
    },
    {
        word: 'foot',
        hint: '腳',
        meaning: '腳 N.'
    },
    {
        word: 'for',
        hint: '為了',
        meaning: '為了 prep. conj.'
    },
    {
        word: 'force',
        hint: '力量',
        meaning: '力量 N. V.'
    },
    {
        word: 'forecast',
        hint: '預測',
        meaning: '預測 V. N.'
    },
    {
        word: 'foreign',
        hint: '外國的',
        meaning: '外國的 adj.'
    },
    {
        word: 'forest',
        hint: '森林',
        meaning: '森林 N.'
    },
    {
        word: 'forget',
        hint: '忘記',
        meaning: '忘記 V.'
    },
    {
        word: 'forgive',
        hint: '原諒',
        meaning: '原諒 V.'
    },
    {
        word: 'fork',
        hint: '叉子',
        meaning: '叉子 N.'
    },
    {
        word: 'form',
        hint: '形式',
        meaning: '形式 N. V.'
    },
    {
        word: 'fortune',
        hint: '財富',
        meaning: '財富 N.'
    },
    {
        word: 'forward',
        hint: '向前',
        meaning: '向前 adv. adj. V.'
    },
    {
        word: 'found',
        hint: '找到',
        meaning: '找到 V.'
    },
    {
        word: 'four',
        hint: '數字',
        meaning: '四 N. adj.'
    },
    {
        word: 'frame',
        hint: '框架',
        meaning: '框架 N. V.'
    },
    {
        word: 'free',
        hint: '詐騙方法，讓想要__東西被騙',
        meaning: '1. 免費的 adj. adv. \n2. 自由的 adj. adv.'
    },
    {
        word: 'freeze',
        hint: '冷凍',
        meaning: '冷凍 V.'
    },
    {
        word: 'fresh',
        hint: '新鮮的',
        meaning: '新鮮的 adj.'
    },
    {
        word: 'friction',
        hint: '摩擦',
        meaning: '摩擦 N.'
    },
    {
        word: 'friend',
        hint: '朋友',
        meaning: '朋友 N.'
    },
    {
        word: 'frighten',
        hint: '嚇唬',
        meaning: '嚇唬 V.'
    },
    {
        word: 'from',
        hint: '從',
        meaning: '從 prep.'
    },
    {
        word: 'front',
        hint: '前面',
        meaning: '前面 N. adj.'
    },
    {
        word: 'fruit',
        hint: '水果',
        meaning: '水果 N.'
    },
    {
        word: 'fuel',
        hint: '燃料',
        meaning: '燃料 N. V.'
    },
    {
        word: 'full',
        hint: '滿的',
        meaning: '滿的 adj.'
    },
    {
        word: 'fun',
        hint: '有趣',
        meaning: '有趣 adj. N.'
    },
    {
        word: 'function',
        hint: '功能',
        meaning: '功能 N. V.'
    },
    {
        word: 'fund',
        hint: '基金',
        meaning: '基金 N.'
    },
    {
        word: 'funeral',
        hint: '葬禮',
        meaning: '葬禮 N.'
    },
    {
        word: 'funny',
        hint: '滑稽的',
        meaning: '滑稽的 adj.'
    },
    {
        word: 'furniture',
        hint: '家具',
        meaning: '家具 N.'
    },
    {
        word: 'further',
        hint: '更遠',
        meaning: '更遠 adj. adv. V.'
    },
    {
        word: 'future',
        hint: '未來',
        meaning: '未來 N. adj.'
    },
    {
        word: 'gain',
        hint: '獲得',
        meaning: '獲得 V. N.'
    },
    {
        word: 'galaxy',
        hint: '星系',
        meaning: '星系 N.'
    },
    {
        word: 'gallery',
        hint: '畫廊',
        meaning: '畫廊 N.'
    },
    {
        word: 'game',
        hint: '你現在在玩的',
        meaning: '遊戲 N.'
    },
    {
        word: 'GamingDimiGD',
        hint: '我的使用者名稱',
        meaning: '遊戲迪米，記得訂閱喔（不用特別記住這個詞）'
    },
    {
        word: 'gap',
        hint: '缺口',
        meaning: '缺口 N.'
    },
    {
        word: 'garage',
        hint: '車庫',
        meaning: '車庫 N.'
    },
    {
        word: 'garden',
        hint: '花園',
        meaning: '花園 N. V.'
    },
    {
        word: 'gas',
        hint: '氣體',
        meaning: '氣體 N.'
    },
    {
        word: 'gather',
        hint: '收集',
        meaning: '收集 V.'
    },
    {
        word: 'gauge',
        hint: '測量儀',
        meaning: '測量儀 N. V.'
    },
    {
        word: 'general',
        hint: '一般的',
        meaning: '一般的 adj. N.'
    },
    {
        word: 'generate',
        hint: '生成',
        meaning: '生成 V.'
    },
    {
        word: 'genius',
        hint: '天才',
        meaning: '天才 N.'
    },
    {
        word: 'gentle',
        hint: '溫和的',
        meaning: '溫和的 adj.'
    },
    {
        word: 'genuine',
        hint: '真正的',
        meaning: '真正的 adj.'
    },
    {
        word: 'gesture',
        hint: '手勢',
        meaning: '手勢 N. V.'
    },
    {
        word: 'get',
        hint: '獲得',
        meaning: '獲得 V.'
    },
    {
        word: 'giant',
        hint: '巨大的',
        meaning: '巨大的 adj. N.'
    },
    {
        word: 'gift',
        hint: '禮物',
        meaning: '禮物 N.'
    },
    {
        word: 'girl',
        hint: '女孩',
        meaning: '女孩 N.'
    },
    {
        word: 'give',
        hint: '給予',
        meaning: '給予 V.'
    },
    {
        word: 'glad',
        hint: '高興的',
        meaning: '高興的 adj.'
    },
    {
        word: 'glance',
        hint: '一瞥',
        meaning: '一瞥 V. N.'
    },
    {
        word: 'glass',
        hint: '玻璃',
        meaning: '玻璃 N.'
    },
    {
        word: 'global',
        hint: '全球的',
        meaning: '全球的 adj.'
    },
    {
        word: 'glove',
        hint: '手套',
        meaning: '手套 N.'
    },
    {
        word: 'go',
        hint: '去',
        meaning: '去 V.'
    },
    {
        word: 'goal',
        hint: '目標',
        meaning: '目標 N.'
    },
    {
        word: 'god',
        hint: '神',
        meaning: '神 N.'
    },
    {
        word: 'gold',
        hint: '黃金',
        meaning: '黃金 N. adj.'
    },
    {
        word: 'good',
        hint: '好的',
        meaning: '好的 adj.'
    },
    {
        word: 'govern',
        hint: '統治',
        meaning: '統治 V.'
    },
    {
        word: 'grab',
        hint: '抓住',
        meaning: '抓住 V.'
    },
    {
        word: 'grace',
        hint: '優雅',
        meaning: '優雅 N.'
    },
    {
        word: 'grade',
        hint: '成績',
        meaning: '成績 N. V.'
    },
    {
        word: 'grain',
        hint: '穀物',
        meaning: '穀物 N.'
    },
    {
        word: 'grand',
        hint: '宏偉的',
        meaning: '宏偉的 adj.'
    },
    {
        word: 'grant',
        hint: '授予',
        meaning: '授予 V. N.'
    },
    {
        word: 'grape',
        hint: '葡萄',
        meaning: '葡萄 N.'
    },
    {
        word: 'grass',
        hint: '中文用錯方式就會變成髒話',
        meaning: '草 N.'
    },
    {
        word: 'grateful',
        hint: '感激的',
        meaning: '感激的 adj.'
    },
    {
        word: 'gravity',
        hint: '重力',
        meaning: '重力 N.'
    },
    {
        word: 'great',
        hint: '偉大的',
        meaning: '偉大的 adj.'
    },
    {
        word: 'green',
        hint: '我最愛的顏色',
        meaning: '綠色 adj. N.'
    },
    {
        word: 'grid',
        hint: '網格',
        meaning: '網格 N.'
    },
    {
        word: 'grief',
        hint: '悲傷',
        meaning: '悲傷 N.'
    },
    {
        word: 'grind',
        hint: '磨碎',
        meaning: '磨碎 V. N.'
    },
    {
        word: 'grip',
        hint: '握緊',
        meaning: '握緊 V. N.'
    },
    {
        word: 'grocery',
        hint: '食品雜貨',
        meaning: '食品雜貨 N.'
    },
    {
        word: 'gross',
        hint: '總共的',
        meaning: '總共的 adj.'
    },
    {
        word: 'ground',
        hint: '地面',
        meaning: '地面 N. V.'
    },
    {
        word: 'group',
        hint: '團體',
        meaning: '團體 N. V.'
    },
    {
        word: 'grow',
        hint: '成長',
        meaning: '成長 V.'
    },
    {
        word: 'guarantee',
        hint: '保證',
        meaning: '保證 V. N.'
    },
    {
        word: 'guard',
        hint: '守衛',
        meaning: '守衛 N. V.'
    },
    {
        word: 'guess',
        hint: '猜測',
        meaning: '猜測 V. N.'
    },
    {
        word: 'guide',
        hint: '指導',
        meaning: '指導 V. N.'
    },
    {
        word: 'guilt',
        hint: '內疚',
        meaning: '內疚 N.'
    },
    {
        word: 'guitar',
        hint: '吉他',
        meaning: '吉他 N.'
    },
    {
        word: 'gun',
        hint: '槍',
        meaning: '槍 N.'
    },
    {
        word: 'gut',
        hint: '腸子',
        meaning: '腸子 N.'
    },
    {
        word: 'gym',
        hint: '健身房',
        meaning: '健身房 N.'
    },
    {
        word: 'habit',
        hint: '習慣',
        meaning: '習慣 N.'
    },
    {
        word: 'hair',
        hint: '頭髮',
        meaning: '頭髮 N.'
    },
    {
        word: 'half',
        hint: '一半',
        meaning: '一半 N. adj. adv.'
    },
    {
        word: 'hall',
        hint: '大廳',
        meaning: '大廳 N.'
    },
    {
        word: 'hand',
        hint: '手',
        meaning: '手 N. V.'
    },
    {
        word: 'handle',
        hint: '處理',
        meaning: '處理 V. N.'
    },
    {
        word: 'hang',
        hint: '掛',
        meaning: '掛 V.'
    },
    {
        word: 'happen',
        hint: '發生',
        meaning: '發生 V.'
    },
    {
        word: 'happy',
        hint: '快樂的',
        meaning: '快樂的 adj.'
    },
    {
        word: 'harbor',
        hint: '港口',
        meaning: '港口 N. V.'
    },
    {
        word: 'hard',
        hint: '困難的',
        meaning: '困難的 adj. adv.'
    },
    {
        word: 'harvest',
        hint: '收穫',
        meaning: '收穫 N. V.'
    },
    {
        word: 'hat',
        hint: '帽子',
        meaning: '帽子 N.'
    },
    {
        word: 'hate',
        hint: '討厭',
        meaning: '討厭 V. N.'
    },
    {
        word: 'have',
        hint: '擁有',
        meaning: '擁有 V. aux.'
    },
    {
        word: 'head',
        hint: '頭',
        meaning: '頭 N. V.'
    },
    {
        word: 'headline',
        hint: '標題',
        meaning: '標題 N.'
    },
    {
        word: 'heal',
        hint: '治愈',
        meaning: '治愈 V.'
    },
    {
        word: 'health',
        hint: '健康',
        meaning: '健康 N.'
    },
    {
        word: 'hear',
        hint: '聽見',
        meaning: '聽見 V.'
    },
    {
        word: 'heart',
        hint: '心臟',
        meaning: '心臟 N.'
    },
    {
        word: 'heat',
        hint: '熱',
        meaning: '熱 N. V.'
    },
    {
        word: 'heaven',
        hint: '天堂',
        meaning: '天堂 N.'
    },
    {
        word: 'heavy',
        hint: '沉重的',
        meaning: '沉重的 adj.'
    },
    {
        word: 'heel',
        hint: '腳後跟',
        meaning: '腳後跟 N.'
    },
    {
        word: 'height',
        hint: '高度',
        meaning: '高度 N.'
    },
    {
        word: 'hello',
        hint: '你好',
        meaning: '你好 int.'
    },
    {
        word: 'helmet',
        hint: '頭盔',
        meaning: '頭盔 N.'
    },
    {
        word: 'help',
        hint: '拜託幫助我我忘記我引號要放哪裡了',
        meaning: '幫助 V. N.'
    },
    {
        word: 'hen',
        hint: '母雞',
        meaning: '母雞 N.'
    },
    {
        word: 'her',
        hint: '她的',
        meaning: '她的 pron.'
    },
    {
        word: 'here',
        hint: '這裡',
        meaning: '這裡 adv.'
    },
    {
        word: 'hero',
        hint: '英雄',
        meaning: '英雄 N.'
    },
    {
        word: 'hidden',
        hint: '隱藏的',
        meaning: '隱藏的 adj.'
    },
    {
        word: 'hidden',
        hint: '隱藏的',
        meaning: '隱藏的 adj.'
    },
    {
        word: 'hide',
        hint: '躲藏',
        meaning: '躲藏 V.'
    },
    {
        word: 'high',
        hint: '高的',
        meaning: '高的 adj.'
    },
    {
        word: 'highlight',
        hint: '突顯',
        meaning: '突顯 V. N.'
    },
    {
        word: 'highway',
        hint: '高速公路',
        meaning: '高速公路 N.'
    },
    {
        word: 'hill',
        hint: '山丘',
        meaning: '山丘 N.'
    },
    {
        word: 'hint',
        hint: '提示',
        meaning: '提示 V. N.'
    },
    {
        word: 'hip',
        hint: '臀部',
        meaning: '臀部 N.'
    },
    {
        word: 'hire',
        hint: '聘請',
        meaning: '聘請 V. N.'
    },
    {
        word: 'history',
        hint: '歷史',
        meaning: '歷史 N.'
    },
    {
        word: 'hit',
        hint: '打擊',
        meaning: '打擊 V. N.'
    },
    {
        word: 'hold',
        hint: '持有',
        meaning: '持有 V. N.'
    },
    {
        word: 'hole',
        hint: '洞',
        meaning: '洞 N.'
    },
    {
        word: 'holiday',
        hint: '假期',
        meaning: '假期 N.'
    },
    {
        word: 'hollow',
        hint: '空心的',
        meaning: '空心的 adj. V.'
    },
    {
        word: 'home',
        hint: '家',
        meaning: '家 N. adv.'
    },
    {
        word: 'honest',
        hint: '誠實的',
        meaning: '誠實的 adj.'
    },
    {
        word: 'honey',
        hint: '蜜糖',
        meaning: '蜜糖 N.'
    },
    {
        word: 'hood',
        hint: '兜帽',
        meaning: '兜帽 N.'
    },
    {
        word: 'hook',
        hint: '鉤',
        meaning: '鉤 N. V.'
    },
    {
        word: 'hope',
        hint: '希望',
        meaning: '希望 V. N.'
    },
    {
        word: 'horizon',
        hint: '地平線',
        meaning: '地平線 N.'
    },
    {
        word: 'horn',
        hint: '號角',
        meaning: '號角 N.'
    },
    {
        word: 'horror',
        hint: '恐懼',
        meaning: '恐懼 N.'
    },
    {
        word: 'horse',
        hint: '馬',
        meaning: '馬 N.'
    },
    {
        word: 'hospital',
        hint: '醫院',
        meaning: '醫院 N.'
    },
    {
        word: 'host',
        hint: '主持',
        meaning: '主持 V. N.'
    },
    {
        word: 'hot',
        hint: '熱的',
        meaning: '熱的 adj.'
    },
    {
        word: 'hotel',
        hint: '旅館',
        meaning: '旅館 N.'
    },
    {
        word: 'hour',
        hint: '小時',
        meaning: '小時 N.'
    },
    {
        word: 'house',
        hint: '房子',
        meaning: '房子 N. V.'
    },
    {
        word: 'hover',
        hint: '盤旋',
        meaning: '盤旋 V.'
    },
    {
        word: 'hub',
        hint: '樞紐',
        meaning: '樞紐 N.'
    },
    {
        word: 'huge',
        hint: '巨大的',
        meaning: '巨大的 adj.'
    },
    {
        word: 'human',
        hint: '人類',
        meaning: '人類 N. adj.'
    },
    {
        word: 'humble',
        hint: '謙虛',
        meaning: '謙虛 adj. V.'
    },
    {
        word: 'humor',
        hint: '幽默',
        meaning: '幽默 N. V.'
    },
    {
        word: 'hundred',
        hint: '一百',
        meaning: '一百 N. adj.'
    },
    {
        word: 'hungry',
        hint: '飢餓的',
        meaning: '飢餓的 adj.'
    },
    {
        word: 'hunt',
        hint: '獵',
        meaning: '獵 V. N.'
    },
    {
        word: 'hurry',
        hint: '趕緊',
        meaning: '趕緊 V. N.'
    },
    {
        word: 'hurt',
        hint: '受傷',
        meaning: '受傷 V.'
    },
    {
        word: 'husband',
        hint: '丈夫',
        meaning: '丈夫 N.'
    },
    {
        word: 'hypothesis',
        hint: '假設',
        meaning: '假設 N.'
    },
    {
        word: 'ice',
        hint: '冰',
        meaning: '冰 N. V.'
    },
    {
        word: 'idea',
        hint: '主意',
        meaning: '主意 N.'
    },
    {
        word: 'ideal',
        hint: '理想',
        meaning: '理想 N. adj.'
    },
    {
        word: 'identical',
        hint: '相同的',
        meaning: '相同的 adj.'
    },
    {
        word: 'identify',
        hint: '識別',
        meaning: '識別 V.'
    },
    {
        word: 'identity',
        hint: '身份',
        meaning: '身份 N.'
    },
    {
        word: 'ignore',
        hint: '忽略',
        meaning: '忽略 V.'
    },
    {
        word: 'ill',
        hint: '生病的',
        meaning: '生病的 adj.'
    },
    {
        word: 'illegal',
        hint: '非法的',
        meaning: '非法的 adj.'
    },
    {
        word: 'illness',
        hint: '疾病',
        meaning: '疾病 N.'
    },
    {
        word: 'illustrate',
        hint: '說明',
        meaning: '說明 V.'
    },
    {
        word: 'image',
        hint: '影像',
        meaning: '影像 N.'
    },
    {
        word: 'imagination',
        hint: '想像力',
        meaning: '想像力 N.'
    },
    {
        word: 'imagine',
        hint: '想像',
        meaning: '想像 V.'
    },
    {
        word: 'imitate',
        hint: '模仿',
        meaning: '模仿 V.'
    },
    {
        word: 'immense',
        hint: '巨大的',
        meaning: '巨大的 adj.'
    },
    {
        word: 'immerse',
        hint: '浸沒',
        meaning: '浸沒 V.'
    },
    {
        word: 'immune',
        hint: '免疫的',
        meaning: '免疫的 adj.'
    },
    {
        word: 'impact',
        hint: '影響',
        meaning: '影響 N. V.'
    },
    {
        word: 'implement',
        hint: '實施',
        meaning: '實施 V. N.'
    },
    {
        word: 'implicate',
        hint: '牽連',
        meaning: '牽連 V.'
    },
    {
        word: 'implicit',
        hint: '含蓄的',
        meaning: '含蓄的 adj.'
    },
    {
        word: 'imply',
        hint: '暗示',
        meaning: '暗示 V.'
    },
    {
        word: 'import',
        hint: '進口',
        meaning: '進口 V. N.'
    },
    {
        word: 'impose',
        hint: '強加',
        meaning: '強加 V.'
    },
    {
        word: 'impress',
        hint: '印象深刻',
        meaning: '印象深刻 V.'
    },
    {
        word: 'improve',
        hint: '改善',
        meaning: '改善 V.'
    },
    {
        word: 'impulse',
        hint: '衝動',
        meaning: '衝動 N.'
    },
    {
        word: 'in',
        hint: '在...內',
        meaning: '在...內 prep. adv.'
    },
    {
        word: 'incentive',
        hint: '激勵',
        meaning: '激勵 N.'
    },
    {
        word: 'inch',
        hint: '英寸',
        meaning: '英寸 N.'
    },
    {
        word: 'incident',
        hint: '事件',
        meaning: '事件 N.'
    },
    {
        word: 'include',
        hint: '包括',
        meaning: '包括 V.'
    },
    {
        word: 'income',
        hint: '收入',
        meaning: '收入 N.'
    },
    {
        word: 'incorporate',
        hint: '合併',
        meaning: '合併 V.'
    },
    {
        word: 'increase',
        hint: '增加',
        meaning: '增加 V. N.'
    },
    {
        word: 'incredible',
        hint: '難以置信的',
        meaning: '難以置信的 adj.'
    },
    {
        word: 'independence',
        hint: '獨立',
        meaning: '獨立 N.'
    },
    {
        word: 'index',
        hint: '指數',
        meaning: '指數 N.'
    },
    {
        word: 'indicate',
        hint: '指示',
        meaning: '指示 V.'
    },
    {
        word: 'individual',
        hint: '個體',
        meaning: '個體 N. adj.'
    },
    {
        word: 'indoor',
        hint: '室內',
        meaning: '室內 adj.'
    },
    {
        word: 'industry',
        hint: '工業',
        meaning: '工業 N.'
    },
    {
        word: 'infect',
        hint: '感染',
        meaning: '感染 V.'
    },
    {
        word: 'infer',
        hint: '推斷',
        meaning: '推斷 V.'
    },
    {
        word: 'infinite',
        hint: '無窮的',
        meaning: '無窮的 adj.'
    },
    {
        word: 'influence',
        hint: '影響',
        meaning: '影響 N. V.'
    },
    {
        word: 'inform',
        hint: '通知',
        meaning: '通知 V.'
    },
    {
        word: 'information',
        hint: '資訊',
        meaning: '資訊 N.'
    },
    {
        word: 'infrastructure',
        hint: '基礎設施',
        meaning: '基礎設施 N.'
    },
    {
        word: 'ingredient',
        hint: '成分',
        meaning: '成分 N.'
    },
    {
        word: 'inhabit',
        hint: '居住',
        meaning: '居住 V.'
    },
    {
        word: 'inherit',
        hint: '繼承',
        meaning: '繼承 V.'
    },
    {
        word: 'initial',
        hint: '最初的',
        meaning: '最初的 adj.'
    },
    {
        word: 'initiate',
        hint: '開始',
        meaning: '開始 V.'
    },
    {
        word: 'inject',
        hint: '注射',
        meaning: '注射 V.'
    },
    {
        word: 'injure',
        hint: '傷害',
        meaning: '傷害 V.'
    },
    {
        word: 'inn',
        hint: '小旅館',
        meaning: '小旅館 N.'
    },
    {
        word: 'innocent',
        hint: '無辜的',
        meaning: '無辜的 adj.'
    },
    {
        word: 'innovate',
        hint: '創新',
        meaning: '創新 V.'
    },
    {
        word: 'input',
        hint: '輸入',
        meaning: '輸入 N. V.'
    },
    {
        word: 'inquiry',
        hint: '詢問',
        meaning: '詢問 N.'
    },
    {
        word: 'insane',
        hint: '瘋狂的',
        meaning: '瘋狂的 adj.'
    },
    {
        word: 'insect',
        hint: '昆蟲',
        meaning: '昆蟲 N.'
    },
    {
        word: 'insert',
        hint: '插入',
        meaning: '插入 V. N.'
    },
    {
        word: 'inside',
        hint: '內部',
        meaning: '內部 n. adj. adv. prep.'
    },
    {
        word: 'insist',
        hint: '堅持',
        meaning: '堅持 V.'
    },
    {
        word: 'inspect',
        hint: '檢查',
        meaning: '檢查 V.'
    },
    {
        word: 'inspire',
        hint: '激勵',
        meaning: '激勵 V.'
    },
    {
        word: 'install',
        hint: '安裝',
        meaning: '安裝 V.'
    },
    {
        word: 'instance',
        hint: '例子',
        meaning: '例子 N.'
    },
    {
        word: 'instant',
        hint: '瞬間',
        meaning: '瞬間 N. adj.'
    },
    {
        word: 'instead',
        hint: '代替',
        meaning: '代替 adv.'
    },
    {
        word: 'institute',
        hint: '學會',
        meaning: '學會 N. V.'
    },
    {
        word: 'instruct',
        hint: '指導',
        meaning: '指導 V.'
    },
    {
        word: 'insulate',
        hint: '隔絕',
        meaning: '隔絕 V.'
    },
    {
        word: 'insult',
        hint: '侮辱',
        meaning: '侮辱 V. N.'
    },
    {
        word: 'insurance',
        hint: '保險',
        meaning: '保險 N.'
    },
    {
        word: 'integrate',
        hint: '整合',
        meaning: '整合 V.'
    },
    {
        word: 'integrity',
        hint: '完整',
        meaning: '完整 N.'
    },
    {
        word: 'intelligent',
        hint: '聰明的',
        meaning: '聰明的 adj.'
    },
    {
        word: 'intend',
        hint: '打算',
        meaning: '打算 V.'
    },
    {
        word: 'intense',
        hint: '強烈的',
        meaning: '強烈的 adj.'
    },
    {
        word: 'intention',
        hint: '意圖',
        meaning: '意圖 N.'
    },
    {
        word: 'interaction',
        hint: '互動',
        meaning: '互動 N.'
    },
    {
        word: 'interest',
        hint: '興趣',
        meaning: '興趣 N. V.'
    },
    {
        word: 'interface',
        hint: '介面',
        meaning: '介面 N.'
    },
    {
        word: 'interfere',
        hint: '干擾',
        meaning: '干擾 V.'
    },
    {
        word: 'interior',
        hint: '內部的',
        meaning: '內部的 adj. N.'
    },
    {
        word: 'intermediate',
        hint: '中間的',
        meaning: '中間的 adj.'
    },
    {
        word: 'internal',
        hint: '內部的',
        meaning: '內部的 adj.'
    },
    {
        word: 'interpret',
        hint: '解釋',
        meaning: '解釋 V.'
    },
    {
        word: 'interrupt',
        hint: '打擾',
        meaning: '打擾 V.'
    },
    {
        word: 'interval',
        hint: '間隔',
        meaning: '間隔 N.'
    },
    {
        word: 'interview',
        hint: '面談',
        meaning: '面談 V. N.'
    },
    {
        word: 'intimate',
        hint: '親密的',
        meaning: '親密的 adj.'
    },
    {
        word: 'intimidate',
        hint: '威嚇',
        meaning: '威嚇 V.'
    },
    {
        word: 'intricate',
        hint: '複雜的',
        meaning: '複雜的 adj.'
    },
    {
        word: 'intrinsic',
        hint: '內在的',
        meaning: '內在的 adj.'
    },
    {
        word: 'introduce',
        hint: '介紹',
        meaning: '介紹 V.'
    },
    {
        word: 'invade',
        hint: '侵入',
        meaning: '侵入 V.'
    },
    {
        word: 'invent',
        hint: '發明',
        meaning: '發明 V.'
    },
    {
        word: 'invest',
        hint: '投資',
        meaning: '投資 V.'
    },
    {
        word: 'invite',
        hint: '邀請',
        meaning: '邀請 V. N.'
    },
    {
        word: 'involve',
        hint: '涉及',
        meaning: '涉及 V.'
    },
    {
        word: 'iron',
        hint: '鐵',
        meaning: '鐵 N. V.'
    },
    {
        word: 'island',
        hint: '島嶼',
        meaning: '島嶼 N.'
    },
    {
        word: 'isolate',
        hint: '孤立',
        meaning: '孤立 V.'
    },
    {
        word: 'issue',
        hint: '問題',
        meaning: '問題 N. V.'
    },
    {
        word: 'itch',
        hint: '發癢',
        meaning: '發癢 V. N.'
    },
    {
        word: 'item',
        hint: '項目',
        meaning: '項目 N.'
    },
    {
        word: 'its',
        hint: '它的',
        meaning: '它的 pron.'
    },
    {
        word: 'jacket',
        hint: '夾克',
        meaning: '夾克 N.'
    },
    {
        word: 'jar',
        hint: '罐子',
        meaning: '罐子 N.'
    },
    {
        word: 'jazz',
        hint: '爵士樂',
        meaning: '爵士樂 N.'
    },
    {
        word: 'jealous',
        hint: '嫉妒的',
        meaning: '嫉妒的 adj.'
    },
    {
        word: 'jeans',
        hint: '牛仔褲',
        meaning: '牛仔褲 N.'
    },
    {
        word: 'jelly',
        hint: '果凍',
        meaning: '果凍 N.'
    },
    {
        word: 'jewel',
        hint: '珠寶',
        meaning: '珠寶 N.'
    },
    {
        word: 'job',
        hint: '工作',
        meaning: '工作 N.'
    },
    {
        word: 'join',
        hint: '參加',
        meaning: '參加 V.'
    },
    {
        word: 'joint',
        hint: '關節',
        meaning: '關節 N. adj.'
    },
    {
        word: 'joke',
        hint: '笑話',
        meaning: '笑話 N. V.'
    },
    {
        word: 'journal',
        hint: '期刊',
        meaning: '期刊 N.'
    },
    {
        word: 'journey',
        hint: '旅行',
        meaning: '旅行 N. V.'
    },
    {
        word: 'joy',
        hint: '歡樂',
        meaning: '歡樂 N.'
    },
    {
        word: 'judge',
        hint: '法官',
        meaning: '法官 N. V.'
    },
    {
        word: 'juice',
        hint: '果汁',
        meaning: '果汁 N.'
    },
    {
        word: 'jump',
        hint: '跳躍',
        meaning: '跳躍 V. N.'
    },
    {
        word: 'jungle',
        hint: '叢林',
        meaning: '叢林 N.'
    },
    {
        word: 'junior',
        hint: '年少的',
        meaning: '年少的 adj. N.'
    },
    {
        word: 'jury',
        hint: '陪審團',
        meaning: '陪審團 N.'
    },
    {
        word: 'just',
        hint: '正義的',
        meaning: '正義的 adj. adv.'
    },
    {
        word: 'justice',
        hint: '正義',
        meaning: '正義 N.'
    },
    {
        word: 'justify',
        hint: '證明...是正當的',
        meaning: '證明...是正當的 V.'
    },
    {
        word: 'keen',
        hint: '敏銳的',
        meaning: '敏銳的 adj.'
    },
    {
        word: 'keep',
        hint: '保持',
        meaning: '保持 V.'
    },
    {
        word: 'kettle',
        hint: '水壺',
        meaning: '水壺 N.'
    },
    {
        word: 'key',
        hint: '鑰匙',
        meaning: '鑰匙 N. adj.'
    },
    {
        word: 'kick',
        hint: '踢',
        meaning: '踢 V. N.'
    },
    {
        word: 'kid',
        hint: '小孩',
        meaning: '小孩 N.'
    },
    {
        word: 'kill',
        hint: '殺',
        meaning: '殺 V.'
    },
    {
        word: 'kind',
        hint: '種類',
        meaning: '種類 N. adj.'
    },
    {
        word: 'king',
        hint: '國王',
        meaning: '國王 N.'
    },
    {
        word: 'kingdom',
        hint: '王國',
        meaning: '王國 N.'
    },
    {
        word: 'kiss',
        hint: '親吻',
        meaning: '親吻 V. N.'
    },
    {
        word: 'kitchen',
        hint: '廚房',
        meaning: '廚房 N.'
    },
    {
        word: 'knee',
        hint: '膝蓋',
        meaning: '膝蓋 N.'
    },
    {
        word: 'knife',
        hint: '刀',
        meaning: '刀 N.'
    },
    {
        word: 'knock',
        hint: '敲',
        meaning: '敲 V. N.'
    },
    {
        word: 'know',
        hint: '知道',
        meaning: '知道 V.'
    },
    {
        word: 'knowledge',
        hint: '知識',
        meaning: '知識 N.'
    },
    {
        word: 'label',
        hint: '標籤',
        meaning: '標籤 N. V.'
    },
    {
        word: 'labor',
        hint: '勞動',
        meaning: '勞動 N. V.'
    },
    {
        word: 'lack',
        hint: '缺乏',
        meaning: '缺乏 V. N.'
    },
    {
        word: 'ladder',
        hint: '梯子',
        meaning: '梯子 N.'
    },
    {
        word: 'lady',
        hint: '女士',
        meaning: '女士 N.'
    },
    {
        word: 'lake',
        hint: '湖',
        meaning: '湖 N.'
    },
    {
        word: 'lamp',
        hint: '燈',
        meaning: '燈 N.'
    },
    {
        word: 'land',
        hint: '土地',
        meaning: '土地 N. V.'
    },
    {
        word: 'language',
        hint: '語言',
        meaning: '語言 N.'
    },
    {
        word: 'large',
        hint: '大的',
        meaning: '大的 adj.'
    },
    {
        word: 'last',
        hint: '持續',
        meaning: '持續 adj. adv. V.'
    },
    {
        word: 'late',
        hint: '晚的',
        meaning: '晚的 adj. adv.'
    },
    {
        word: 'laugh',
        hint: '笑',
        meaning: '笑 V. N.'
    },
    {
        word: 'launch',
        hint: '發射',
        meaning: '發射 V. N.'
    },
    {
        word: 'law',
        hint: '法律',
        meaning: '法律 N.'
    },
    {
        word: 'lawn',
        hint: '草地',
        meaning: '草地 N.'
    },
    {
        word: 'lawyer',
        hint: '律師',
        meaning: '律師 N.'
    },
    {
        word: 'lay',
        hint: '放置',
        meaning: '放置 V.'
    },
    {
        word: 'lazy',
        hint: '懶惰的',
        meaning: '懶惰的 adj.'
    },
    {
        word: 'lead',
        hint: '領導',
        meaning: '領導 V. N.'
    },
    {
        word: 'leaf',
        hint: '葉子',
        meaning: '葉子 N.'
    },
    {
        word: 'league',
        hint: '聯盟',
        meaning: '聯盟 N.'
    },
    {
        word: 'lean',
        hint: '傾斜',
        meaning: '傾斜 V. adj.'
    },
    {
        word: 'learn',
        hint: '學習',
        meaning: '學習 V.'
    },
    {
        word: 'least',
        hint: '最少',
        meaning: '最少的 adj. adv.'
    },
    {
        word: 'leather',
        hint: '皮革',
        meaning: '皮革 N.'
    },
    {
        word: 'leave',
        hint: '離開',
        meaning: '離開 V. N.'
    },
    {
        word: 'lecture',
        hint: '演講',
        meaning: '演講 N. V.'
    },
    {
        word: 'left',
        hint: '左邊',
        meaning: '左邊 N. adj. V.'
    },
    {
        word: 'leg',
        hint: '腿',
        meaning: '腿 N.'
    },
    {
        word: 'legal',
        hint: '合法的',
        meaning: '合法的 adj.'
    },
    {
        word: 'legend',
        hint: '傳說',
        meaning: '傳說 N.'
    },
    {
        word: 'lemon',
        hint: '檸檬',
        meaning: '檸檬 N.'
    },
    {
        word: 'lend',
        hint: '借出',
        meaning: '借出 V.'
    },
    {
        word: 'length',
        hint: '長度',
        meaning: '長度 N.'
    },
    {
        word: 'less',
        hint: '更少的',
        meaning: '更少的 adj. adv.'
    },
    {
        word: 'lesson',
        hint: '課程',
        meaning: '課程 N.'
    },
    {
        word: 'let',
        hint: '讓',
        meaning: '讓 V.'
    },
    {
        word: 'letter',
        hint: '信',
        meaning: '信 N.'
    },
    {
        word: 'level',
        hint: '水平',
        meaning: '水平 N. adj. V.'
    },
    {
        word: 'liability',
        hint: '負債',
        meaning: '負債 N.'
    },
    {
        word: 'liberal',
        hint: '自由的',
        meaning: '自由的 adj.'
    },
    {
        word: 'library',
        hint: '圖書館',
        meaning: '圖書館 N.'
    },
    {
        word: 'license',
        hint: '執照',
        meaning: '執照 N. V.'
    },
    {
        word: 'lick',
        hint: '舔',
        meaning: '舔 V. N.'
    },
    {
        word: 'lid',
        hint: '蓋子',
        meaning: '蓋子 N.'
    },
    {
        word: 'lie',
        hint: '說謊',
        meaning: '說謊 V. N.'
    },
    {
        word: 'life',
        hint: '生命',
        meaning: '生命 N.'
    },
    {
        word: 'lift',
        hint: '舉起',
        meaning: '舉起 V. N.'
    },
    {
        word: 'light',
        hint: '光',
        meaning: '光 N. adj. V.'
    },
    {
        word: 'like',
        hint: '喜歡',
        meaning: '喜歡 prep. adj. V.'
    },
    {
        word: 'limb',
        hint: '肢',
        meaning: '肢 N.'
    },
    {
        word: 'limit',
        hint: '限制',
        meaning: '限制 V. N.'
    },
    {
        word: 'line',
        hint: '線',
        meaning: '線 N.'
    },
    {
        word: 'link',
        hint: '連結',
        meaning: '連結 V. N.'
    },
    {
        word: 'lip',
        hint: '嘴唇',
        meaning: '嘴唇 N.'
    },
    {
        word: 'liquid',
        hint: '液體',
        meaning: '液體 N. adj.'
    },
    {
        word: 'list',
        hint: '清單',
        meaning: '清單 N. V.'
    },
    {
        word: 'listen',
        hint: '聽',
        meaning: '聽 V.'
    },
    {
        word: 'literal',
        hint: '字面的',
        meaning: '字面的 adj.'
    },
    {
        word: 'little',
        hint: '小的',
        meaning: '小的 adj. pron.'
    },
    {
        word: 'live',
        hint: '活的',
        meaning: '活的 adj. V.'
    },
    {
        word: 'load',
        hint: '負擔',
        meaning: '負擔 N. V.'
    },
    {
        word: 'loan',
        hint: '貸款',
        meaning: '貸款 N. V.'
    },
    {
        word: 'local',
        hint: '地方的',
        meaning: '地方的 adj.'
    },
    {
        word: 'lock',
        hint: '鎖',
        meaning: '鎖 N. V.'
    },
    {
        word: 'log',
        hint: '原木',
        meaning: '原木 N.'
    },
    {
        word: 'lonely',
        hint: '孤獨的',
        meaning: '孤獨的 adj.'
    },
    {
        word: 'long',
        hint: '長的',
        meaning: '長的 adj. adv. V.'
    },
    {
        word: 'look',
        hint: '看',
        meaning: '看 V. N.'
    },
    {
        word: 'loose',
        hint: '鬆的',
        meaning: '鬆的 adj. V.'
    },
    {
        word: 'lose',
        hint: '失去',
        meaning: '失去 V.'
    },
    {
        word: 'loss',
        hint: '損失',
        meaning: '損失 N.'
    },
    {
        word: 'lot',
        hint: '很多',
        meaning: '很多 pron. N.'
    },
    {
        word: 'loud',
        hint: '大聲的',
        meaning: '大聲的 adj. adv.'
    },
    {
        word: 'love',
        hint: '愛',
        meaning: '愛 N. V.'
    },
    {
        word: 'low',
        hint: '低的',
        meaning: '低的 adj. adv. N.'
    },
    {
        word: 'loyal',
        hint: '忠誠的',
        meaning: '忠誠的 adj.'
    },
    {
        word: 'luck',
        hint: '運氣',
        meaning: '運氣 N.'
    },
    {
        word: 'luggage',
        hint: '行李',
        meaning: '行李 N.'
    },
    {
        word: 'lump',
        hint: '塊',
        meaning: '塊 N. V.'
    },
    {
        word: 'lunch',
        hint: '午餐',
        meaning: '午餐 N.'
    },
    {
        word: 'lung',
        hint: '肺',
        meaning: '肺 N.'
    },
    {
        word: 'machine',
        hint: '機器',
        meaning: '機器 N.'
    },
    {
        word: 'mad',
        hint: '發瘋的',
        meaning: '發瘋的 adj.'
    },
    {
        word: 'magazine',
        hint: '雜誌',
        meaning: '雜誌 N.'
    },
    {
        word: 'magic',
        hint: '魔法',
        meaning: '魔法 N. adj.'
    },
    {
        word: 'mail',
        hint: '郵件',
        meaning: '郵件 N. V.'
    },
    {
        word: 'main',
        hint: '主要的',
        meaning: '主要的 adj.'
    },
    {
        word: 'maintain',
        hint: '維持',
        meaning: '維持 V.'
    },
    {
        word: 'major',
        hint: '主要的',
        meaning: '主要的 adj. N.'
    },
    {
        word: 'make',
        hint: '製造',
        meaning: '製造 V.'
    },
    {
        word: 'maker',
        hint: '製造者',
        meaning: '製造者 N.'
    },
    {
        word: 'male',
        hint: '男性',
        meaning: '男性 N. adj.'
    },
    {
        word: 'mall',
        hint: '購物中心',
        meaning: '購物中心 N.'
    },
    {
        word: 'man',
        hint: '男人',
        meaning: '男人 N.'
    },
    {
        word: 'manage',
        hint: '管理',
        meaning: '管理 V.'
    },
    {
        word: 'management',
        hint: '管理',
        meaning: '管理 N.'
    },
    {
        word: 'manager',
        hint: '經理',
        meaning: '經理 N.'
    },
    {
        word: 'mandate',
        hint: '授權',
        meaning: '授權 N. V.'
    },
    {
        word: 'manner',
        hint: '方式',
        meaning: '方式 N.'
    },
    {
        word: 'manufacturer',
        hint: '製造商',
        meaning: '製造商 N.'
    },
    {
        word: 'many',
        hint: '許多',
        meaning: '許多 pron.'
    },
    {
        word: 'map',
        hint: '地圖',
        meaning: '地圖 N. V.'
    },
    {
        word: 'march',
        hint: '行軍',
        meaning: '行軍 V. N.'
    },
    {
        word: 'margin',
        hint: '邊緣',
        meaning: '邊緣 N.'
    },
    {
        word: 'mark',
        hint: '標記',
        meaning: '標記 V. N.'
    },
    {
        word: 'market',
        hint: '市場',
        meaning: '市場 N. V.'
    },
    {
        word: 'marriage',
        hint: '婚姻',
        meaning: '婚姻 N.'
    },
    {
        word: 'marry',
        hint: '結婚',
        meaning: '結婚 V.'
    },
    {
        word: 'mask',
        hint: '口罩',
        meaning: '口罩 N. V.'
    },
    {
        word: 'mass',
        hint: '大眾',
        meaning: '大眾 N. adj.'
    },
    {
        word: 'master',
        hint: '主人',
        meaning: '主人 N. V.'
    },
    {
        word: 'match',
        hint: '比賽',
        meaning: '比賽 N. V.'
    },
    {
        word: 'mate',
        hint: '伙伴',
        meaning: '伙伴 N. V.'
    },
    {
        word: 'material',
        hint: '材料',
        meaning: '材料 N. adj.'
    },
    {
        word: 'math',
        hint: '數學',
        meaning: '數學 N.'
    },
    {
        word: 'matter',
        hint: '事情',
        meaning: '事情 N. V.'
    },
    {
        word: 'maximum',
        hint: '最大值',
        meaning: '最大值 N. adj.'
    },
    {
        word: 'maybe',
        hint: '或許',
        meaning: '或許 adv.'
    },
    {
        word: 'meal',
        hint: '餐',
        meaning: '餐 N.'
    },
    {
        word: 'mean',
        hint: '意味',
        meaning: '意味 V. adj.'
    },
    {
        word: 'meaning',
        hint: '意義',
        meaning: '意義 N.'
    },
    {
        word: 'measure',
        hint: '測量',
        meaning: '測量 V. N.'
    },
    {
        word: 'meat',
        hint: '肉',
        meaning: '肉 N.'
    },
    {
        word: 'media',
        hint: '媒體',
        meaning: '媒體 N.'
    },
    {
        word: 'medical',
        hint: '醫療的',
        meaning: '醫療的 adj.'
    },
    {
        word: 'medicine',
        hint: '藥物',
        meaning: '藥物 N.'
    },
    {
        word: 'meet',
        hint: '見面',
        meaning: '見面 V.'
    },
    {
        word: 'meeting',
        hint: '會議',
        meaning: '會議 N.'
    },
    {
        word: 'melt',
        hint: '融化',
        meaning: '融化 V.'
    },
    {
        word: 'member',
        hint: '成員',
        meaning: '成員 N.'
    },
    {
        word: 'memorandum',
        hint: '備忘錄',
        meaning: '備忘錄 N.'
    },
    {
        word: 'memory',
        hint: '記憶',
        meaning: '記憶 N.'
    },
    {
        word: 'mention',
        hint: '提到',
        meaning: '提到 V. N.'
    },
    {
        word: 'menu',
        hint: '菜單',
        meaning: '菜單 N.'
    },
    {
        word: 'mere',
        hint: '僅僅的',
        meaning: '僅僅的 adj.'
    },
    {
        word: 'merit',
        hint: '價值',
        meaning: '價值 N.'
    },
    {
        word: 'message',
        hint: '訊息',
        meaning: '訊息 N.'
    },
    {
        word: 'metal',
        hint: '金屬',
        meaning: '金屬 N. adj.'
    },
    {
        word: 'method',
        hint: '方法',
        meaning: '方法 N.'
    },
    {
        word: 'middle',
        hint: '中間',
        meaning: '中間 N. adj.'
    },
    {
        word: 'midnight',
        hint: '午夜',
        meaning: '午夜 N.'
    },
    {
        word: 'might',
        hint: '可能',
        meaning: '可能 aux. N.'
    },
    {
        word: 'mild',
        hint: '溫和的',
        meaning: '溫和的 adj.'
    },
    {
        word: 'mile',
        hint: '英里',
        meaning: '英里 N.'
    },
    {
        word: 'military',
        hint: '軍事的',
        meaning: '軍事的 adj.'
    },
    {
        word: 'milk',
        hint: '牛奶',
        meaning: '牛奶 N. V.'
    },
    {
        word: 'mind',
        hint: '心意',
        meaning: '心意 N. V.'
    },
    {
        word: 'mine',
        hint: '我的',
        meaning: '我的 pron.'
    },
    {
        word: 'mineral',
        hint: '礦物',
        meaning: '礦物 N. adj.'
    },
    {
        word: 'minimum',
        hint: '最小值',
        meaning: '最小值 N. adj.'
    },
    {
        word: 'minister',
        hint: '部長',
        meaning: '部長 N. V.'
    },
    {
        word: 'minor',
        hint: '未成年人',
        meaning: '未成年人 N. adj.'
    },
    {
        word: 'minute',
        hint: '分鐘',
        meaning: '分鐘 N.'
    },
    {
        word: 'mirror',
        hint: '鏡子',
        meaning: '鏡子 N. V.'
    },
    {
        word: 'miss',
        hint: '錯過',
        meaning: '錯過 V. N.'
    },
    {
        word: 'mission',
        hint: '任務',
        meaning: '任務 N.'
    },
    {
        word: 'mistake',
        hint: '錯誤',
        meaning: '錯誤 N. V.'
    },
    {
        word: 'mix',
        hint: '混合',
        meaning: '混合 V. N.'
    },
    {
        word: 'mixture',
        hint: '混合物',
        meaning: '混合物 N.'
    },
    {
        word: 'mobile',
        hint: '行動的',
        meaning: '行動的 adj.'
    },
    {
        word: 'model',
        hint: '模型',
        meaning: '模型 N. V.'
    },
    {
        word: 'modern',
        hint: '現代的',
        meaning: '現代的 adj.'
    },
    {
        word: 'modest',
        hint: '謙虛的',
        meaning: '謙虛的 adj.'
    },
    {
        word: 'mom',
        hint: '媽媽',
        meaning: '媽媽 N.'
    },
    {
        word: 'moment',
        hint: '時刻',
        meaning: '時刻 N.'
    },
    {
        word: 'money',
        hint: '錢',
        meaning: '錢 N.'
    },
    {
        word: 'monitor',
        hint: '監控',
        meaning: '監控 V. N.'
    },
    {
        word: 'month',
        hint: '月',
        meaning: '月 N.'
    },
    {
        word: 'mood',
        hint: '心情',
        meaning: '心情 N.'
    },
    {
        word: 'moon',
        hint: '月亮',
        meaning: '月亮 N.'
    },
    {
        word: 'moral',
        hint: '道德的',
        meaning: '道德的 adj.'
    },
    {
        word: 'more',
        hint: '更多的',
        meaning: '更多的 adj. pron. adv.'
    },
    {
        word: 'morning',
        hint: '早晨',
        meaning: '早晨 N.'
    },
    {
        word: 'most',
        hint: '大多數',
        meaning: '大多數 pron. adv.'
    },
    {
        word: 'mother',
        hint: '母親',
        meaning: '母親 N.'
    },
    {
        word: 'motion',
        hint: '運動',
        meaning: '運動 N. V.'
    },
    {
        word: 'motor',
        hint: '馬達',
        meaning: '馬達 N.'
    },
    {
        word: 'mount',
        hint: '安裝',
        meaning: '安裝 V. N.'
    },
    {
        word: 'mountain',
        hint: '山',
        meaning: '山 N.'
    },
    {
        word: 'mouse',
        hint: '老鼠',
        meaning: '老鼠 N.'
    },
    {
        word: 'mouth',
        hint: '嘴巴',
        meaning: '嘴巴 N.'
    },
    {
        word: 'move',
        hint: '移動',
        meaning: '移動 V. N.'
    },
    {
        word: 'movie',
        hint: '電影',
        meaning: '電影 N.'
    },
    {
        word: 'much',
        hint: '很多',
        meaning: '很多 adj. pron. adv.'
    },
    {
        word: 'mud',
        hint: '泥巴',
        meaning: '泥巴 N.'
    },
    {
        word: 'multiple',
        hint: '多個的',
        meaning: '多個的 adj.'
    },
    {
        word: 'muscle',
        hint: '肌肉',
        meaning: '肌肉 N.'
    },
    {
        word: 'museum',
        hint: '博物館',
        meaning: '博物館 N.'
    },
    {
        word: 'music',
        hint: '音樂',
        meaning: '音樂 N.'
    },
    {
        word: 'must',
        hint: '必須',
        meaning: '必須 aux.'
    },
    {
        word: 'mystery',
        hint: '神秘',
        meaning: '神秘 N. adj.'
    },
    {
        word: 'nail',
        hint: '釘子',
        meaning: '釘子 N. V.'
    },
    {
        word: 'name',
        hint: '名字',
        meaning: '名字 N. V.'
    },
    {
        word: 'narrow',
        hint: '狹窄',
        meaning: '狹窄 adj. V.'
    },
    {
        word: 'nation',
        hint: '國家',
        meaning: '國家 N.'
    },
    {
        word: 'native',
        hint: '本地的',
        meaning: '本地的 adj. N.'
    },
    {
        word: 'natural',
        hint: '自然的',
        meaning: '自然的 adj.'
    },
    {
        word: 'nature',
        hint: '自然',
        meaning: '自然 N.'
    },
    {
        word: 'near',
        hint: '近',
        meaning: '近 adj. adv. prep. v.'
    },
    {
        word: 'necessary',
        hint: '必要的',
        meaning: '必要的 adj.'
    },
    {
        word: 'neck',
        hint: '脖子',
        meaning: '脖子 N.'
    },
    {
        word: 'need',
        hint: '需要',
        meaning: '需要 V. N.'
    },
    {
        word: 'negative',
        hint: '否定的',
        meaning: '否定的 adj.'
    },
    {
        word: 'negotiate',
        hint: '談判',
        meaning: '談判 V.'
    },
    {
        word: 'neighbor',
        hint: '鄰居',
        meaning: '鄰居 N.'
    },
    {
        word: 'neither',
        hint: '也不',
        meaning: '也不 conj. pron.'
    },
    {
        word: 'nephew',
        hint: '侄子',
        meaning: '侄子 N.'
    },
    {
        word: 'nerve',
        hint: '神經',
        meaning: '神經 N.'
    },
    {
        word: 'nest',
        hint: '巢',
        meaning: '巢 N. V.'
    },
    {
        word: 'net',
        hint: '網',
        meaning: '網 N. adj. V.'
    },
    {
        word: 'network',
        hint: '網路',
        meaning: '網路 N. V.'
    },
    {
        word: 'never',
        hint: '從不',
        meaning: '從不 adv.'
    },
    {
        word: 'new',
        hint: '新的',
        meaning: '新的 adj.'
    },
    {
        word: 'news',
        hint: '新聞',
        meaning: '新聞 N.'
    },
    {
        word: 'next',
        hint: '下一個',
        meaning: '下一個 adj. adv.'
    },
    {
        word: 'nice',
        hint: '好的',
        meaning: '好的 adj.'
    },
    {
        word: 'night',
        hint: '夜晚',
        meaning: '夜晚 N.'
    },
    {
        word: 'nine',
        hint: '九',
        meaning: '九 num.'
    },
    {
        word: 'no',
        hint: '沒有',
        meaning: '沒有 adv.'
    },
    {
        word: 'noble',
        hint: '高貴的',
        meaning: '高貴的 adj.'
    },
    {
        word: 'noise',
        hint: '噪音',
        meaning: '噪音 N.'
    },
    {
        word: 'nominate',
        hint: '提名',
        meaning: '提名 V.'
    },
    {
        word: 'none',
        hint: '沒有',
        meaning: '沒有 pron.'
    },
    {
        word: 'noon',
        hint: '中午',
        meaning: '中午 N.'
    },
    {
        word: 'nor',
        hint: '也不',
        meaning: '也不 conj.'
    },
    {
        word: 'north',
        hint: '北方',
        meaning: '北方 N.'
    },
    {
        word: 'nose',
        hint: '鼻子',
        meaning: '鼻子 N.'
    },
    {
        word: 'not',
        hint: '不',
        meaning: '不 adv.'
    },
    {
        word: 'note',
        hint: '筆記',
        meaning: '筆記 N. V.'
    },
    {
        word: 'nothing',
        hint: '沒什麼',
        meaning: '沒什麼 pron.'
    },
    {
        word: 'notice',
        hint: '注意',
        meaning: '注意 V. N.'
    },
    {
        word: 'novel',
        hint: '小說',
        meaning: '小說 N. adj.'
    },
    {
        word: 'now',
        hint: '現在',
        meaning: '現在 adv.'
    },
    {
        word: 'nowhere',
        hint: '任何地方都不',
        meaning: '任何地方都不 adv.'
    },
    {
        word: 'nuclear',
        hint: '核的',
        meaning: '核的 adj.'
    },
    {
        word: 'number',
        hint: '數字',
        meaning: '數字 N. V.'
    },
    {
        word: 'numerous',
        hint: '眾多的',
        meaning: '眾多的 adj.'
    },
    {
        word: 'nurse',
        hint: '護士',
        meaning: '護士 N. V.'
    },
    {
        word: 'nut',
        hint: '堅果',
        meaning: '堅果 N.'
    },
    {
        word: 'oak',
        hint: '橡樹',
        meaning: '橡樹 N.'
    },
    {
        word: 'obey',
        hint: '服從',
        meaning: '服從 V.'
    },
    {
        word: 'object',
        hint: '物體',
        meaning: '物體 N. V.'
    },
    {
        word: 'objective',
        hint: '目標',
        meaning: '目標 N. adj.'
    },
    {
        word: 'obligation',
        hint: '義務',
        meaning: '義務 N.'
    },
    {
        word: 'observe',
        hint: '觀察',
        meaning: '觀察 V.'
    },
    {
        word: 'obtain',
        hint: '獲得',
        meaning: '獲得 V.'
    },
    {
        word: 'obvious',
        hint: '明顯的',
        meaning: '明顯的 adj.'
    },
    {
        word: 'occasion',
        hint: '場合',
        meaning: '場合 N.'
    },
    {
        word: 'occupy',
        hint: '佔據',
        meaning: '佔據 V.'
    },
    {
        word: 'occur',
        hint: '發生',
        meaning: '發生 V.'
    },
    {
        word: 'ocean',
        hint: '海洋',
        meaning: '海洋 N.'
    },
    {
        word: 'odd',
        hint: '奇怪的',
        meaning: '奇怪的 adj.'
    },
    {
        word: 'of',
        hint: '的',
        meaning: '的 prep.'
    },
    {
        word: 'off',
        hint: '離開',
        meaning: '離開 prep. adv.'
    },
    {
        word: 'offer',
        hint: '提供',
        meaning: '提供 V. N.'
    },
    {
        word: 'office',
        hint: '辦公室',
        meaning: '辦公室 N.'
    },
    {
        word: 'officer',
        hint: '官員',
        meaning: '官員 N.'
    },
    {
        word: 'official',
        hint: '官方的',
        meaning: '官方的 adj. N.'
    },
    {
        word: 'often',
        hint: '經常',
        meaning: '經常 adv.'
    },
    {
        word: 'oil',
        hint: '油',
        meaning: '油 N. V.'
    },
    {
        word: 'okay',
        hint: '好的',
        meaning: '好的 adv.'
    },
    {
        word: 'old',
        hint: '老的',
        meaning: '老的 adj.'
    },
    {
        word: 'on',
        hint: '在',
        meaning: '在 prep. adv.'
    },
    {
        word: 'once',
        hint: '一次',
        meaning: '一次 adv. conj.'
    },
    {
        word: 'one',
        hint: '一',
        meaning: '一 num. pron.'
    },
    {
        word: 'onion',
        hint: '洋蔥',
        meaning: '洋蔥 N.'
    },
    {
        word: 'only',
        hint: '只有',
        meaning: '只有 adv. adj.'
    },
    {
        word: 'onto',
        hint: '到...上',
        meaning: '到...上 prep.'
    },
    {
        word: 'open',
        hint: '打開',
        meaning: '打開 adj. V.'
    },
    {
        word: 'operate',
        hint: '操作',
        meaning: '操作 V.'
    },
    {
        word: 'operation',
        hint: '操作',
        meaning: '操作 N.'
    },
    {
        word: 'operator',
        hint: '操作者',
        meaning: '操作者 N.'
    },
    {
        word: 'opinion',
        hint: '意見',
        meaning: '意見 N.'
    },
    {
        word: 'opportunity',
        hint: '機會',
        meaning: '機會 N.'
    },
    {
        word: 'oppose',
        hint: '反對',
        meaning: '反對 V.'
    },
    {
        word: 'opposite',
        hint: '相反的',
        meaning: '相反的 adj. N.'
    },
    {
        word: 'option',
        hint: '選項',
        meaning: '選項 N.'
    },
    {
        word: 'or',
        hint: '或者',
        meaning: '或者 conj.'
    },
    {
        word: 'orange',
        hint: '橙色',
        meaning: '橙色 N. adj.'
    },
    {
        word: 'order',
        hint: '訂單',
        meaning: '訂單 N. V.'
    },
    {
        word: 'ordinary',
        hint: '普通的',
        meaning: '普通的 adj.'
    },
    {
        word: 'organ',
        hint: '器官',
        meaning: '器官 N.'
    },
    {
        word: 'organization',
        hint: '組織',
        meaning: '組織 N.'
    },
    {
        word: 'organize',
        hint: '組織',
        meaning: '組織 V.'
    },
    {
        word: 'origin',
        hint: '起源',
        meaning: '起源 N.'
    },
    {
        word: 'original',
        hint: '原始的',
        meaning: '原始的 adj.'
    },
    {
        word: 'other',
        hint: '其他的',
        meaning: '其他的 adj. pron.'
    },
    {
        word: 'otherwise',
        hint: '否則',
        meaning: '否則 adv.'
    },
    {
        word: 'ought',
        hint: '應該',
        meaning: '應該 aux. v.'
    },
    {
        word: 'ounce',
        hint: '盎司',
        meaning: '盎司 N.'
    },
    {
        word: 'our',
        hint: '我們的',
        meaning: '我們的 pron.'
    },
    {
        word: 'ours',
        hint: '我們的',
        meaning: '我們的 pron.'
    },
    {
        word: 'ourselves',
        hint: '我們自己',
        meaning: '我們自己 pron.'
    },
    {
        word: 'out',
        hint: '外面',
        meaning: '外面 adv. prep.'
    },
    {
        word: 'outcome',
        hint: '結果',
        meaning: '結果 N.'
    },
    {
        word: 'output',
        hint: '輸出',
        meaning: '輸出 N.'
    },
    {
        word: 'outside',
        hint: '外面',
        meaning: '外面 prep. adv. adj. n.'
    },
    {
        word: 'oven',
        hint: '烤箱',
        meaning: '烤箱 N.'
    },
    {
        word: 'over',
        hint: '結束',
        meaning: '結束 prep. adv. adj.'
    },
    {
        word: 'overall',
        hint: '整體的',
        meaning: '整體的 adj. adv.'
    },
    {
        word: 'overcome',
        hint: '克服',
        meaning: '克服 V.'
    },
    {
        word: 'overlook',
        hint: '俯瞰',
        meaning: '俯瞰 V.'
    },
    {
        word: 'overnight',
        hint: '一夜之間',
        meaning: '一夜之間 adv. adj.'
    },
    {
        word: 'oversee',
        hint: '監管',
        meaning: '監管 V.'
    },
    {
        word: 'overtake',
        hint: '追趕',
        meaning: '追趕 V.'
    },
    {
        word: 'owe',
        hint: '欠',
        meaning: '欠 V.'
    },
    {
        word: 'own',
        hint: '擁有',
        meaning: '擁有 V. adj. pron.'
    },
    {
        word: 'owner',
        hint: '擁有者',
        meaning: '擁有者 N.'
    },
    {
        word: 'pace',
        hint: '步調',
        meaning: '步調 N. V.'
    },
    {
        word: 'pack',
        hint: '包裹',
        meaning: '包裹 V. N.'
    },
    {
        word: 'package',
        hint: '包裹',
        meaning: '包裹 N. V.'
    },
    {
        word: 'page',
        hint: '頁',
        meaning: '頁 N.'
    },
    {
        word: 'pain',
        hint: '疼痛',
        meaning: '疼痛 N.'
    },
    {
        word: 'paint',
        hint: '油漆',
        meaning: '油漆 V. N.'
    },
    {
        word: 'pair',
        hint: '一對',
        meaning: '一對 N. V.'
    },
    {
        word: 'palace',
        hint: '宮殿',
        meaning: '宮殿 N.'
    },
    {
        word: 'pale',
        hint: '蒼白',
        meaning: '蒼白 adj. V.'
    },
    {
        word: 'pan',
        hint: '平底鍋',
        meaning: '平底鍋 N.'
    },
    {
        word: 'panel',
        hint: '面板',
        meaning: '面板 N.'
    },
    {
        word: 'panic',
        hint: '恐慌',
        meaning: '恐慌 N. V.'
    },
    {
        word: 'pant',
        hint: '氣喘',
        meaning: '氣喘 V. N.'
    },
    {
        word: 'paper',
        hint: '紙',
        meaning: '紙 N.'
    },
    {
        word: 'paragraph',
        hint: '段落',
        meaning: '段落 N.'
    },
    {
        word: 'parallel',
        hint: '平行',
        meaning: '平行 adj. N. V.'
    },
    {
        word: 'parent',
        hint: '父母',
        meaning: '父母 N.'
    },
    {
        word: 'park',
        hint: '公園',
        meaning: '公園 N. V.'
    },
    {
        word: 'part',
        hint: '部分',
        meaning: '部分 N.'
    },
    {
        word: 'participant',
        hint: '參與者',
        meaning: '參與者 N.'
    },
    {
        word: 'participate',
        hint: '參與',
        meaning: '參與 V.'
    },
    {
        word: 'particular',
        hint: '特別的',
        meaning: '特別的 adj.'
    },
    {
        word: 'partner',
        hint: '夥伴',
        meaning: '夥伴 N. V.'
    },
    {
        word: 'party',
        hint: '派對',
        meaning: '派對 N.'
    },
    {
        word: 'pass',
        hint: '通過',
        meaning: '通過 V. N.'
    },
    {
        word: 'passage',
        hint: '通道',
        meaning: '通道 N.'
    },
    {
        word: 'passenger',
        hint: '乘客',
        meaning: '乘客 N.'
    },
    {
        word: 'passion',
        hint: '激情',
        meaning: '激情 N.'
    },
    {
        word: 'past',
        hint: '過去',
        meaning: '過去 adj. prep. N.'
    },
    {
        word: 'path',
        hint: '小路',
        meaning: '小路 N.'
    },
    {
        word: 'patience',
        hint: '耐心',
        meaning: '耐心 N.'
    },
    {
        word: 'patient',
        hint: '病人',
        meaning: '病人 N. adj.'
    },
    {
        word: 'pattern',
        hint: '模式',
        meaning: '模式 N.'
    },
    {
        word: 'pause',
        hint: '暫停',
        meaning: '暫停 V. N.'
    },
    {
        word: 'pay',
        hint: '支付',
        meaning: '支付 V. N.'
    },
    {
        word: 'peace',
        hint: '和平',
        meaning: '和平 N.'
    },
    {
        word: 'peak',
        hint: '峰頂',
        meaning: '峰頂 N.'
    },
    {
        word: 'peanut',
        hint: '花生',
        meaning: '花生 N.'
    },
    {
        word: 'pear',
        hint: '梨',
        meaning: '梨 N.'
    },
    {
        word: 'peasant',
        hint: '農民',
        meaning: '農民 N.'
    },
    {
        word: 'peculiar',
        hint: '奇怪的',
        meaning: '奇怪的 adj.'
    },
    {
        word: 'pen',
        hint: '筆',
        meaning: '筆 N.'
    },
    {
        word: 'penalty',
        hint: '處罰',
        meaning: '處罰 N.'
    },
    {
        word: 'pencil',
        hint: '鉛筆',
        meaning: '鉛筆 N.'
    },
    {
        word: 'people',
        hint: '人們',
        meaning: '人們 N.'
    },
    {
        word: 'perceive',
        hint: '感知',
        meaning: '感知 V.'
    },
    {
        word: 'percentage',
        hint: '百分比',
        meaning: '百分比 N.'
    },
    {
        word: 'perception',
        hint: '感知',
        meaning: '感知 N.'
    },
    {
        word: 'perfect',
        hint: '完美的',
        meaning: '完美的 adj. V.'
    },
    {
        word: 'perform',
        hint: '表演',
        meaning: '表演 V.'
    },
    {
        word: 'performance',
        hint: '表演',
        meaning: '表演 N.'
    },
    {
        word: 'perhaps',
        hint: '也許',
        meaning: '也許 adv.'
    },
    {
        word: 'period',
        hint: '時期',
        meaning: '時期 N.'
    },
    {
        word: 'permanent',
        hint: '永久的',
        meaning: '永久的 adj.'
    },
    {
        word: 'permission',
        hint: '許可',
        meaning: '許可 N.'
    },
    {
        word: 'permit',
        hint: '許可',
        meaning: '許可 V. N.'
    },
    {
        word: 'person',
        hint: '人',
        meaning: '人 N.'
    },
    {
        word: 'personal',
        hint: '個人的',
        meaning: '個人的 adj.'
    },
    {
        word: 'personality',
        hint: '個性',
        meaning: '個性 N.'
    },
    {
        word: 'persuade',
        hint: '說服',
        meaning: '說服 V.'
    },
    {
        word: 'pet',
        hint: '寵物',
        meaning: '寵物 N.'
    },
    {
        word: 'phone',
        hint: '電話',
        meaning: '電話 N. V.'
    },
    {
        word: 'photo',
        hint: '照片',
        meaning: '照片 N.'
    },
    {
        word: 'photograph',
        hint: '照片',
        meaning: '照片 N. V.'
    },
    {
        word: 'phrase',
        hint: '詞組',
        meaning: '詞組 N.'
    },
    {
        word: 'physical',
        hint: '身體的',
        meaning: '身體的 adj.'
    },
    {
        word: 'physics',
        hint: '物理學',
        meaning: '物理學 N.'
    },
    {
        word: 'piano',
        hint: '鋼琴',
        meaning: '鋼琴 N.'
    },
    {
        word: 'pick',
        hint: '挑選',
        meaning: '挑選 V. N.'
    },
    {
        word: 'picture',
        hint: '圖片',
        meaning: '圖片 N. V.'
    },
    {
        word: 'pie',
        hint: '派',
        meaning: '派 N.'
    },
    {
        word: 'piece',
        hint: '一片',
        meaning: '一片 N.'
    },
    {
        word: 'pig',
        hint: '豬',
        meaning: '豬 N.'
    },
    {
        word: 'pile',
        hint: '堆',
        meaning: '堆 N. V.'
    },
    {
        word: 'pill',
        hint: '藥丸',
        meaning: '藥丸 N.'
    },
    {
        word: 'pilot',
        hint: '飛行員',
        meaning: '飛行員 N. V.'
    },
    {
        word: 'pin',
        hint: '大頭針',
        meaning: '大頭針 N. V.'
    },
    {
        word: 'pine',
        hint: '松樹',
        meaning: '松樹 N.'
    },
    {
        word: 'pink',
        hint: '粉紅色',
        meaning: '粉紅色 N. adj.'
    },
    {
        word: 'pioneer',
        hint: '先鋒',
        meaning: '先鋒 N. V.'
    },
    {
        word: 'pipe',
        hint: '管子',
        meaning: '管子 N. V.'
    },
    {
        word: 'pitch',
        hint: '音調',
        meaning: '音調 N. V.'
    },
    {
        word: 'pizza',
        hint: '比薩',
        meaning: '比薩 N.'
    },
    {
        word: 'place',
        hint: '地方',
        meaning: '地方 N. V.'
    },
    {
        word: 'plan',
        hint: '計劃',
        meaning: '計劃 N. V.'
    },
    {
        word: 'plane',
        hint: '飛機',
        meaning: '飛機 N.'
    },
    {
        word: 'planet',
        hint: '行星',
        meaning: '行星 N.'
    },
    {
        word: 'plastic',
        hint: '塑料',
        meaning: '塑料 N. adj.'
    },
    {
        word: 'plate',
        hint: '盤子',
        meaning: '盤子 N.'
    },
    {
        word: 'platform',
        hint: '平臺',
        meaning: '平臺 N.'
    },
    {
        word: 'play',
        hint: '玩',
        meaning: '玩 V. N.'
    },
    {
        word: 'pleasant',
        hint: '愉快的',
        meaning: '愉快的 adj.'
    },
    {
        word: 'please',
        hint: '請',
        meaning: '請 V. adv.'
    },
    {
        word: 'pleasure',
        hint: '快樂',
        meaning: '快樂 N.'
    },
    {
        word: 'plenty',
        hint: '充足',
        meaning: '充足 pron. adj. adv. n.'
    },
    {
        word: 'plot',
        hint: '情節',
        meaning: '情節 N. V.'
    },
    {
        word: 'plunge',
        hint: '跳水',
        meaning: '跳水 V. N.'
    },
    {
        word: 'plural',
        hint: '複數的',
        meaning: '複數的 adj.'
    },
    {
        word: 'plus',
        hint: '加',
        meaning: '加 prep. adj. N.'
    },
    {
        word: 'pocket',
        hint: '口袋',
        meaning: '口袋 N.'
    },
    {
        word: 'poem',
        hint: '詩',
        meaning: '詩 N.'
    },
    {
        word: 'poet',
        hint: '詩人',
        meaning: '詩人 N.'
    },
    {
        word: 'poetry',
        hint: '詩歌',
        meaning: '詩歌 N.'
    },
    {
        word: 'point',
        hint: '點',
        meaning: '點 N. V.'
    },
    {
        word: 'poison',
        hint: '毒藥',
        meaning: '毒藥 N. V.'
    },
    {
        word: 'pole',
        hint: '杆',
        meaning: '杆 N.'
    },
    {
        word: 'police',
        hint: '警察',
        meaning: '警察 N.'
    },
    {
        word: 'policy',
        hint: '政策',
        meaning: '政策 N.'
    },
    {
        word: 'polish',
        hint: '擦亮',
        meaning: '擦亮 V. N.'
    },
    {
        word: 'polite',
        hint: '有禮貌的',
        meaning: '有禮貌的 adj.'
    },
    {
        word: 'political',
        hint: '政治的',
        meaning: '政治的 adj.'
    },
    {
        word: 'politician',
        hint: '政治家',
        meaning: '政治家 N.'
    },
    {
        word: 'politics',
        hint: '政治',
        meaning: '政治 N.'
    },
    {
        word: 'pollution',
        hint: '污染',
        meaning: '污染 N.'
    },
    {
        word: 'pond',
        hint: '池塘',
        meaning: '池塘 N.'
    },
    {
        word: 'pool',
        hint: '游泳池',
        meaning: '游泳池 N.'
    },
    {
        word: 'poor',
        hint: '貧窮的',
        meaning: '貧窮的 adj.'
    },
    {
        word: 'pop',
        hint: '流行的',
        meaning: '流行的 adj. N. V.'
    },
    {
        word: 'popular',
        hint: '受歡迎的',
        meaning: '受歡迎的 adj.'
    },
    {
        word: 'population',
        hint: '人口',
        meaning: '人口 N.'
    },
    {
        word: 'port',
        hint: '港口',
        meaning: '港口 N.'
    },
    {
        word: 'pose',
        hint: '擺姿勢',
        meaning: '擺姿勢 V. N.'
    },
    {
        word: 'position',
        hint: '位置',
        meaning: '位置 N.'
    },
    {
        word: 'positive',
        hint: '積極的',
        meaning: '積極的 adj.'
    },
    {
        word: 'possess',
        hint: '擁有',
        meaning: '擁有 V.'
    },
    {
        word: 'possession',
        hint: '擁有',
        meaning: '擁有 N.'
    },
    {
        word: 'possibility',
        hint: '可能性',
        meaning: '可能性 N.'
    },
    {
        word: 'possible',
        hint: '可能的',
        meaning: '可能的 adj.'
    },
    {
        word: 'post',
        hint: '郵件',
        meaning: '郵件 N. V.'
    },
    {
        word: 'pot',
        hint: '鍋',
        meaning: '鍋 N.'
    },
    {
        word: 'potato',
        hint: '馬鈴薯',
        meaning: '馬鈴薯 N.'
    },
    {
        word: 'potential',
        hint: '潛在的',
        meaning: '潛在的 adj. N.'
    },
    {
        word: 'pound',
        hint: '磅',
        meaning: '磅 N. V.'
    },
    {
        word: 'pour',
        hint: '倒',
        meaning: '倒 V.'
    },
    {
        word: 'poverty',
        hint: '貧困',
        meaning: '貧困 N.'
    },
    {
        word: 'powder',
        hint: '粉末',
        meaning: '粉末 N.'
    },
    {
        word: 'power',
        hint: '力量',
        meaning: '力量 N.'
    },
    {
        word: 'powerful',
        hint: '強大的',
        meaning: '強大的 adj.'
    },
    {
        word: 'practice',
        hint: '實踐',
        meaning: '實踐 N. V.'
    },
    {
        word: 'praise',
        hint: '讚揚',
        meaning: '讚揚 N. V.'
    },
    {
        word: 'pray',
        hint: '祈禱',
        meaning: '祈禱 V.'
    },
    {
        word: 'preach',
        hint: '傳教',
        meaning: '傳教 V.'
    },
    {
        word: 'precede',
        hint: '在...之前',
        meaning: '在...之前 V.'
    },
    {
        word: 'precious',
        hint: '珍貴的',
        meaning: '珍貴的 adj.'
    },
    {
        word: 'prefer',
        hint: '更喜歡',
        meaning: '更喜歡 V.'
    },
    {
        word: 'pregnant',
        hint: '懷孕的',
        meaning: '懷孕的 adj.'
    },
    {
        word: 'prejudice',
        hint: '偏見',
        meaning: '偏見 N. V.'
    },
    {
        word: 'preliminary',
        hint: '初步的',
        meaning: '初步的 adj.'
    },
    {
        word: 'premier',
        hint: '首相',
        meaning: '首相 N. adj.'
    },
    {
        word: 'premise',
        hint: '前提',
        meaning: '前提 N.'
    },
    {
        word: 'premium',
        hint: '保險費',
        meaning: '保險費 N.'
    },
    {
        word: 'preparation',
        hint: '準備',
        meaning: '準備 N.'
    },
    {
        word: 'prepare',
        hint: '準備',
        meaning: '準備 V.'
    },
    {
        word: 'presence',
        hint: '存在',
        meaning: '存在 N.'
    },
    {
        word: 'present',
        hint: '禮物',
        meaning: '禮物 N. adj. V.'
    },
    {
        word: 'preserve',
        hint: '保護',
        meaning: '保護 V. N.'
    },
    {
        word: 'president',
        hint: '總統',
        meaning: '總統 N.'
    },
    {
        word: 'press',
        hint: '按',
        meaning: '按 V. N.'
    },
    {
        word: 'pressure',
        hint: '壓力',
        meaning: '壓力 N.'
    },
    {
        word: 'presume',
        hint: '假設',
        meaning: '假設 V.'
    },
    {
        word: 'pretend',
        hint: '假裝',
        meaning: '假裝 V.'
    },
    {
        word: 'pretty',
        hint: '漂亮',
        meaning: '漂亮 adj. adv.'
    },
    {
        word: 'prevail',
        hint: '盛行',
        meaning: '盛行 V.'
    },
    {
        word: 'prevent',
        hint: '防止',
        meaning: '防止 V.'
    },
    {
        word: 'previous',
        hint: '先前的',
        meaning: '先前的 adj.'
    },
    {
        word: 'price',
        hint: '價格',
        meaning: '價格 N.'
    },
    {
        word: 'pride',
        hint: '驕傲',
        meaning: '驕傲 N. V.'
    },
    {
        word: 'primary',
        hint: '主要的',
        meaning: '主要的 adj.'
    },
    {
        word: 'prime',
        hint: '主要的',
        meaning: '主要的 adj. V.'
    },
    {
        word: 'primitive',
        hint: '原始的',
        meaning: '原始的 adj.'
    },
    {
        word: 'prince',
        hint: '王子',
        meaning: '王子 N.'
    },
    {
        word: 'princess',
        hint: '公主',
        meaning: '公主 N.'
    },
    {
        word: 'principle',
        hint: '原則',
        meaning: '原則 N.'
    },
    {
        word: 'print',
        hint: '印刷',
        meaning: '印刷 V. N.'
    },
    {
        word: 'prior',
        hint: '先前的',
        meaning: '先前的 adj.'
    },
    {
        word: 'priority',
        hint: '優先',
        meaning: '優先 N.'
    },
    {
        word: 'prison',
        hint: '監獄',
        meaning: '監獄 N.'
    },
    {
        word: 'private',
        hint: '私人的',
        meaning: '私人的 adj.'
    },
    {
        word: 'prize',
        hint: '獎品',
        meaning: '獎品 N.'
    },
    {
        word: 'probability',
        hint: '可能性',
        meaning: '可能性 N.'
    },
    {
        word: 'probable',
        hint: '可能的',
        meaning: '可能的 adj.'
    },
    {
        word: 'problem',
        hint: '問題',
        meaning: '問題 N.'
    },
    {
        word: 'procedure',
        hint: '程序',
        meaning: '程序 N.'
    },
    {
        word: 'proceed',
        hint: '繼續',
        meaning: '繼續 V.'
    },
    {
        word: 'process',
        hint: '過程',
        meaning: '過程 N. V.'
    },
    {
        word: 'produce',
        hint: '生產',
        meaning: '生產 V. N.'
    },
    {
        word: 'product',
        hint: '產品',
        meaning: '產品 N.'
    },
    {
        word: 'production',
        hint: '生產',
        meaning: '生產 N.'
    },
    {
        word: 'profession',
        hint: '職業',
        meaning: '職業 N.'
    },
    {
        word: 'professional',
        hint: '專業的',
        meaning: '專業的 adj. N.'
    },
    {
        word: 'professor',
        hint: '教授',
        meaning: '教授 N.'
    },
    {
        word: 'profile',
        hint: '簡介',
        meaning: '簡介 N.'
    },
    {
        word: 'profit',
        hint: '利潤',
        meaning: '利潤 N. V.'
    },
    {
        word: 'program',
        hint: '節目',
        meaning: '節目 N.'
    },
    {
        word: 'progress',
        hint: '進展',
        meaning: '進展 N. V.'
    },
    {
        word: 'progressive',
        hint: '進步的',
        meaning: '進步的 adj.'
    },
    {
        word: 'project',
        hint: '項目',
        meaning: '項目 N. V.'
    },
    {
        word: 'promise',
        hint: '承諾',
        meaning: '承諾 N. V.'
    },
    {
        word: 'promote',
        hint: '促進',
        meaning: '促進 V.'
    },
    {
        word: 'prompt',
        hint: '迅速的',
        meaning: '迅速的 adj. V.'
    },
    {
        word: 'proof',
        hint: '證據',
        meaning: '證據 N.'
    },
    {
        word: 'propose',
        hint: '提議',
        meaning: '提議 V.'
    },
    {
        word: 'prospect',
        hint: '前景',
        meaning: '前景 N.'
    },
    {
        word: 'protect',
        hint: '保護',
        meaning: '保護 V.'
    },
    {
        word: 'protest',
        hint: '抗議',
        meaning: '抗議 V. N.'
    },
    {
        word: 'proud',
        hint: '自豪的',
        meaning: '自豪的 adj.'
    },
    {
        word: 'prove',
        hint: '證明',
        meaning: '證明 V.'
    },
    {
        word: 'provide',
        hint: '提供',
        meaning: '提供 V.'
    },
    {
        word: 'province',
        hint: '省',
        meaning: '省 N.'
    },
    {
        word: 'provoke',
        hint: '激怒',
        meaning: '激怒 V.'
    },
    {
        word: 'psychology',
        hint: '心理學',
        meaning: '心理學 N.'
    },
    {
        word: 'public',
        hint: '公共的',
        meaning: '公共的 adj. N.'
    },
    {
        word: 'publication',
        hint: '出版物',
        meaning: '出版物 N.'
    },
    {
        word: 'publish',
        hint: '出版',
        meaning: '出版 V.'
    },
    {
        word: 'puddle',
        hint: '水坑',
        meaning: '水坑 N.'
    },
    {
        word: 'pull',
        hint: '拉',
        meaning: '拉 V. N.'
    },
    {
        word: 'pump',
        hint: '泵',
        meaning: '泵 N. V.'
    },
    {
        word: 'punch',
        hint: '拳擊',
        meaning: '拳擊 V. N.'
    },
    {
        word: 'punish',
        hint: '懲罰',
        meaning: '懲罰 V.'
    },
    {
        word: 'pupil',
        hint: '學生',
        meaning: '學生 N.'
    },
    {
        word: 'purchase',
        hint: '購買',
        meaning: '購買 V. N.'
    },
    {
        word: 'pure',
        hint: '純粹的',
        meaning: '純粹的 adj.'
    },
    {
        word: 'purple',
        hint: '紫色',
        meaning: '紫色 N. adj.'
    },
    {
        word: 'purpose',
        hint: '目的',
        meaning: '目的 N.'
    },
    {
        word: 'pursue',
        hint: '追求',
        meaning: '追求 V.'
    },
    {
        word: 'push',
        hint: '推',
        meaning: '推 V. N.'
    },
    {
        word: 'put',
        hint: '放',
        meaning: '放 V.'
    },
    {
        word: 'puzzle',
        hint: '謎語',
        meaning: '謎語 N. V.'
    },
    {
        word: 'qualify',
        hint: '符合條件',
        meaning: '符合條件 V.'
    },
    {
        word: 'quality',
        hint: '質量',
        meaning: '質量 N.'
    },
    {
        word: 'quantity',
        hint: '數量',
        meaning: '數量 N.'
    },
    {
        word: 'quarrel',
        hint: '爭吵',
        meaning: '爭吵 V. N.'
    },
    {
        word: 'quarter',
        hint: '四分之一',
        meaning: '四分之一 N.'
    },
    {
        word: 'queen',
        hint: '女王',
        meaning: '女王 N.'
    },
    {
        word: 'question',
        hint: '問題',
        meaning: '問題 N. V.'
    },
    {
        word: 'quick',
        hint: '快的',
        meaning: '快的 adj. adv.'
    },
    {
        word: 'quiet',
        hint: '安靜',
        meaning: '安靜 adj. V.'
    },
    {
        word: 'quit',
        hint: '退出',
        meaning: '退出 V.'
    },
    {
        word: 'quite',
        hint: '相當',
        meaning: '相當 adv.'
    },
    {
        word: 'quote',
        hint: '引用',
        meaning: '引用 V. N.'
    },
    {
        word: 'rabbit',
        hint: '兔子',
        meaning: '兔子 N.'
    },
    {
        word: 'race',
        hint: '比賽',
        meaning: '比賽 N. V.'
    },
    {
        word: 'rack',
        hint: '架子',
        meaning: '架子 N. V.'
    },
    {
        word: 'radar',
        hint: '雷達',
        meaning: '雷達 N.'
    },
    {
        word: 'radiate',
        hint: '輻射',
        meaning: '輻射 V.'
    },
    {
        word: 'radical',
        hint: '激進的',
        meaning: '激進的 adj. N.'
    },
    {
        word: 'radio',
        hint: '收音機',
        meaning: '收音機 N. V.'
    },
    {
        word: 'radius',
        hint: '半徑',
        meaning: '半徑 N.'
    },
    {
        word: 'rage',
        hint: '憤怒',
        meaning: '憤怒 N. V.'
    },
    {
        word: 'rain',
        hint: '雨',
        meaning: '雨 N. V.'
    },
    {
        word: 'raise',
        hint: '升高',
        meaning: '升高 V.'
    },
    {
        word: 'rally',
        hint: '集會',
        meaning: '集會 N. V.'
    },
    {
        word: 'random',
        hint: '隨機的',
        meaning: '隨機的 adj.'
    },
    {
        word: 'range',
        hint: '範圍',
        meaning: '範圍 N. V.'
    },
    {
        word: 'rank',
        hint: '等級',
        meaning: '等級 N. V.'
    },
    {
        word: 'rapid',
        hint: '迅速的',
        meaning: '迅速的 adj.'
    },
    {
        word: 'rare',
        hint: '罕見的',
        meaning: '罕見的 adj.'
    },
    {
        word: 'rat',
        hint: '老鼠',
        meaning: '老鼠 N.'
    },
    {
        word: 'rate',
        hint: '比率',
        meaning: '比率 N. V.'
    },
    {
        word: 'rather',
        hint: '寧願',
        meaning: '寧願 adv.'
    },
    {
        word: 'ratio',
        hint: '比例',
        meaning: '比例 N.'
    },
    {
        word: 'rational',
        hint: '理性的',
        meaning: '理性的 adj.'
    },
    {
        word: 'raw',
        hint: '生的',
        meaning: '生的 adj.'
    },
    {
        word: 'reach',
        hint: '達到',
        meaning: '達到 V. N.'
    },
    {
        word: 'react',
        hint: '反應',
        meaning: '反應 V.'
    },
    {
        word: 'read',
        hint: '讀',
        meaning: '讀 V.'
    },
    {
        word: 'ready',
        hint: '準備好的',
        meaning: '準備好的 adj.'
    },
    {
        word: 'real',
        hint: '真實的',
        meaning: '真實的 adj.'
    },
    {
        word: 'reality',
        hint: '現實',
        meaning: '現實 N.'
    },
    {
        word: 'realize',
        hint: '實現',
        meaning: '實現 V.'
    },
    {
        word: 'really',
        hint: '真的',
        meaning: '真的 adv.'
    },
    {
        word: 'reason',
        hint: '原因',
        meaning: '原因 N. V.'
    },
    {
        word: 'reasonable',
        hint: '合理的',
        meaning: '合理的 adj.'
    },
    {
        word: 'rebel',
        hint: '反叛',
        meaning: '反叛 V. N.'
    },
    {
        word: 'recall',
        hint: '回想',
        meaning: '回想 V. N.'
    },
    {
        word: 'receive',
        hint: '接收',
        meaning: '接收 V.'
    },
    {
        word: 'recent',
        hint: '最近的',
        meaning: '最近的 adj.'
    },
    {
        word: 'reception',
        hint: '接待',
        meaning: '接待 N.'
    },
    {
        word: 'recipe',
        hint: '食譜',
        meaning: '食譜 N.'
    },
    {
        word: 'record',
        hint: '記錄',
        meaning: '記錄 N. V.'
    },
    {
        word: 'recover',
        hint: '康復',
        meaning: '康復 V.'
    },
    {
        word: 'red',
        hint: '紅色',
        meaning: '紅色 N. adj.'
    },
    {
        word: 'reduce',
        hint: '減少',
        meaning: '減少 V.'
    },
    {
        word: 'refer',
        hint: '參考',
        meaning: '參考 V.'
    },
    {
        word: 'reference',
        hint: '參考',
        meaning: '參考 N.'
    },
    {
        word: 'reflect',
        hint: '反射',
        meaning: '反射 V.'
    },
    {
        word: 'reform',
        hint: '改革',
        meaning: '改革 V. N.'
    },
    {
        word: 'refuse',
        hint: '拒絕',
        meaning: '拒絕 V. N.'
    },
    {
        word: 'regard',
        hint: '看待',
        meaning: '看待 V. N.'
    },
    {
        word: 'region',
        hint: '地區',
        meaning: '地區 N.'
    },
    {
        word: 'register',
        hint: '登記',
        meaning: '登記 V. N.'
    },
    {
        word: 'regret',
        hint: '後悔',
        meaning: '後悔 V. N.'
    },
    {
        word: 'regular',
        hint: '規律的',
        meaning: '規律的 adj.'
    },
    {
        word: 'reject',
        hint: '拒絕',
        meaning: '拒絕 V. N.'
    },
    {
        word: 'relate',
        hint: '有關聯',
        meaning: '有關聯 V.'
    },
    {
        word: 'relation',
        hint: '關係',
        meaning: '關係 N.'
    },
    {
        word: 'relative',
        hint: '相對的',
        meaning: '相對的 adj. N.'
    },
    {
        word: 'relax',
        hint: '放鬆',
        meaning: '放鬆 V.'
    },
    {
        word: 'release',
        hint: '釋放',
        meaning: '釋放 V. N.'
    },
    {
        word: 'relevant',
        hint: '相關的',
        meaning: '相關的 adj.'
    },
    {
        word: 'reliable',
        hint: '可靠的',
        meaning: '可靠的 adj.'
    },
    {
        word: 'relief',
        hint: '減輕',
        meaning: '減輕 N.'
    },
    {
        word: 'religion',
        hint: '宗教',
        meaning: '宗教 N.'
    },
    {
        word: 'rely',
        hint: '依賴',
        meaning: '依賴 V.'
    },
    {
        word: 'remain',
        hint: '保持',
        meaning: '保持 V.'
    },
    {
        word: 'remark',
        hint: '評論',
        meaning: '評論 V. N.'
    },
    {
        word: 'remember',
        hint: '記得',
        meaning: '記得 V.'
    },
    {
        word: 'remind',
        hint: '提醒',
        meaning: '提醒 V.'
    },
    {
        word: 'remote',
        hint: '遠程的',
        meaning: '遠程的 adj.'
    },
    {
        word: 'remove',
        hint: '移除',
        meaning: '移除 V.'
    },
    {
        word: 'rent',
        hint: '租金',
        meaning: '租金 N. V.'
    },
    {
        word: 'repair',
        hint: '修理',
        meaning: '修理 V. N.'
    },
    {
        word: 'repeat',
        hint: '重複',
        meaning: '重複 V. N.'
    },
    {
        word: 'replace',
        hint: '替換',
        meaning: '替換 V.'
    },
    {
        word: 'reply',
        hint: '回答',
        meaning: '回答 V. N.'
    },
    {
        word: 'report',
        hint: '報告',
        meaning: '報告 V. N.'
    },
    {
        word: 'represent',
        hint: '代表',
        meaning: '代表 V.'
    },
    {
        word: 'republic',
        hint: '共和國',
        meaning: '共和國 N.'
    },
    {
        word: 'reputation',
        hint: '聲譽',
        meaning: '聲譽 N.'
    },
    {
        word: 'request',
        hint: '請求',
        meaning: '請求 V. N.'
    },
    {
        word: 'require',
        hint: '需要',
        meaning: '需要 V.'
    },
    {
        word: 'rescue',
        hint: '救援',
        meaning: '救援 V. N.'
    },
    {
        word: 'research',
        hint: '研究',
        meaning: '研究 N. V.'
    },
    {
        word: 'resemble',
        hint: '相似',
        meaning: '相似 V.'
    },
    {
        word: 'reserve',
        hint: '儲備',
        meaning: '儲備 V. N.'
    },
    {
        word: 'resident',
        hint: '居民',
        meaning: '居民 N.'
    },
    {
        word: 'resist',
        hint: '抵抗',
        meaning: '抵抗 V.'
    },
    {
        word: 'resolve',
        hint: '解決',
        meaning: '解決 V. N.'
    },
    {
        word: 'resort',
        hint: '度假勝地',
        meaning: '度假勝地 N. V.'
    },
    {
        word: 'resource',
        hint: '資源',
        meaning: '資源 N.'
    },
    {
        word: 'respect',
        hint: '尊重',
        meaning: '尊重 V. N.'
    },
    {
        word: 'respond',
        hint: '回應',
        meaning: '回應 V.'
    },
    {
        word: 'rest',
        hint: '休息',
        meaning: '休息 V. N.'
    },
    {
        word: 'result',
        hint: '結果',
        meaning: '結果 N. V.'
    },
    {
        word: 'resume',
        hint: '恢復',
        meaning: '恢復 V. N.'
    },
    {
        word: 'retire',
        hint: '退休',
        meaning: '退休 V.'
    },
    {
        word: 'return',
        hint: '返回',
        meaning: '返回 V. N.'
    },
    {
        word: 'reveal',
        hint: '揭示',
        meaning: '揭示 V.'
    },
    {
        word: 'reverse',
        hint: '相反',
        meaning: '相反 adj. V. N.'
    },
    {
        word: 'review',
        hint: '評論',
        meaning: '評論 V. N.'
    },
    {
        word: 'revise',
        hint: '修訂',
        meaning: '修訂 V.'
    },
    {
        word: 'revive',
        hint: '復興',
        meaning: '復興 V.'
    },
    {
        word: 'revolution',
        hint: '革命',
        meaning: '革命 N.'
    },
    {
        word: 'reward',
        hint: '獎勵',
        meaning: '獎勵 V. N.'
    },
    {
        word: 'rhythm',
        hint: '節奏',
        meaning: '節奏 N.'
    },
    {
        word: 'rib',
        hint: '肋骨',
        meaning: '肋骨 N.'
    },
    {
        word: 'rice',
        hint: '米飯',
        meaning: '米飯 N.'
    },
    {
        word: 'rich',
        hint: '富有的',
        meaning: '富有的 adj.'
    },
    {
        word: 'rid',
        hint: '擺脫',
        meaning: '擺脫 V.'
    },
    {
        word: 'ride',
        hint: '騎',
        meaning: '騎 V. N.'
    },
    {
        word: 'ridge',
        hint: '山脊',
        meaning: '山脊 N.'
    },
    {
        word: 'right',
        hint: '右邊',
        meaning: '右邊 N. adj. adv.'
    },
    {
        word: 'ring',
        hint: '戒指',
        meaning: '戒指 N. V.'
    },
    {
        word: 'rip',
        hint: '撕裂',
        meaning: '撕裂 V. N.'
    },
    {
        word: 'rise',
        hint: '上升',
        meaning: '上升 V. N.'
    },
    {
        word: 'risk',
        hint: '風險',
        meaning: '風險 N. V.'
    },
    {
        word: 'river',
        hint: '河',
        meaning: '河 N.'
    },
    {
        word: 'road',
        hint: '道路',
        meaning: '道路 N.'
    },
    {
        word: 'rob',
        hint: '搶劫',
        meaning: '搶劫 V.'
    },
    {
        word: 'rock',
        hint: '岩石',
        meaning: '岩石 N. V.'
    },
    {
        word: 'role',
        hint: '角色',
        meaning: '角色 N.'
    },
    {
        word: 'roll',
        hint: '滾動',
        meaning: '滾動 V. N.'
    },
    {
        word: 'roof',
        hint: '屋頂',
        meaning: '屋頂 N.'
    },
    {
        word: 'room',
        hint: '房間',
        meaning: '房間 N.'
    },
    {
        word: 'root',
        hint: '根',
        meaning: '根 N. V.'
    },
    {
        word: 'rope',
        hint: '繩子',
        meaning: '繩子 N.'
    },
    {
        word: 'rose',
        hint: '玫瑰',
        meaning: '玫瑰 N.'
    },
    {
        word: 'rough',
        hint: '粗糙的',
        meaning: '粗糙的 adj.'
    },
    {
        word: 'round',
        hint: '圓形的',
        meaning: '圓形的 adj. adv. N. V.'
    },
    {
        word: 'route',
        hint: '路線',
        meaning: '路線 N.'
    },
    {
        word: 'row',
        hint: '排',
        meaning: '排 N. V.'
    },
    {
        word: 'royal',
        hint: '皇家',
        meaning: '皇家 adj.'
    },
    {
        word: 'rub',
        hint: '擦',
        meaning: '擦 V. N.'
    },
    {
        word: 'rubber',
        hint: '橡膠',
        meaning: '橡膠 N.'
    },
    {
        word: 'rude',
        hint: '粗魯的',
        meaning: '粗魯的 adj.'
    },
    {
        word: 'rug',
        hint: '地毯',
        meaning: '地毯 N.'
    },
    {
        word: 'ruin',
        hint: '毀壞',
        meaning: '毀壞 V. N.'
    },
    {
        word: 'rule',
        hint: '規則',
        meaning: '規則 N. V.'
    },
    {
        word: 'run',
        hint: '跑',
        meaning: '跑 V. N.'
    },
    {
        word: 'rural',
        hint: '鄉村的',
        meaning: '鄉村的 adj.'
    },
    {
        word: 'rush',
        hint: '急匆匆',
        meaning: '急匆匆 V. N.'
    },
    {
        word: 'sack',
        hint: '麻袋',
        meaning: '麻袋 N. V.'
    },
    {
        word: 'sad',
        hint: '悲傷的',
        meaning: '悲傷的 adj.'
    },
    {
        word: 'safe',
        hint: '安全的',
        meaning: '安全的 adj.'
    },
    {
        word: 'sail',
        hint: '航行',
        meaning: '航行 V. N.'
    },
    {
        word: 'sake',
        hint: '緣故',
        meaning: '緣故 N.'
    },
    {
        word: 'salad',
        hint: '沙拉',
        meaning: '沙拉 N.'
    },
    {
        word: 'salary',
        hint: '薪水',
        meaning: '薪水 N.'
    },
    {
        word: 'sale',
        hint: '出售',
        meaning: '出售 N.'
    },
    {
        word: 'salt',
        hint: '鹽',
        meaning: '鹽 N.'
    },
    {
        word: 'same',
        hint: '相同的',
        meaning: '相同的 adj. pron.'
    },
    {
        word: 'sample',
        hint: '樣本',
        meaning: '樣本 N. V.'
    },
    {
        word: 'sand',
        hint: '沙子',
        meaning: '沙子 N. V.'
    },
    {
        word: 'satellite',
        hint: '衛星',
        meaning: '衛星 N.'
    },
    {
        word: 'satisfy',
        hint: '滿足',
        meaning: '滿足 V.'
    },
    {
        word: 'sauce',
        hint: '醬汁',
        meaning: '醬汁 N.'
    },
    {
        word: 'save',
        hint: '保存',
        meaning: '保存 V.'
    },
    {
        word: 'say',
        hint: '說',
        meaning: '說 V.'
    },
    {
        word: 'scale',
        hint: '規模',
        meaning: '規模 N.'
    },
    {
        word: 'scan',
        hint: '掃描',
        meaning: '掃描 V. N.'
    },
    {
        word: 'scar',
        hint: '疤痕',
        meaning: '疤痕 N. V.'
    },
    {
        word: 'scatter',
        hint: '散射',
        meaning: '散射 V.'
    },
    {
        word: 'scene',
        hint: '場景',
        meaning: '場景 N.'
    },
    {
        word: 'schedule',
        hint: '時間表',
        meaning: '時間表 N. V.'
    },
    {
        word: 'scheme',
        hint: '計劃',
        meaning: '計劃 N. V.'
    },
    {
        word: 'school',
        hint: '學校',
        meaning: '學校 N.'
    },
    {
        word: 'science',
        hint: '科學',
        meaning: '科學 N.'
    },
    {
        word: 'scissors',
        hint: '剪刀',
        meaning: '剪刀 N.'
    },
    {
        word: 'scope',
        hint: '範圍',
        meaning: '範圍 N.'
    },
    {
        word: 'score',
        hint: '分數',
        meaning: '分數 N. V.'
    },
    {
        word: 'scrape',
        hint: '刮',
        meaning: '刮 V. N.'
    },
    {
        word: 'scratch',
        hint: '搔',
        meaning: '搔 V. N.'
    },
    {
        word: 'scream',
        hint: '尖叫',
        meaning: '尖叫 V. N.'
    },
    {
        word: 'screen',
        hint: '屏幕',
        meaning: '屏幕 N. V.'
    },
    {
        word: 'screw',
        hint: '螺絲釘',
        meaning: '螺絲釘 N. V.'
    },
    {
        word: 'script',
        hint: '腳本',
        meaning: '腳本 N.'
    },
    {
        word: 'scrutiny',
        hint: '細查',
        meaning: '細查 N.'
    },
    {
        word: 'sculpture',
        hint: '雕塑',
        meaning: '雕塑 N.'
    },
    {
        word: 'sea',
        hint: '海',
        meaning: '海 N.'
    },
    {
        word: 'search',
        hint: '搜索',
        meaning: '搜索 V. N.'
    },
    {
        word: 'season',
        hint: '季節',
        meaning: '季節 N. V.'
    },
    {
        word: 'seat',
        hint: '座位',
        meaning: '座位 N. V.'
    },
    {
        word: 'second',
        hint: '秒',
        meaning: '秒 N. adj. adv.'
    },
    {
        word: 'secret',
        hint: '秘密',
        meaning: '秘密 adj. N.'
    },
    {
        word: 'section',
        hint: '部分',
        meaning: '部分 N.'
    },
    {
        word: 'secure',
        hint: '安全的',
        meaning: '安全的 adj. V.'
    },
    {
        word: 'see',
        hint: '看見',
        meaning: '看見 V.'
    },
    {
        word: 'seed',
        hint: '種子',
        meaning: '種子 N. V.'
    },
    {
        word: 'seek',
        hint: '尋找',
        meaning: '尋找 V.'
    },
    {
        word: 'seem',
        hint: '似乎',
        meaning: '似乎 V.'
    },
    {
        word: 'segment',
        hint: '段',
        meaning: '段 N.'
    },
    {
        word: 'seize',
        hint: '抓住',
        meaning: '抓住 V.'
    },
    {
        word: 'select',
        hint: '選擇',
        meaning: '選擇 V. adj.'
    },
    {
        word: 'self',
        hint: '自己',
        meaning: '自己 pron. adj.'
    },
    {
        word: 'sell',
        hint: '賣',
        meaning: '賣 V.'
    },
    {
        word: 'semester',
        hint: '學期',
        meaning: '學期 N.'
    },
    {
        word: 'semi',
        hint: '半',
        meaning: '半 prefix.'
    },
    {
        word: 'senate',
        hint: '參議院',
        meaning: '參議院 N.'
    },
    {
        word: 'send',
        hint: '發送',
        meaning: '發送 V.'
    },
    {
        word: 'senior',
        hint: '高年級',
        meaning: '高年級 adj. N.'
    },
    {
        word: 'sense',
        hint: '感覺',
        meaning: '感覺 N. V.'
    },
    {
        word: 'sensitive',
        hint: '敏感的',
        meaning: '敏感的 adj.'
    },
    {
        word: 'sentence',
        hint: '句子',
        meaning: '句子 N.'
    },
    {
        word: 'separate',
        hint: '分開的',
        meaning: '分開的 adj. V.'
    },
    {
        word: 'sequence',
        hint: '序列',
        meaning: '序列 N.'
    },
    {
        word: 'series',
        hint: '系列',
        meaning: '系列 N.'
    },
    {
        word: 'serious',
        hint: '嚴肅的',
        meaning: '嚴肅的 adj.'
    },
    {
        word: 'serve',
        hint: '提供',
        meaning: '提供 V.'
    },
    {
        word: 'service',
        hint: '服務',
        meaning: '服務 N.'
    },
    {
        word: 'session',
        hint: '會議',
        meaning: '會議 N.'
    },
    {
        word: 'set',
        hint: '設置',
        meaning: '設置 V. N.'
    },
    {
        word: 'settle',
        hint: '解決',
        meaning: '解決 V.'
    },
    {
        word: 'severe',
        hint: '嚴重的',
        meaning: '嚴重的 adj.'
    },
    {
        word: 'sew',
        hint: '縫',
        meaning: '縫 V.'
    },
    {
        word: 'shade',
        hint: '陰影',
        meaning: '陰影 N. V.'
    },
    {
        word: 'shadow',
        hint: '影子',
        meaning: '影子 N. V.'
    },
    {
        word: 'shake',
        hint: '搖動',
        meaning: '搖動 V. N.'
    },
    {
        word: 'shall',
        hint: '將',
        meaning: '將 aux. V.'
    },
    {
        word: 'shallow',
        hint: '淺的',
        meaning: '淺的 adj.'
    },
    {
        word: 'shame',
        hint: '羞愧',
        meaning: '羞愧 N.'
    },
    {
        word: 'shape',
        hint: '形狀',
        meaning: '形狀 N. V.'
    },
    {
        word: 'share',
        hint: '分享',
        meaning: '分享 V. N.'
    },
    {
        word: 'sharp',
        hint: '鋒利的',
        meaning: '鋒利的 adj. adv.'
    },
    {
        word: 'she',
        hint: '她',
        meaning: '她 pron.'
    },
    {
        word: 'sheep',
        hint: '羊',
        meaning: '羊 N.'
    },
    {
        word: 'sheet',
        hint: '床單',
        meaning: '床單 N.'
    },
    {
        word: 'shelf',
        hint: '書架',
        meaning: '書架 N.'
    },
    {
        word: 'shell',
        hint: '殼',
        meaning: '殼 N.'
    },
    {
        word: 'shelter',
        hint: '庇護所',
        meaning: '庇護所 N. V.'
    },
    {
        word: 'shield',
        hint: '盾牌',
        meaning: '盾牌 N. V.'
    },
    {
        word: 'shift',
        hint: '轉移',
        meaning: '轉移 V. N.'
    },
    {
        word: 'shine',
        hint: '發光',
        meaning: '發光 V. N.'
    },
    {
        word: 'ship',
        hint: '船',
        meaning: '船 N. V.'
    },
    {
        word: 'shirt',
        hint: '襯衫',
        meaning: '襯衫 N.'
    },
    {
        word: 'shock',
        hint: '震驚',
        meaning: '震驚 V. N.'
    },
    {
        word: 'shoe',
        hint: '鞋',
        meaning: '鞋 N.'
    },
    {
        word: 'shoot',
        hint: '射擊',
        meaning: '射擊 V. N.'
    },
    {
        word: 'shop',
        hint: '商店',
        meaning: '商店 N. V.'
    },
    {
        word: 'shore',
        hint: '岸',
        meaning: '岸 N.'
    },
    {
        word: 'short',
        hint: '短的',
        meaning: '短的 adj.'
    },
    {
        word: 'should',
        hint: '應該',
        meaning: '應該 aux. V.'
    },
    {
        word: 'shoulder',
        hint: '肩膀',
        meaning: '肩膀 N. V.'
    },
    {
        word: 'shout',
        hint: '喊',
        meaning: '喊 V. N.'
    },
    {
        word: 'show',
        hint: '展示',
        meaning: '展示 V. N.'
    },
    {
        word: 'shrink',
        hint: '縮小',
        meaning: '縮小 V.'
    },
    {
        word: 'shut',
        hint: '關閉',
        meaning: '關閉 V. adj.'
    },
    {
        word: 'sick',
        hint: '生病的',
        meaning: '生病的 adj.'
    },
    {
        word: 'side',
        hint: '側面',
        meaning: '側面 N.'
    },
    {
        word: 'sight',
        hint: '視力',
        meaning: '視力 N.'
    },
    {
        word: 'sign',
        hint: '標誌',
        meaning: '標誌 N. V.'
    },
    {
        word: 'signal',
        hint: '信號',
        meaning: '信號 N. V.'
    },
    {
        word: 'silence',
        hint: '寂靜',
        meaning: '寂靜 N. V.'
    },
    {
        word: 'silent',
        hint: '沉默的',
        meaning: '沉默的 adj.'
    },
    {
        word: 'silk',
        hint: '絲綢',
        meaning: '絲綢 N.'
    },
    {
        word: 'silver',
        hint: '銀色的',
        meaning: '銀色的 adj. N. V.'
    },
    {
        word: 'similar',
        hint: '相似的',
        meaning: '相似的 adj.'
    },
    {
        word: 'simple',
        hint: '簡單的',
        meaning: '簡單的 adj.'
    },
    {
        word: 'since',
        hint: '自從',
        meaning: '自從 conj. prep.'
    },
    {
        word: 'sing',
        hint: '唱歌',
        meaning: '唱歌 V.'
    },
    {
        word: 'single',
        hint: '單一的',
        meaning: '單一的 adj.'
    },
    {
        word: 'sink',
        hint: '沉',
        meaning: '沉 V. N.'
    },
    {
        word: 'sister',
        hint: '姐妹',
        meaning: '姐妹 N.'
    },
    {
        word: 'sit',
        hint: '坐',
        meaning: '坐 V.'
    },
    {
        word: 'site',
        hint: '地點',
        meaning: '地點 N.'
    },
    {
        word: 'situation',
        hint: '情況',
        meaning: '情況 N.'
    },
    {
        word: 'six',
        hint: '六',
        meaning: '六 N. adj.'
    },
    {
        word: 'size',
        hint: '尺寸',
        meaning: '尺寸 N.'
    },
    {
        word: 'skill',
        hint: '技能',
        meaning: '技能 N.'
    },
    {
        word: 'skin',
        hint: '皮膚',
        meaning: '皮膚 N. V.'
    },
    {
        word: 'skirt',
        hint: '裙子',
        meaning: '裙子 N.'
    },
    {
        word: 'sky',
        hint: '天空',
        meaning: '天空 N.'
    },
    {
        word: 'sleep',
        hint: '睡覺',
        meaning: '睡覺 V. N.'
    },
    {
        word: 'slide',
        hint: '滑動',
        meaning: '滑動 V. N.'
    },
    {
        word: 'slight',
        hint: '輕微的',
        meaning: '輕微的 adj.'
    },
    {
        word: 'slip',
        hint: '滑倒',
        meaning: '滑倒 V. N.'
    },
    {
        word: 'slow',
        hint: '慢的',
        meaning: '慢的 adj. adv.'
    },
    {
        word: 'small',
        hint: '小的',
        meaning: '小的 adj.'
    },
    {
        word: 'smart',
        hint: '聰明的',
        meaning: '聰明的 adj.'
    },
    {
        word: 'smell',
        hint: '嗅覺',
        meaning: '嗅覺 N. V.'
    },
    {
        word: 'smile',
        hint: '微笑',
        meaning: '微笑 V. N.'
    },
    {
        word: 'smoke',
        hint: '煙',
        meaning: '煙 N. V.'
    },
    {
        word: 'smooth',
        hint: '平滑的',
        meaning: '平滑的 adj. V.'
    },
    {
        word: 'snack',
        hint: '點心',
        meaning: '點心 N.'
    },
    {
        word: 'snake',
        hint: '蛇',
        meaning: '蛇 N.'
    },
    {
        word: 'snow',
        hint: '雪',
        meaning: '雪 N. V.'
    },
    {
        word: 'so',
        hint: '這麼',
        meaning: '這麼 adv. conj.'
    },
    {
        word: 'soap',
        hint: '肥皂',
        meaning: '肥皂 N.'
    },
    {
        word: 'social',
        hint: '社會的',
        meaning: '社會的 adj.'
    },
    {
        word: 'society',
        hint: '社會',
        meaning: '社會 N.'
    },
    {
        word: 'sock',
        hint: '襪子',
        meaning: '襪子 N.'
    },
    {
        word: 'soft',
        hint: '軟的',
        meaning: '軟的 adj.'
    },
    {
        word: 'software',
        hint: '軟體',
        meaning: '軟體 N.'
    },
    {
        word: 'soil',
        hint: '土壤',
        meaning: '土壤 N. V.'
    },
    {
        word: 'solar',
        hint: '太陽的',
        meaning: '太陽的 adj.'
    },
    {
        word: 'soldier',
        hint: '士兵',
        meaning: '士兵 N.'
    },
    {
        word: 'solid',
        hint: '固體的',
        meaning: '固體的 adj.'
    },
    {
        word: 'solution',
        hint: '解決方案',
        meaning: '解決方案 N.'
    },
    {
        word: 'solve',
        hint: '解決',
        meaning: '解決 V.'
    },
    {
        word: 'some',
        hint: '一些',
        meaning: '一些 adj. pron.'
    },
    {
        word: 'somebody',
        hint: '某人',
        meaning: '某人 pron.'
    },
    {
        word: 'someone',
        hint: '有人',
        meaning: '有人 pron.'
    },
    {
        word: 'something',
        hint: '某物',
        meaning: '某物 pron.'
    },
    {
        word: 'sometimes',
        hint: '有時',
        meaning: '有時 adv.'
    },
    {
        word: 'somewhere',
        hint: '某處',
        meaning: '某處 adv.'
    },
    {
        word: 'son',
        hint: '兒子',
        meaning: '兒子 N.'
    },
    {
        word: 'song',
        hint: '歌曲',
        meaning: '歌曲 N.'
    },
    {
        word: 'soon',
        hint: '很快',
        meaning: '很快 adv.'
    },
    {
        word: 'sophisticated',
        hint: '複雜的',
        meaning: '複雜的 adj.'
    },
    {
        word: 'sore',
        hint: '疼痛的',
        meaning: '疼痛的 adj.'
    },
    {
        word: 'sorry',
        hint: '抱歉的',
        meaning: '抱歉的 adj.'
    },
    {
        word: 'sort',
        hint: '類型',
        meaning: '類型 N. V.'
    },
    {
        word: 'soul',
        hint: '靈魂',
        meaning: '靈魂 N.'
    },
    {
        word: 'sound',
        hint: '聲音',
        meaning: '聲音 N. V. adj.'
    },
    {
        word: 'soup',
        hint: '湯',
        meaning: '湯 N.'
    },
    {
        word: 'source',
        hint: '來源',
        meaning: '來源 N.'
    },
    {
        word: 'south',
        hint: '南',
        meaning: '南 N. adj. adv.'
    },
    {
        word: 'space',
        hint: '空間',
        meaning: '空間 N.'
    },
    {
        word: 'speak',
        hint: '說話',
        meaning: '說話 V.'
    },
    {
        word: 'special',
        hint: '特別的',
        meaning: '特別的 adj.'
    },
    {
        word: 'species',
        hint: '物種',
        meaning: '物種 N.'
    },
    {
        word: 'specific',
        hint: '具體的',
        meaning: '具體的 adj.'
    },
    {
        word: 'speech',
        hint: '演講',
        meaning: '演講 N.'
    },
    {
        word: 'speed',
        hint: '速度',
        meaning: '速度 N. V.'
    },
    {
        word: 'spell',
        hint: '拼寫',
        meaning: '拼寫 V. N.'
    },
    {
        word: 'spend',
        hint: '花費',
        meaning: '花費 V.'
    },
    {
        word: 'spirit',
        hint: '精神',
        meaning: '精神 N.'
    },
    {
        word: 'spite',
        hint: '惡意',
        meaning: '惡意 N.'
    },
    {
        word: 'split',
        hint: '分裂',
        meaning: '分裂 V. N. adj.'
    },
    {
        word: 'spoil',
        hint: '破壞',
        meaning: '破壞 V.'
    },
    {
        word: 'sponsor',
        hint: '贊助商',
        meaning: '贊助商 N. V.'
    },
    {
        word: 'spoon',
        hint: '湯匙',
        meaning: '湯匙 N.'
    },
    {
        word: 'sport',
        hint: '運動',
        meaning: '運動 N. V.'
    },
    {
        word: 'spot',
        hint: '斑點',
        meaning: '斑點 N. V.'
    },
    {
        word: 'spread',
        hint: '擴散',
        meaning: '擴散 V. N.'
    },
    {
        word: 'spring',
        hint: '春天',
        meaning: '春天 N. V.'
    },
    {
        word: 'spy',
        hint: '間諜',
        meaning: '間諜 N. V.'
    },
    {
        word: 'square',
        hint: '正方形',
        meaning: '正方形 N. adj.'
    },
    {
        word: 'stable',
        hint: '穩定的',
        meaning: '穩定的 adj. N.'
    },
    {
        word: 'staff',
        hint: '職員',
        meaning: '職員 N.'
    },
    {
        word: 'stage',
        hint: '舞台',
        meaning: '舞台 N.'
    },
    {
        word: 'stair',
        hint: '樓梯',
        meaning: '樓梯 N.'
    },
    {
        word: 'stake',
        hint: '風險',
        meaning: '風險 N. V.'
    },
    {
        word: 'stand',
        hint: '站立',
        meaning: '站立 V. N.'
    },
    {
        word: 'standard',
        hint: '標準',
        meaning: '標準 N. adj.'
    },
    {
        word: 'star',
        hint: '星星',
        meaning: '星星 N. V.'
    },
    {
        word: 'start',
        hint: '開始',
        meaning: '開始 V. N.'
    },
    {
        word: 'state',
        hint: '州',
        meaning: '州 N.'
    },
    {
        word: 'statement',
        hint: '聲明',
        meaning: '聲明 N.'
    },
    {
        word: 'station',
        hint: '車站',
        meaning: '車站 N.'
    },
    {
        word: 'statistics',
        hint: '統計',
        meaning: '統計 N.'
    },
    {
        word: 'status',
        hint: '狀態',
        meaning: '狀態 N.'
    },
    {
        word: 'stay',
        hint: '逗留',
        meaning: '逗留 V. N.'
    },
    {
        word: 'steady',
        hint: '穩定的',
        meaning: '穩定的 adj.'
    },
    {
        word: 'steak',
        hint: '牛排',
        meaning: '牛排 N.'
    },
    {
        word: 'steal',
        hint: '偷竊',
        meaning: '偷竊 V.'
    },
    {
        word: 'steam',
        hint: '蒸汽',
        meaning: '蒸汽 N. V.'
    },
    {
        word: 'steel',
        hint: '鋼鐵',
        meaning: '鋼鐵 N.'
    },
    {
        word: 'steep',
        hint: '陡峭的',
        meaning: '陡峭的 adj. V.'
    },
    {
        word: 'step',
        hint: '步驟',
        meaning: '步驟 N. V.'
    },
    {
        word: 'stick',
        hint: '棒',
        meaning: '棒 N. V.'
    },
    {
        word: 'still',
        hint: '仍然',
        meaning: '仍然 adv.'
    },
    {
        word: 'sting',
        hint: '螫',
        meaning: '螫 V. N.'
    },
    {
        word: 'stir',
        hint: '攪拌',
        meaning: '攪拌 V. N.'
    },
    {
        word: 'stock',
        hint: '股票',
        meaning: '股票 N.'
    },
    {
        word: 'stomach',
        hint: '胃',
        meaning: '胃 N.'
    },
    {
        word: 'stone',
        hint: '石頭',
        meaning: '石頭 N.'
    },
    {
        word: 'stop',
        hint: '停止',
        meaning: '停止 V. N.'
    },
    {
        word: 'storage',
        hint: '儲存',
        meaning: '儲存 N.'
    },
    {
        word: 'store',
        hint: '商店',
        meaning: '商店 N. V.'
    },
    {
        word: 'storm',
        hint: '風暴',
        meaning: '風暴 N. V.'
    },
    {
        word: 'story',
        hint: '故事',
        meaning: '故事 N.'
    },
    {
        word: 'stove',
        hint: '爐灶',
        meaning: '爐灶 N.'
    },
    {
        word: 'straight',
        hint: '直的',
        meaning: '直的 adj. adv.'
    },
    {
        word: 'strange',
        hint: '奇怪的',
        meaning: '奇怪的 adj.'
    },
    {
        word: 'strategy',
        hint: '策略',
        meaning: '策略 N.'
    },
    {
        word: 'stream',
        hint: '流',
        meaning: '流 N. V.'
    },
    {
        word: 'street',
        hint: '街道',
        meaning: '街道 N.'
    },
    {
        word: 'strength',
        hint: '力量',
        meaning: '力量 N.'
    },
    {
        word: 'stress',
        hint: '壓力',
        meaning: '壓力 N. V.'
    },
    {
        word: 'stretch',
        hint: '伸展',
        meaning: '伸展 V. N.'
    },
    {
        word: 'strike',
        hint: '罷工',
        meaning: '罷工 V. N.'
    },
    {
        word: 'string',
        hint: '線',
        meaning: '線 N.'
    },
    {
        word: 'strip',
        hint: '條',
        meaning: '條 N. V.'
    },
    {
        word: 'stroke',
        hint: '中風',
        meaning: '中風 N. V.'
    },
    {
        word: 'strong',
        hint: '強壯的',
        meaning: '強壯的 adj.'
    },
    {
        word: 'structure',
        hint: '結構',
        meaning: '結構 N.'
    },
    {
        word: 'struggle',
        hint: '奮鬥',
        meaning: '奮鬥 V. N.'
    },
    {
        word: 'student',
        hint: '學生',
        meaning: '學生 N.'
    },
    {
        word: 'studio',
        hint: '工作室',
        meaning: '工作室 N.'
    },
    {
        word: 'study',
        hint: '學習',
        meaning: '學習 N. V.'
    },
    {
        word: 'stuff',
        hint: '東西',
        meaning: '東西 N. V.'
    },
    {
        word: 'stupid',
        hint: '愚蠢的',
        meaning: '愚蠢的 adj.'
    },
    {
        word: 'style',
        hint: '風格',
        meaning: '風格 N.'
    },
    {
        word: 'subject',
        hint: '主題',
        meaning: '主題 N. adj. V.'
    },
    {
        word: 'substance',
        hint: '物質',
        meaning: '物質 N.'
    },
    {
        word: 'substitute',
        hint: '代替',
        meaning: '代替 N. V.'
    },
    {
        word: 'subtle',
        hint: '微妙的',
        meaning: '微妙的 adj.'
    },
    {
        word: 'succeed',
        hint: '成功',
        meaning: '成功 V.'
    },
    {
        word: 'success',
        hint: '成功',
        meaning: '成功 N.'
    },
    {
        word: 'such',
        hint: '這樣的',
        meaning: '這樣的 adj. pron.'
    },
    {
        word: 'sudden',
        hint: '突然的',
        meaning: '突然的 adj.'
    },
    {
        word: 'suffer',
        hint: '遭受',
        meaning: '遭受 V.'
    },
    {
        word: 'sugar',
        hint: '糖',
        meaning: '糖 N.'
    },
    {
        word: 'suggest',
        hint: '建議',
        meaning: '建議 V.'
    },
    {
        word: 'suggestion',
        hint: '建議',
        meaning: '建議 N.'
    },
    {
        word: 'suit',
        hint: '西裝',
        meaning: '西裝 N. V.'
    },
    {
        word: 'sum',
        hint: '總和',
        meaning: '總和 N.'
    },
    {
        word: 'summer',
        hint: '夏天',
        meaning: '夏天 N. adj.'
    },
    {
        word: 'sun',
        hint: '太陽',
        meaning: '太陽 N.'
    },
    {
        word: 'supper',
        hint: '晚餐',
        meaning: '晚餐 N.'
    },
    {
        word: 'supply',
        hint: '供應',
        meaning: '供應 V. N.'
    },
    {
        word: 'support',
        hint: '支持',
        meaning: '支持 V. N.'
    },
    {
        word: 'suppose',
        hint: '假設',
        meaning: '假設 V.'
    },
    {
        word: 'sure',
        hint: '確定的',
        meaning: '確定的 adj.'
    },
    {
        word: 'surface',
        hint: '表面',
        meaning: '表面 N. V.'
    },
    {
        word: 'surprise',
        hint: '驚喜',
        meaning: '驚喜 N. V.'
    },
    {
        word: 'surround',
        hint: '包圍',
        meaning: '包圍 V.'
    },
    {
        word: 'survey',
        hint: '調查',
        meaning: '調查 N. V.'
    },
    {
        word: 'survive',
        hint: '生存',
        meaning: '生存 V.'
    },
    {
        word: 'suspect',
        hint: '懷疑',
        meaning: '懷疑 V. N. adj.'
    },
    {
        word: 'suspend',
        hint: '暫停',
        meaning: '暫停 V.'
    },
    {
        word: 'swallow',
        hint: '吞嚥',
        meaning: '吞嚥 V. N.'
    },
    {
        word: 'swear',
        hint: '發誓',
        meaning: '發誓 V.'
    },
    {
        word: 'sweat',
        hint: '汗',
        meaning: '汗 N. V.'
    },
    {
        word: 'sweep',
        hint: '掃',
        meaning: '掃 V. N.'
    },
    {
        word: 'sweet',
        hint: '甜的',
        meaning: '甜的 adj.'
    },
    {
        word: 'swim',
        hint: '游泳',
        meaning: '游泳 V.'
    },
    {
        word: 'swing',
        hint: '擺動',
        meaning: '擺動 V. N.'
    },
    {
        word: 'switch',
        hint: '開關',
        meaning: '開關 N. V.'
    },
    {
        word: 'symbol',
        hint: '符號',
        meaning: '符號 N.'
    },
    {
        word: 'sympathy',
        hint: '同情',
        meaning: '同情 N.'
    },
    {
        word: 'system',
        hint: '系統',
        meaning: '系統 N.'
    },
    {
        word: 'table',
        hint: '桌子',
        meaning: '桌子 N.'
    },
    {
        word: 'tackle',
        hint: '處理',
        meaning: '處理 V. N.'
    },
    {
        word: 'tail',
        hint: '尾巴',
        meaning: '尾巴 N.'
    },
    {
        word: 'take',
        hint: '拿取',
        meaning: '拿取 V.'
    },
    {
        word: 'talk',
        hint: '談話',
        meaning: '談話 V. N.'
    },
    {
        word: 'tall',
        hint: '高的',
        meaning: '高的 adj.'
    },
    {
        word: 'tank',
        hint: '槽，坦克',
        meaning: '槽 N. 坦克 N.'
    },
    {
        word: 'tap',
        hint: '水龍頭',
        meaning: '水龍頭 N. 輕拍 V.'
    },
    {
        word: 'target',
        hint: '目標',
        meaning: '目標 N. V.'
    },
    {
        word: 'task',
        hint: '任務',
        meaning: '任務 N.'
    },
    {
        word: 'taste',
        hint: '味道',
        meaning: '味道 N. 品嚐 V.'
    },
    {
        word: 'tax',
        hint: '稅',
        meaning: '稅 N. 徵稅 V.'
    },
    {
        word: 'tea',
        hint: '茶',
        meaning: '茶 N.'
    },
    {
        word: 'teach',
        hint: '教',
        meaning: '教 V.'
    },
    {
        word: 'team',
        hint: '團隊',
        meaning: '團隊 N.'
    },
    {
        word: 'tear',
        hint: '眼淚，撕裂',
        meaning: '眼淚 N. 撕裂 V.'
    },
    {
        word: 'technical',
        hint: '技術的',
        meaning: '技術的 adj.'
    },
    {
        word: 'technology',
        hint: '科技',
        meaning: '科技 N.'
    },
    {
        word: 'telephone',
        hint: '電話',
        meaning: '電話 N. V.'
    },
    {
        word: 'television',
        hint: '電視',
        meaning: '電視 N.'
    },
    {
        word: 'tell',
        hint: '告訴',
        meaning: '告訴 V.'
    },
    {
        word: 'temperature',
        hint: '溫度',
        meaning: '溫度 N.'
    },
    {
        word: 'temporary',
        hint: '暫時的',
        meaning: '暫時的 adj.'
    },
    {
        word: 'ten',
        hint: '十',
        meaning: '十 N.'
    },
    {
        word: 'tend',
        hint: '傾向',
        meaning: '傾向 V.'
    },
    {
        word: 'tennis',
        hint: '網球',
        meaning: '網球 N.'
    },
    {
        word: 'term',
        hint: '學期，術語',
        meaning: '學期 N. 術語 N.'
    },
    {
        word: 'terrible',
        hint: '糟糕的',
        meaning: '糟糕的 adj.'
    },
    {
        word: 'test',
        hint: '測驗，測試',
        meaning: '測驗 N. 測試 N. V.'
    },
    {
        word: 'text',
        hint: '文本',
        meaning: '文本 N.'
    },
    {
        word: 'than',
        hint: '比',
        meaning: '比 prep.'
    },
    {
        word: 'thank',
        hint: '感謝',
        meaning: '感謝 V.'
    },
    {
        word: 'the',
        hint: '定冠詞',
        meaning: '定冠詞'
    },
    {
        word: 'theater',
        hint: '劇場',
        meaning: '劇場 N.'
    },
    {
        word: 'theme',
        hint: '主題',
        meaning: '主題 N.'
    },
    {
        word: 'then',
        hint: '然後',
        meaning: '然後 adv.'
    },
    {
        word: 'theory',
        hint: '理論',
        meaning: '理論 N.'
    },
    {
        word: 'there',
        hint: '那裡',
        meaning: '那裡 adv.'
    },
    {
        word: 'they',
        hint: '他們',
        meaning: '他們 pron.'
    },
    {
        word: 'thick',
        hint: '厚的',
        meaning: '厚的 adj.'
    },
    {
        word: 'thin',
        hint: '薄的',
        meaning: '薄的 adj.'
    },
    {
        word: 'thing',
        hint: '事情',
        meaning: '事情 N.'
    },
    {
        word: 'think',
        hint: '想，認為',
        meaning: '想 V. 認為 V.'
    },
    {
        word: 'third',
        hint: '第三',
        meaning: '第三 adj. N.'
    },
    {
        word: 'thirsty',
        hint: '口渴的',
        meaning: '口渴的 adj.'
    },
    {
        word: 'this',
        hint: '這',
        meaning: '這 pron.'
    },
    {
        word: 'those',
        hint: '那些',
        meaning: '那些 pron.'
    },
    {
        word: 'though',
        hint: '雖然',
        meaning: '雖然 conj. adv.'
    },
    {
        word: 'thought',
        hint: '思考，想法',
        meaning: '思考 N. 想法 N.'
    },
    {
        word: 'thread',
        hint: '線',
        meaning: '線 N.'
    },
    {
        word: 'threat',
        hint: '威脅',
        meaning: '威脅 N.'
    },
    {
        word: 'three',
        hint: '三',
        meaning: '三 N.'
    },
    {
        word: 'thrill',
        hint: '興奮',
        meaning: '興奮 N. V.'
    },
    {
        word: 'through',
        hint: '透過',
        meaning: '透過 prep. adv.'
    },
    {
        word: 'throw',
        hint: '丟',
        meaning: '丟 V.'
    },
    {
        word: 'throw',
        hint: '丟',
        meaning: '丟 V.'
    },
    {
        word: 'thumb',
        hint: '拇指',
        meaning: '拇指 N.'
    },
    {
        word: 'thunder',
        hint: '雷聲',
        meaning: '雷聲 N. V.'
    },
    {
        word: 'Thursday',
        hint: '星期四',
        meaning: '星期四 N.'
    },
    {
        word: 'ticket',
        hint: '票',
        meaning: '票 N.'
    },
    {
        word: 'tide',
        hint: '潮汐',
        meaning: '潮汐 N.'
    },
    {
        word: 'tie',
        hint: '綁，領帶',
        meaning: '綁 V. 領帶 N.'
    },
    {
        word: 'tight',
        hint: '緊的',
        meaning: '緊的 adj.'
    },
    {
        word: 'till',
        hint: '直到',
        meaning: '直到 conj. prep.'
    },
    {
        word: 'time',
        hint: '時間，次數',
        meaning: '時間 N. 次數 N.'
    },
    {
        word: 'tin',
        hint: '罐頭',
        meaning: '罐頭 N.'
    },
    {
        word: 'tiny',
        hint: '極小的',
        meaning: '極小的 adj.'
    },
    {
        word: 'tip',
        hint: '尖端，小費',
        meaning: '尖端 N. 小費 N. V.'
    },
    {
        word: 'tire',
        hint: '輪胎，疲勞',
        meaning: '輪胎 N. 疲勞 V.'
    },
    {
        word: 'title',
        hint: '標題',
        meaning: '標題 N.'
    },
    {
        word: 'today',
        hint: '今天',
        meaning: '今天 adv. n.'
    },
    {
        word: 'toe',
        hint: '腳趾',
        meaning: '腳趾 N.'
    },
    {
        word: 'together',
        hint: '一起',
        meaning: '一起 adv.'
    },
    {
        word: 'toilet',
        hint: '馬桶',
        meaning: '馬桶 N.'
    },
    {
        word: 'tomorrow',
        hint: '明天',
        meaning: '明天 adv. n.'
    },
    {
        word: 'tongue',
        hint: '舌頭，語言',
        meaning: '舌頭 N. 語言 N.'
    },
    {
        word: 'tonight',
        hint: '今晚',
        meaning: '今晚 adv. n.'
    },
    {
        word: 'tool',
        hint: '工具',
        meaning: '工具 N.'
    },
    {
        word: 'tooth',
        hint: '牙齒',
        meaning: '牙齒 N.'
    },
    {
        word: 'top',
        hint: '頂部，最高點',
        meaning: '頂部 N. 最高點 N. adj. V.'
    },
    {
        word: 'topic',
        hint: '主題',
        meaning: '主題 N.'
    },
    {
        word: 'total',
        hint: '總數',
        meaning: '總數 adj. N. V.'
    },
    {
        word: 'touch',
        hint: '觸摸，感動',
        meaning: '觸摸 V. 感動 N. V.'
    },
    {
        word: 'tough',
        hint: '困難的，堅韌的',
        meaning: '困難的 adj. 堅韌的 adj.'
    },
    {
        word: 'tour',
        hint: '旅遊，巡迴',
        meaning: '旅遊 N. 巡迴 N. V.'
    },
    {
        word: 'toward',
        hint: '朝著',
        meaning: '朝著 prep. adv.' // 耶 一萬行 😎✌️
    },
    {
        word: 'tower',
        hint: '塔樓',
        meaning: '塔樓 N.'
    },
    {
        word: 'town',
        hint: '城鎮',
        meaning: '城鎮 N.'
    },
    {
        word: 'toy',
        hint: '玩具',
        meaning: '玩具 N.'
    },
    {
        word: 'track',
        hint: '軌道，足跡',
        meaning: '軌道 N. 足跡 N. V.'
    },
    {
        word: 'trade',
        hint: '貿易，交易',
        meaning: '貿易 N. 交易 N. V.'
    },
    {
        word: 'traffic',
        hint: '交通',
        meaning: '交通 N.'
    },
    {
        word: 'train',
        hint: '火車，訓練',
        meaning: '火車 N. 訓練 N. V.'
    },
    {
        word: 'translate',
        hint: '翻譯',
        meaning: '翻譯 V.'
    },
    {
        word: 'transport',
        hint: '運輸',
        meaning: '運輸 N. V.'
    },
    {
        word: 'trap',
        hint: '陷阱',
        meaning: '陷阱 N. V.'
    },
    {
        word: 'travel',
        hint: '旅行',
        meaning: '旅行 N. V.'
    },
    {
        word: 'treat',
        hint: '對待，治療',
        meaning: '對待 V. 治療 V. N.'
    },
    {
        word: 'tree',
        hint: '樹',
        meaning: '樹 N.'
    },
    {
        word: 'trip',
        hint: '旅行，絆倒',
        meaning: '旅行 N. 絆倒 V.'
    },
    {
        word: 'trouble',
        hint: '麻煩，困擾',
        meaning: '麻煩 N. 困擾 N. V.'
    },
    {
        word: 'true',
        hint: '真實的，正確的',
        meaning: '真實的 adj. 正確的 adj.'
    },
    {
        word: 'trust',
        hint: '信任，信賴',
        meaning: '信任 N. 信賴 N. V.'
    },
    {
        word: 'truth',
        hint: '真相',
        meaning: '真相 N.'
    },
    {
        word: 'try',
        hint: '嘗試',
        meaning: '嘗試 V. N.'
    },
    {
        word: 'tube',
        hint: '管，地鐵',
        meaning: '管 N. 地鐵 N.'
    },
    {
        word: 'tune',
        hint: '曲調',
        meaning: '曲調 N. V.'
    },
    {
        word: 'turn',
        hint: '轉動，輪流',
        meaning: '轉動 V. 輪流 N.'
    },
    {
        word: 'twist',
        hint: '扭轉，轉折',
        meaning: '扭轉 V. 轉折 N.'
    },
    {
        word: 'two',
        hint: '二',
        meaning: '二 N.'
    },
    {
        word: 'type',
        hint: '類型，打字',
        meaning: '類型 N. 打字 V.'
    },
    {
        word: 'typical',
        hint: '典型的',
        meaning: '典型的 adj.'
    },
    {
        word: 'ugly',
        hint: '醜陋的',
        meaning: '醜陋的 adj.'
    },
    {
        word: 'umbrella',
        hint: '雨傘',
        meaning: '雨傘 N.'
    },
    {
        word: 'uncle',
        hint: '叔叔，舅舅',
        meaning: '叔叔 N. 舅舅 N.'
    },
    {
        word: 'under',
        hint: '在...下面',
        meaning: '在...下面 prep. adv.'
    },
    {
        word: 'understand',
        hint: '理解',
        meaning: '理解 V.'
    },
    {
        word: 'unit',
        hint: '單位',
        meaning: '單位 N.'
    },
    {
        word: 'universe',
        hint: '宇宙',
        meaning: '宇宙 N.'
    },
    {
        word: 'university',
        hint: '大學',
        meaning: '大學 N.'
    },
    {
        word: 'unless',
        hint: '除非',
        meaning: '除非 conj.'
    },
    {
        word: 'until',
        hint: '直到',
        meaning: '直到 prep. conj.'
    },
    {
        word: 'up',
        hint: '向上，高興',
        meaning: '向上 adv. 高興 adj.'
    },
    {
        word: 'upon',
        hint: '在...之上',
        meaning: '在...之上 prep.'
    },
    {
        word: 'upper',
        hint: '上面的，較高的',
        meaning: '上面的 adj. 較高的 adj.'
    },
    {
        word: 'upset',
        hint: '不安的，翻覆',
        meaning: '不安的 adj. 翻覆 V.'
    },
    {
        word: 'urban',
        hint: '都市的',
        meaning: '都市的 adj.'
    },
    {
        word: 'urge',
        hint: '衝動，力勸',
        meaning: '衝動 N. 力勸 V.'
    },
    {
        word: 'urgent',
        hint: '緊急的',
        meaning: '緊急的 adj.'
    },
    {
        word: 'us',
        hint: '我們',
        meaning: '我們 pron.'
    },
    {
        word: 'use',
        hint: '使用',
        meaning: '使用 N. V.'
    },
    {
        word: 'usual',
        hint: '通常的',
        meaning: '通常的 adj.'
    },
    {
        word: 'valley',
        hint: '山谷',
        meaning: '山谷 N.'
    },
    {
        word: 'valuable',
        hint: '有價值的',
        meaning: '有價值的 adj.'
    },
    {
        word: 'value',
        hint: '價值',
        meaning: '價值 N. V.'
    },
    {
        word: 'van',
        hint: '貨車，房車',
        meaning: '貨車 N. 房車 N.'
    },
    {
        word: 'vapor',
        hint: '蒸氣',
        meaning: '蒸氣 N.'
    },
    {
        word: 'variety',
        hint: '多樣性',
        meaning: '多樣性 N.'
    },
    {
        word: 'various',
        hint: '各種各樣的',
        meaning: '各種各樣的 adj.'
    },
    {
        word: 'vast',
        hint: '廣大的',
        meaning: '廣大的 adj.'
    },
    {
        word: 'vegetable',
        hint: '蔬菜',
        meaning: '蔬菜 N.'
    },
    {
        word: 'vehicle',
        hint: '交通工具',
        meaning: '交通工具 N.'
    },
    {
        word: 'venture',
        hint: '冒險，冒險活動',
        meaning: '冒險 N. 冒險活動 N. V.'
    },
    {
        word: 'version',
        hint: '版本',
        meaning: '版本 N.'
    },
    {
        word: 'very',
        hint: '非常，完全',
        meaning: '非常 adv. 完全 adv.'
    },
    {
        word: 'vessel',
        hint: '船舶，器皿',
        meaning: '船舶 N. 器皿 N.'
    },
    {
        word: 'veteran',
        hint: '老兵，經驗豐富的人',
        meaning: '老兵 N. 經驗豐富的人 adj.'
    },
    {
        word: 'victim',
        hint: '受害者',
        meaning: '受害者 N.'
    },
    {
        word: 'victory',
        hint: '勝利',
        meaning: '勝利 N.'
    },
    {
        word: 'video',
        hint: '影片',
        meaning: '影片 N.'
    },
    {
        word: 'view',
        hint: '看法，視圖',
        meaning: '看法 N. 視圖 N. V.'
    },
    {
        word: 'village',
        hint: '村莊',
        meaning: '村莊 N.'
    },
    {
        word: 'violence',
        hint: '暴力',
        meaning: '暴力 N.'
    },
    {
        word: 'violent',
        hint: '兇猛的，暴力的',
        meaning: '兇猛的 adj. 暴力的 adj.'
    },
    {
        word: 'virtue',
        hint: '美德',
        meaning: '美德 N.'
    },
    {
        word: 'virus',
        hint: '病毒',
        meaning: '病毒 N.'
    },
    {
        word: 'visible',
        hint: '可見的',
        meaning: '可見的 adj.'
    },
    {
        word: 'visit',
        hint: '拜訪，參觀',
        meaning: '拜訪 V. 參觀 N. V.'
    },
    {
        word: 'visual',
        hint: '視覺的',
        meaning: '視覺的 adj.'
    },
    {
        word: 'vital',
        hint: '重要的，生死攸關的',
        meaning: '重要的 adj. 生死攸關的 adj.'
    },
    {
        word: 'voice',
        hint: '聲音，發聲',
        meaning: '聲音 N. 發聲 V.'
    },
    {
        word: 'volume',
        hint: '音量，冊',
        meaning: '音量 N. 冊 N.'
    },
    {
        word: 'volunteer',
        hint: '志願者，自願',
        meaning: '志願者 N. 自願 V. adj.'
    },
    {
        word: 'vote',
        hint: '投票，選舉',
        meaning: '投票 N. 選舉 N. V.'
    },
    {
        word: 'vowel',
        hint: '母音',
        meaning: '母音 N.'
    },
    {
        word: 'voyage',
        hint: '航行，航海',
        meaning: '航行 N. 航海 N. V.'
    },
    {
        word: 'wage',
        hint: '工資',
        meaning: '工資 N.'
    },
    {
        word: 'wagon',
        hint: '四輪運貨馬車',
        meaning: '四輪運貨馬車 N.'
    },
    {
        word: 'wait',
        hint: '等待，等候',
        meaning: '等待 V. 等候 N.'
    },
    {
        word: 'wake',
        hint: '醒來，喚醒',
        meaning: '醒來 V. 喚醒 V. N.'
    },
    {
        word: 'walk',
        hint: '步行，散步',
        meaning: '步行 V. 散步 N.'
    },
    {
        word: 'wall',
        hint: '牆',
        meaning: '牆 N.'
    },
    {
        word: 'wander',
        hint: '漫遊，徘徊',
        meaning: '漫遊 V. 徘徊 V.'
    },
    {
        word: 'want',
        hint: '想要，渴望',
        meaning: '想要 V. 渴望 V. N.'
    },
    {
        word: 'war',
        hint: '戰爭',
        meaning: '戰爭 N.'
    },
    {
        word: 'warm',
        hint: '溫暖的，使暖和',
        meaning: '溫暖的 adj. 使暖和 V.'
    },
    {
        word: 'warn',
        hint: '警告，告誡',
        meaning: '警告 V. 告誡 V.'
    },
    {
        word: 'wash',
        hint: '洗，清洗',
        meaning: '洗 V. 清洗 V. N.'
    },
    {
        word: 'waste',
        hint: '浪費，廢物',
        meaning: '浪費 V. 廢物 N.'
    },
    {
        word: 'watch',
        hint: '觀看，手錶',
        meaning: '觀看 V. 手錶 N.'
    },
    {
        word: 'water',
        hint: '水，澆水',
        meaning: '水 N. 澆水 V.'
    },
    {
        word: 'wave',
        hint: '波浪，揮手',
        meaning: '波浪 N. 揮手 V.'
    },
    {
        word: 'way',
        hint: '方式，道路',
        meaning: '方式 N. 道路 N.'
    },
    {
        word: 'weak',
        hint: '虛弱的',
        meaning: '虛弱的 adj.'
    },
    {
        word: 'wealth',
        hint: '財富',
        meaning: '財富 N.'
    },
    {
        word: 'weapon',
        hint: '武器',
        meaning: '武器 N.'
    },
    {
        word: 'wear',
        hint: '穿著，磨損',
        meaning: '穿著 V. 磨損 V.'
    },
    {
        word: 'weather',
        hint: '天氣',
        meaning: '天氣 N.'
    },
    {
        word: 'weave',
        hint: '編織，編織物',
        meaning: '編織 V. 編織物 N.'
    },
    {
        word: 'web',
        hint: '網，網狀結構',
        meaning: '網 N. 網狀結構 N.'
    },
    {
        word: 'week',
        hint: '星期，週',
        meaning: '星期 N. 週 N.'
    },
    {
        word: 'weigh',
        hint: '稱重，掂量',
        meaning: '稱重 V. 掂量 V.'
    },
    {
        word: 'welcome',
        hint: '歡迎，受歡迎的',
        meaning: '歡迎 V. 受歡迎的 adj.'
    },
    {
        word: 'well',
        hint: '好，井',
        meaning: '好 adj. 井 N. adv.'
    },
    {
        word: 'west',
        hint: '西方，西部',
        meaning: '西方 N. 西部 N.'
    },
    {
        word: 'wet',
        hint: '濕的，弄濕',
        meaning: '濕的 adj. 弄濕 V.'
    },
    {
        word: 'whale',
        hint: '鯨魚',
        meaning: '鯨魚 N.'
    },
    {
        word: 'what',
        hint: '什麼',
        meaning: '什麼 pron.'
    },
    {
        word: 'wheat',
        hint: '小麥',
        meaning: '小麥 N.'
    },
    {
        word: 'wheel',
        hint: '輪子',
        meaning: '輪子 N.'
    },
    {
        word: 'when',
        hint: '何時',
        meaning: '何時 adv. conj.'
    },
    {
        word: 'where',
        hint: '哪裡',
        meaning: '哪裡 adv.'
    },
    {
        word: 'whether',
        hint: '是否',
        meaning: '是否 conj.'
    },
    {
        word: 'which',
        hint: '哪一個',
        meaning: '哪一個 pron.'
    },
    {
        word: 'while',
        hint: '當...的時候，一會兒',
        meaning: '當...的時候 conj. 一會兒 n.'
    },
    {
        word: 'whisper',
        hint: '耳語，低語',
        meaning: '耳語 N. 低語 V.'
    },
    {
        word: 'white',
        hint: '白色',
        meaning: '白色 adj. n.'
    },
    {
        word: 'who',
        hint: '誰',
        meaning: '誰 pron.'
    },
    {
        word: 'whole',
        hint: '整個，全部的',
        meaning: '整個 adj. 全部的 adj.'
    },
    {
        word: 'why',
        hint: '為什麼',
        meaning: '為什麼 adv.'
    },
    {
        word: 'wide',
        hint: '寬的，廣泛的',
        meaning: '寬的 adj. 廣泛的 adj.'
    },
    {
        word: 'wife',
        hint: '妻子',
        meaning: '妻子 N.'
    },
    {
        word: 'wild',
        hint: '野生的，狂野的',
        meaning: '野生的 adj. 狂野的 adj.'
    },
    {
        word: 'will',
        hint: '意志，將要',
        meaning: '意志 N. 將要 aux. v.'
    },
    {
        word: 'win',
        hint: '贏得，獲勝',
        meaning: '贏得 V. 獲勝 V.'
    },
    {
        word: 'wind',
        hint: '風，轉動',
        meaning: '風 N. 轉動 V.'
    },
    {
        word: 'window',
        hint: '窗戶',
        meaning: '窗戶 N.'
    },
    {
        word: 'wine',
        hint: '葡萄酒',
        meaning: '葡萄酒 N.'
    },
    {
        word: 'wing',
        hint: '翅膀',
        meaning: '翅膀 N.'
    },
    {
        word: 'winter',
        hint: '冬天',
        meaning: '冬天 N.'
    },
    {
        word: 'wire',
        hint: '金屬線，電線',
        meaning: '金屬線 N. 電線 N.'
    },
    {
        word: 'wise',
        hint: '聰明的，明智的',
        meaning: '聰明的 adj. 明智的 adj.'
    },
    {
        word: 'wish',
        hint: '希望，祝愿',
        meaning: '希望 V. 祝愿 N.'
    },
    {
        word: 'with',
        hint: '與...一起，用',
        meaning: '與...一起 prep. 用 prep.'
    },
    {
        word: 'withdraw',
        hint: '撤回，提款',
        meaning: '撤回 V. 提款 V.'
    },
    {
        word: 'within',
        hint: '在...之內',
        meaning: '在...之內 prep.'
    },
    {
        word: 'without',
        hint: '沒有，無',
        meaning: '沒有 prep. conj. adv.'
    },
    {
        word: 'witness',
        hint: '目擊者，見證',
        meaning: '目擊者 N. 見證 V. N.'
    },
    {
        word: 'wolf',
        hint: '狼',
        meaning: '狼 N.'
    },
    {
        word: 'woman',
        hint: '女人',
        meaning: '女人 N.'
    },
    {
        word: 'wonder',
        hint: '驚奇，好奇',
        meaning: '驚奇 N. V. 好奇 N. V.'
    },
    {
        word: 'wood',
        hint: '木頭',
        meaning: '木頭 N.'
    },
    {
        word: 'wool',
        hint: '羊毛',
        meaning: '羊毛 N.'
    },
    {
        word: 'word',
        hint: '單詞，言語',
        meaning: '單詞 N. 言語 N.'
    },
    {
        word: 'work',
        hint: '工作，操作',
        meaning: '工作 N. V. 操作 N. V.'
    },
    {
        word: 'world',
        hint: '世界',
        meaning: '世界 N.'
    },
    {
        word: 'worry',
        hint: '擔心，煩惱',
        meaning: '擔心 V. 煩惱 N. V.'
    },
    {
        word: 'worth',
        hint: '價值，值得的',
        meaning: '價值 N. 值得的 adj.'
    },
    {
        word: 'wrap',
        hint: '包裹，裹住',
        meaning: '包裹 V. 裹住 V.'
    },
    {
        word: 'wrist',
        hint: '手腕',
        meaning: '手腕 N.'
    },
    {
        word: 'write',
        hint: '寫，撰寫',
        meaning: '寫 V. 撰寫 V.'
    },
    {
        word: 'wrong',
        hint: '錯誤的，不正確',
        meaning: '錯誤的 adj. 不正確 adj.'
    },
    {
        word: 'yard',
        hint: '院子，碼',
        meaning: '院子 N. 碼 N.'
    },
    {
        word: 'year',
        hint: '年',
        meaning: '年 N.'
    },
    {
        word: 'yellow',
        hint: '黃色',
        meaning: '黃色 adj. n.'
    },
    {
        word: 'yes',
        hint: '是，同意',
        meaning: '是 adv. 同意 interj.'
    },
    {
        word: 'yesterday',
        hint: '昨天',
        meaning: '昨天 adv. n.'
    },
    {
        word: 'yet',
        hint: '但是，然而',
        meaning: '但是 conj. adv.'
    },
    {
        word: 'yield',
        hint: '產量，屈服',
        meaning: '產量 N. 屈服 V.'
    },
    {
        word: 'you',
        hint: '你，你們',
        meaning: '你 pron. 你們 pron.'
    },
    {
        word: 'young',
        hint: '年輕的，年輕人',
        meaning: '年輕的 adj. 年輕人 n.'
    },
    {
        word: 'youth',
        hint: '青少年，年輕',
        meaning: '青少年 n. 年輕 n.'
    },
    {
        word: 'zero',
        hint: '零',
        meaning: '零 N. adj.'
    },
    {
        word: 'zone',
        hint: '區域，地帶',
        meaning: '區域 N. 地帶 N.'
    },
    {
        word: 'zoo',
        hint: '動物園',
        meaning: '動物園 N.'
    }
]

// 終

/*
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠿⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⡀⠠⠤⠒⢂⣉⣉⣉⣑⣒⣒⠒⠒⠒⠒⠒⠒⠒⠀⠀⠐⠒⠚⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⡠⠔⠉⣀⠔⠒⠉⣀⣀⠀⠀⠀⣀⡀⠈⠉⠑⠒⠒⠒⠒⠒⠈⠉⠉⠉⠁⠂⠀⠈⠙⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠔⠁⠠⠖⠡⠔⠊⠀⠀⠀⠀⠀⠀⠀⠐⡄⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠉⠲⢄⠀⠀⠀⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠊⠀⢀⣀⣤⣤⣤⣤⣀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠜⠀⠀⠀⠀⣀⡀⠀⠈⠃⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠥⠐⠂⠀⠀⠀⠀⡄⠀⠰⢺⣿⣿⣿⣿⣿⣟⠀⠈⠐⢤⠀⠀⠀⠀⠀⠀⢀⣠⣶⣾⣯⠀⠀⠉⠂⠀⠠⠤⢄⣀⠙⢿⣿⣿
⣿⡿⠋⠡⠐⠈⣉⠭⠤⠤⢄⡀⠈⠀⠈⠁⠉⠁⡠⠀⠀⠀⠉⠐⠠⠔⠀⠀⠀⠀⠀⠲⣿⠿⠛⠛⠓⠒⠂⠀⠀⠀⠀⠀⠀⠠⡉⢢⠙⣿
⣿⠀⢀⠁⠀⠊⠀⠀⠀⠀⠀⠈⠁⠒⠂⠀⠒⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⢀⣀⡠⠔⠒⠒⠂⠀⠈⠀⡇⣿
⣿⠀⢸⠀⠀⠀⢀⣀⡠⠋⠓⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠈⠢⠤⡀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⡠⠀⡇⣿
⣿⡀⠘⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠈⠑⡦⢄⣀⠀⠀⠐⠒⠁⢸⠀⠀⠠⠒⠄⠀⠀⠀⠀⠀⢀⠇⠀⣀⡀⠀⠀⢀⢾⡆⠀⠈⡀⠎⣸⣿
⣿⣿⣄⡈⠢⠀⠀⠀⠀⠘⣶⣄⡀⠀⠀⡇⠀⠀⠈⠉⠒⠢⡤⣀⡀⠀⠀⠀⠀⠀⠐⠦⠤⠒⠁⠀⠀⠀⠀⣀⢴⠁⠀⢷⠀⠀⠀⢰⣿⣿
⣿⣿⣿⣿⣇⠂⠀⠀⠀⠀⠈⢂⠀⠈⠹⡧⣀⠀⠀⠀⠀⠀⡇⠀⠀⠉⠉⠉⢱⠒⠒⠒⠒⢖⠒⠒⠂⠙⠏⠀⠘⡀⠀⢸⠀⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠑⠄⠰⠀⠀⠁⠐⠲⣤⣴⣄⡀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢸⠀⠀⠀⠀⢠⠀⣠⣷⣶⣿⠀⠀⢰⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠁⢀⠀⠀⠀⠀⠀⡙⠋⠙⠓⠲⢤⣤⣷⣤⣤⣤⣤⣾⣦⣤⣤⣶⣿⣿⣿⣿⡟⢹⠀⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠑⠀⢄⠀⡰⠁⠀⠀⠀⠀⠀⠈⠉⠁⠈⠉⠻⠋⠉⠛⢛⠉⠉⢹⠁⢀⢇⠎⠀⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠈⠢⢄⡉⠂⠄⡀⠀⠈⠒⠢⠄⠀⢀⣀⣀⣰⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣎⠀⠼⠊⠀⠀⠀⠘⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠉⠢⢄⡈⠑⠢⢄⡀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⢀⠀⠀⠀⠀⠀⢻⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⡈⠑⠢⢄⡀⠈⠑⠒⠤⠄⣀⣀⠀⠉⠉⠉⠉⠀⠀⠀⣀⡀⠤⠂⠁⠀⢀⠆⠀⠀⢸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡀⠁⠉⠒⠂⠤⠤⣀⣀⣉⡉⠉⠉⠉⠉⢀⣀⣀⡠⠤⠒⠈⠀⠀⠀⠀⣸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣤⣤⣤⣤⣀⣀⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿
*/
console.log(`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠿⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⡀⠠⠤⠒⢂⣉⣉⣉⣑⣒⣒⠒⠒⠒⠒⠒⠒⠒⠀⠀⠐⠒⠚⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⡠⠔⠉⣀⠔⠒⠉⣀⣀⠀⠀⠀⣀⡀⠈⠉⠑⠒⠒⠒⠒⠒⠈⠉⠉⠉⠁⠂⠀⠈⠙⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠔⠁⠠⠖⠡⠔⠊⠀⠀⠀⠀⠀⠀⠀⠐⡄⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠉⠲⢄⠀⠀⠀⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠊⠀⢀⣀⣤⣤⣤⣤⣀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠜⠀⠀⠀⠀⣀⡀⠀⠈⠃⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠥⠐⠂⠀⠀⠀⠀⡄⠀⠰⢺⣿⣿⣿⣿⣿⣟⠀⠈⠐⢤⠀⠀⠀⠀⠀⠀⢀⣠⣶⣾⣯⠀⠀⠉⠂⠀⠠⠤⢄⣀⠙⢿⣿⣿
⣿⡿⠋⠡⠐⠈⣉⠭⠤⠤⢄⡀⠈⠀⠈⠁⠉⠁⡠⠀⠀⠀⠉⠐⠠⠔⠀⠀⠀⠀⠀⠲⣿⠿⠛⠛⠓⠒⠂⠀⠀⠀⠀⠀⠀⠠⡉⢢⠙⣿
⣿⠀⢀⠁⠀⠊⠀⠀⠀⠀⠀⠈⠁⠒⠂⠀⠒⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⢀⣀⡠⠔⠒⠒⠂⠀⠈⠀⡇⣿
⣿⠀⢸⠀⠀⠀⢀⣀⡠⠋⠓⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠈⠢⠤⡀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⡠⠀⡇⣿
⣿⡀⠘⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠈⠑⡦⢄⣀⠀⠀⠐⠒⠁⢸⠀⠀⠠⠒⠄⠀⠀⠀⠀⠀⢀⠇⠀⣀⡀⠀⠀⢀⢾⡆⠀⠈⡀⠎⣸⣿
⣿⣿⣄⡈⠢⠀⠀⠀⠀⠘⣶⣄⡀⠀⠀⡇⠀⠀⠈⠉⠒⠢⡤⣀⡀⠀⠀⠀⠀⠀⠐⠦⠤⠒⠁⠀⠀⠀⠀⣀⢴⠁⠀⢷⠀⠀⠀⢰⣿⣿
⣿⣿⣿⣿⣇⠂⠀⠀⠀⠀⠈⢂⠀⠈⠹⡧⣀⠀⠀⠀⠀⠀⡇⠀⠀⠉⠉⠉⢱⠒⠒⠒⠒⢖⠒⠒⠂⠙⠏⠀⠘⡀⠀⢸⠀⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠑⠄⠰⠀⠀⠁⠐⠲⣤⣴⣄⡀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢸⠀⠀⠀⠀⢠⠀⣠⣷⣶⣿⠀⠀⢰⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠁⢀⠀⠀⠀⠀⠀⡙⠋⠙⠓⠲⢤⣤⣷⣤⣤⣤⣤⣾⣦⣤⣤⣶⣿⣿⣿⣿⡟⢹⠀⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠑⠀⢄⠀⡰⠁⠀⠀⠀⠀⠀⠈⠉⠁⠈⠉⠻⠋⠉⠛⢛⠉⠉⢹⠁⢀⢇⠎⠀⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠈⠢⢄⡉⠂⠄⡀⠀⠈⠒⠢⠄⠀⢀⣀⣀⣰⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣎⠀⠼⠊⠀⠀⠀⠘⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠉⠢⢄⡈⠑⠢⢄⡀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⢀⠀⠀⠀⠀⠀⢻⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⡈⠑⠢⢄⡀⠈⠑⠒⠤⠄⣀⣀⠀⠉⠉⠉⠉⠀⠀⠀⣀⡀⠤⠂⠁⠀⢀⠆⠀⠀⢸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡀⠁⠉⠒⠂⠤⠤⣀⣀⣉⡉⠉⠉⠉⠉⢀⣀⣀⡠⠤⠒⠈⠀⠀⠀⠀⣸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣤⣤⣤⣤⣀⣀⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿`)

// debug