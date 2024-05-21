import React from 'react'
import "./skeleton.scss"
const SkeletonLoader = ({ height }) => {
    return (
        <div className='skeleton' style={{ height: `${height}px` }}>
        </div>
    )
}

export default SkeletonLoader
