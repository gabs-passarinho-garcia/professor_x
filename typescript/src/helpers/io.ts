export class Io {
  public static async input(callback: (line: string) => Promise<void>, message?: string): Promise<void> {
    console.log(message);
    for await (const line of console) {
      if (line === '') {
        break;
      }
      
      await callback(line);
    }
  }
}