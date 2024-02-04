import React from 'react'
import classNames from 'classnames'

const ModelExtraInfo = (props) => {

    const { model } = props

    return (
        <React.Fragment>
            <div className={classNames("flex", 'gap-x-1', 'items-center')}>
                <div className={classNames('underline-offset-2')}>
                    Model Resources:
                </div>
                <div className={classNames('text-sm', 'text-blue', 'underline')}>
                    {model.modelResource}
                </div>
            </div>
            <div className={classNames("flex", 'gap-x-1', 'items-center')}>
                <div className={classNames('font-bold')}>
                    Release Date:
                </div>
                <div className={classNames('text-sm')}>
                    {model.releaseDate}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModelExtraInfo