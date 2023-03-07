function alertMe() {
    let name = prompt("Enter your name here: ")
    while (!name) {
        alert("Please enter your name")
        name = prompt("Enter your name here: ");
    }
    return alert(`Hello ${name}! Welcome to my page`);
}

const btn = document.querySelector("button")

btn.addEventListener("click", alertMe);