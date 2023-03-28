import styled from "styled-components";

const CenterStyled =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border: 1px red solid;
    border-radius: 30px;
    ${props =>props.theme.mix};
    
    
    .pad {
        padding-right: 10px;
    }
`
export default CenterStyled