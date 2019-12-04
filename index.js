const myLink1 = "";

let counter = 0;
const counterElement = document.querySelector("#stopwatch1");

function updateCounter() {
    counter += 1;
    counterElement.innerHTML = counter;
}

setInterval(updateCounter, 1000);

[].forEach.call(
    document.getElementsByClassName("vk-link"),
    element => {
        element.href = myLink1;
    });
