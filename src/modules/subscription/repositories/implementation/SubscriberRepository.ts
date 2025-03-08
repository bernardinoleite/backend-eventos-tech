import { Subscriber } from "../../entities/Subscription";
import { ISubscriber, ISubscriberRepository } from "../ISubscriberRepository";

export class SubscriberRepository implements ISubscriberRepository {
    private repository: typeof Subscriber
    constructor() {
        this.repository = Subscriber
    }

    async create(email: string): Promise<void> {
        await this.repository.create({ email })
    }
    async findByEmail(email: string): Promise<ISubscriber | null> {
        const subscribe = await this.repository.findOne({ email })
        return subscribe
    }


}