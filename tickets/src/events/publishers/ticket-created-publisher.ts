import { Publisher, Subjects, TicketCreatedEvent } from "@tutorials-for-sh/common/build";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
