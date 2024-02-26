import { Request, Response } from 'express';
import Producto from '../models/producto';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll()

    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `There is no product with the id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `There is no product with the id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: 'Removed Product'
        })
    }

}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        await Producto.create(body);
        res.json({
            msg: `Added Producto`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps error`
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {

        const product = await Producto.findByPk(id);

    if(product) {
        await product.update(body);
        res.json({
            msg: 'Updated Product'
        })

    } else {
        res.status(404).json({
            msg: `There is no product with the id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps error`
        })
    }

    
}