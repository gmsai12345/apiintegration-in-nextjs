import { comments } from "../../../data/comment";

export default function handler(req,res){
    const {commentId} = req.query
    res.status(200).json(comments)
    // handle delete request
    if (req.method === 'GET'){
        const comment = comments.find(comment => comment.id === parseInt(commentId))

    }
    else if(req.method === 'DELETE'){
         const deletedcomment = comments.find(comment => comment.id === parseInt(commentId))
         const index = comments.findIndex((comment) => comment.id === parseInt(commentId))
         comments.splice(index, 1)
         res.status(200).json(deletedcomment)
    }
}