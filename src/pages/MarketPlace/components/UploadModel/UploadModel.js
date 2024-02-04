import React, { useRef, useState, createRef } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import { GoPlus } from 'react-icons/go'
import { useDispatch } from 'react-redux'

import CustomModal from 'UI/CustomModal'
import TryItOutForm from './TryItOutForm'
import { modelActions } from 'store/model'
import { toastActions } from 'store/toastSlice'


const UploadModel = (props) => {

    const { handleClose } = props

    const dispatch = useDispatch()

    const nameRef = useRef(null)
    const modelTypeRef = useRef(null)
    const descriptionRef = useRef(null)
    const requirementsRef = useRef(null)
    const apiRef = useRef(null)
    const inputRef = Array.from({ length: 3 }, (_, i) => i).map((val, i) => createRef())
    const outputRef = Array.from({ length: 3 }, (_, i) => i).map((val, i) => createRef())

    const [inputInfo, setInputInfo] = useState([])
    const [requirements, setRequirements] = useState([])
    const [showInputInfo, setShowInputInfo] = useState(false)
    const [showRequirementsInput, setShowRequirementsInput] = useState(false)
    const [showTryItOutForm, setShowTryItOutForm] = useState(false)

    const addInput = () => {
        let count = 0;
        inputRef.forEach(ref => {
            if (ref.current.value.trim().length === 0) {
                count++;
            }
        })
        if (count > 0) {
            dispatch(toastActions.showWarn({ msg: "Make Sure everything is filled in input info" }))
            return
        }
        setInputInfo(prev => [
            ...prev,
            {
                label: inputRef[0].current.value,
                key: inputRef[1].current.value,
                type: inputRef[2].current.value
            }
        ])
        setShowInputInfo(false)
    }

    const getOutputInfo = () => {
        return {
            label: outputRef[0].current.value,
            key: outputRef[1].current.value,
            type: outputRef[2].current.value
        }
    }

    const addRequirements = () => {
        const requirement = requirementsRef.current.value
        console.log(requirement.trim());
        if (requirement.trim().length === 0) {
            dispatch(toastActions.showWarn({ msg: "Requirement value cannot be empty" }))
            return;
        }
        setRequirements(prev => [...prev, requirement])
        setShowRequirementsInput(false)
    }

    const addModel = () => {

        const name = nameRef.current.value;
        if (name.trim().length === 0) {
            dispatch(toastActions.showWarn({ msg: "Name cannot be empty" }))
            return;
        }

        const modelType = modelTypeRef.current.value

        if (modelType.trim().length === 0) {
            dispatch(toastActions.showWarn({ msg: "Model Type cannot be empty" }))
            return;
        }
        if (showTryItOutForm) {
            if (inputInfo.length === 0) {
                dispatch(toastActions.showWarn({ msg: "Should have atleast one input type" }))
                return;
            }
            let count = 0;
            Object.keys(getOutputInfo()).forEach(key => {
                if (getOutputInfo()[key].trim().length === 0) {
                    count++;
                }
            })
            if (count > 0) {
                dispatch(toastActions.showWarn({ msg: `Some values in Output info are not filled` }))
                return;
            }
            const api = apiRef.current.value;
            if (api.trim().length === 0) {
                dispatch(toastActions.showWarn({ msg: `API cannot be empty` }))
                return
            }
        }


        const data = {
            name,
            modelType,
            description: descriptionRef.current.value,
            author: "random Author",
            releaseDate: moment().toISOString(),
            lastUpdated: moment().toISOString(),
            tryItOutFeature: showTryItOutForm,
            requirements,
            inputSample: showTryItOutForm ? inputInfo : null,
            outputSample: showTryItOutForm ? getOutputInfo() : null,
            downloads: Math.floor(Math.random() * 1000),
            likes: Math.floor(Math.random() * 1000),
            modelResource: "asdqwadw.net",
            api: showTryItOutForm ? apiRef.current.value : ""
        }
        dispatch(modelActions.addModel({ data }))
        handleClose()
    }

    return (
        <CustomModal width="40vw" height="fit-content" title="Upload your own model" handleClose={handleClose}>
            <div className={classNames('flex', 'flex-col', 'gap-y-3')}>
                <div>
                    <div className={classNames('font-semibold')}>Name</div>
                    <input type='text' className={classNames("px-3", "py-2", "border", "w-1/2", "rounded-md", 'h-8')}
                        ref={nameRef}
                    />
                </div>
                <div>
                    <div className={classNames('font-semibold')}>Model Type</div>
                    <input type='text' className={classNames("px-3", "py-2", "border", "w-1/2", "rounded-md", 'h-8')}
                        ref={modelTypeRef}
                    />
                </div>
                <div>
                    <div className={classNames('font-semibold')}>Description</div>
                    <textarea className={classNames("px-3", "py-2", "border", "w-1/2", "rounded-md")}
                        ref={descriptionRef}
                    />
                </div>
                <div className={classNames('flex', 'gap-x-1', 'items-center')}
                >
                    <div className={classNames('font-semibold')}>Add Requirements</div>
                    <div className={classNames('border', 'rounded-full', 'cursor-pointer')}
                        onClick={() => {
                            if (requirements.length === 4) {
                                dispatch(toastActions.showWarn({ msg: "Max of 4 requirements are allowed" }))
                                return;
                            }
                            setShowRequirementsInput(true)
                        }}>
                        <GoPlus />
                    </div>
                </div>
                <div className={classNames('flex', 'gap-x-1')}>
                    {
                        requirements.map(
                            (requirement, index) => <div className={classNames('py-1', 'px-2', 'text-xs', 'text-primary', 'bg-tags', 'rounded')}
                                key={index}
                            >
                                {requirement}
                            </div>
                        )
                    }
                </div>
                {
                    showRequirementsInput &&
                    <div className={classNames('flex', 'gap-x-2')}>
                        <input type='text' className={classNames("px-3", "py-2", "border", "w-1/4", "rounded-md", 'h-8')}
                            ref={requirementsRef}
                        />
                        <button className={classNames('bg-tags', 'text-white', 'px-2', 'py-1', 'rounded', 'tracking-wide')}
                            onClick={addRequirements}>Add</button>
                    </div>
                }
                <div className={classNames('flex', 'gap-x-1')}>
                    <div className={classNames('font-semibold')}>Include Try it Out Feature?</div>
                    <input type='checkbox' className={classNames("rounded-md")} checked={showTryItOutForm}
                        onClick={() => setShowTryItOutForm(prev => !prev)} />
                </div>
                {
                    showTryItOutForm &&
                    <TryItOutForm
                        apiRef={apiRef}
                        inputRef={inputRef}
                        outputRef={outputRef}
                        addInput={addInput}
                        inputInfo={inputInfo}
                        showInputInfo={showInputInfo}
                        setShowInputInfo={setShowInputInfo}
                    />
                }
            </div>
            <div className={classNames('flex', 'justify-end')}>
                <button className={classNames('bg-tags', 'text-white', 'px-2', 'py-1', 'rounded', 'tracking-wide')}
                    onClick={addModel}>Submit</button>
            </div>
        </CustomModal>
    )
}

export default UploadModel