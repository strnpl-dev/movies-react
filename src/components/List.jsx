import { Card } from "./Card";

function List(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Card key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Nothing Found</h3>
      )}
    </div>
  );
}

export { List };
