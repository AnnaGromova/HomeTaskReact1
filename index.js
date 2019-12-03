const name = "Anna";
const friendNames = ["Sally", "Peter"];
const friendYears = [12, 15];
const myLink1 = "https://vk.com/id95836019";

[].forEach.call(
    document.getElementsByClassName("name"),
    element => {
        element.innerHTML = name;
    });

let i = 0;
[].forEach.call(
    document.getElementsByClassName("friend-name"),
    element => {
        element.innerHTML = friendNames[i];
        i++;
    });

let j = 0;
[].forEach.call(
    document.getElementsByClassName("friend-years"),
    element => {
        element.innerHTML = friendYears[j];
        j++;
    });

[].forEach.call(
    document.getElementsByClassName("vk-link"),
    element => {
        element.href = myLink1;
    });
