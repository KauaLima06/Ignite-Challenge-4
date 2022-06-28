import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const checkIfUserAlreadyExist = this.usersRepository.findByEmail(email);
    if (checkIfUserAlreadyExist) {
      throw new Error("User already exist");
    }
    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
