/* JavaScript code*/
//accessing the button by id (#mode).
let modeBtn = document.querySelector("#mode");
// Accessing the body element
let body = document.querySelector("body");
// Accessing the <div> element
let div = document.querySelector("div");
div.append(modeBtn);    // Adjusting the botton at the bottom of the <div> by using append mode.
let currMode = "light";

// Adding event Handler fuction for click envent.
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
    console.log(currMode);    //displays the state of mode ( Ligth/Dark ).
});
