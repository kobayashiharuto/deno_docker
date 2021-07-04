import { Client } from "https://deno.land/x/mysql@v2.9.0/mod.ts";

const hostname = Deno.env.get("MYSQL_HOST") as string;
const username = Deno.env.get("MYSQL_USER") as string;
const db = Deno.env.get("MYSQL_DB") as string;
const password = Deno.env.get("MYSQL_PASSWORD") as string;
const port = parseInt(Deno.env.get("MYSQL_PORT") as string);

//mysqlに接続する
const client = await new Client().connect({
  hostname: hostname,
  username: username,
  db: db,
  password: password,
  port: port,
});

// user情報を全て取得する
const getUsers = async ({ response }: { response: any }) => {
  try {
    const data = await client.query(
      `SELECT * FROM users;`,
    );
    if (data.toString() === "") {
      response.status = 404;
      response.body = {
        success: false,
        msg: "No Product found",
      };
    } else {
      response.body = {
        success: true,
        data: data,
      };
    }
  } catch (error) {
    response.status = 500;
    response.body = {
      success: false,
      msg: `${hostname}`,
    };
  }
};

export { getUsers };
