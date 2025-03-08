
import { AppError } from "../../../../shared/error/appError";
import { ISubscriberRepository } from "../../repositories/ISubscriberRepository";


export class SubscribeUseCase {

    constructor(private subscriberRepository: ISubscriberRepository) { }

    async execute(email: string): Promise<void> {

        const subscribeAlreadyExists = await this.subscriberRepository.findByEmail(email)

        if (subscribeAlreadyExists) {
            throw new AppError("Subscriber already exists", 409)
        }

        await this.subscriberRepository.create(email)
    }

}