import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

function SectionTitle({ children, className, heading }) {
  const H = heading
  return (
    <H className={className}>
      {children}
    </H>
  )
}

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  className: PropTypes.string,
  heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

SectionTitle.defaultProps = {
  heading: 'h2'
}

const StyledSectionTitle = styled(SectionTitle)`
  color: #111;
  font-family: Sailec;
  font-size: 3.1rem;
  font-weight: 700;
  &:first-child {
    margin-top: 0;
  }
  > strong {
    text-decoration: underline;
  }
`

export default StyledSectionTitle
