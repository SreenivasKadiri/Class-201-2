var user; 
var lovecode;
var whatcode;
var java;
var python;
var visualbasic;

user=prompt('what is your name?');
console.log('user name: ',user);
alert('Hi there '+ user+ 'I\'m goint to ask your a question');
var lovecode = prompt('this is a yes/no question, Please answer with Y or N. Do you love coding?');
console.log('Do you love coding: ', lovecode);
if (lovecode==='Y' || lovecode === 'y') {
    alert('great, i love coding too');
    java = prompt('Do you like Java?');
    console.log('Do you like Java?: ',java.toLowerCase());
    if (java.toLowerCase() === 'y') {
        alert('you like java');
        console.log('you like the Java');
        python=prompt('Do you like Python?');
        if (python.toLowerCase() === 'y') {
            alert('you like python');
        }
        visualbasic = prompt('do you like visual basic');
        if (visualbasic.toLowerCase()=== 'y'){
            alert('you like visualbasic');
        }
    }
    
}else{
    alert('you are in the wrong class');
}
