import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

const router = Router();

// PRODUCT
router.get('/product', getProducts);
router.get('/product/:id', [body('id'), handleInputErrors], getOneProduct);
router.put('/product/:id', [body('id'), handleInputErrors], updateProduct);
router.post('/product', body('name').isString(), createProduct);
router.delete('/product/:id', deleteProduct);

// UPDATE
router.get('/update', getUpdates);
router.get('/update/:id', getOneUpdate);
router.put('/update/:id', 
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(),  
    updateUpdate
);
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate
);
router.delete('/update/:id', deleteUpdate);

// UPDATE POINT
router.get('/update-point', () => {

});

router.get('/update-point/:id', () => {

});

router.put('/update-point/:id', 
    body('name').optional().isString(),
    body('description').optional().isString(),
    () => {}
);

router.post('/update-point', 
    body('name').optional().isString(),
    body('description').optional().isString(),
    body('updatedId').exists().optional(),
    () => {}
);

router.delete('/update/:id', () => {

});

export default router;