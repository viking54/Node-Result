const { application } = require("express")


form.addEventListener('submit', () => 
{
    const register ={
        name : naame.value,
        email: email.value,
        password:password.value
    }
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers:{
            "Content-Type": "application/json"
        }
    }).then(res=>res.json())
    .then(data=>{
        if(data.status=="error")
        {
           
            
            
            alert(data.error)
        }
        else
        {
           
           
        
        }
    })
})