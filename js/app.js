//login card funtionality
//login card funtionality
//login card funtionality


let  buttonClick = document.querySelector(".login")
let activePage  = document.querySelector(".main-input")

buttonClick.addEventListener("click",()=>{
    activePage.classList.toggle("main-input-active")
    console.log("work");
});


let iconClick=document.querySelector(".fa-circle-xmark")


iconClick.addEventListener("click",()=>{
    activePage.classList.toggle("main-input-active")
    email.value='' 
    password.value=''
    
})

//login validation
//login validation
//login validation

let  email = document.getElementById("email") 
let  password = document.getElementById("pass") 
// let anyError = document.getElementById("error")

function getLogin(){
    

     if(email.value == "sheraz" && password.value==123){
        document.write("login")
    }
     else(
         document.write("not login")
     )
    
};





