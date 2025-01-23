console.log('this is separate js file');


//directloe set onclick html element 


// option 2 onclick funtion add events
function makeRed() {
 document.body.style.backgroundColor='red'; }
 

 // option 3 onclick id and funtion add events

const makeBlueButton= document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
document.body.style.backgroundColor='Blue';}    


//option 4 id onclick and funtion oneline add event 
const makePurple=document.getElementById('make-purple');
makePurple.onclick = function makePurple (){
document.body.style.backgroundColor = 'purple'
}

// option 4 add eventlistener 
const pinkButton = document.getElementById('make-pink');
     pinkButton.addEventListener('click', makePink)
     function makePink (){
                    document.body.style.backgroundColor='pink'
     }


     //option 4 another 
     const greenButton= document.getElementById('make-green');
     greenButton.addEventListener('click', function makeGreen(){
document.body.style.backgroundColor='green';
     })

     //option 4 final
//      document.getElementById('make-goldenrod').addEventListener('click',function(){})
document.getElementById('make-goldenrod').addEventListener('click', function(){
                    document.body.style.backgroundColor='goldenrod'
})