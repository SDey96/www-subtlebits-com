import jump from 'jump.js'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import { sailec } from '../../utils/fonts'

function SectionAnchor({ className, children, target }) {
  return (
    <a className={className} href={target} onClick={() => jump(target)}>
      {children}
    </a>
  )
}

SectionAnchor.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  style: PropTypes.oneOf(['square', 'circle', 'line']),
  target: PropTypes.string.isRequired
}

const StyledSectionAnchor = styled(SectionAnchor)`
  border-radius: 2px;
  color: #fff;
  display: block;
  font-family: ${sailec};
  font-size: 1.7rem;
  line-height: 1;
  margin: 2.5rem 0;
  overflow: hidden;
  padding: 2.4rem 4rem;
  position: relative;
  text-decoration: none;
  transition: transform 0.5s;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    transform: scale(0.975);
  }
  &:before,
  &:after {
    background: #000;
    content: "";
    position: absolute;
    transform-origin: center;
    transition-duration: .5s;
    transition-property: opacity, transform;
  }
  ${props => props.style === 'square' && squareStyle}
  ${props => props.style === 'circle' && circleStyle}
  ${props => props.style === 'line' && lineStyle}
`

const squareStyle = css`
  background: #5a897a;
  &:before {
    height: 12rem;
    opacity: 0.08;
    right: 20%;
    top: 50%;
    transform: rotate(45deg) translateY(-50%);
    width: 12rem;
  }
  &:hover:before {
    transform: rotate(60deg) translateY(-80%) scale(0.9);
  }
`

const circleStyle = css`
  background: #4e878c;
  &:before,
  &:after {
    border-radius: 50%;
    opacity: 0.08;
  }
  &:before {
    height: 11rem;
    left: 35%;
    top: -100%;
    width: 11rem;
  }
  &:after {
    height: 12rem;
    right: 15%;
    top: 20%;
    width: 12rem;
  }
  &:hover:before {
    transform: translate(10%, 20%);
  }
  &:hover:after {
    transform: scale(0.9) translate(10%, -20%);
  }
`

const lineStyle = css`
  background: #628395;
  &:before,
  &:after {
    border-radius: 2px;
    height: 100%;
    opacity: 0.1;
    width: 1rem;
  }
  &:before {
    left: 60%;
    top: 30%;
  }
  &:after {
    left: 64%;
    top: -30%;
  }
  &:hover:before {
    transform: translateY(-50%) rotate(-5deg);
  }
  &:hover:after {
    transform: translateY(50%) rotate(-5deg);
  }
`

export default StyledSectionAnchor
