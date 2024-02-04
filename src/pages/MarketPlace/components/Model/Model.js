import React from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'

import { modelActions } from 'store/model'

import CustomModal from 'UI/CustomModal'
import ModelInfo from './components/ModelInfo'
import ModelFiles from './components/ModelFiles'
import ModelExtraInfo from './components/ModelExtraInfo'
import Chart from './components/Chart'
import ModelTryItOut from './components/ModelTryItOut'
import { getRecentString } from '../Models/Utils'


const Model = (props) => {

    const { model, customHandleClose } = props

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(modelActions.changeActiveIndex({ index: -1 }))
    }

    return (
        <CustomModal height="80vh" width="80vw" title={model.name} handleClose={customHandleClose ?? handleClose}>
            <div className={classNames('flex', 'flex-col', 'gap-y-2')}>
                <ModelInfo model={model} />
                <div className={classNames('flex', 'justify-between', 'border-divider', 'border-t', 'py-2')}>
                    <div className={classNames('flex', 'flex-col', 'gap-y-1')}>
                        <ModelFiles model={model} />
                        <ModelExtraInfo model={model} />
                        <div className={classNames('text-sm', 'font-bold')}>
                            {getRecentString(model.lastUpdated)}
                        </div>
                    </div>
                    <div className={classNames('flex', 'w-1/2', 'flex-col', 'gap-y-2')}>
                        <div>
                            <span className={classNames('font-bold')}>
                                Monthly Average downloads:
                            </span>&nbsp;
                            {Math.floor(model.downloads / 12)}
                        </div>
                        <Chart />
                        {
                            model.tryItOutFeature &&
                            <ModelTryItOut modelInputSamples={model.inputSample} modelOutputSample={model.outputSample} />
                        }
                    </div>
                </div>
            </div>
        </CustomModal >
    )
}

export default Model