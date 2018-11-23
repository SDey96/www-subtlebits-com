import styled, { css } from 'styled-components'

const Section = styled.section`
  margin: 0 auto;
  max-width: 95rem;
  padding: 9rem 2.5rem;
  ${props => props.withSeparator && css`
    border-top: solid 0.5rem #f2f2f2;
  `}
`

export default Section
