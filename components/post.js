import { css } from '@emotion/react'

export default function Post({ title, children }) {
  return (
    <div className="main">
      <h1>{title}</h1>
      {children}
      <p className="text-red-500">TailwindCSS red text</p>
      <p
        css={css`
          color: blue;
        `}
      >
        EmotionCSS blue text
      </p>
    </div>
  )
}
