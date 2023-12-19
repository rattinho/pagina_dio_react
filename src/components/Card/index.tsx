import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles'

function Card(props) {
    return (
        <CardContainer>
            <ImageBackground src='https://avatars.githubusercontent.com/u/86034297?v=4' />
            <Content>
                <UserInfo>
                    <UserPicture 
                    src='https://avatars.githubusercontent.com/u/86034297?v=4'/>
                    <div>
                        <h4>Felipe Ratto</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>
                        Projeto para curso de HTML e CSS
                    </h4>
                    <p>
                        Projeto feito para o curso de html e css no bootcamp dio 
                        do Global Avanade... <strong> Saiba Mais</strong>
                    </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
}

export { Card };