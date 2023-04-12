import {
  Application,
  Router,
  Status,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const router = new Router();

const port = parseInt(config().PORT) || 3000;

router.get("/", (ctx) => {
  ctx.response.body = "ok ngab.";
});

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

// static content
app.use(async (context, next) => {
  const root = `${Deno.cwd()}/public`;
  try {
    await context.send({ root });
  } catch {
    next();
  }
});

// page not found
app.use((context) => {
  context.response.status = Status.NotFound;
  context.response.body = `"${context.request.url}" not found`;
});

console.info(`CORS-enabled web server listening on port ${port}`);
await app.listen({ port });
