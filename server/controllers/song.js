const { addSong } = require('../services/song');
const router = require('express').Router();
// const jwtDecode = require('jwt-decode');

// router.get('/', (req, res) => {
//     console.log(1234);
//     const data = req.body;
//     const token = jwtDecode(data.token);
//     console.log(token);
//     try {
//         const username = token.username;
//         res.status(200).json({ "username": username });
//         res.end();
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });
router.post('/', async (req, res) => {
    const data = req.body;

    try {
        console.log(data);
        const userId = req?.user?._id;
        const song = await addSong(data, userId);
        //TODO update songs added by users
        res.status(201).json(song);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;