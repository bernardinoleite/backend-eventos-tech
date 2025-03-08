import { Subscriber } from "../entities/Subscription"

export interface ISubscriber {
    email: string
    created_at: Date
}

export interface ISubscriberRepository {

    create(email: string): Promise<void>
    findByEmail(email: string): Promise<ISubscriber | null>

}