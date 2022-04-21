
let userDataList = JSON.parse(localStorage.getItem("userData")) || []



function loginFunc(){

    event.preventDefault()
    
    let username = document.querySelector("#name").value

    let pass = document.querySelector("#password").value

    for(let i=0;i<userDataList.length;i++){
        if(userDataList[i].name == username && userDataList[i].password == pass){
            alert("Login Successful")
            return(window.location.href = "index.html")
            
        }
    
    }
    return alert("Invalid Credentials")
}