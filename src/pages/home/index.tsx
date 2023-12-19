import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import Header from '../../components/Header'

import banner from '../../assets/serjao-banner.png'

import {Container, TextContent, Title, TitleHighLight} from './style'
import React from 'react'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }
    return(
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>Implemente <br/></TitleHighLight>
                        o seu futuro global agora! 
                    </Title>
                    <TextContent>
                        Domine as tecnologias pelas empresas mais inovadoras
                        do mundo e encare seu novo desafio profissional,
                        evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="seconary" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <img src={banner} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    )
}

export default Home;