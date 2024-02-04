import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import FilterHeader from './components/FilterHeader'

const filterTags = [
    "Supervised Learning",
    "Unsupervised Learning",
    "Reinforcement Learning",
    "Natural Language Processing",
    "Ensemble Models",
    "Clustering Models",
]

const FilterTags = (props) => {

    const { setModelsData, stateData } = props
    const [currentFilterTag, setCurrentFilterTag] = useState(null)

    //Using id for filtering would be best but backend limitations, no id available

    useEffect(() => {
        if (currentFilterTag) {
            setModelsData(stateData.filter(model => model.modelType.toLowerCase() === currentFilterTag.toLowerCase()))
        }
    }, [currentFilterTag])

    const clearFilter = () => {
        setCurrentFilterTag(null)
        setModelsData(stateData)
    }

    return (
        <div className={classNames("h-full", "w-1/3", 'bg-primary', "border-r", 'border-divider', "py-6", "px-2")}>
            <FilterHeader />
            {currentFilterTag &&
                <div className={classNames("underline", 'text-sm', 'my-1', 'cursor-pointer')}
                    onClick={clearFilter}
                >ClearFiltersX</div>
            }
            <div className={classNames("text-tags", 'my-1', 'font-bold',)} > Model Filters </div>
            <div className={classNames("flex", "gap-3", "flex-wrap")}>
                {
                    filterTags.map((group, index) => {
                        return <div className={classNames("border", "border-secondary", "rounded-md", "px-3", "py-1", "text-xs", "cursor-pointer", {
                            'text-white': currentFilterTag ? group.toLowerCase() === currentFilterTag.toLowerCase() : "",
                            'bg-tags': currentFilterTag ? group.toLowerCase() === currentFilterTag.toLowerCase() : "",
                        })}
                            onClick={() => setCurrentFilterTag(group)}
                            key={index}
                        >
                            {group}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default FilterTags