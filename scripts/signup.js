
let signUp = document.querySelector("form").addEventListener("submit",signupFunc)

function createobject(u,n,e,p){
    this.name = u,
    this.number = n,
    this.email = e,
    this.password = p
}

let userDataList = JSON.parse(localStorage.getItem("userData")) || []

function signupFunc(){

    event.preventDefault()

    let userName = document.querySelector("#name").value

    let number = document.querySelector("#mobile").value

    let email = document.querySelector("#email").value

    let password = document.querySelector("#password").value

    let userObj =  new createobject(userName,number,email,password)

    if(userObj.name == "" || userObj.number== "" || userObj.email== "" || userObj.password== ""){
        alert("Details Not Entered")
    }
    else{
        userDataList.push(userObj)

        localStorage.setItem("userData",JSON.stringify(userDataList))
    }

    
    
}