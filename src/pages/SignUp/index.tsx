import React, {useCallback, useRef} from 'react'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import {Form} from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

import logo from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import {Container, Content, Background} from './style'

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)    

    const handleSubmit = useCallback(async (data:object) =>{
        try {
            formRef.current?.setErrors({})   
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
                password: Yup.string().min(6, 'No minimo 6 digitos')
            })

            await schema.validate(data, {
                abortEarly: false,
            })            
        } catch (err) {
            console.log(err)

            const errors = getValidationErrors(err)

            formRef.current?.setErrors(errors)            
        }
    }, [])

    return(
        <Container>
        <Background />

        <Content>
            <img src={logo} alt="Logo" />

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input icon={FiUser} name="name" placeholder="Nome"/>
                <Input icon={FiMail} name="email" placeholder="E-mail"/>
                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">Cadastrar</Button>                
            </Form>

            <a href="/">
                <FiArrowLeft />
                Voltar para logon
            </a>
        </Content>

        
    </Container>
    )
}

export default SignUp