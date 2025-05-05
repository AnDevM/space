import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  background: rgba(11, 13, 23, 0.15);
  backdrop-filter: blur(40px);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  width: 75%;
  padding: 8.4rem 2rem 0 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  .link {
    position: relative;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: .3rem;
    text-decoration: none;
    color: white;
    transition: color 0.3s linear;

    &::before {
      content: '';
      position: absolute;
      right: -2rem;
      top: 0;
      width: 4px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.5);
      transform: scaleY(0);
      transform-origin: center right;
      transition: transform 0.5s ease-in-out;
    }

    &:hover::before {
      transform: scaleY(1);
    }

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`

const MenuMob = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link className='link' to='/' onClick={() => setOpen(false)}>00&nbsp;Home</Link>
      <Link className='link' to='/destination' onClick={() => setOpen(false)}>01&nbsp;Destination</Link>
      <Link className='link' to='/crew' onClick={() => setOpen(false)}>02&nbsp;Crew</Link>
      <Link className='link' to='/technology' onClick={() => setOpen(false)}>03&nbsp;Technology</Link>
    </StyledMenu>
  )
}

export default MenuMob
