import classNames from 'classnames'
import React, { useState } from 'react'

const ModelTryItOut = (props) => {

    const { modelInputSamples, modelOutputSample } = props
    const [fakeResponse, setFakeResponse] = useState({})
    const [showOutput, setShowOutput] = useState(false)
    const getResult = () => {

        /*Basically the logic will be like there will be a api in data and we will have to pass inputs using keys present in the data
            The api response will be the result of the model
        */
        setFakeResponse({
            [modelOutputSample["key"]]:
                modelOutputSample.type === "file" ?
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzx4JbKJo1EbOHh8vOwUjttME3TX0T_vQww&usqp=CAU" : "Fake Response"
        })
        setShowOutput(true)
    }


    return (
        <div className={classNames('flex', 'flex-col', 'gap-y-2')}>
            <div className={classNames('font-bold')}> Try it Out! </div>
            {
                modelInputSamples.map((input, index) => <div className={classNames('flex', 'gap-x-3')} key={index}>
                    <div>{input.label}</div>
                    <input type={input.type} className={classNames('border', 'border-secondary', 'rounded', 'w-2/5', 'px-2', {
                        'text-xs': input.type === "file"
                    })} />
                </div>)
            }
            <div className={classNames('bg-tags', 'text-primary', 'px-2', 'py-1', 'rounded', 'w-fit', 'tracking-wide', 'my-1', 'cursor-pointer')}
                onClick={getResult}
            >
                Evaluate
            </div>
            {
                showOutput ?
                    <div>
                        <div className={classNames('font-bold')}> {modelOutputSample.label} </div>
                        {
                            modelOutputSample.type === 'file' ?
                                <img src={fakeResponse[modelOutputSample.key]} alt='model_response' /> :
                                <div> {fakeResponse[modelOutputSample.key]} </div>
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default ModelTryItOut