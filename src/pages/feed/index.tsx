import Header from '../../components/Header'

import {
    Container,
    Column,
    Title,
    TitleHighLight
} from './style'

import { Card } from '../../components/Card'
import { UserInfo } from '../../components/UserInfo'
import React from 'react'

const Feed = () => {
    return (
        <>
            <Header autenticado={true}/>
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 DA SEMANA</TitleHighLight>
                    <UserInfo percentual={12} nome="Felipe rattto" image="https://avatars.githubusercontent.com/u/86034297?v=4" />
                    <UserInfo percentual={36} nome="Felipe rattto" image="https://avatars.githubusercontent.com/u/86034297?v=4" />
                    <UserInfo percentual={93} nome="Felipe rattto" image="https://avatars.githubusercontent.com/u/86034297?v=4" />
                    <UserInfo percentual={67} nome="Felipe rattto" image="https://avatars.githubusercontent.com/u/86034297?v=4" />
                    <UserInfo percentual={35} nome="Felipe rattto" image="https://avatars.githubusercontent.com/u/86034297?v=4" />
                </Column>
            </Container>
        </>
    )
}

export default Feed;