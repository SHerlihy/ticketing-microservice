import { Subjects, Publisher, PaymentCreatedEvent } from "tutorials-for-sh/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
