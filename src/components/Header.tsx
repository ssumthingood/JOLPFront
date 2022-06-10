import React from "react";
import styled from "styled-components";

const HeaderMain = styled.div`
    min-width: 1500px;
    height: 90px;
    padding: 15px 30px;
    background-color: #81c147;
    color: whitesmoke;
    opacity: 0.95;
`;

const HeaderWrapper = styled.div`
    margin: 0;
`;

const HeadLine1 = styled.h1`
    display: block;
    font-size: 25px;
    width: 100px;
`;
const Header: React.FC = () => {
    return (
        <HeaderMain>
            <HeaderWrapper>
                <HeadLine1>
                    <a href={`/main`}>TETA</a>
                </HeadLine1>
            </HeaderWrapper>
        </HeaderMain>
    );
};

export default Header;
