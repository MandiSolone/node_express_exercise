import express from "express"; 
import products from "../controllers/products.contollers";

const router = express.Router(); 

router.get("/:id?", async (req, res, next) => {
    try {
        let { id } = req.params; 
        let data; 

        if (id) { 
            [data] = await products.findOne(parseInt(id)); 
            console.log(data); 
        } else {
            data = await products.findAll(); 
        } 
        res.json(data);
    } catch (err){
        next(err); 
    }
}); 

router.post("/", async (req, res, next) => {
    try {
        let newProduct = req.body; 
        let data = await products.addOne(newProduct); 
        res.json(data); 
    } catch (err){
        next(err); 
    }
});  

router.put("/:id", async (req, res, next) => {
    try {
        let { id } = req.params; 
        let updated = req.body; 
        let data = await products.updateOne(updated, id); 
        res.json(data); 
    } catch (err){
        next(err); 
    }
}); 

router.delete("/:id", async (req, res, next) => {
    try {
        let { id } = req.params; 
        let data = await products.removeOne(id);
        res.json(data); 
        } catch (err){
        next(err); 
    }
});  

export default router; 