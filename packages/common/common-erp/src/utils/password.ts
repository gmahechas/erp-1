import bcrypt from 'bcrypt';
/* import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util'; */

/* const scryptAsync = promisify(scrypt); */

export class Password {

  static saltRounds = 10;

  static async toHash(password: string) {
    return await bcrypt.hash(password, this.saltRounds);
    /* const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString('hex')}.${salt}`; */
  }

  static async compare(suppliedPassword: string, storedPassword: string) {
    return await bcrypt.compare(suppliedPassword, storedPassword);
    /* const [ hashedPassword, salt ] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
    return buf.toString('hex') === hashedPassword; */
  }

}