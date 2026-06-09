import React from "react";

const ShowCount = ({ count }) => {
    console.log("rerender count component");
    return <div>Count {count}</div>
};

export default ShowCount;