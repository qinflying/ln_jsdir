window.onload = initBingoCard;

var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
var useNums = new Array(76);
function initBingoCard(){
    document.getElementById("reload").onclick = ReloadCard;
    NewCard();
}

function NewCard(){
    for(var i = 0; i < 24; i++){
        SetNewNum(i);
    }
}

function ReloadCard(){
    ClearBook();
    NewCard();
    return false;
}

function ClearBook(){
    for(var i = 0; i < useNums.length; i++){
        useNums[i]=false;
    }
}

function SetNewNum(i){
    var colBasis = colPlace[i] * 15;
    var newNum;
    do{
       newNum =  colBasis + Math.floor(Math.random() * 15) + 1;
    }while(useNums[newNum]);
    
    useNums[newNum] = true;
    document.getElementById("cell"+i).innerHTML = newNum;
   
}

function randomNewNum(){
    return Math.floor(Math.random() * 15) + 1;
}
