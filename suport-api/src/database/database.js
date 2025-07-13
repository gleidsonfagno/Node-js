// Ele permite usar métodos como readFile() de forma assíncrona
import fs from "node:fs/promises";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    // ler o arquivo
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data); // agora armazena os dados
      })
      .catch(() => {
        this.#persist();
      });
  }

  //  escreve e salvando
  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  // insere os dados
  insert(table, data) {
    // ferificamos se esite a tabela dentro do banco
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist(); // grava a mudança no arquivo JSON
  }

  // lista os dados
  select(tabela, filters) {
    let data = this.#database[tabela] ?? [];

    if (filters) {
      data = data.filter((row) => {
       return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
        // console.log(test)
      });

      // console.log(data)
    }

    return data;
  }

  // atualizar os dados
  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id)

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data
      }
    }

    // salvar as modificaçoes
    this.#persist()
    console.log(rowIndex)
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id)

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }

}
