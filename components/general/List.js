import styled from 'styled-components'

import { apercu, apercuMono } from '../../utils/fonts'

const List = styled.ul`
  font-family: ${apercu};
  list-style-type: none;
  margin: 4rem 0 2rem 0;
  padding: 0;
`

const ListItem = styled.li`
  border-width: 0;
  border-bottom-width: 1px;
  border-color: #e4e4e4;
  border-style: solid;
  margin: 0;
  padding: 3rem .2rem;
  &:first-child {
    border-top-width: 1px;
  }
`

const Title = styled.h3`
  font-weight: 300;
  font-size: 1.7rem;
  margin: 0;
  padding: 0;
`

const Description = styled.p`
  font-size: 1.3rem;
  margin: 1.5rem 0 0 0;
`

const Period = styled.p`
  font-family: ${apercuMono};
  font-size: 1rem;
  margin: 3rem 0 0 0;
  opacity: 0.5;
  text-transform: uppercase;
`

export { Description, List, ListItem, Period, Title }
