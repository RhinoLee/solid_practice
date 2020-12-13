// 使用情境
// 根據 point 設定對應顏色
let point = 70

// 方法1: 
// 優： 簡單好懂
// 缺： function 同時控制  pointLevel & color
// function checkPoint(){
//   if(point < 60){
//     document.style.background = "red"
//   }else if(point < 75){
//     document.style.background = "yellow"
//   }else {
//     document.style.background = "green"
//   }
// }

// 方法2: 
// 調整 point 進 checkPoint1
// 調整 color 進 pointColor
// 缺點： 調整 point 要進 function, （因為判斷式）

const pointColor = ['red', 'yellow', 'green']
function checkPoint1(point){
  switch (true){
    case point < 60 : 
      return 0 
    case point < 75 : 
      return 1 
    case point >= 75 : 
      return 2
    default: 
      return 
  }

}

function checkColor(){
  return pointColor[checkPoint1(point)]
}
document.style.background = pointColor[checkPoint1(point)]



