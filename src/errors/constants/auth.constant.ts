import { User } from "../../users/user.entity";

export const authError = {
  isExistEmail: {
    code: 'auth-2000',
    field: 'email',
    resource: User.name
  }
}
