import React from 'react'
import classNames from 'classnames'
import { TfiDownload } from 'react-icons/tfi'

const fileTypes = ["json", "model", "pkl", "md"]

const ModelFiles = (props) => {

    const { model } = props

    return (
        <React.Fragment>
            <div className={classNames('font-bold', 'my-2')}>Downloadable Files</div>
            {
                Array.from({ length: 4 }, (_, i) => {
                    return {
                        name: `${model.name}-${i + 1}.${fileTypes[i]}`,
                        size: Math.floor(Math.random() * 100000) / 100
                    }
                })
                    .map((modelfile, index) => <div className={classNames('px-2', 'py-1', 'bg-header', 'text-border', 'flex', 'flex-col', 'gap-y-2')}
                        key={index}
                    >
                        <div className={classNames('flex', 'gap-x-10', 'justify-between')}>
                            <div>
                                {modelfile.name.toLowerCase()}
                            </div>
                            <div className={classNames('flex', 'gap-x-2', 'bg-tags', 'border', 'text-xs', 'text-primary', 'rounded', 'p-1', 'items-center', 'cursor-pointer')}>
                                Download <TfiDownload fill='white' />
                            </div>
                        </div>
                        <div className={classNames('text-sm')}>
                            File Size: {modelfile.size} MB
                        </div>
                    </div>)
            }
        </React.Fragment>
    )
}

export default ModelFiles