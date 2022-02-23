import './Song.css';

const Song = ({chartNumber, title, artist, cover, audio}) => {
    return (
        <li>
            <h2>{chartNumber}</h2>
            <img src={cover} width="100px" height="100px" alt="" />
            <section className="song-info">
                <p>{title}</p>
                <p>{artist}</p>
            </section>
            <audio controls src={audio}></audio>
        </li>
    );

}

export default Song;