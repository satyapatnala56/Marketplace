import React from 'react'
import classNames from 'classnames'

import { FaHeart } from 'react-icons/fa'
import { TfiDownload } from 'react-icons/tfi'

const ModelInfo = (props) => {

    const { model } = props

    return (
        <React.Fragment>
            <div className={classNames('flex', 'gap-x-2', 'text-xs', 'text-border')}>
                <div className={classNames('text-border', 'text-base')}> {model.modelType} by {model.author}  </div>
                <div className={classNames('flex', 'items-center', 'gap-x-0.5')}>
                    <FaHeart fill='red' />
                    <div> {model.likes} </div>
                </div>
                <div className={classNames('flex', 'items-center')}>
                    <TfiDownload fill='green' />
                    <div> {model.downloads} </div>
                </div>
            </div>
            <div className={classNames('font-bold')}>Requires</div>
            <div className={classNames('flex', 'gap-x-1', 'items-center')}>
                <div className={classNames('bg-border', 'w-fit', 'px-2', 'py-1', 'text-primary', 'text-xs', 'rounded')}>
                    Requires 8GB+ RAM
                </div>
                {
                    model.requirements.map(
                        (requirement, index) => <div className={classNames('p-1', 'text-xs', 'text-primary', 'bg-tags', 'rounded', 'w-fit')}
                            key={index}
                        >
                            {requirement}
                        </div>
                    )
                }
            </div>
            <div className={classNames('text-sm', 'leading-6')}>
                {Array.from({ length: 6 }, () => model.description).join("")}
            </div>
        </React.Fragment>
    )
}

export default ModelInfo