import { AppError } from "./../../errors/AppError";
import { userWithoutPassword } from "./../../schemas/user.schema";
import { UserEntity } from "./../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUser, IUserUpdate } from "./../../interfaces/users/index";

export const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(UserEntity);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (!findUser) {
    throw new AppError("User not found.", 404);
  }

  if (userData.isAdm !== undefined) {
    throw new AppError("The field 'isAdm' can't be updated.", 401);
  }
  if (userData.isActive !== undefined) {
    throw new AppError("The field 'isActive' can't be updated.", 401);
  }
  if (userData.id !== undefined) {
    throw new AppError("The field 'id' can't be updated.", 401);
  }

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const updatedUserToShow = await userWithoutPassword.validate(updatedUser, {
    stripUnknown: true,
  });

  return updatedUserToShow;
};
