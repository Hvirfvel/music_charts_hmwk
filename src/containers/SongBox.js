import { useEffect, useState } from "react";
import SongList from "../components/SongList";

const SongBox = () => {

    const [songs, setSongs] = useState([]);

    useEffect(()=> {
        fetchSongs();
    }, [])

    const fetchSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <>
            <h1>Top 20 songs</h1>
            <SongList songs={songs}/>
        </>
    );
}

export default SongBox;