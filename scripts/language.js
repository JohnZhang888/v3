const copyButton = document.querySelector('.copy-button')

function ci(className, innerHTML) {
  const classToChange = document.querySelectorAll(className)
  for (let i = 0; i < classToChange.length; i++) {
    toChange = classToChange[i]
    toChange.innerHTML = innerHTML
  }
}

function toChinese() {
  document.querySelector('html').lang = 'zh-CN'
  ci('.-john-zhang', '张永康')
  ci('.-example-title', '示例标题')
  ci('.-example-description', '示例描述。')
  ci('.-language-button', 'To English')
  ci('.-auto', '<i class="bi bi-circle-half"></i>&ensp;自动')
  ci('.-light', '<i class="bi bi-sun-fill"></i>&ensp;浅色')
  ci('.-dark', '<i class="bi bi-moon-stars-fill"></i>&ensp;深色')
  ci('.-essays-title', '随写随记')
  ci('.-composition-title', '正经文摘')
  ci('.-tag-title', '工具与游戏')
  ci('.-about-title', '关于')
  ci('.-read', '阅读')
  ci('.-try', '使用')
  ci('.-spring-title', '春到回初')
  ci('.-spring-description', '春暖花开，万物复苏。')
  ci('.-star-title', '照我前行的一颗星')
  ci('.-voice-title', '天赐之声')
  ci('.-rebuild-title', '网站重建记')
  ci('.-rebuild-description', '记录我重新搭建网站的过程。')
  ci('.-xyes-title', 'XYes')
  ci('.-xyes-description', '一个二元一次方程组求解器。')
  ci('.-composition-description', '我在考试或作业中写的正经文章，可作为初中作文参考。')
  ci('.-country', '家国情怀')
  ci('.-landscape', '优美景致')
  ci('.-love', '日常温情')
  ci('.-growth', '励志成长')
  ci('.-recommend', '推荐阅读')
  ci('.-share', '分享')
  ci('.-send', '向作者发送信息')
  ci('.-spy-title', '谁是卧底')
  ci('.-recommend-to-try', '推荐使用')
  ci('.-download', '下载')
  $('.No-english').hide();
  
  otherChineseText()
}

function toEnglish() {
  document.querySelector('html').lang = 'en-US'
  ci('.-john-zhang', 'John Zhang')
  ci('.-example-title', 'Example Title')
  ci('.-example-description', 'Example description.')
  ci('.-language-button', '转为中文')
  ci('.-auto', '<i class="bi bi-circle-half"></i>&ensp;Auto')
  ci('.-light', '<i class="bi bi-sun-fill"></i>&ensp;Light')
  ci('.-dark', '<i class="bi bi-moon-stars-fill"></i>&ensp;Dark')
  ci('.-essays-title', 'Essays')
  ci('.-composition-title', 'Compositions')
  ci('.-tag-title', 'Tools & Games')
  ci('.-about-title', 'About')
  ci('.-read', 'Read')
  ci('.-try', 'Try')
  ci('.-spring-title', 'Spring to Huimin Middle School')
  ci('.-spring-description', 'Spring is coming while flowers are bloosming. Everything is coming back to life.')
  ci('.-star-title', 'The Star That Leads Me to Go On')
  ci('.-voice-title', 'Voice from the God')
  ci('.-rebuild-title', 'Rebuilding the Website')
  ci('.-rebuild-description', 'Record the process of rebuilding the website.')
  ci('.-xyes-title', 'XYes')
  ci('.-xyes-description', 'A solver of systems of linear equations of two unknowns.')
  ci('.-composition-description', 'The essays that I wrote in exams or homework, which are avalible to be the refrence of junior high school passages.')
  ci('.-country', 'Native Land Emotion')
  ci('.-landscape', 'Amazing Landscape')
  ci('.-love', 'Daily Love')
  ci('.-growth', 'Growth Encouragement')
  ci('.-recommend', 'Recommend to Read')
  ci('.-share', 'Share');
  ci('.-send', 'Send a Message to the Author')
  ci('.-spy-title', 'Who\'s the Spy')
  ci('.-recommend-to-try', 'Recommend to Try')
  ci('.-download', 'Download')
  $('.No-english').show();
  
  otherEnglishText()
}

switch (Cookies.get('language')) {
  case 'zh_cn':
    toChinese()
    break
  case 'en_us':
    toEnglish()
    break
  default:
    Cookies.set('language', 'zh_cn')
    toChinese()
    break
}

function changeLanguage() {
  switch (Cookies.get('language')) {
    case 'zh_cn':
      Cookies.set('language', 'en_us')
      toEnglish()
      break
    case 'en_us':
      Cookies.set('language', 'zh_cn')
      toChinese()
      break
  }
}