function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 

const wordList = ['苹果', '鸭梨', '电脑', '手机']
const gameBox = document.querySelector('#game-box')

gameBox.innerHTML = `
  <div class="input-group mb-2">
  <span class="input-group-text" id="player-quantity-input-text">玩家数量</span>
  <input type="number" id="player-quantity-input" class="form-control" aria-describedby="player-quantity-input-text">
  </div>
  <div class="input-group mb-3">
  <span class="input-group-text" id="spy-quantity-input-text">卧底数量</span>
  <input type="number" id="spy-quantity-input" class="form-control" aria-describedby="spy-quantity-input-text">
  </div>
  <p><button class="btn btn-primary" onclick="start()">开始游戏</button></p>
` //游戏开始画面

function start() {
  let playerQuantity = document.querySelector('#player-quantity-input').value
  let spyQuantity = document.querySelector('#spy-quantity-input').value
  if (spyQuantity > playerQuantity / 2) {
    alert ("请重新设置卧底数量，使其不多于玩家数量的一半。")
  }
  else {
    let playerList = []
    for (i = 0; i < playerQuantity; i++) {
      playerList.push(false)
    }
    for (i = 0; i < spyQuantity; i++) {
      let selectedNum = randomNum(0, playerList.length - 1)
      if (playerList[selectedNum] = false) {
        playerList [selectedNum] = true
      }
    }
  }
} 