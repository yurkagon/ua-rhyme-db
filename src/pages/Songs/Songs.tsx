
const songs = [
  {
    id: 1,
    artist: "Artist 1",
    songTitle: "Song Title 1",
    shortDescription: "Short description of song 1."
  },
  {
    id: 2,
    artist: "Artist 2",
    songTitle: "Song Title 2",
    shortDescription: "Short description of song 2."
  },
  {
    id: 3,
    artist: "Artist 3",
    songTitle: "Song Title 3",
    shortDescription: "Short description of song 3."
  },
];

export const Component = () => {
  return (
    <div className="container">
      <h1>Song List</h1>
      <div className="row">
        {songs.map(song => (
          <div key={song.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{song.songTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{song.artist}</h6>
                <p className="card-text">{song.shortDescription}</p>
              </div>
            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

