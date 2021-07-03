import { Application } from "https://deno.land/x/oak@v7.7.0/mod.ts";
import { router } from "./router.ts";

const PORT = 8000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT} ...`);
app.listen({ port: PORT });
