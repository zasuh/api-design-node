import { Router } from 'express';

const router = Router();

// PRODUCT
router.get('/product', (req, res) => {
    res.json({ message: 'Hello' })
});

router.get('/product/:id', () => {

});

router.put('/product/:id', () => {

});

router.post('/product', () => {

});

router.delete('/product/:id', () => {

});

// UPDATE
router.get('/update', () => {

});

router.get('/update/:id', () => {

});

router.put('/update/:id', () => {

});

router.post('/update', () => {

});

router.delete('/update/:id', () => {

});

// UPDATE POINT
router.get('/update-point', () => {

});

router.get('/update-point/:id', () => {

});

router.put('/update-point/:id', () => {

});

router.post('/update-point', () => {

});

router.delete('/update/:id', () => {

});

export default router;