window.onload = initAll;

function initAll(){
    document.getElementById("redirect").onclick = onRedirectDo;
}

function onRedirectDo(){
    alert("We are not responsible for the content of pages outside our site.");
    window.location = this;
    return false;
}
