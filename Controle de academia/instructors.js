const fs = require ("fs")
const data = require ("./data.json")

exports.show = function (req,res){
    const {id} =  req.params

    const foundIsntructor = data.instructors.find (function(instructor){
        return instructor.id == id 
    })
    
    if (!foundIsntructor) return res.send("Instrutor não encontrado")

    return res.render("instructors/show",{instructor:foundIsntructor})
}

exports.post = function(req,res){

    const Keys = Object.keys (req.body)

    for(key of Keys){
        if (req.body[key]==""){
            return res.send ("Responda todo os dados")
        }
    }

    let { name,avatar_URL,birth,gender,services,created_at} = req.body

    birth = Date.parse (birth)
    created_at = Date.now()
    id = Number (data.instructors.length)+1
      
    data.instructors.push ({name,avatar_URL,birth,gender,services,created_at,id});

    fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
        if(err) return res.send ("Erro ao salvar o arquivo")
        return res.redirect("/instructors")
    })

    

}