import React from 'react'
import classNames from 'classnames'

import { getRecentString } from '../Utils'
import styles from './BarView.module.css'

const BarView = (props) => {

    const { modelsData, modelClickHandler } = props

    return (
        <div className={classNames('flex', 'flex-col', 'gap-y-4')}>
            {
                modelsData.map((model, index) => {
                    return <div className={classNames(styles.card, 'w-full', 'px-3', 'py-2', 'rounded', 'flex', 'flex-col', 'gap-y-1',)}
                        onClick={() => modelClickHandler({ index })}
                        key={index}
                    >
                        <div className={classNames('text-border', 'flex', 'justify-between')}>
                            <div>Model</div>
                            <div className={classNames('text-xs')}> {getRecentString(model.lastUpdated)} </div>
                        </div>
                        <div className={classNames('flex', 'gap-x-2', 'items-center')}>
                            <div className={classNames('text-lg')}>
                                {model.name}
                            </div>
                            <div className={classNames('flex', 'gap-x-1')}>
                                {
                                    model.requirements.map(
                                        (requirement, index) => <div className={classNames('py-1', 'px-2', 'text-xs', 'text-primary', 'bg-tags', 'rounded')}
                                            key={index}
                                        >
                                            {requirement}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className={classNames('bg-border', 'w-fit', 'px-2', 'py-1', 'text-primary', 'text-xs', 'rounded')}>
                            Requires 8GB+ RAM
                        </div>
                        <div className={classNames('text-sm')}>
                            {Array.from({ length: 3 }, () => model.description).join("")}
                        </div>
                        <div className={classNames("flex", 'gap-x-1', 'items-center')}>
                            <div className={classNames('text-lg', 'underline-offset-2')}>
                                Model Resources
                            </div>
                            <div className={classNames('text-sm', 'text-blue', 'underline')}>
                                {model.modelResource}
                            </div>
                        </div>
                        <div className={classNames('flex', 'justify-end', 'items-center', 'text-sm', 'gap-x-1', 'text-border')}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkanXqnhrDZQ_sUAS6mRDR5NOUthaaewFyO6vYizfiI0Q4xkpBBHfiMRD5fS-RDH-6NoQ&usqp=CAU'
                                alt='profile-pic'
                                className={classNames('h-8', 'w-8', 'rounded-full')}
                            />
                            <div>
                                {model.author}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default React.memo(BarView)  