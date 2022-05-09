import React from 'react';
import styled from 'styled-components';

const LoadingSection = styled.div`
    font-size:25px;
    text-align:center;
    width:100%;
`;

function Loading() {
    return(
        <LoadingSection>No Contents / Loading...</LoadingSection>
    )
}

export default Loading;