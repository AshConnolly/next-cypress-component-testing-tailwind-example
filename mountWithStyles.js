import { mount } from '@cypress/react'

export const mountWithStyles = passedJsx =>
  mount(passedJsx, { stylesheet: '/styles/tailwind-generated.css' })
