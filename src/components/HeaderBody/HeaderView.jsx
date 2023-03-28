// import PropTypes from 'prop-types'
import React, { memo } from 'react'

import Center from './cpns/center/Center'
import Left from './cpns/left/Left'

import Right from './cpns/right/Right'

import HeaderStyle from './style'


const HeaderView = memo((props) => {
  
  return (
    <HeaderStyle>
        <Left/>
        <Center/>
        <Right/>
    </HeaderStyle>
  )
})

// HeaderView.propTypes = {}

export default HeaderView