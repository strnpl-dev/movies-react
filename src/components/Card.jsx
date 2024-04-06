function Card(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            alt="Movie Name"
            src={`https://fakeimg.pl/300x450?text=${title}`}
          />
        ) : (
          <img className="activator" alt="Movie Name" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year}
          <span className="right">{type}</span>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
}

export { Card };
