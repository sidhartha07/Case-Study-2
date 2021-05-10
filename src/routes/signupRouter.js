const express = require('express');
const signupRouter = express.Router();

function router(nav){
    signupRouter.get('/', function(req,res){
        res.render("signup",
        {
            nav,
            title:'SignUp'
        });
    });

    signupRouter.post("/post",function(req,res){
        res.render("/login",
        {
            nav,
            // title:"Library",
            signup
        });
    });

    return signupRouter;
}

module.exports = router;