const express = require('express');
const basicModel = require('../model/basicData'); 

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', async (req, res) => {
    try {
        const data = await basicModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send('Error retrieving data'); 
    }
});

router.post('/add', async (req, res) => {
    try {
        const item = req.body;
        const data = new basicModel(item);
        await data.save();
        res.redirect('/');
    } catch (error) {
        res.status(400).send('Error adding data: ' + error.message);
    }
});


router.delete('/delete/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const deleted = await basicModel.findByIdAndDelete(id);
        if (!deleted) throw 'Data not found';
        res.status(200).send('Delete Successful');
    } catch (error) {
        res.status(404).send(error);
    }
})

router.put('/edit/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const edited = await basicModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!edited) throw 'Data not found';
        res.status(200).send('Update Successful');
    } catch (error) {
        res.status(404).send(error);
    }
})





module.exports = router;
