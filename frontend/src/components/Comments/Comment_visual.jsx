import BarPlot from '../Home/BarPlot';
import Piechart from '../Home/PieChart';
import CsvDown from './DownloadCSV';
import './comments.css'
import React, { useState, useEffect } from 'react';

function CommentView(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 7; // Number of comments per page
    const [shuffledComments, setShuffledComments] = useState([]);

    const colorCode = {
        "positive": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Eo_circle_green_blank.svg/512px-Eo_circle_green_blank.svg.png?20200417132254",
        "negative": "https://www.pngall.com/wp-content/uploads/13/Red-Circle.png",
        "neutral": "https://upload.wikimedia.org/wikipedia/commons/b/be/Yellow_Circle.png"
    }

    const data = props.data;
    console.log("CMRT" , data);
    const chartpass = {"negative" : data.Result_Comments.negative.length  ,  "neutral" : data.Result_Comments.neutral.length,"positive":data.Result_Comments.positive.length }
    useEffect(() => {
        // Flatten the comments array and shuffle it
        const comments = Object.entries(data.Result_Comments).reduce((acc, [type, comments]) => {
            return acc.concat(comments.map(comment => ({ type, comment })));
        }, []);

        // Shuffle the comments array using Fisher-Yates algorithm
        const shuffledArray = [...comments];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        setShuffledComments(shuffledArray);
    }, []);

    // Calculate total number of comments
    const totalComments = shuffledComments.length;

    // Calculate total number of pages
    const totalPages = Math.ceil(totalComments / commentsPerPage);

    // Get comments for the current page
    const startIndex = (currentPage - 1) * commentsPerPage;
    const endIndex = startIndex + commentsPerPage;
    const currentComments = shuffledComments.slice(startIndex, endIndex);

    return (
        <div>
        <h2 style={{ textAlign: 'center', margin: '20px' }}>Comment Analysis of video</h2>
             <div className="plots">
<BarPlot mydata={chartpass} />
<Piechart mydata={chartpass} /> 
</div>

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
                        {/*  <div>
                                <CsvDown data={data}/>
                            </div>*/}
        </div>
    );
}

export default CommentView;
