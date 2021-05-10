const express = require('express');
const loginRouter = express.Router();

function router(nav){
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            title:'Login',
        }
        );
    });

    loginRouter.post("/post",function(req,res){
        res.render("/index",
        {
            nav,
            // title:"Library",
            login
        });
    });

    return loginRouter;
}

module.exports = router;