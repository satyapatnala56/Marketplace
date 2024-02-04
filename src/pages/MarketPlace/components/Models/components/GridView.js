import classNames from 'classnames'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { TfiDownload } from 'react-icons/tfi'

import styles from './GridView.module.css'

const GridView = (props) => {

    const { modelsData, modelClickHandler } = props

    return (
        <div className={classNames('flex', 'flex-wrap', 'gap-4', 'justify-around')}>
            {modelsData.map((model, index) => {
                return <div className={classNames('bg-primary', styles.card, 'py-1', 'px-2', 'rounded', 'flex', 'gap-x-2', 'items-center')}
                    onClick={() => modelClickHandler({ index })}
                    key={index}
                >
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkanXqnhrDZQ_sUAS6mRDR5NOUthaaewFyO6vYizfiI0Q4xkpBBHfiMRD5fS-RDH-6NoQ&usqp=CAU'
                        alt='profile-pic'
                        className={classNames('h-8', 'w-8', 'rounded-full')}
                    />
                    <div className={classNames('flex', 'flex-col', 'gap-y-2')}>
                        <div className={classNames('flex', 'items-center', 'gap-x-2')}>
                            <div>
                                {model.name.toLowerCase()}
                            </div>
                            <span className={classNames('text-xs', 'text-border')}>by {model.author}  </span>
                        </div>
                        <div className={classNames('flex', 'gap-x-2', 'text-xs', 'text-border')}>
                            <div> {model.modelType.split(' ').join("")} </div>
                            <div className={classNames('flex', 'items-center')}>
                                <CiHeart fill='red' />
                                <div> {model.likes} </div>
                            </div>
                            <div className={classNames('flex', 'items-center')}>
                                <TfiDownload fill='green' />
                                <div> {model.downloads} </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default React.memo(GridView) 