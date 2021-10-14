import { Link, BrowserRouter } from 'react-router-dom';

export default function Root(props) {
  return (
    <BrowserRouter>
      <header>
        <h1>{props.name} is mounted!</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/todo">Todo</Link>
            </li>

            <li>
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}
