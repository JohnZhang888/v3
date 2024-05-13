const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)') //为检测系统颜色模式赋值变量
const themeDropdown = document.querySelector('#themeDropdown')
const logo = document.querySelector('#logo')
const html = document.querySelector('html')
const themeCSS = document.querySelector('#themeCSS')
let priBtn, priOutBtn, priText //声明三种要改变的class
function changeClass(a, b, c) {
  a = document.querySelectorAll('.' + b)
  for (let i = 0; i < a.length; i++) {
    toChange = a[i]
    toChange.classList.replace(b, c)
  }
} //封装改变class的函数

function lightStyle() {
  html.setAttribute('data-bs-theme', 'light')
  logo.src = 'https://pic.imgdb.cn/item/661d3f9e0ea9cb1403d29f29.png'
} //亮色样式
function darkStyle() {
  html.setAttribute('data-bs-theme', 'dark')
  logo.src = 'https://pic.imgdb.cn/item/639695feb1fccdcd36b77c6e.png'
} //暗色样式

function lightTheme() {
  themeDropdown.innerHTML = '<i class="bi bi-sun-fill"></i>&ensp;浅色'
  lightStyle()
  Cookies.set('theme', 'light', { sameSite: false })
}
function darkTheme() {
  themeDropdown.innerHTML = '<i class="bi bi-moon-stars-fill"></i>&ensp;深色'
  darkStyle()
  Cookies.set('theme', 'dark', { sameSite: false })
}
function autoTheme() {
  themeDropdown.innerHTML = '<i class="bi bi-circle-half"></i>&ensp;自动'
  if (mediaQueryListDark.matches) {
    darkStyle()
  }
  else {
    lightStyle()
  }
  Cookies.set('theme', 'auto', { sameSite: false })
}

if (Cookies.get('theme') == 'light') {
  lightTheme()
}
else if (Cookies.get('theme') == 'dark') {
  darkTheme()
}
else if (Cookies.get('theme') == 'auto') {
  autoTheme()
}
else {
  autoTheme()
}

