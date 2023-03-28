import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Item from '../item/Item'
import AllStyled from './styled'

const ItemALL = memo((props) => {
    const {itemData,widthLength} =props
  return (
    <AllStyled>
        {
            itemData.slice(0,6).map((item,index)=>{
                return <Item itemData={item} index={index} key={item.id} widthLength={widthLength} />
            })
        }
    </AllStyled>
  )
})

ItemALL.propTypes = {
    itemData:PropTypes.array,
    widthLength:PropTypes.string
}

export default ItemALL