
let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
let finalMsg = document.querySelector(".msg");

let users = document.querySelector(".user");
let comp = document.querySelector(".com");






const draw = () =>{
    finalMsg.innerText = "It's a draw!"
    finalMsg.style.backgroundColor = "#081b31"
}



const genComChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}



const playGame = (userChoice) =>{
     console.log("user choice = ", userChoice);
    const comChoice = genComChoice();
     console.log("com choice = ", comChoice);
    if (userChoice === comChoice) {
         //draw situation
         console.log("draw!")
         draw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
             //paper, scissor
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissor
            userWin = comChoice === "scissor" ? false : true;
        } else {
            // rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}
    

const showWinner = (userWin) => {
     if (userWin) {
        console.log("You win!");
        userScore++;
        finalMsg.innerText = `You Win!`;
        finalMsg.style.backgroundColor = "green";
        users.innerText = userScore;
     }else {
        console.log("You lose!");
        comScore++
        finalMsg.innerText = `You Lose!`;
        finalMsg.style.backgroundColor = "red";
        comp.innerText = comScore;
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        console.log("userChoice");
        playGame(userChoice);
    })
}) 






































