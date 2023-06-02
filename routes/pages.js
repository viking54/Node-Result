const express = require("express");
const router = express.Router();
const loggedIn = require("../Controllers/loggedIn")


router.get("/studentview",loggedIn, (req, res) => {
    if(req.user)
    {
    res.render("studentview.ejs",  { root: './views/' }, {status:"LoggendIn",user:req.user }   );
    }
    else{
        res.render("studentview.ejs", { root: './views/' },{status:"no",user:"nothing"});
    }
    
});
router.get('/', (req, res) => {
    res.sendFile("login.html" , { root: './public/' })
});
router.get('/register', (req, res) => {
    res.sendFile("register.html", { root: './public/' })
});

router.get('/loginTeachers', (req, res) => {
    res.sendFile("loginTeachers.html", { root: './public/' })

});

module.exports = router;