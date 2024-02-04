import React from 'react'
import classNames from 'classnames'

const ModelsHeader = (props) => {

    const { count } = props

    return (
        <div className={classNames('flex', 'gap-x-2', 'items-end', 'justify-between')}>
            <div className={classNames('flex', 'gap-x-2', 'items-end')} >
                <div className={classNames('text-xl')}>Models</div>
                <div className={classNames('text-border')}> {count} </div>
            </div>
        </div>
    )
}

export default ModelsHeader