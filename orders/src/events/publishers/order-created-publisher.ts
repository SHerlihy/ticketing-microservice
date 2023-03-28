import { Publisher, OrderCreatedEvent, Subjects } from "tutorials-for-sh/common/build";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
