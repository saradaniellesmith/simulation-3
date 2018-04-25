module.exports = {

    getSongs: (req, res) => {
        const db = req.app.get("db");
        db
        // query here 
        .getSongs([req.query.id])
        .then(response => {
            res.status(200).json(response)
        }).catch((err) => res.status(500).json(err));
    }

}