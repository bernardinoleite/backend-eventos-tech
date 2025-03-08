import { Request, Router, Response } from "express";
import { subscribeController } from "../modules/subscription/useCases/subscriber";

const subscribeRouter = Router();

subscribeRouter.post("/", (request: Request, response: Response) => {
    subscribeController.handle(request, response)
})

export { subscribeRouter }