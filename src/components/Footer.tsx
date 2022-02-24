import styled from 'styled-components';

const FooterMain = styled.div`
    min-width:1500px;
    height:200px;
    padding:30px;
    background-color:#81c147;
    color:whitesmoke;
    opacity:0.95;
`;

const FooterWrapper = styled.div`
    margin:0;
`;

const HeadLine1 = styled.h1`
  display:block;
  font-size:25px;
  width:100px;
`;

const Footer:React.FC = () => {
    return(
        <FooterMain>
            <FooterWrapper>
            <HeadLine1>HoomBa</HeadLine1>
            <div>2022 HoomBa. all right reserved</div>
            <div>Konkuk Univ. Computer Science Engineering</div>
            <div>Jang TaeJun, Lee KyungHo, Park JunHong</div>
            </FooterWrapper>
        </FooterMain> 
    )
};

export default Footer;