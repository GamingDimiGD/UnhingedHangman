const rng = (max, min) => {
  if (!min) min = 0
  const num = Math.floor(Math.random() * (max - min + 1)) + min
  return num
}

let getVar = (name) => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
}

let setVar = (name, val) => {
  return document.documentElement.style.setProperty(`--${name}`, val)
}

let version = 'v1.5.2'
let bossFightBadge = false
document.querySelectorAll('.version').forEach(e => e.innerText = version)
let bossFightMode = false
if ($.jStorage.get('bossFightMode')) bossFightMode = true
if ($.jStorage.get('bossFightBadge')) bossFightBadge = true
if (bossFightBadge && window.location.href.includes('/html/')) {
  document.querySelector('.boss-fight-badge').innerText = '打敗過柴柴'
  document.querySelector('.boss-fight-badge').style.color = '#f00'
}
setInterval(() => {
  if (!$) return
  if (bossFightBadge) $.jStorage.set('bossFightMode', true)
  if (!bossFightMode) $.jStorage.set('bossFightMode', false)
})

console.log(`
████████████████   
       ██
     ██████
   ██  ██  ██
██     ██     ██
       ██
       
████████████████
    ██    ██    
████████████████
██  ██    ██  ██
████████████████
    ██    ██
████████████████
  ██       ██
██       ██
  ████████
  ██    ██
██        ████

  ██      ██████████
██████        ██
  ██          ██
  ████        ██
████          ██
  ██        ████

        ██
██████████████████
██              ██
   ████████████
             ██
          ██
██████████████████
        ██
        ██
     ████
`)

const compareArray = (a, b) => {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const todaysLunarDate = () => {
  const today = new Date()
  return Solar.fromYmd(today.getFullYear(), today.getMonth() + 1, today.getDate()).getLunar()
}

const date = (month, day) => {
  return new Date().getDate() === day && new Date().getMonth() + 1 === month
}
const dateRange = (monthFrom, dayFrom, monthTo, dayTo) => {
  return new Date().getDate() >= dayFrom && new Date().getMonth() + 1 >= monthFrom && new Date().getDate() <= dayTo && new Date().getMonth() + 1 <= monthTo
}

const lunarDate = (month, day) => {
  return todaysLunarDate().getMonth() === month && todaysLunarDate().getDay() === day
}

const lunarDateRange = (monthFrom, dayFrom, monthTo, dayTo) => {
  return todaysLunarDate().getMonth() >= monthFrom && todaysLunarDate().getDay() >= dayFrom && todaysLunarDate().getMonth() <= monthTo && todaysLunarDate().getDay() <= dayTo
}

// thanks stack overflow
const toDataURL = (url, callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}