import { Request, Response, NextFunction } from "express";
import { Product } from "../../entity/Product";
import { productRepository } from "../../data-source";
export const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = new Product();
    data.name = req.body.name;
    data.price = Number(req.body.price);
    data.stockAvailable = Number(req.body.stockAvailable);
    data.imgSrc = req.body.imgSrc;
    req.body.description && (data.description = req.body.description);
    req.body.otherImgSrcs && (data.otherImgSrcs = req.body.otherImgSrcs);
    await productRepository.save(data);
    res.status(201).json({ data: data });
  } catch (e) {
    console.log(e);
  }
};
