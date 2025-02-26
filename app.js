//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг -0, 2-р тоглогчийг 1 гэж тэмдэглэе 
var activePlayer = 0;

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

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Шоог шидэх eventListener
document.querySelector(".btn-roll").addEventListener("click", 
    function (){
        //1-6 санамсаргүй тоог гаргаж авна
        var diceNumber = Math.floor(Math.random()*6)+1;
        
        //шооны зургийг веб дээр гаргаж ирнэ.
        diceDom.style.display = "block";
        
        //Буусан санарсаргүй тоонд харгалзах шооны зургийг веб дээр гаргах
        diceDom.src = 'dice-' + diceNumber + '.png';

        // Буусан тоо нь 1-ээс ялгаатай бол идэвхитэй тоглогчийн оноог нэмэгдүүлнэ.
        if (diceNumber !==1){
            // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else{
            // 1 буусан бол тоглогчийн ээлжийг энэ хэсэгт сольж өгнө
            
            // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно. 
            roundScore = 0;
            document.getElementById("current-" + activePlayer).textContent = 0;
   
            // Хэрэв идэвхитэй тоглогч 0 байвал идэхитэй тоглогчийг 1 болго
            // Хэрэв идэвхитэй тоглогч 1 байвал идэхитэй тоглогчийг 0 болго
            // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлж байна
            activePlayer ===0 ? (activePlayer=1) : (activePlayer =0);

            //Улаан цэгийг шилжүүлэх
            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            //Шоог түр алга болгоно
            diceDom.style.display = "none";
        }
    }
 );
