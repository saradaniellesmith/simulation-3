module.exports = {
    editSong: (req, res) => {
        const db = req.app.get("db");
        db
        .editSong(req.body.song, req.body.artist, req.body.album)
        .then((response) => {
            res.status(200).json(response);
        }).catch((err) => {
            res.status(500).json(err);
        })
    }


}