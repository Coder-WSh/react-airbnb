import styled from "styled-components";

const ItemStyled =styled.div`
width: ${props=>props.widthLength};
padding: 6px;
flex-shrink: 0;
box-sizing: border-box;
overflow: hidden;
    .all{
        width: 100%;
        .img{
            position: relative;
            box-sizing: border-box;
            padding: 66.66% 8px 0;
            border-radius: 3px;
            overflow: hidden;
            img{
                position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
            }
        }
    }
  
`
export default ItemStyled