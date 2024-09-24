import React from "react";
import Skeleton from "react-loading-skeleton";

function LoadingTodos() {
    return(
       <div><Skeleton width={200} height={50}  /></div> 
    )
}

export { LoadingTodos }