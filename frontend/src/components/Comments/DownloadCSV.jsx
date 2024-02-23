import React from 'react';

function CsvDown(props) {
    const data = props.data;
 const downloadCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,Label,Comment\n";
        
        // Iterate over each label
        Object.entries(data.Result_Comments).forEach(([label, comments]) => {
            // Iterate over each comment for the label
            comments.forEach(comment => {
                // If the comment contains a double quote, escape it by doubling it
                comment = comment.replace(/"/g, '""');
                // Enclose the comment within double quotes to preserve spaces and commas
                csvContent += `${label},"${comment}"\n`;
            });
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "data.csv");
        document.body.appendChild(link);
        link.click();
    };



    return (
        <div style={{display:'flex' , justifyContent:'center' , margin:"40px"}}>
            <button className='downbtn' onClick={downloadCSV}>Download CSV</button>
        </div>
    );
}

export default CsvDown;
