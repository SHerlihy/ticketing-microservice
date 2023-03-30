import { Publisher, Subjects, TicketUpdatedEvent } from "@tutorials-for-sh/common/build";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
