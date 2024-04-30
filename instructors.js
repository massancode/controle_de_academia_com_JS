const fs = require ('fs')
const data = require ('./data.json')

//show
 exports.show = function (req,res){
             
  const {id} = req.params 

  const  foundInstructor = data.instructors.find (function(instructor){
    return  id == instructor.id 
  })

  if (!foundInstructor) return res.send ("Instructor not found")
  
  return res.render ("instructors/show",{instructor: foundInstructor})

  
}

 //create 
exports.post = function(req,res){
       
    const Keys = Object.keys (req.body) // O Objeto cria um array com as chaves do obejto

     
       for (key of Keys ){
         if (req.body[key] == ""){ //verifica de vazio o preenchimento dos campos do form
         return res.send ("preencha todos os campos")
     }
       }
      let {name,avatar_url,birth,gender,services} = req.body

       birth = Date.parse(birth)
       const created_at = Date.now()
       const id = Number (data.instructors.length + 1) 
       

       
       data.instructors.push({
        id,
        name,
        avatar_url,
        birth,
        gender,
        services,
        created_at})

       fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if (err) return res.send ("write file error")
        return res.redirect ("/instructors")
       })

    //return res.send (req.body)
    
}