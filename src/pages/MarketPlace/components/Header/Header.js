import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import Switch from 'react-switch'
import { GoPlus } from "react-icons/go";

import { themeActions } from 'store/colorTheme'
import { modelActions } from 'store/model'
import CustomSelect from 'UI/CustomSelect'

import UploadModel from '../UploadModel';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const { modelsData, customOpen } = props

    const dispatch = useDispatch()

    const isLightTheme = useSelector(state => state.theme.theme === 'light' ? true : false)
    const isFeaturedPage = window.location.pathname.includes('/feature')

    const changeThemeHandler = () => {
        dispatch(themeActions.toggleTheme())
    }

    const [searchOptions, setSearchOptions] = useState([])
    const [showUploadModel, setShowUploadModel] = useState(false)

    useEffect(() => {
        setSearchOptions(modelsData.map((model, index) => {
            return {
                label: model.name,
                value: index
            }
        }))
    }, [modelsData])

    const openModel = (data) => {
        dispatch(modelActions.changeActiveIndex({ index: data.value }))
    }


    return (
        <div className={classNames('flex', "bg-header", "p-10", "text-2xl", "gap-x-2", "items-center", 'border-b', 'border-divider')}>
            <Link to='/'>
                <div className='tracking-wide'>Marketplace</div>
            </Link>
            <div className={classNames('h-full', 'w-1/4')}>
                <CustomSelect searchOptions={searchOptions} onClick={(data) => {
                    customOpen ? customOpen({ index: data.value }) : openModel(data)
                }} />
            </div>
            <div className={classNames('flex', 'gap-x-2', 'ml-auto', 'items-center')}>
                <Link to='/featured'>
                    <div className={classNames('text-xl', 'cursor-pointer', 'font-semibold')}>Featured Models</div>
                </Link>
                {
                    !isFeaturedPage &&
                    <div className={classNames('flex', 'items-center', 'border-border', 'border', 'px-2', 'py-1', 'cursor-pointer')}
                        onClick={() => setShowUploadModel(true)}
                    >
                        <GoPlus />
                        <div className={classNames('text-base')}>Add Model</div>
                    </div>}
                {isLightTheme &&
                    <div className={classNames('text-base', 'font-semibold')}>Light</div>
                }
                <Switch checked={isLightTheme} checkedIcon={false} uncheckedIcon={false} offColor='#75d0b8' onChange={changeThemeHandler} />
                {!isLightTheme &&
                    <div className={classNames('text-base', 'font-semibold')}>Dark</div>
                }
            </div>
            {
                showUploadModel &&
                <UploadModel handleClose={() => setShowUploadModel(false)} />
            }
        </div>
    )
}

export default Header