import user from "../model/usermodel.js";
export const create =async(req, res)=>{
    try{
        
        let userdata = new user(req.body)
        const{email}=userdata;

        const userExist=await user.findOne({email});

        if(userExist){
            res.status(400).json({error:"user already exist"});
        }
        else{
           const savedata=await userdata.save();
            res.status(200).json({data:savedata});
        }
        
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}

export const fetch =async(req, res)=>{
    try{       
        const users = await user.find();
        if(users.length===0){
            res.status(404).json({error:"user not found"});
        }
        res.status(200).json({data:users});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}
    
export const update =async(req, res)=>{
    try{       
       const id=req.params.id;
       const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({error:"user not found"});
        }    
           const updatedusers = await user.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({data:updatedusers});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}
  
export const deleted =async(req, res)=>{
    try{       
       const id=req.params.id;
       const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({error:"user not found"});
        }    
           const deletedusers = await user.findByIdAndDelete(id);
        res.status(200).json({data:deletedusers});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}
export const findvalue = async(req, res)=>{
    try{
        const id=req.params.id;
        const userExist=await user.findOne({_id:id});
        if(!userExist){
            res.status(404).json({error:"user not found"});
        }    
        res.status(200).json({data:userExist});
    }
    catch{
        res.status(500).json({error:"internal server error"});
    }
}