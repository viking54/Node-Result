const { setRandomFallback } = require("bcryptjs")

form.addEventListener("submit", () => 
{
    const login ={
        email: email.value,
        password:passowrd.value
    }
    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(login),
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