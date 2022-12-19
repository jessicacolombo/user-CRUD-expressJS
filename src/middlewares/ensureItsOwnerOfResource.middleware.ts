import { AppError } from "./../errors/AppError";
import { UserEntity } from "./../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";

export const ensureItsOwnerOfResourceMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(UserEntity);

  const user = await userRepository.findOneBy({
    id: req.user.id,
  });

  if (req.params.id !== req.user.id && !user.isAdm) {
    throw new AppError("Must be Adm to complete", 401);
  }

  next();
};
