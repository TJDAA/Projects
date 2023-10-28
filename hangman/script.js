const randomWords=["that","amir","tjd","mistake","truth","lol","wow","omg","best"];
let randomItem="";
let clicked=[];
let result="";
let mistake=0;
//random word selector
function selectRandom(){
    randomItem=randomWords[Math.floor(Math.random()*randomWords.length)];
    document.getElementById("letters").addEventListener("click",buttonHandler);
    window.addEventListener("keydown",keyHandler);
    console.log(randomItem);
}
//underscore updator
function setUnderScore(){
    let splitedWord=randomItem.split("");
    let mappedWord=splitedWord.map(letter=> clicked.indexOf(letter)>=0 ? letter: "_")
    result=mappedWord.join("");
    document.getElementById("clue").innerHTML=`<p>${result}</p>`
}
//baraye bordane player
function checkIfWon(){
    if(randomItem===result){
        document.getElementById("gameover").querySelector("p").style.display="block";
        document.getElementById("image").querySelector("img").src="images/winner.png"
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
}
//baraye bakhtane player
    function checkIfLost(){
        if(mistake===6){        
            
            document.getElementById("gameover").querySelector("p").style.display="block";
            document.getElementById("clue").innerHTML=`<p>Randow word is ${randomItem}`;


    }
}
//update shodane aks baed az zadane dokme eshtebah
function updatePicture(){
    let image=document.getElementById("image").querySelector("img");
    image.src=`images/hangman${mistake}.png`;
}
//push kardane letter dakhele arraye clicked
//use kardane button ha
function letterHandler(letter){
letter=letter.toLowerCase();
clicked.indexOf(letter)===-1 ? clicked.push(letter): null;
document.getElementById(letter.toUpperCase()).className="used";
//dar soorati ke bebare
if(randomItem.indexOf(letter)>=0){
    setUnderScore()
    checkIfWon()
    
}//dar soorati ke bebaze
else if(randomItem.indexOf(letter)===-1){
mistake++;
updatePicture()
checkIfLost()


}

}
//evente click kardan
function buttonHandler(event){
    letterHandler(event.target.id)
}

//event select krdn az keyboard
function keyHandler(event){
    letterHandler(event.key);
}






















selectRandom();
setUnderScore();