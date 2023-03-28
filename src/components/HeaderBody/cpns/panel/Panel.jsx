import React from 'react'
import PanelStyle from './styled'


export default function Panel() {
    const roomlist =['注册','登录','来爱彼迎发布房源','开展体验','帮助']
  return (
    <PanelStyle>
        <ul>
        {
            roomlist.map((item)=>{
                return <li key={item}>{item}</li>
            })
        }
        </ul>
    </PanelStyle>
  )
}
