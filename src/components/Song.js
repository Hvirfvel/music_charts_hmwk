const Song = ({chartNumber, title, artist, cover, audio}) => {
    return (
        <li>
            <img src={cover} width="100px" height="100px" alt="" />
            <h2>{chartNumber}</h2>
            <p>{title}</p>
            <p>{artist}</p>
            <audio controls src={audio}></audio>
        </li>
    );

}

export default Song;