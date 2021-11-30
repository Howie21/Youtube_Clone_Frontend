import React from 'react';

const RepliesDisplay = (props) => {
    return(
        <div>
            {props.replies.map(reply => {
                if(props.commentId === reply.commentId){
                    return <div>
                        <p>{reply.reply}</p>
                    </div>
                }
            })}

        </div>
    )
} 

export default RepliesDisplay;