let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let div = document.querySelector("div");
div.append(modeBtn);
let currMode = "light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("Dark");
        body.classList.remove("Light");
    }
    else{
        currMode = "light";
        body.classList.add("Light");
        body.classList.remove("Dark");
    }
    console.log(currMode);
});
