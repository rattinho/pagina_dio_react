import React from 'react';

import { Button } from '../Button'

import logo from '../../assets/logo-minimized.webp'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    Logo,
    UserPicture
} from './style'
import { useNavigate } from 'react-router-dom';

function Header({ autenticado }) {
    
    const navigate = useNavigate();

    function Login(){
        navigate('/login')
    }
    function Cadastrar(){
        navigate('/cad')
    }
    
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Logo src={logo} alt="Logo da dio" />
                    {autenticado ? (<>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src='https://avatars.githubusercontent.com/u/86034297?v=4' />
                    )  : (<>
                        <MenuRight href='#'>Home</MenuRight>
                        <Button title="Entrar" onClick={Login}/>
                        <Button title="Cadastrar-se" onClick={Cadastrar}/>
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    );
}

export default Header;