import { css } from '@emotion/react'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div
      // prettier-ignore
      css={css`margin: 0;`} // [1]
    >
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

// [1] stop style tag duplication This acts as like emotions CacheProvider  https://github.com/emotion-js/emotion/issues/1061#issuecomment-646168118
