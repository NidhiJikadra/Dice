const roll = () => {
    let rolled = Math.floor(Math.random() * 6) + 1;
    document.getElementById("number").innerHTML = "Your number is " + rolled
}

document.querySelector("button").addEventListener("click", roll)