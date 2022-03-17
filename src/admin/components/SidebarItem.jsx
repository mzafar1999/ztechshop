import React from 'react'
import styled from 'styled-components'
import { Box, NavLink } from '../../components/styledComponents'


const Text = styled.h5`
    color: white;
    &:hover{
        color: black;
    }
`
const SidebarItem = ({text,link}) => {
    return <Box className='mx-3 pt-2 text-capitalize' >
        <NavLink to={link} role='button'>
            <Text>
            {text}
            </Text>
        </NavLink>
    </Box>
}
export default SidebarItem

