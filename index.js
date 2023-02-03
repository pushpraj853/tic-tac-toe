let winCombo = [[1, 2, 3], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1],
[1, 4, 7], [1, 7, 4], [4, 1, 7], [4, 7, 1], [7, 1, 4], [7, 4, 1],
[1, 5, 9], [1, 9, 5], [5, 1, 9], [5, 9, 1], [9, 1, 5], [9, 5, 1],
[2, 5, 8], [2, 8, 5], [5, 2, 8], [5, 8, 2], [8, 2, 5], [8, 5, 2],
[3, 6, 9], [3, 9, 6], [6, 3, 9], [6, 9, 3], [9, 3, 6], [9, 6, 3],
[3, 5, 7], [3, 7, 5], [5, 3, 7], [5, 7, 3], [7, 5, 3], [7, 3, 5]];
winCombo = winCombo.map(e => e.join(''));

let playerA = [];
let playerB = [];
let flag = 0;
// first mark would be X
let winner = 0;
function mark(i) {
  // if box is already marked then return;
  if (playerA.includes(parseInt(i)) || playerB.includes(parseInt(i))) {
    return;
  }
  console.log(i);
  if (!winner) {
    if (flag) {
      // write 0
      document.getElementById(i).innerText = "O";
      playerB.push(parseInt(i));
      console.log(playerB);
      flag = 0;
      if (playerB.length >= 3 && winCombo.includes(playerB.join(""))) {
        document.getElementById("winner").innerText = "B is winner";
        winner = 1;
      }
    }
    else {
      // write x
      document.getElementById(i).innerText = "X";
      playerA.push(parseInt(i));
      console.log(playerA)
      flag = 1;
      if (playerA.length >= 3 && winCombo.includes(playerA.join(""))) {
        document.getElementById("winner").innerText = "A is winner";
        winner = 1;
      }
    }
  }
}



let combination = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7]];
let player1 = [9, 3, 1, 9, 4,];

function check(player) {
  combination.forEach(combo => {
    for (let i = 0; i < combo.length; i++) {
      if (player.includes(combo[i]))
        flag = 0;
    }

  })
}
console.log(check(player1));



