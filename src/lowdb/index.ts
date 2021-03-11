import { default as lowDb } from "lowdb";
import { default as FileSync } from "lowdb/adapters/FileSync";
export interface IAboutMe {
  _id: string;
  description: string;
  language: string;
}

interface Schema {
  aboutme: Array<IAboutMe>;
  projects: string[];
  routes: string[];
}
export class DbService {
  private db!: lowDb.LowdbSync<Schema>;
  constructor() {
    this.initDatabase();
  }
  private initDatabase() {
    const adapter = new FileSync<Schema>("db.json");
    this.db = lowDb(adapter);
    this.db.defaults({ aboutme: [], projects: [], routes: [] }).write();
  }
  public getConnection(): lowDb.LowdbSync<Schema> {
    return this.db;
  }
}
// let db;
// export function createConnection() {
//   const adapter = new FileSync("db.json");
//   db = low(adapter);
//   db.defaults({ aboutme: [], projects: [], routes: [] }).write();
// }

// export const getConnection = () => db;
