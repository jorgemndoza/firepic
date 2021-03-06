import Link from 'next/link';
import { Main } from '../components';

export default function Custom404({  }) {
  return (
    <Main>
      <h1>404 - That page does not seem to exist...</h1>
      <iframe
        src='https://giphy.com/embed/l2JehQ2GitHGdVG9y'
        width='480'
        height='362'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <Link href='/'>
        <button variant='contained' color='primary'>Go home</button>
      </Link>
    </Main>
  );
}
