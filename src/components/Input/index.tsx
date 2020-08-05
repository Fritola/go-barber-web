import React, {useEffect, InputHTMLAttributes, useRef} from 'react'
import {useField} from '@unform/core'
import {Container} from './styles'
import {IconBaseProps} from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...rest}) => {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, error, registerField} = useField(name)

    useEffect(() =>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])
    return(
        <Container>
            {Icon && <Icon />}
            <input defaultValue={defaultValue} ref={inputRef} {...rest} />
        </Container>
    )
}

export default Input