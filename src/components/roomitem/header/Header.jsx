import PropTypes from 'prop-types'
import React, { memo } from 'react'
import HeaderStyled from './styled'

const Header = memo((props) => {
    const {tittle ='默认值'} =props
  return (
    <HeaderStyled>
        {tittle}
    </HeaderStyled>
  )
})

Header.propTypes = {
    tittle:PropTypes.string
}

export default Header