import { IUser } from "./../../interfaces/users/index";
import { AppError } from "./../../errors/AppError";
import { UserEntity } from "./../../entities/user.entity";
import AppDataSource from "../../data-source";

export const deleteUserService = async (userId: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(UserEntity);

  const foundUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!foundUser) {
    throw new AppError("User not found.", 404);
  }

  if (foundUser.isActive === false) {
    throw new AppError("Can't delete user who is not active", 400);
  }
  await userRepository.softDelete(foundUser.id);
  const user = await userRepository.save({ ...foundUser, isActive: false });

  return user;
};
