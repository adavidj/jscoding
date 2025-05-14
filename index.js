// // 
function estPalindrome(mot){

    //Inverser un mot
    let motInverse = mot.split('').reverse().join('');

    return mot === motInverse;
}

function verifierPalindrome(){
    let mot = prompt("Entrer un mot: ");
    
    if(estPalindrome(mot)){
        alert(`"${mot}" est un palindrome`)
    }
    else{
        alert(`"${mot}" est un palindrome`)
    }
}

verifierPalindrome();


// document.write('Hello World!<br>JavaScript is awesome.');

// alert('Hello World!');
// confirm('Hello World!');

// var proceed = confirm('Do you want to proceed');

// var proceed = true;

//  var age = prompt('What ur age ?');
//  document.write('You are ' + age + ' years old');

// var x = '-50.6';
// console.log(Number(x));

// document.write(Number('10'));

// var isRaining = true ;

// if(isRaining) {
//     alert("Don't forget umbrella");
// }

// var num = Number(prompt('Enter a number greater than 10'));

// if (num <= 10) {
//    alert('Invalid input');
// }   
// else {
//     alert(num);
// }

// function reusableFunction(a, b){
//     console.log(a+b);
// }

// reusableFunction(5, 2);

 