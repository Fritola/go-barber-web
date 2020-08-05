import React from 'react'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import {Form} from '@unform/web'

import logo from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import {Container, Content, Background} from './style'

const SignUp: React.FC = () => {
    function handleSubmit(data:object): void {
        console.log(data)
    }

    return(
        <Container>
        <Background />

        <Content>
            <img src={logo} alt="Logo image" />

            <Form initialData={{ name: 'Gustavo' }} onSubmit={handleSubmit}>
                <h1>Faça seu cadastro</h1>

                <Input icon={FiUser} name="name" placeholder="Nome"/>
                <Input icon={FiMail} name="email" placeholder="E-mail"/>
                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">Cadastrar</Button>                
            </Form>

            <a href="#">
                <FiArrowLeft />
                Voltar para logon
            </a>
        </Content>

        
    </Container>
    )
}

export default SignUp