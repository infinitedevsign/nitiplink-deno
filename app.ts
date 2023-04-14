import { Application, Status, oakCors } from './deps.ts';
import { router } from "./routes/routes.ts";
import { API_HOST, PORT } from './config/environment.ts';
import { Context } from './types.ts';
import { logger } from './util/logger.ts';

const port = parseInt(PORT) || 3000;

router.get("/", (ctx) => {
  ctx.response.body = "ok ngab.";
});

const app = new Application<Context>();
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

logger.info(`Application is running on: ${API_HOST}:${PORT}`);
await app.listen({ port });
