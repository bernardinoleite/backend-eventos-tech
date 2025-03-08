import { SubscribeUseCase } from "./SubscribeUseCase";
import { SubscribeController } from "./SubscribeController";
import { SubscriberRepository } from "../../repositories/implementation/SubscriberRepository";
const subscriberRepository = new SubscriberRepository();
const subscribeUseCase = new SubscribeUseCase(subscriberRepository);
const subscribeController = new SubscribeController(subscribeUseCase);

export { subscribeController }