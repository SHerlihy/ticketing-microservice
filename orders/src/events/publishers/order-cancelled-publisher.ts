import { Subjects, Publisher, OrderCancelledEvent } from "@tutorials-for-sh/common/build";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
