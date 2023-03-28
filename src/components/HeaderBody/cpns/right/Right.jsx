import React, { useEffect, useState } from 'react'

import IconGlobal from '@/assets/svg/icon_global'
import HeaderRight from './styled'
import IconAvatar from '../../../../assets/svg/icon_avatar'
import IconMenu from'../../../../assets/svg/icon_menu'
import Panel from '../panel/Panel'
  
export default function Right() {
  const [show,setshow]=useState(false)

  useEffect(()=>{
    function changeshow(){
      
      setshow(false)
    }
    window.addEventListener('click',changeshow,true)
    return ()=>{return window.removeEventListener('click',changeshow,true)}
  },[])

  function setTrue (){
    setshow(true)
  }

  return (
    <HeaderRight>
        <div className='pad'>登录</div>
        <div className='pad'>注册</div>
        <div className='pad'>
            <IconGlobal/>
        </div>
        <div className=' menu' onClick={setTrue}>
          <IconMenu/>
          <IconAvatar/>
        </div>
      {show&&<Panel/>}
    </HeaderRight>
  )
}
