import { css } from '@emotion/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div
      // prettier-ignore
      css={css`margin: 0; padding: 30px; border: 2px solid red;`} // [1]
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
