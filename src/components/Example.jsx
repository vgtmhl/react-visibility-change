import React from 'react'

const Example = ({ innerRef }) => {
    return (
        <div className="example" ref={innerRef}>Example</div>
    )
}

export default Example