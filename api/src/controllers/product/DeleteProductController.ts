import { Request, Response, NextFunction } from "express";
import { productRepository } from "../../data-source";
export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await productRepository.delete({ id: req.params.id });
    res.status(200).send({ data: data });
  } catch (e) {
    console.log(e);
  }
};
