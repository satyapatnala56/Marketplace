import React from 'react'
import Select, { components } from 'react-select'


const CustomSelect = (props) => {

    const { searchOptions, onClick } = props

    const CustomOption = ({ children, ...rest }) =>
        <components.Option {...rest} innerProps={{
            ...rest.innerProps,
            onClick: () => {
                console.log(2);
                onClick(rest.data)
            }
        }}>
            {children}
        </components.Option>

    return (
        <Select options={searchOptions} styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                height: "30px",
                background: "var(--header)",
                fontSize: "16px"
            }),
            input: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "16px",
                color: "var(--text-color)",
            }),
            menu: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "16px",
                color: "var(--text-color)",
                background: "var(--header)",
            }),
            option: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "16px",
                color: "var(--text-color)",
                background: "var(--primary)",
                "&:hover": {
                    background: "var(--hover)",
                }
            }),
        }}
            components={{ Option: CustomOption }}
        />
    )
}

export default React.memo(CustomSelect)