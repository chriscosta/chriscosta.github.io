const myHeading = document.querySelector('h1');
myHeading.addEventListener('click', () => {
    alert('Peekaboo!!');
});

// myHeading.textContent = 'Hello world!';

let myVariable;
myVariable = 'Bob';
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/DimNovember.jpg'){
        myImage.setAttribute('src','images/trippy6t.jpg');
    } else {
        myImage.setAttribute('src','images/DimNovember.jpg');
    }
}


function setUserName(){
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `This website will soon be cool, ${myName}`;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `This website will soon be cool, ${storedName}`; 
}

let myButton = document.querySelector('button');
myButton.onclick = () => {
    setUserName();
} 