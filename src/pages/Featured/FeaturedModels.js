import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import Header from 'pages/MarketPlace/components/Header'
import FeaturedModelCard from './components/FeaturedModelCard'
import Model from 'pages/MarketPlace/components/Model'
import styles from './FeaturedModel.module.css'


const FeaturedModels = () => {

    const data = useSelector(state => state.model.data)
    const [activeModelIndex, setActiveModelIndex] = useState(-1)

    const [featuredModels, setFeaturedModels] = useState([])

    useEffect(() => {
        const copyData = [...data]
        copyData.sort((a, b) => b.likes - a.likes)
        setFeaturedModels(copyData.slice(0, 10))
    }, [data])

    return (
        <div className={classNames("flex", "flex-col", "h-screen", 'text-text-color', 'bg-primary')}>
            <Header modelsData={featuredModels} customOpen={({ index }) => setActiveModelIndex(index)} />
            <div className={classNames('font-bold', 'text-lg', 'text-center', 'my-2')}>
                These models got a lot of <span style={{ color: "red" }}> love </span> from fellow developers
            </div>
            <div className={classNames("grow", "flex")}>
                <div className={classNames(styles.container, "h-full", 'w-full', 'p-6', 'justify-between', 'bg-primary', 'gap-3', 'text-text-color')}>
                    {
                        featuredModels.map((model, index) => <div onClick={() => setActiveModelIndex(index)} key={index}>
                            <FeaturedModelCard model={model} />
                        </div>
                        )
                    }
                </div>
            </div>
            {activeModelIndex > -1 && <Model model={featuredModels[activeModelIndex]} customHandleClose={() => setActiveModelIndex(-1)} />}
        </div>
    )
}

export default FeaturedModels