import { Request, Response, NextFunction } from "express";
import { productRepository } from "../../data-source";
export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await productRepository.findOneBy({ id: req.params.id });
    res.status(200).send({ data: data });
  } catch (e) {
    console.log(e);
  }
};
