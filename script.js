const btn = document.querySelectorAll("button");
const box = document.querySelector('.box1')
const modalw = document.getElementById('modal')

let current = "X";
const combo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let winner = ["", "", "", "", "", "", "", "", ""];
     
function checkwinner() {
  for (let combination of combo) {
    const [a, b, c] = combination;

    if (winner[a] && winner[a] === winner[b] && winner[a] === winner[c]) {
      alert("winner is" + " " + winner[a] + " " + "player");
      
/*       modalw.className='modal'
      modalw.innerHTML = `
      <h2> player has won</h2>
      <button "id="rest" >Restart</button>
      `
      const restbtn = document.getElementById('rest')
      restbtn.setAttribute('onclick', "Restart()")
      function Restart(){
        modalw.remove()
      } */
      /* 
      restbtn.addEventListener('click', ()=>{
        modalw.remove('div')
      }) */
      
      for (let i = 0; i <= 8; i++) {
        btn[i].textContent = "";
        winner[i] = "";
      }
    } else if (!winner.includes("")) {
      alert("It's a Draw!");
      
      for (let i = 0; i <= 8; i++) {
        btn[i].textContent = "";
        winner[i] = "";
      }
      
    }
  }
}

btn.forEach((element, y) => {
  element.addEventListener("click", () => {
    if (btn[y].innerText === "") {
      btn[y].innerText = current;
      if (current === "X") {
        current = "O";
        winner[y] = "X";

        checkwinner();
      } else {
        current = "X";
        winner[y] = "O";
        checkwinner();
      }
    } else {
    }

    
  });
  //style
  
 
});
