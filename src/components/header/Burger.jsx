import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.button`
  position: absolute;
  top: 2rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
    &:hover {
    transform: scale(1.1);
    }

  div {
    display: block;
    width: 2rem;
    height: 0.25rem;
    background: #d0d6f9;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  .first {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  .second {
    opacity: ${({ open }) => (open ? '0' : '1')};
    transform: ${({ open }) => (open ? 'translateX(-5px)' : 'translateX(0)')};
  }

  .third {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div className='first' />
        <div className='second' />
        <div className='third' />
      </StyledBurger>
    </div>
  )
}

export default Burger
