module.exports.renderStartup = function (db) {
    return function (req, res) {
        const id = req.params.id;
        db.collection("startups").findOne({
            id: id
        }).then(startup => {
            if (startup == null) {
                return res.status(404).send("not found")
            }

            res.render("startup", {
                startup: startup
            })
        }).catch(err => {
            console.error(err)
            res.status(500).send("Error")
        })
    }
}