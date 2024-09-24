import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


function LoadingTodos() {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', width: '100%', height: 'auto', marginTop: '20px'}}>
            <li className="todo">
            {/* Skeleton para el texto */}
            <p><Skeleton width={150} /></p>
            
            {/* Skeleton para los íconos de check y delete */}
            <div style={{ display: "flex", gap: "10px" }}>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
            </div>
            </li>
            <li className="todo">
            {/* Skeleton para el texto */}
            <p><Skeleton width={150} /></p>
            
            {/* Skeleton para los íconos de check y delete */}
            <div style={{ display: "flex", gap: "10px" }}>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
            </div>
            </li>
            <li className="todo">
            {/* Skeleton para el texto */}
            <p><Skeleton width={150} /></p>
            
            {/* Skeleton para los íconos de check y delete */}
            <div style={{ display: "flex", gap: "10px" }}>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
            </div>
            </li>
            <li className="todo">
            {/* Skeleton para el texto */}
            <p><Skeleton width={150} /></p>
            
            {/* Skeleton para los íconos de check y delete */}
            <div style={{ display: "flex", gap: "10px" }}>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
                <span>
                    <Skeleton circle={true} height={24} width={24} />
                </span>
            </div>
            </li>
        </div>
    )
}

export { LoadingTodos }