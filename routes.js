    const express = require ('express')
    const routes = express.Router()
    const instructors = require ('./instructors')


    routes.get ('/',function(req,res){
        return res.render ("layout")
    })

    routes.get ('/instructors',function(req,res){
        return res.render ("instructors/index")
    })

    routes.get ('/instructors/create',function(req,res){
        return res.render ("instructors/create")
    })

    routes.put("/instructors",instructors.put)

    routes.get('/:id/edit',instructors.editNow)
    routes.get('/instructors/:id',instructors.show)
    routes.post ("/instructors", instructors.post)
    
    routes.delete ("/instructors", instructors.delete)

    module.exports = routes
