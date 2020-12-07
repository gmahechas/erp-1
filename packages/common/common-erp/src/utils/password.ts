import bcrypt from 'bcrypt';

export const toHash = async (password: string, saltRounds: number) => {
  return await bcrypt.hash(password, saltRounds);
}

export const compareHash = async (suppliedPassword: string, storedPassword: string) => {
  return await bcrypt.compare(suppliedPassword, storedPassword);
}