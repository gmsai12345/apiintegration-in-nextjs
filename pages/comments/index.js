import {useState} from "react"
function index() {
    const [comments,setComments] = useState([]) // this use state is used to show the comments all comments
    const [comment,setComment] = useState('') // this is to add
    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json();
        setComments(data)
    }
    const submitComment = async () => {
        const response = await fetch('/api/comments',{method:'POST',
        body: JSON.stringify({comment}),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
        
    }
    const deletecomment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`,{method:'DELETE'})
        const data = await response.json()
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