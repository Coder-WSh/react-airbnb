import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import Scrool from '@/base-ui/scrool/Scrool'
import Styled from './styled'
import classNames from 'classnames'

const RoomTab = memo((props) => {
    const { tab, tabClick } = props
    const [currentIndex, setcurrentIndex] = useState(0)

    function changeTab(item, index) {
        tabClick(item, index)
        setcurrentIndex(index)
    }
    return (

        <Styled>
            <Scrool>
                {
                    tab.map((item, index) => {
                        return (
                            <div
                                key={item}
                                className={classNames('pad', { active: index === currentIndex })}
                                onClick={e => changeTab(item, index)}
                            >
                                {item}
                            </div>)
                    })
                }
            </Scrool>
        </Styled>

    )
})

RoomTab.propTypes = {
    tab: PropTypes.array,
    tabClick: PropTypes.func
}

export default RoomTab