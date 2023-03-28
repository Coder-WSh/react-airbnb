import React, { memo } from 'react'
import IconLogo from '../../../../assets/svg/icon_logo'
import LeftStyled from './styled'

const Left = memo(() => {
  return (
    <LeftStyled>
        <IconLogo/>
    </LeftStyled>
    
  )
})

export default Left