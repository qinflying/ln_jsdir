window.onload = doError;

function doError(){
    var ans = prompt("Calculate sqrt by enter number", "");
    try{
        if(!ans || isNaN(ans) || ans < 0){
            throw new Error("Not a valid number!");
        }
        alert("The square root of " + ans + " is " + Math.sqrt(ans));
    }
    catch(errMsg){
        alert(errMsg.message);
    }
}
