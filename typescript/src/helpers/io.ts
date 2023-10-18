import  * as readline from 'readline-sync';

export class Io {
  public static input(message?: string): string {
    return readline.question(message);
  }
}