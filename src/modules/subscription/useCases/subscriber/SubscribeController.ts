import { Request, Response } from "express";
import { SubscribeUseCase } from "./SubscribeUseCase";


export class SubscribeController {
    constructor(private subscribeUseCase: SubscribeUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.body

        try {
            await this.subscribeUseCase.execute(email)

            return response.status(201).send()

        } catch (error) {
            return response.status(error.statusCode || 400).json({
                message: error.message || "Unexpected error"
            })
        }

    }
}