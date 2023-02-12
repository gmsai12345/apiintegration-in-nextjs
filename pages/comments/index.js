import {useState} from "react"
function index() {
    const [comments,setComments] = useState([]) // this use state is used to show the comments all comments
    const [comment,setComment] = useState('') // this is to add comment so that it can be published in that for update request
    const fetchComments = async () => { // fetch all comments from comments
        const response = await fetch('/api/comments') // wait to fetch all comments
        const data = await response.json(); // response is converted to JSON
        setComments(data) // then comments are displayed
    }
    const submitComment = async () => { // this is for submit comment in the page to be displayed
        const response = await fetch('/api/comments',{method:'POST', // post request we are making
        body: JSON.stringify({comment}), // strings the json thing written
        headers: {'Content-Type': 'application/json'} // mandatory for every post request
    })
    const data = await response.json() // this is converted to json
        
    }
    const deletecomment = async commentId => { // for delete
        const response = await fetch(`/api/comments/${commentId}`,{method:'DELETE'}) // delete request is made to that particular id fetched 
        const data = await response.json() // same
        console.log(data)
        fetchComments() 
    }

  return (
    <div> 
        <input type="text" value={comment} onChange={e => setComment(e.target.value)}></input>
        <button onClick={submitComment}>Submit comment</button>
        <button onClick={fetchComments}>load comments</button>
    {
        comments.map((comment) => {
            return (
                <div>
                <div key={comment.id}>{comment.id} {comment.text}</div>
                <button onClick={() => deletecomment(comment.id)}>delete</button>
            </div>);
        })
    }
   </div>);
}

export default index