import * as SC from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <SC.Ul>
        <li>
          <SC.Link to="/">Home</SC.Link>
        </li>
        <li>
          <SC.Link to="/movies">Movies</SC.Link>
        </li>
        {/* <li>
          <SC.Link to="/search">Search</SC.Link>
        </li> */}
      </SC.Ul>
    </nav>
  );
};

export default Navigation;
