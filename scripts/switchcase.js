window.onload = initAll;

function initAll(){
    document.getElementById("Lincoln").onclick = doSwitch;
    document.getElementById("Kennedy").onclick = doSwitch;
    document.getElementById("Nixon").onclick = doSwitch;
    document.getElementById("Losi").onclick = doSwitch;
}

function doSwitch(){
    switch(this.id){
        case "Lincoln":
            alert("Four score and seven years ago......");
            break;
        case "Kennedy":
            alert("Ask not what your country can do for you......");
            break;
        case "Nixon":
            alert("I am not crook!");
            break;
        default:
            alert("no do case!");
    }
}
