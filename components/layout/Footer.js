import styled from 'styled-components'

const Footer = styled.footer`
  font-size: 1.4rem;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  flex-grow: 1;
  &:last-child {
    text-align: right;
  }
  @media (max-width: 800px) {
    text-align: center;
    &:last-child {
      margin-top: 50px;
      text-align: center;
    }
  }
`

export { Column, Footer }
