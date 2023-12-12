


function palindrome(event){
    event.preventDefault();
    //This is getting the value of the input 
    let input = document.getElementById("palindrome").value
    // This splits said input into an array 
    let array = input.split("")
    console.log(array)
    //reverse function is used for the arrays
    let reversed = array.reverse()
    console.log(reversed)
    //brings the arrays back into a string
    let joined = reversed.join("")
    //checks to see if the inputs and joined values are "ABBA"
    if((joined == input) && (input != " ")){
        //varification allert 
        alert("Good Job It's a Palindrome :)")
    }
    // try again allert in its not a palindrome 
        else if ((joined != input) && (input != " ")){
            alert("Try Again, Not a Palindrome :( ")
        }
    

} // I refrenced week 6 so that the refresh function would stop 
window.addEventListener("DOMContentLoaded", (event) =>{
    const form = document.getElementById("newForm");
    if(form){
        form.addEventListener("submit", palindrome)
    }
})