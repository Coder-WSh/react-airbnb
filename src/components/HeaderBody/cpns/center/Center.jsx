import React, { memo } from 'react'
import IconSearchBar from '../../../../assets/svg/icon-search-bar'

import Text from './cpns/text'
import CenterStyled from './styled'

const Center = memo(() => {
  return (
    <CenterStyled>
        <Text/>
        <div className='pad'>
        <IconSearchBar/>
        </div>
    </CenterStyled>
  )
})

export default Center