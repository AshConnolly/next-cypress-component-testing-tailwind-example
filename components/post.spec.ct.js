import { mount } from '@cypress/react'
import Post from './post'
// import '../styles/globals.css' // not allowed
// import '../globals-generated.css' // generated tailwinf css file not allowed

it('renders a post', () => {
  mount(
    <Post title="Hello World">
      <p>This is some sample content</p>
    </Post>,
  )
  cy.get('h1').contains('Hello World')
  cy.get('p').contains('This is some sample content')
})
