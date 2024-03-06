import { Io } from "../helpers/io";

await Io.input(async (line) => {
  console.log('Aqui o que você digitou:', line);
}, 'Digite algo: ');


