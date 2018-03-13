// var myHeading = document.querySelector('a');
// myHeading.innerHTML = 'Hello world!';

// document.querySelector('img').onclick = function() {
//     alert('Saber!')
// }

const myImage = document.querySelector('img');

document.querySelector('button').onclick = function() {
    const imgSrc = myImage.getAttribute('src');
    const imgPath = 'images/'
    let imgName = GetFileName(imgSrc);
    // alert(imgName);

    if(imgName == 'saber') {
        myImage.setAttribute('src', imgPath + '1.jpg');
        // alert(document.querySelector('img').getAttribute('src'));
    } else if(parseInt(imgName) < 10) {
        imgName = parseInt(imgName) + 1;
        // alert(imgName);
        myImage.setAttribute('src', imgPath + imgName + '.jpg');
    } else {
        myImage.setAttribute('src', imgPath + 'saber' + '.jpg');
    };
};

function GetFileName(filePath) {
    // alert(filePath.split('/'));
    const pos = filePath.split('/');
    // alert(pos[1]);
    const nameArray = pos[1].split('.')
    const name = nameArray[0];
    // alert(name);
    return name;
};

var myButton = document.querySelector('#changeUser');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
};

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
};

myButton.onclick = function() {
    setUserName();
};