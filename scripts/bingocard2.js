window.onload = initLoad;
var useNums = new Array(76);
var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4);

function initLoad(){
    if(document.getElementById){
        document.getElementById("reload").onclick = onReloadCard;
        newCards();
    }
    else{
        alert("Sorry, your brower doesn't support this script!");
    }
}

function newCards(){
    for(var i = 0; i < 24; i++){
        setCell(i);
    }
}

function onReloadCard(){
    for(var i = 0; i < useNums.length; i++){
        useNums[i]=false;
    }
    newCards();
    return false;
}

function setCell(iCell){
    var sCell = "cell" + iCell;
    var colBasis = colPlace[iCell] * 15;
    var newNum;

    do{
        newNum = colBasis + genNewNum() + 1;
    }while(useNums[newNum]);

    useNums[newNum] = true;
    var oCell = document.getElementById(sCell);
    oCell.innerHTML = newNum;
    oCell.className = "";
    oCell.onmousedown = toggleColor;
}

function genNewNum(){
    return Math.floor(Math.random() * 15);
}

function toggleColor(evt){
    //alert("toggleColor->!!!!");
    if(evt){
        var oCell = evt.target;
    }
    else{
        var oCell = window.event.srcElement;
    }
    if(oCell.className == ""){
        oCell.className = "pickedBG";
    }
    else{
        oCell.className = "";
    }
}
