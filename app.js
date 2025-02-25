//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг -0 2-р тоглогчийг 1 гэж тэмдэглэе 
var activePlayer = 1;

//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0,0];

//тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны алтщь талаараа буусныг хадгалах хувьсагч, санамсаргүй 1-6
// var diceNumber = Math.floor(Math.random()*6)+1;

{/* <div class="player-score" id="score-0">43</div> */}
// window.document.querySelector('#score-0').textContent = diceNumber;
// window.document.querySelector('#score-1').textContent = diceNumber;
// window.document.querySelector('#score-1').innerHTML = "<em>YES!<em>"
{/* <img src="dice-3.png" alt="Dice" class="dice"></img> */}
// console.log('Шоо : ' + dice );
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;


// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", 
    function (){
        var diceNumber = Math.floor(Math.random()*6)+1;
        diceDom.style.display = "block";
        diceDom.src = 'dice-' + diceNumber + '.png';
        // alert("Шоог шидлээ: " + diceNumber);
    }
 );
