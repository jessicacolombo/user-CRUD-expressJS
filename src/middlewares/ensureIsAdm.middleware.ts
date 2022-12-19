import { AppError } from "./../errors/AppError";
import { UserEntity } from "./../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";

export const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(UserEntity);

  const user = await userRepository.findOneBy({
    id: req.user.id,
  });

  if (!user.isAdm) {
    throw new AppError("Must be Adm to access.", 403);
  }

  next();
};
