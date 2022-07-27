const Post = require('../models/Post')
const User = require('../models/User')

module.exports = class PostController{
    static async showPost(req,res){
        res.render('post/forum')
    }

    static async forum(req,res){
        res.render('post/forum')
    }

    static createPost(req, res){
        res.render('post/create')
    }

    static async createPostSave(req,res){
        
        const posts = {
            conteudo: req.body.conteudo,
            userId: req.session.userid
        }

        

        
        
        try{
            await Post.create(posts)

            req.flash('message','Post realizado com sucesso!')

            req.session.save(()=>{
                res.redirect('/post/forum')
            })
        }catch(error){
            console.log(error)
        }
    }
}
