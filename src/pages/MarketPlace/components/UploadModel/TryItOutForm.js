import React, { Fragment } from 'react'
import classNames from 'classnames'
import { GoPlus } from 'react-icons/go'
import { useDispatch } from 'react-redux'

import { toastActions } from 'store/toastSlice'

const TryItOutForm = (props) => {

    const { inputRef, outputRef, apiRef, inputInfo, showInputInfo, addInput, setShowInputInfo } = props

    const dispatch = useDispatch()

    return (
        <Fragment>
            <div className={classNames('flex', 'gap-x-1', 'items-center')}
            >
                <div className={classNames('font-semibold')}>Add Input Info</div>
                <div className={classNames('border', 'rounded-full', 'cursor-pointer')}
                    onClick={() => {
                        if (inputInfo.length === 4) {
                            dispatch(toastActions.showWarn({ msg: "Max of 4 inputs are allowed" }))
                            return;
                        }
                        setShowInputInfo(true)
                    }}
                >
                    <GoPlus />
                </div>
            </div>
            {
                inputInfo.map((input, index) => <div className={classNames('flex', 'gap-x-2',)} key={index}>
                    <div className={classNames('font-semibold')}>Label: </div>
                    <div> {input.label} </div>
                    <div className={classNames('font-semibold')}>Key: </div>
                    <div> {input.key} </div>
                    <div className={classNames('font-semibold')}>Type: </div>
                    <div> {input.type} </div>
                </div>)
            }
            {
                showInputInfo &&
                <div className={classNames('flex', 'gap-x-3', 'items-end')}>
                    <div className={classNames("w-1/5")}>
                        <div className={classNames('font-semibold')}>Label</div>
                        <input type='text' className={classNames("px-3", "py-2", 'w-full', "border", "rounded-md", 'h-8')}
                            ref={inputRef[0]} />
                    </div>
                    <div className={classNames("w-1/5")}>
                        <div className={classNames('font-semibold')}>Key</div>
                        <input type='text' className={classNames("px-3", "py-2", 'w-full', "border", "rounded-md", 'h-8')}
                            ref={inputRef[1]}
                        />
                    </div>
                    <div className={classNames("w-1/5")}>
                        <div className={classNames('font-semibold')}>Type</div>
                        <select className={classNames("px-3", "py-1", "border", "rounded-md", 'h-8')}
                            ref={inputRef[2]}
                        >
                            <option value="text">Text</option>
                            <option value="file">Image</option>
                        </select>
                    </div>
                    <button className={classNames('bg-tags', 'text-white', 'px-2', 'py-1', 'rounded', 'tracking-wide')}
                        onClick={addInput}
                    >Add</button>
                </div>
            }
            <div className={classNames('flex', 'flex-col', 'gap-y-1',)}
            >
                <div className={classNames('font-semibold')}>Output Info</div>
                <div className={classNames('flex', 'gap-x-3', 'items-end')}>
                    <div className={classNames("w-1/5")}>
                        <div className={classNames('font-semibold')}>Label</div>
                        <input type='text' className={classNames("px-3", "py-2", 'w-full', "border", "rounded-md", 'h-8')}
                            ref={outputRef[0]}
                        />
                    </div>
                    <div className={classNames("w-1/5")}>
                        <div className={classNames('font-semibold')}>Key</div>
                        <input type='text' className={classNames("px-3", "py-2", 'w-full', "border", "rounded-md", 'h-8')}
                            ref={outputRef[1]}
                        />
                    </div>
                    <div className={classNames("w-1/5")}>
                        <div className={classNames('font-semibold')}>Type</div>
                        <select className={classNames("px-3", "py-1", "border", "rounded-md", 'h-8')} ref={outputRef[2]}>
                            <option value="text">Text</option>
                            <option value="file">Image</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className={classNames('font-semibold')}>API</div>
                <input type='text' className={classNames("px-3", "py-2", "border", "w-1/2", "rounded-md", 'h-8')} ref={apiRef} />
            </div>
        </Fragment>
    )
}

export default TryItOutForm