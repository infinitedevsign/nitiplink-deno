/**
 * Exports all project dependencies from the file.
 */

export * as log from 'https://deno.land/std@0.177.0/log/mod.ts';
export { Application, Router, Status, Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";
export { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
export { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";