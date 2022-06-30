import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const id = user_id.toString();
    const users = this.listAllUsersUseCase.execute({ user_id: id });
    if (users == null) {
      return response.status(400).send();
    }
    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
