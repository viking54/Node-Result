const bcrypt = require("bcryptjs");
const { response } = require("express");
const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");

 const login = async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({status:"error" , error:"PLease provide corect email and password"});
        }
        else{
            db.query('SELECT * FROM users WHERE email = ?', [email], async (Err, results) => {
                if (Err) throw Err
                if (!results.length || !await bcrypt.compare(password,results[0].password)) 
              
                   
                 else {
                    const id = results[0].id;
    
                    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                        expiresIn:process.env.JWT_EXPIRES
                       
                    })
                   
                    const cookieOptions ={
                        expiresIn:new Date(Date.now()+process.env.COOKIE_EXPIRES *24 *60 *60 * 1000),
                       
                    }
                    res.cookie("userRegistered" , token,cookieOptions);
                    return res.json({status:"success" , success:"User logged in"});
                   
        }
       

            

                
        
            
        })
        }
}

module.exports=login;