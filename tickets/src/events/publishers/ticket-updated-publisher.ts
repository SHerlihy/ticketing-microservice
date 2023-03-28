import { Publisher, Subjects, TicketUpdatedEvent } from "tutorials-for-sh/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
