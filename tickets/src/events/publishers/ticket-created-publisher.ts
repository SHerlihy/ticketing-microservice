import { Publisher, Subjects, TicketCreatedEvent } from "tutorials-for-sh/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
