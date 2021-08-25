const hour = document.getElementById('clock-hour')
const minutes = document.getElementById('clock-minutes')
const seconds = document.getElementById('clock-seconds')

function clock(){
    let date = new Date();
    let hh = date.getHours()*30  //每小時30度
    let mm = date.getMinutes()*6 //每分鐘6度
    let ss = date.getSeconds()*6 //每秒鐘6度
    hour.style.transform = `rotateZ(${hh+mm/12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock,1000) // 1000 = 1s


const textHour = document.getElementById('text-hour')
const textMinutes = document.getElementById('text-minutes')
const textAmPm = document.getElementById('text-ampm')
const dateDay = document.getElementById('date-day')
const dateMonth = document.getElementById('date-month')
const dateYear = document.getElementById('date-year')
function clockText(){
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    if(hh>12){
        hh=hh-12
        ampm='pM'
    }else{
        ampm='AM'
    }
    if(hh<10){
        hh=`0${hh}`
    }
    textHour.innerHTML = `${hh}:`
    
    if(mm<10){
        mm = `0${mm}`
    }
    textMinutes.innerHTML = mm

    textAmPm.innerHTML = ampm
    
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    dateDay.innerHTML = day
    dateMonth.innerHTML = months[month]
    dateYear.innerHTML = year
}
setInterval(clockText,1000)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

function getCurrentTheme(){
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}
function getCurrentIcon(){
    return themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'
}

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click',function(){
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
