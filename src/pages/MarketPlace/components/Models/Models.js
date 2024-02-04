import React from 'react'
import classNames from 'classnames'
import { TailSpin } from 'react-loader-spinner'


import ModelsHeader from './components/ModelsHeader'
import ModelsDisplay from './components/ModelsDisplay'

const Models = (props) => {

    const { data, isLoading } = props

    return (
        <div className={classNames("h-full", 'w-2/3', 'p-6', 'flex', 'flex-col', 'bg-primary', 'text-text-color')}>
            <ModelsHeader count={data.length} />
            {
                isLoading && <div className={classNames('h-full', 'w-full', 'flex', 'justify-center', 'items-center')}>
                    <TailSpin color='var(--tags)' />
                </div>
            }
            <ModelsDisplay data={data} />
        </div>
    )
}

export default Models