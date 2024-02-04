import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import useData from 'hooks/useData'

import FilterTags from './components/FilterTags'
import Header from './components/Header'
import Models from './components/Models'
import Model from './components/Model'

const MarketPlace = () => {

    const { isLoading } = useData('/satyapatnala56/jsonserver/models')
    const stateData = useSelector(state => state.model.data)

    const activeModelIndex = useSelector(state => state.model.activeModelIndex)
    const [modelsData, setModelsData] = useState(stateData)


    useEffect(() => {
        setModelsData(stateData)
    }, [stateData])


    return (
        <div className={classNames("flex", "flex-col", "h-screen", 'text-text-color')}>
            <Header modelsData={modelsData} />
            <div className={classNames("grow", "flex", {
                "overflow-hidden": activeModelIndex > -1 ? true : false
            })}>
                <FilterTags setModelsData={setModelsData} stateData={stateData} />
                <Models data={modelsData} isLoading={isLoading} />
                {
                    activeModelIndex > -1 &&
                    <Model model={modelsData[activeModelIndex]} />
                }
            </div>
        </div>
    )
}

export default MarketPlace