import { comments } from "../../../data/comment";

export default function handler(req,res){
    const {commentId} = req.query
    res.status(200).json(comments)
    // handle delete request
    if (req.method === 'GET'){ // this is for displaying that particular id when that is done 
        const comment = comments.find(comment => comment.id === parseInt(commentId))

    }
    else if(req.method === 'DELETE'){
         const deletedcomment = comments.find(comment => comment.id === parseInt(commentId)) // finds the commment to be deleted using id
         const index = comments.findIndex((comment) => comment.id === parseInt(commentId)) // finding the index for the comment 
         comments.splice(index, 1) // delete using splice
         res.status(200).json(deletedcomment) 
    }
}