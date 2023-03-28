import styled from "styled-components";

const PanelStyle =styled.div`
position: absolute;
top: 27px;
right: 50px;
    ul {
        border: 1px red solid;
        
        li{
            padding: 5px 10px;
            &:hover{
                background-color: orange;
            }
        }
    }
`
export default PanelStyle