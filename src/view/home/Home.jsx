import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HeaderView from '@/components/HeaderBody/HeaderView'
import { fetchData } from '@/store/fetures/centerslice'

import isEmpty from '@/utils/isEmpty'
import V1 from './cpns/v1/V1'
import HomeStyled from './styled'



const Home = memo(() => {
  const { discountData }=useSelector((state)=>({
     discountData:state.center.discount
  }),shallowEqual)

  const dispath =useDispatch()
  useEffect(()=>{
    dispath(fetchData())
  },[dispath])




  return (
    <HomeStyled>
      <HeaderView/>
      <div className="content">
      {
      isEmpty(discountData) && <V1  itemData={discountData} />
      }
      </div>
      



    </HomeStyled>
  )
})



export default Home