import React, {useCallback, useRef, useContext} from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logo from '../../assets/logo.svg'
import {Form} from '@unform/web'
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'
import {useAuth} from '../../hooks/AuthContext'
import {useToast} from '../../hooks/Toast'

import Button from '../../components/Button'
import Input from '../../components/Input'

import {Container, Content, Background} from './style'

interface SignInFormData{
    email: string;
    password: string;
}

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null)    

    const {signIn} = useAuth()    
    const {addToast} = useToast()

    const handleSubmit = useCallback(async (data:SignInFormData) =>{
        try {
            formRef.current?.setErrors({})   
            const schema = Yup.object().shape({                
                email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
                password: Yup.string().required('Senha obrigatoria')
            })

            await schema.validate(data, {
                abortEarly: false,
            })          
            await signIn({
                email: data.email,
                password: data.password
            })  
        } catch (err) {
            if(err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)            
            }

            addToast({
                type: 'error',
                title: 'Erro na autenticacao',
                description: 'Ocorreu um erro ao fazer login'
            })
            
        }
    }, [signIn, addToast])

    return(
        <Container>
            <Content>
                <img src={logo} alt="Logo" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>

                    <Input icon={FiMail} name="email" placeholder="E-mail"/>
                    <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                    <Button type="submit">Entrar</Button>
                    <a href="#">Esqueci minha senha</a>
                </Form>

                <a href="#">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>

            <Background />
        </Container>
    )
}

export default SignIn