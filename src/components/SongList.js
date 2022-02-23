import Song from "./Song";

const SongList = ({songs}) => {

    const songNodes = songs.map((song, index) => {
        return (
            <Song
                chartNumber={index + 1}
                title={song["im:name"].label}
                artist={song["im:artist"].label}
                cover={song["im:image"][2].label}
                audio={song.link[1].attributes.href}
                key={song.id.attributes["im:id"]}
            />
        );
    })

    return (
        <>
        {songNodes}
        </>
    );
}

export default SongList;