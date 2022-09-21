import React from "react";
import PropTypes from "prop-types";

const Message =({name,age})=>{
    return(
        <div>
            Привет {name} тебе {age} лет.
        </div>
    )

    Message.propTypes={
        name: PropTypes.string,
        age: PropTypes.number
    }
}


export default Message;