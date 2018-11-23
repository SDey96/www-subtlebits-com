import styled from 'styled-components'

import SectionAnchor from '../buttons/SectionAnchor'

const SectionAnchors = styled.div`
  margin-top: 4.5rem;
  ${SectionAnchor}:nth-child(1) { left: -1rem; }
  ${SectionAnchor}:nth-child(2) { left: 5rem; }
  ${SectionAnchor}:nth-child(3) { left: 2.5rem; }
  @media (max-width: 1050px) {
    ${SectionAnchor}:nth-child(1) { left: -1rem; }
    ${SectionAnchor}:nth-child(2) { left: 1.5rem; }
    ${SectionAnchor}:nth-child(3) { left: .5rem; }
  }
`

export default SectionAnchors
