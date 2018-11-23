import React from 'react'
import styled from 'styled-components'

import SectionAnchor from '../components/buttons/SectionAnchor'
import { Column, Footer } from '../components/layout/Footer'
import Section from '../components/layout/Section'
import SectionAnchors from '../components/layout/SectionAnchors'
import { Description, List, ListItem, Period, Title } from '../components/general/List'
import SectionDescription from '../components/typography/SectionDescription'
import SectionTitle from '../components/typography/SectionTitle'

const Page = styled.article``

const IndexPage = () => (
  <Page>
    <Section>
      <SectionTitle heading="h1">
        Dino Hamzić &mdash; <strong>Software Engineer</strong>
      </SectionTitle>
      <SectionDescription>
        I`m a twenty-six years old frontend engineer based in Sarajevo, Bosnia and Herzegovina. With over five years of
        software development experience, I worked on dozens of projects for companies spanning from small local shops,
        Silicon Valley startups, to established international companies. I speak fluently English, Italian and Bosnian.
        Feel free to contact me for any type of enquiry at the email below.
      </SectionDescription>
      <SectionDescription>
        &mdash; <a href="mailto:dino@subtlebits.com">dino@subtlebits.com</a>
      </SectionDescription>
      <SectionAnchors>
        <SectionAnchor style="square" target="#work">
          Work Experience
        </SectionAnchor>
        <SectionAnchor style="circle" target="#projects">
          Personal Projects
        </SectionAnchor>
        <SectionAnchor style="line" target="#technologies">
          Technologies
        </SectionAnchor>
      </SectionAnchors>
    </Section>

    <Section id="work" withSeparator>
      <SectionTitle>
        Work Experience
      </SectionTitle>
      <SectionDescription>
        Even though I started my career as a full stack developer, over the years I gradually moved to a full time
        frontend development role. The combination of design, interactivity, and raw user feedback are aspects of the
        job that always fascinated me. My plan for the future is to continuously expand my knowledge in this part of
        the development spectrum, and to become an active open source contributor.
      </SectionDescription>
      <SectionDescription>
        Below is a list of the companies with whom I`m working, or worked with in the past, and a succinct description
        of the roles in which I have partaken.
      </SectionDescription>
      <List>
        <ListItem>
          <Title>
            Full Time: Frontend Engineer &mdash; <a href="http://symphony.is/" rel="noopener noreferrer" target="_blank">
              Symphony ~ Culture Driven Technology House
            </a>
          </Title>
          <Description>
            As a frontend developer working at Symphony, I have the privilege of working on very dynamic and
            challenging projects with prestigious clients from all over the world, especially from the Silicon Valley region.
          </Description>
          <Period>
            January 2018 &mdash; Present
          </Period>
        </ListItem>
        <ListItem>
          <Title>
            Remote Contractor: Frontend Development &mdash; <a href="https://pickledpepper.studio/" rel="noopener noreferrer" target="_blank">
              Pickled Pepper ~ Creative Agency
            </a>
          </Title>
          <Description>
            Worked on the creation of promotional websites by being provided design and interaction specifications, and
            loose animation requirements.
          </Description>
          <Period>
            Throughout 2018, by engagement
          </Period>
        </ListItem>
        <ListItem>
          <Title>
            Remote Contractor: Frontend Development &mdash; <a href="https://www.preezie.com/" rel="noopener noreferrer" target="_blank">
              Preezie ~ Virtual Sale Assistant
            </a>
          </Title>
          <Description>
            Worked on the creation of an enterprise facing dashboard written in Angular, and on the development of an
            embeddable custom chat bot widget written in React.
          </Description>
          <Period>
            Throughout 2017 and 2018, by engagement
          </Period>
        </ListItem>
        <ListItem>
          <Title>
            Full Time: Full Stack Engineer &amp; UI/UX Designer &mdash; <a href="http://east.ba/" rel="noopener noreferrer" target="_blank">
              .east ~ Web and Software Agency
            </a>
          </Title>
          <Description>
            Worked on a wide range of projects, spanning from WordPress promotional websites and web shops, to fully
            custom web applications written in Angular, React, Laravel and Node.js, and even design proposals for the
            aforementioned businesses. In the late stages, I took roles as lead developer and mentor.
          </Description>
          <Period>
            September 2015 &mdash; December 2017
          </Period>
        </ListItem>
        <ListItem>
          <Title>
            Freelancer: Full Stack Engineer &amp; UI/UX Designer &mdash; <a href="http://entvo.com/" rel="noopener noreferrer" target="_blank">
              Entvo ~ Web and Mobile Development Studio
            </a>
          </Title>
          <Description>
            In partnership with a friend, we operated under this brand as freelancers working for local startups and
            more traditional clients, creating promotional websites, web shops and small custom web applications.
          </Description>
          <Period>
            June 2013 &mdash; August 2015
          </Period>
        </ListItem>
        <ListItem>
          <Title>
            Bachelor of Computer Science with Minor in Electrical Engineering &mdash; <a href="https://ssst.edu.ba/" rel="noopener noreferrer" target="_blank">
              Sarajevo School of Science and Technology
            </a>
          </Title>
          <Period>
            2011 &mdash; 2015
          </Period>
        </ListItem>
      </List>
    </Section>

    <Section id="projects" withSeparator>
      <SectionTitle>
        Personal Projects
      </SectionTitle>
      <List>
        <ListItem>
          <Title>
            subtlebits.com &mdash; <a href="#" rel="noopener noreferrer" target="_blank">
              github.com/dinohamzic/www-subtlebits-com
            </a>
          </Title>
          <Description>
            My personal website, used as a cv/portfolio. <i>Subtle</i> as in <i>`fine or delicate in meaning or
            intent`</i>, and <i>bits</i> as in <i>`bits of code or interface design`</i>. This project is being
            developed using React, Next.js and styled-components.
          </Description>
        </ListItem>
      </List>
    </Section>

    <Section id="technologies" withSeparator>
      <SectionTitle>
        Technologies
      </SectionTitle>
      <SectionDescription>
        After static HTML and CSS templates, custom WordPress plugins and themes, REST APIs written on top of Laravel
        (PHP) and Express (Node.js), in the last two years I moved my focus solely on SPA (single page application)
        frontend development. Below is a list of technologies which I used in production projects in the recent past.
      </SectionDescription>
      <List>
        <ListItem>
          <Title>
            React &mdash; <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
              reactjs.org
            </a>
          </Title>
          <Description>
            With over two years of continuos development experience, from small promotional websites to big dashboards
            with hundreds of different components, React is my technology of choice for almost any kind of frontend
            development project.
          </Description>
        </ListItem>
        <ListItem>
          <Title>
            Next.js &mdash; <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">
              nextjs.org
            </a>
          </Title>
          <Description>
            As my go-to solution for server-side rendered React application, I successfully used Next.js in several
            production projects. Fast, light, and easy to use, it helped me achieve a drastic increase in loading
            times, while keeping a clean and modular React codebase, with the advantages of a server rendered one.
          </Description>
        </ListItem>
        <ListItem>
          <Title>
            TypeScript &mdash; <a href="https://www.typescriptlang.org/" rel="noopener noreferrer" target="_blank">
              typescriptlang.org
            </a>
          </Title>
          <Description>
            Even though it`s a recent addition to my toolset, I`m already seeing the benefits of adopting TypeScript in
            my workflow. Keeping sanity and consistency in a big codebase or team is always a big challenge, and with
            TypeScript it has become much easier.
          </Description>
        </ListItem>
        <ListItem>
          <Title>
            D3.js &mdash; <a href="https://d3js.org/" rel="noopener noreferrer" target="_blank">
              d3js.org
            </a>
          </Title>
          <Description>
            Using D3.js, I assisted in the development of a fully custom chart visualization library, mainly working on
            animation and user interactivity, which is currently being adopted by software used by some of the biggest
            automotive brands in the world.
          </Description>
        </ListItem>
        <ListItem>
          <Title>
            HTML &amp; CSS (SASS)
          </Title>
          <Description>
            From interactive dashboard widgets, to complex landing pages with responsive layouts and fluid animations,
            I extensively used HTML and CSS on all the projects I worked on over the last several years.
          </Description>
        </ListItem>
      </List>
    </Section>

    <Section>
      <Footer>
        <Column>
          &copy; subtlebits.com // Dino Hamzic ~ Sarajevo
        </Column>
        <Column>
          say hi: <a href="mailto:dino@subtlebits.com">dino@subtlebits.com</a>
        </Column>
      </Footer>
    </Section>
  </Page>
)

export default IndexPage
