import React from 'react'
import Wrapper from './Wrapper'
import Trigger from './Trigger'
import Recommended from './Recommended'

const Sidebar = () => {
  return (
    <Wrapper>
        <Trigger/>
        <Recommended/>
    </Wrapper>
  )
}

export default Sidebar