import Repository from "../repositories/user.repository";

async function main() {
  const repo = new Repository();
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

  repo.getAll().then(console.log);

}

main();
