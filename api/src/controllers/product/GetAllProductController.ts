import { Request, Response, NextFunction } from "express";
import { productRepository } from "../../data-source";
export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await productRepository.find();
    res.status(200).send({ data: data });
  } catch (e) {
    console.log(e);
  }
};
