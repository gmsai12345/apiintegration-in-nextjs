import { comments } from "../../../data/comment";

export default function handler(req,res){
    if(req.method == "GET"){ // method get no need sennds back

    }
    else if(req.method == "POST"){ // for post request 
       const comment = req.body.comment; // new variable comment is create to get the comment from the user submitted
       const newComment = {
        id:Date.now(),
        text: comment
       }
       comments.push(newComment); // new comment must have been pushed with data = newcomment 
       res.status(201).send(newComment); // response is ent it is same req = comming data from client side, res = what data we are giving to client side
    }
    res.status(200).json(comments) 
}