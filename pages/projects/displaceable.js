import Displaceable from 'displaceable'
import React from 'react'
import styled from 'styled-components'

import SectionDescription from '../../components/typography/SectionDescription'
import SectionTitle from '../../components/typography/SectionTitle'

const Page = styled.article``

const Trigger = styled.section`
  border-bottom: solid 1px #e8e8e8;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const SmallTrigger = styled.section`
  background: #9137f2;
  border-radius: 5px;
  height: 10rem;
  position: absolute;
  right: 4rem;
  top: 4rem;
  width: 10rem;
`

const Header = styled.header`
  margin: 0 auto;
  max-width: 82rem;
  padding: 50px 25px;
  text-align: center;
`

const DisplaceableImage = styled.img`
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1);
  max-height: 50rem;
  max-width: 50rem;
  position: absolute;
`

class DisplaceablePage extends React.Component {
  componentDidMount() {
    const settings = {
      skewFactor: 3,
      trigger: document.getElementById('trigger-01')
    }

    const displaceableOne = new Displaceable([
      document.getElementById('displaceable-image-01'),
      document.getElementById('displaceable-image-02'),
      document.getElementById('displaceable-image-03')
    ], settings)

    const displaceableTwo = new Displaceable([
      document.getElementById('displaceable-image-04'),
      document.getElementById('displaceable-image-05')
    ], { trigger: document.getElementById('trigger-02') })
  }

  render() {
    return (
      <Page>
        <Trigger id="trigger-01">
          <Header>
            <SectionTitle heading="h1">
              Displaceable.js
            </SectionTitle>
            <SectionDescription>
              A tiny, performant and configurable JavaScript library that handles super smooth element displacement on
              mouse move. Check it out on <a href="https://github.com/dinohamzic/displaceable" rel="noopener noreferrer" target="_blank">
                GitHub
              </a>.
            </SectionDescription>
          </Header>
          <DisplaceableImage
            data-displace-factor="2"
            id="displaceable-image-01"
            src="/static/displaceable/01.jpg"
            style={{ left: `calc(50% - 500px)`, top: `calc(50% - 300px)` }}
          />
          <DisplaceableImage
            data-displace-factor="2"
            id="displaceable-image-02"
            src="/static/displaceable/02.jpg"
            style={{ left: `calc(50% - 100px)`, top: `calc(50% - 200px)` }}
          />
          <DisplaceableImage
            data-displace-factor="5"
            id="displaceable-image-03"
            src="/static/displaceable/03.jpg"
            style={{ left: `calc(50% - 300px)`, top: `calc(50% - 100px)` }}
          />
        </Trigger>
        <Trigger>
          <Header>
            <SectionDescription>
              Displace.js can be configured to use a custom displacement trigger. Try it out: hover over the purple
              square and see what happens.
            </SectionDescription>
          </Header>
          <SmallTrigger id="trigger-02" />
          <DisplaceableImage
            data-displace-factor="2"
            id="displaceable-image-04"
            src="/static/displaceable/03.jpg"
            style={{ left: `calc(50% - 500px)`, top: `calc(50% - 270px)` }}
          />
          <DisplaceableImage
            data-displace-factor="5"
            id="displaceable-image-05"
            src="/static/displaceable/02.jpg"
            style={{ left: `calc(50% - 50px)`, top: `calc(50% - 250px)` }}
          />
        </Trigger>
      </Page>
    )
  }
}

export default DisplaceablePage
