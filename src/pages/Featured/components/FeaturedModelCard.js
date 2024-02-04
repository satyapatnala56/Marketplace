import React from 'react'
import classNames from 'classnames'
import { CiHeart } from 'react-icons/ci'
import { TfiDownload } from 'react-icons/tfi'

import styles from './FeaturedModelCard.module.css'

const FeaturedModelCard = (props) => {

    const { model } = props

    return (
        <div className={classNames(styles.card, 'flex', 'flex-col', 'gap-y-2', 'p-2',)}>
            <div className={classNames('font-semibold')}> {model.name} </div>
            <div className={classNames('flex', 'gap-x-2', 'text-sm', 'text-border')}>
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
            <div className={classNames('flex', 'gap-x-1', 'items-center')}>
                <div className={classNames('bg-border', 'w-fit', 'px-2', 'py-1', 'text-primary', 'text-xs', 'rounded')}>
                    Requires 8GB+ RAM
                </div>
                {
                    model.requirements.map(
                        (requirement, index) => <div className={classNames('p-1', 'text-xs', 'text-primary', 'bg-tags', 'rounded', 'w-fit')} key={index}>
                            {requirement}
                        </div>
                    )
                }
            </div>
            <div className={classNames('my-2', 'text-sm')}>
                {model.description}
            </div>
        </div>
    )
}

export default FeaturedModelCard