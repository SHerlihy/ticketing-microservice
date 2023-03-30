import { Subjects, Publisher, PaymentCreatedEvent } from "@tutorials-for-sh/common/build";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
