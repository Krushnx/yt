import React, { useState } from 'react';
function CommentTable(props)
{
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 7; // Number of comments per page
    
    const colorCode = {
        "positive": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Eo_circle_green_blank.svg/512px-Eo_circle_green_blank.svg.png?20200417132254",
        "negative": "https://www.pngall.com/wp-content/uploads/13/Red-Circle.png",
        "neutral": "https://upload.wikimedia.org/wikipedia/commons/b/be/Yellow_Circle.png"
    }

    // Calculate total number of comments
    const totalComments = props.shuffledComments.length;

    // Calculate total number of pages
    const totalPages = Math.ceil(totalComments / commentsPerPage);

    // Get comments for the current page
    const startIndex = (currentPage - 1) * commentsPerPage;
    const endIndex = startIndex + commentsPerPage;
    const currentComments = props.shuffledComments.slice(startIndex, endIndex);

    return(
        <div>
            <div className="comment-view">
                <table className="comment-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th></th>
                            <th style={{borderLeft:'1px dashed white'}}>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentComments.map(({ type, comment }, index) => (
                            <tr key={index}>
                                <td><img className="cc" src={colorCode[type]} alt="error" style={{ width: '20px', height: '20px' }} /></td>
                                <td>{type}</td>
                                <td>{comment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                </div>
                </div>
        </div>
    );
}
export default CommentTable;