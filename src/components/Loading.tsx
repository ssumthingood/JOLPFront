import styled from 'styled-components';

const LoadingSection = styled.div`
    font-size:25px;
    text-align:center;
    width:100%;
`;

function Loading() {
    return(
        <LoadingSection>Loading...⏰</LoadingSection>
    )
}

export default Loading;