import { Rate } from 'antd'
import PropTypes from 'prop-types'
import React, { memo } from 'react'


import ItemStyled from './styled'

const Item = memo((props) => {
  const {itemData,widthLength='25%'} =props
  
  return (
    <ItemStyled widthLength={widthLength}>
      <div className="all">
      <div className='img'><img src={itemData.picture_url}  alt='123'/></div>
      <div style={{color:itemData.verify_info?.text_color}}>{itemData.verify_info?.messages.join('·')}</div>
      <div>{itemData.name}</div>
      <div>{itemData.price_format}/每晚</div>
      <div style={{color:itemData?.star_rating_color}}>
      <Rate
      disabled
      defaultValue={itemData?.star_rating}
      />
        
        <span style={itemData.bottom_info}>{itemData.bottom_info?.content}</span>
      </div>
      </div>
    </ItemStyled>
  )
})

Item.propTypes = {
  itemData:PropTypes.object,
  index:PropTypes.number,
  widthLength:PropTypes.string
}

export default Item