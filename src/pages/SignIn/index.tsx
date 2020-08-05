import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import logo from '../../assets/logo.svg'

import Button from '../../components/Button'
import Input from '../../components/Input'

import {Container, Content, Background} from './style'

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="Logo image" />

            <form>
                <h1>Faça seu logon</h1>

                <Input icon={FiMail} name="email" placeholder="E-mail"/>
                <Input icon={FiLock} name="password" type="password" placeholder="Senha"/>

                <Button type="submit">Entrar</Button>
                <a href="#">Esqueci minha senha</a>
            </form>

            <a href="#">
                <FiLogIn />
                Criar conta
            </a>
        </Content>

        <Background />
    </Container>
)

export default SignIn