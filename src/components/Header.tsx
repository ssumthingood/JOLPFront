import styled from'styled-components';

const HeaderMain = styled.div`
    width:100%;
    height:90px;
    padding:15px 30px;
    background-color:#81c147;
    color:whitesmoke;
    opacity:0.95;
`;

const HeaderWrapper = styled.div`
    width:1000px;
    margin:0;
`;
const Header:React.FC = () => {
    return(
      <HeaderMain>
        <HeaderWrapper>
          <h1><a href={`/main/${window.localStorage.ID}`}>HoomBa</a></h1>
        </HeaderWrapper>
      </HeaderMain>
    )
};

export default Header;