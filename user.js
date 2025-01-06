const express=require('express');
let router=express.Router();


router.get("/user",(req,res)=>{
    res.send("user information");

});

router.get("/user/newuser:",(req,res)=>{
    res.send("Newuser added");
    

});

router.post("/createUser:",(req,res)=>{
    res.send("Add Newuser added");

});    

router
    .route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
        res.send("retrieve id value"+req.params.id);
    })

    .put((req,res)=>{
        res.send("update id value"+req.params.id);
    })

    .delete((req,res)=>{
        res.send("delete id value"+req.params.id);
    })

const users=[{name:"raja"},{name:"rani"},{name:"sepoy"}];    

router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];
    next();

})




/* router.get('/:id',(req,res)=>{
    res.send("id value" +req.params.id);

});

router.put('/:id',(req,res)=>{
    res.send("update this id value" +req.params.id);

});

router.delete('/:id',(req,res)=>{
    res.send("delete this id value" +req.params.id);

});
 */

module.exports=router;

