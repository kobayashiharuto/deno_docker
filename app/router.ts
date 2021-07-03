import { Router } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import { getBooks } from "./controller.ts";

const router = new Router();
router.get("/books", getBooks);
router.get("/", (context) => {
  context.response.body = "Hello API";
});

export { router };
