import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import V1Styled from './styled'
import Header from '@/components/roomitem/header/Header'
import RoomTab from '@/components/roomitem/tab/RoomTab'
import ItemALL from '@/components/roomitem/itamAll/ItemALL'
import Banners from '../banners/Banners'

const V1 = memo((props) => {
    const {itemData} =props
    const inistate =Object.keys(itemData.dest_list)[0]
    const tabName =Object.keys(itemData.dest_list)
    const [name,setname]=useState(inistate)
    const data=itemData.dest_list[name]
    const setTabindex = useCallback((name,index)=>{
      setname(name)
      
    },[])
  return (
    <V1Styled>
        <Banners/>
        <Header tittle={itemData.title} />
        <RoomTab tab={tabName} tabClick={setTabindex}/>
        <ItemALL itemData ={data} widthLength={'33.333%'}/>
    </V1Styled>
  )
})

V1.propTypes = {
    itemData:PropTypes.object
}

export default V1