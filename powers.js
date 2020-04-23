document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

document.querySelector("#activate-mindreading").addEventListener("click", mindreadingFunction)

document.querySelector("#activate-xray").addEventListener("click", xrayFunction)

let powers = document.getElementsByClassName("power")

document.querySelector("#activate-all").addEventListener("click", () => {
    for (let i =0; i < powers.length; i++) {
        console.log(i)
        if (powers[i].classList.contains("disabled")) {
            powers[i].classList.toggle("enabled")
            powers[i].classList.toggle("disabled")
        }
    }
})
document.querySelector("#deactivate-all").addEventListener("click", () => {
    for (let i =0; i < powers.length; i++) {
        if (powers[i].classList.contains("enabled")) {
            powers[i].classList.toggle("enabled")
            powers[i].classList.toggle("disabled")
        }
    }
})



function flightHandlerFunction() {
    document.getElementById("flight").classList.toggle("enabled")
    document.getElementById("flight").classList.toggle("disabled")
}
function mindreadingFunction() {
    document.getElementById("mindreading").classList.toggle("enabled")
    document.getElementById("mindreading").classList.toggle("disabled")
}
function xrayFunction() {
    document.getElementById("xray").classList.toggle("enabled")
    document.getElementById("xray").classList.toggle("disabled")
}

