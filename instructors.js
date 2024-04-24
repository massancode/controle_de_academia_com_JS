

exports.post = function(req,res){
       
    const Keys = Object.keys (req.body) // O Objeto cria um array com as chaves do obejto

       for (key of Keys ){
         if (req.body[key] == ""){ //verifica de vazio o preenchimento dos campos do form
         return res.send ("preencha todos os campos")
     }
       }

    return res.send (req.body)
}