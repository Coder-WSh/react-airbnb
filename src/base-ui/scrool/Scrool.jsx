import React, { memo, useEffect, useRef, useState } from 'react'
import ScroolStyled from './styled'

const Scrool = memo((props) => {
    const scroolRef =useRef()
    const [left,setleft]=useState(false)
    const [right,setright]=useState(false)
    const [position,setIndex]=useState(0)
    const distance =useRef()
    // 失误总结
    // 1.准备考别的组件把index传进来，实际这个业务不需要这样处理
    // 2.优化忘了，使用ref的current
    // 3.依赖不知道选啥
    // 4.不知道怎么移动元素滚动
    // 5.判断条件，自己写的时候有点蒙
    // 6.盒子滚动这个，太怀疑自己了，应该自己先理一遍的，不相信自己
    
    useEffect(()=>{
       distance.current =scroolRef.current.scrollWidth-scroolRef.current.clientWidth
      setright(distance.current>0)
    },[props.children])
  
    function changClick (blon){
      const newIndex= blon? position +1 :position -1
      console.log(newIndex);
      const newObject =scroolRef.current.children[newIndex]
      const newOffset =newObject.offsetLeft
      scroolRef.current.style.transform = `translate(-${newOffset}px)`
      setIndex(newIndex)
      setleft(newOffset > 0)
      setright(distance.current >newOffset)
      
    }
  return (
    <ScroolStyled>
     {left && <div className='arrow left' onClick={e =>changClick(false) }>  左 </div> }
     {right && <div className='arrow right' onClick={e =>changClick(true)} >  右 </div> }
        {
            <div className="scrool">
              <div className="scroolItem" ref={scroolRef}>
                {props.children}
              </div>
            </div>
        }
        
    </ScroolStyled>
  )
})



export default Scrool