export const signup = async(req,res) =>{
  const {fullname ,email,password} = req.body;
 try{
if(!fullname || !email || !password){
    return res.status (400).json ({MessageChannel:"all fileds are required"})
}
if(password.length < 6){
    return res.status (400).json ({MessageChannel: "password must be at least 6 characters long"})
}
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
if(!emailRegex.test(email)){
    return res.status (400).json ({MessageChannel:"invalid email format"});
}


const user
 }catch(error){

 }






}