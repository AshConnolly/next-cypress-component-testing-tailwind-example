# Component Testing Example: Create Next App + Webpack 5

This repo shows how to get the following tools playing nicely together:

- Next.js 12 with webpack 5
- TailwindCSS
- Cypress Component Testing Library
- EmotionCSS (spoiler: this works out of the box with no additional setup)

The problem

- Tailwind global styles are imported in \_app.tsx
- Next.js only allows you to import css files in \_app.tsx
- Individual components are mounted outside of the application in their own Cypress spec test sandbox
- Which means they don't recieve global tailwind styles

The hacky solution: generate a tailwind.css file and add it to each test in a humble `<link />` tag

- Theres a script called `tailwind-generate` that uses the tailwidCSS CLI to generate the build-time tailwind.css file
- This runs before running any component tests
- Add a this css file to every spec test in a `<link />` tag
- To make things easier I've created a helper function called `mountWithStyles()` we can use instead of `mount()`, that mounts the component with the global styles. This saves us manually adding the `<link />` tag in each test:

```js
import { mount } from '@cypress/react'

export const mountWithStyles = passedJsx =>
  mount(passedJsx, { stylesheet: '/styles/tailwind-generated.css' })
```

usage:

```js
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
```
