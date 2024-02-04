import React from 'react'
import classNames from 'classnames'
import { FaBars } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";


const FilterView = ({ setCurrentDisplayType }) => {
    return (
        <div className={classNames('flex', 'justify-end', 'gap-x-1', 'my-4', 'mr-1')}>
            <div className={classNames('border', 'border-blue', 'p-1', 'cursor-pointer')} onClick={() => setCurrentDisplayType('bar')}>
                <FaBars fill='lightblue' />
            </div>
            <div className={classNames('border', 'border-blue', 'p-1', 'cursor-pointer')} onClick={() => setCurrentDisplayType('grid')}>
                <IoGridSharp fill='lightblue' />
            </div>
        </div>
    )
}

export default FilterView
