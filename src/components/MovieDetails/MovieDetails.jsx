import { useParams } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams();
  console.log("movieId:", movieId);

  return (
    <div className='comp purple'>
      <h1>MovieDetails Component</h1>
    </div>
  );
}

export default MovieDetails;
