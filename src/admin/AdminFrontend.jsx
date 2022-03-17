import React from 'react'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import AllProducts from './views/AllProducts'

const Container = styled.div`
`
const Right = styled.div`
    margin-left: auto;
`
const Left = styled.div`
    flex: 1;
`

const AdminFrontend = () => {
  return (
    <Container className='container-fluid'>
       <Right>
        
       </Right>

    </Container>
  )
}

export default AdminFrontend