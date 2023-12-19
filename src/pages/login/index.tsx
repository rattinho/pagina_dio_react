import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import { Button } from '../../components/Button'
import Header from '../../components/Header'
import { Input } from '../../components/Input'

import {api } from '../../services/api'

import {
    Column,
    Container,
    CriarText,
    EsqueciText,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    Row
} from './style'
import { useNavigate } from 'react-router-dom';
import React from 'react';


const schema = yup.object({
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
}).required();

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async formData => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&password=${formData.password}`)
            console.log(data)
            if(data.length === 1){
                navigate('/feed');
            }else{
                alert('Usuário Invalido!')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    }


    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login;