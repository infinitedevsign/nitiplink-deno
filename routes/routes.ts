import { Router } from "../deps.ts";
import { Context } from "./../types.ts";

// import controller
import { checkController } from '../controller/healthController.ts';

const router: Router = new Router();

router.get("/", checkController);

export { router };
