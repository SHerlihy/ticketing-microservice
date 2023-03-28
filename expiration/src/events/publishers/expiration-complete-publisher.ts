import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "tutorials-for-sh/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
