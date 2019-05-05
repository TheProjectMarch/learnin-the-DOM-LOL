/* const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const listItems = document.getElementsByTagName('li')[3];

myButton.addEventListener('click', () => {
    let color = myTextInput.value;
    
    if (!myHeading.className){
        myHeading.style.color = color;
        myHeading.className = `now${color}`;
    } else {
        myHeading.removeAttribute('style');
        myHeading.removeAttribute('class');
    }
});

console.log(listItems); */

//color = prompt('what color you want?');

/* for (let i = 0; i < listItems.length; i++){

    listItems[i].style.background = `${color}`
    if (i === 2){
        listItems[i].style.background = "blue"
    }
    console.log(listItems[i]);
} */ 

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++){
    myList[i].style.color = 'green';
}


