import React, { useState } from 'react';
import CommentTable from './commentsTable';
import '../Home/Home.css'

function Keyword(props)
{

  const [val, setval] = useState("");
const [isLoading, setIsLoading] = useState(false);

const handleInputChange = (event) => {
    // Call the setter function to update the state
    setval(event.target.value);
    console.log(val);
 };
  

  const handleAnalyzeClick =() =>
  {
    alert("Hii");
  }
    // Assuming your array of comments is named 'comments'
const comments = props.comm;
const keyword = val; // Keyword to search

// Filter comments based on the keyword
const filteredComments = comments.filter(comment => comment.comment.toLowerCase().includes(keyword));

// Sort the filtered comments by type (positive, negative, neutral)
// filteredComments.sort((a, b) => {
//     const typeOrder = { positive: 1, neutral: 2, negative: 3 };
//     return typeOrder[a.type] - typeOrder[b.type];
// });

// Get the top 7 comments
const top7Comments = filteredComments.slice(0, 7);

console.log(top7Comments);


    return(
        <div>

            <h2 style={{ textAlign: 'center', margin: '20px' }}>Keyword based comments</h2>
            <div style={{ display: 'flex', marginTop: "50px" , justifyContent:"center"}}>
            <input type="text" placeholder='Enter Your keyword' value={val} onChange={handleInputChange} className='custominp'/>
           

          </div>
          {val &&   <CommentTable shuffledComments = {top7Comments} />   }
        </div>
    );
}
export default Keyword;