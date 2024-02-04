import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'


import FilterView from './FilterView'
import GridView from './GridView'
import BarView from './BarView'
import Pagination from './Pagination'
import { modelActions } from 'store/model'



const ModelsDisplay = (props) => {

    const { data } = props

    const dispatch = useDispatch()

    const [currentDisplayType, setCurrentDisplayType] = useState('bar')
    const PAGE_SIZE = currentDisplayType === "bar" ? 5 : 20;
    const [modelsData, setModelsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        setModelsData(data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE))
    }, [PAGE_SIZE, currentPage, data])

    const modelClickHandler = ({ index }) => {
        dispatch(modelActions.changeActiveIndex({ index }))
    }

    return (
        <div className={classNames('grow')}>
            <FilterView setCurrentDisplayType={setCurrentDisplayType} />
            <div>
                {
                    currentDisplayType === 'bar' ? <BarView modelsData={modelsData} modelClickHandler={modelClickHandler} /> :
                        <GridView modelsData={modelsData} modelClickHandler={modelClickHandler} />
                }
            </div>
            <Pagination
                totalPages={data.length / PAGE_SIZE}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default ModelsDisplay
