// import '../styles/tailwind.css' // not allowed *
// import '../styles/tailwind-generated.css' // generated tailwind css file test not allowed *
// * https://nextjs.org/docs/messages/css-global

import { mountWithStyles } from '../cypress/support/commands'
import Post from './post'

it('renders a post', () => {
  mountWithStyles(
    <Post title="Hello World">
      <p>This is some sample content</p>
    </Post>
  )
  cy.get('h1').contains('Hello World')
  cy.get('p').contains('This is some sample content')
  cy.contains('TailwindCSS red text').should('have.css', 'color', 'rgb(239, 68, 68)')
  cy.contains('EmotionCSS blue text').should('have.css', 'color', 'rgb(0, 0, 255)')
})
