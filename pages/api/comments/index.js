import { comments } from "../../../data/comment";

export default function handler(req,res){
    if(req.method == "GET"){

    }
    else if(req.method == "POST"){
       const comment = req.body.comment; 
       const newComment = {
        id:Date.now(),
        text: comment
       }
       comments.push(newComment);
       res.status(201).send(newComment);
    }
    res.status(200).json(comments)
}