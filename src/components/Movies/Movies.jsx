import { Outlet } from 'react-router-dom';

function Movies({ movies }) {
  // const { movies } = useParams();
  console.log(movies);

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <Outlet />
    </div>
  );
}

export default Movies;
