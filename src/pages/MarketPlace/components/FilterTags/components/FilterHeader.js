import React, { useState } from 'react'
import classNames from 'classnames'

const filterList = [
    "Tasks",
]

const FilterHeader = () => {

    const [currentFilter, setCurrentFilter] = useState(filterList[0])

    return (
        <div className={classNames('flex', 'flex-col', 'gap-y-1')}>
            <div className={classNames("flex", "gap-x-2")}>
                {
                    filterList.map((filter, index) => {
                        return <div className={classNames("text-secondary", "py-1", "px-2", 'border-secondary', 'border', "rounded", "cursor-pointer")}
                            key={index}
                        >
                            {filter}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default FilterHeader