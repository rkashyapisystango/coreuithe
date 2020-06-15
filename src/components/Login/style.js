import styled from 'styled-components';
import LeftImg from 'assets/img/leftauth.jpeg';
import { CContainer } from '@coreui/react'

export const AuthContainer = styled.div`
    display: block;
    width: 100%;
    .left-auth {
        background : url(${LeftImg});
        height: 100vh;
        width: 100%;
        background-size: cover;
    }
    
`;
