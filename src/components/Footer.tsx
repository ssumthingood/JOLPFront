import styled from 'styled-components';

const FooterMain = styled.div`
    width:100%;
    height:200px;
    padding:30px;
    background-color:#81c147;
    color:whitesmoke;
    opacity:0.95;
`;

const FooterWrapper = styled.div`
    width:1000px;
    margin:0;
`;

const Footer:React.FC = () => {
    return(
        <FooterMain>
            <FooterWrapper>
            <h1>HoomBa</h1>
            <div>2022 HoomBa. all right reserved</div>
            <div>Konkuk Univ. Computer Science Engineering</div>
            <div>Jang TaeJun, Lee KyungHo, Park JunHong</div>
            </FooterWrapper>
        </FooterMain> 
    )
};

export default Footer;