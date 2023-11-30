import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import { api } from '../../services/api';

import {
    Column,
    Container,
    ExistText,
    SubTitleLogin,
    Title,
    TitleLogin,
    Wrapper,
    Row
} from './style'

import { Input } from '../../components/Input';
import Header from '../../components/Header';
import { Button } from '../../components/Button';


const schema = yup.object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('E-mail não é valido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No minimo 3 caracteres').required('Campo Obrigatório'),
}).required();


const Cadastro = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit',
    });

    const onSubmit = async (data) => {
        try{
            if(await api.post('/users', data)){
                alert('Cadastrado!')
            }
        }catch{
            alert('Error: Tente novamente')
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
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name='name' placeholder='Nome Completo' control={control} errorMessage={errors?.name?.message} />
                            <Input name='email' placeholder='E-mail' control={control} errorMessage={errors?.email?.message}/>
                            <Input name='password' placeholder='Senha' type='password' control={control} errorMessage={errors?.password?.message}/>
                            <Button title='Cadastrar' variant='secondary' type='submit' />
                        </form>
                        <Row>
                            <ExistText>Fazer Login</ExistText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
}

export default Cadastro;