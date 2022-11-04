import * as bcrypt from 'bcrypt';
import { appConstant } from '../constants/app.constant';


export const hash = async (str: string): Promise<string> => {
  const salt = await bcrypt.genSalt(appConstant.saltOrRounds);

  return (await bcrypt.hash(str, salt));
};

export const compare = async (str: string, hashed: string): Promise<boolean> => {
  return (await bcrypt.compare(str, hashed));
};
