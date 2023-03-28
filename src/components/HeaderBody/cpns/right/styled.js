import styled from "styled-components";

const HeaderRight =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;


    .pad {
        margin: 0 5px;
        padding: 3px;
        border-radius: 25px;
        ${props =>props.theme.mix}
        
        /* &:hover {
            background-color: #f5f5f5;
        } */
    }

    .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 3px;
        width: 55px;
        height: 30px;
        border: 1px red solid;
        border-radius: 30px;
    }
`
export default HeaderRight