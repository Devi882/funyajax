let myImage = document.querySelector(`img`);
myImage.onclick = function() {
    
    let mySrc = myImage.getAttribute(`src`);
    let myClass = myImage.getAttribute(`class`)
    if (myClass === `2`) {
        if (mySrc === `images/ajax.png`) {
            myImage.setAttribute(`src`, "images/hot weels.png");
        }
        else {
            myImage.setAttribute(`src`, "images/ajax.png");
        }
    }
    }
let myButton = document.querySelector(`button`);
let myHeading = document.querySelector(`h1`);
function setUserName() {
    let myName = prompt(`Please enter your name.`);
    localStorage.setItem(`name`, myName);
    myHeading.textContent = `Ajax!!! ` + myName;
}
if(!localStorage.getItem(`name`)) {
    setUserName();
}
else {
    let storedName = localStorage.getItem(`name`);
    myHeading.textContent = `Ajax!!! ` + storedName;
}
myButton.onclick = function() {
    setUserName();
}
