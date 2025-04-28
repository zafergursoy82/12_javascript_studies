
var bulbStatus = "Off";


document.getElementById("openCloseButton").addEventListener("click", function() {
    if(bulbStatus === "Off"){
        document.querySelector("#bulb").setAttribute("src","./bulb_on.png");
        document.getElementById("statusText").innerHTML = "On";
        bulbStatus = document.getElementById("statusText").innerHTML;
        document.getElementById("openCloseButton").innerHTML = "Turn off the Light";
        document.getElementById("openCloseButton").setAttribute("class","btn btn-secondary");
    } else {
        document.querySelector("#bulb").setAttribute("src","./bulb_off.png");
        document.getElementById("statusText").innerHTML = "Off";
        bulbStatus = document.getElementById("statusText").innerHTML;
        document.getElementById("openCloseButton").innerHTML = "Turn on the Light";
        document.getElementById("openCloseButton").setAttribute("class","btn btn-primary");
    }
});





// var statustext = document.getElementById("status").innerHTML;

// if (statustext === "closed") {
//     document.querySelector("#openCloseButton").addEventListener("click",turnOnTheLight);
// } else {
//     document.querySelector("#openCloseButton").addEventListener("click",turnOffTheLight);
// }



// function turnOnTheLight() {
//     document.querySelector("#bulb").setAttribute("src","./bulb_on.png");
//     document.getElementById("status").innerHTML = "opened";
//     document.querySelector("#openCloseButton").addEventListener("click",turnOffTheLight);
// }

// function turnOffTheLight() {
//     document.querySelector("#bulb").setAttribute("src","./bulb_off.png");
//     document.getElementById("status").innerHTML = "closed";
//     document.querySelector("#openCloseButton").addEventListener("click",turnOnTheLight);
// }