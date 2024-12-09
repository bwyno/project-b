import { Request, Response, NextFunction } from "express";
import { productRepository } from "../../data-source";
export const updateById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await productRepository.findOneBy({
      id: req.params.id,
    });
    if (!data) {
      res.status(404).json({ data: { error: "Resource not found" } });
    } else {
      req.body.name && (data.name = req.body.name);
      req.body.price && (data.price = Number(req.body.price));
      req.body.stockAvailable &&
        (data.stockAvailable = Number(req.body.stockAvailable));
      req.body.imgSrc && (data.imgSrc = req.body.imgSrc);
      req.body.description && (data.description = req.body.description);
      req.body.otherImgSrcs && (data.otherImgSrcs = req.body.otherImgSrcs);
      await productRepository.save(data);
      res.status(200).json({ data: data });
    }
  } catch (e) {
    console.log(e);
  }
};
