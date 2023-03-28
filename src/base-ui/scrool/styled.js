import styled from "styled-components";

const ScroolStyled =styled.div`
    position: relative;

    .scrool{
        overflow:hidden;
        .scroolItem{
            display: flex;
        }
    }

    .arrow {
        position: absolute;
        top: 50%;
        
        border: 1px red solid;
        background-color: red;


        width: 28px;
        height: 28px;

        &.left{
            left: 0;
            transform: translate(-100%,-50%);
        }
        &.right{
            right: 0;
            transform: translate(100%,-50%);
        }
    }
`
export default ScroolStyled