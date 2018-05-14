/**
 * todo 1. 先显示所有卡片图标，然后翻转卡牌，游戏开始
 * todo 2. 限制 matchArray 中的元素只有两个
 * todo 3. 增加步数计数
 * todo 4. 游戏失败界面
 * todo 5. 游戏获胜界面
 * todo 6. 游戏重置功能
 * todo 7. 游戏动画：卡牌翻转动画、开牌匹配成功动画、开票匹配失败动画
 * todo 8. 利用面向对象进行代码重构
*/

/*
 * 创建一个包含所有卡片的数组
 */

let cards = [
  'diamond',
  'diamond',
  'paper-plane-o',
  'paper-plane-o',
  'anchor',
  'anchor',
  'bolt',
  'bolt',
  'cube',
  'cube',
  'leaf',
  'leaf',
  'bicycle',
  'bicycle',
  'bomb',
  'bomb'
]

createCardHtml()
/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle (array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

function createCardHtml () {
  // let cardsInfo = []
  let randomCards = shuffle(cards)

  for (const card of randomCards) {
    let ul = document.getElementsByClassName('deck')
    let li = document.createElement('li')
    let i = document.createElement('i')
    i.className = `fa fa-${card}`
    li.className = 'card'
    li.appendChild(i)
    ul[0].appendChild(li)
  }
}

/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */

let lists = document.getElementsByClassName('card')
let matchArray = []
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener('click', showIcon)
}

function showIcon (e) {
  let clickLi = e.target
  let clickLiClassList = clickLi.classList
  clickLiClassList.add('open', 'show')
  matchArray.push(clickLi)
  setTimeout(() => {
    matchIcon()
  }, 1000)
}

function matchIcon () {
  if (matchArray.length === 2) {
    let liOneClassList = matchArray[0].children[0].classList.value
    let liTwoClassList = matchArray[1].children[0].classList.value
    console.log('====================================')
    console.log(liOneClassList)
    console.log(liTwoClassList)
    console.log('====================================')
    if (liOneClassList == liTwoClassList) {
      matchArray.map((li) => (li.classList.add('match')))
      matchArray = []
    } else {
      matchArray.map((li) => (li.classList.remove('open', 'show')))
      matchArray = []
    }
  }
  console.log('====================================')
  console.log(matchArray)
  console.log('====================================')
}
