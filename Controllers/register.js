// const mysql = require("mysql");
const bcrypt = require("bcryptjs")

const { promisify } = require("util");
const db = require("../routes/db-config");

const register = async (req, res) => {
    console.log(req.body);
    const { name,email, password:Npassword} = req.body;
    console.log(name);
    console.log(email);
    db.query('SELECT email from users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if(result[0]) return res.json({status:"error" , error : "The email is already in use"})
        else {
            const password = await bcrypt.hash(Npassword,8);
            console.log(password);
            db.query('INSERT INTO users SET ?', { name: name, email: email, password: password }, (error, results) => {
                if (error) throw error;
               
                    return res.json({status:"success" , success : "User Registered"})
                    
                
            })
        }

       

       
    })
   
}
module.exports=register;



// exports.isLoggedIn = async (req, res, next) => {
//     if (req.cookies.userSave) {
//         try {
//             // 1. Verify the token
//             const decoded = await promisify(jwt.verify)(req.cookies.userSave,
//                 process.env.JWT_SECRET
//             );
//             console.log(decoded);

//             // 2. Check if the user still exist
//             db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, results) => {
//                 console.log(results);
//                 if (!results) {
//                     return next();
//                 }
//                 req.user = results[0];
//                 return next();
//             });
//         } catch (err) {
//             console.log(err)
//             return next();
//         }
//     } else {
//         next();
//     }
// }
// exports.logout = (req, res) => {
//     res.cookie('userSave', 'logout', {
//         expires: new Date(Date.now() + 2 * 1000),
//         httpOnly: true
//     });
//     res.status(200).redirect("/");
// }