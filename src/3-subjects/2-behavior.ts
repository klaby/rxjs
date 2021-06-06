import { BehaviorSubject } from "rxjs";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Subject");

/**
 * @name BehaviorSubject
 *
 * The Behavior Subject initializes with a value.
 *
 * If the subscription happens after the values are emitted, the observer
 * will be the last emitted value.
 */
const subscriber = new BehaviorSubject<string>("A");

/**
 * TODO: SB01
 *
 * Both the initial value and the emitted values will be displayed.
 */
subscriber.subscribe((result) => {
  logger.debug({ title: "First subscription", message: result });
});

subscriber.next("B");
subscriber.next("C");

/**
 * TODO: SB02
 *
 * Only the C value will be emitted.
 */
subscriber.subscribe((result) => {
  logger.debug({ title: "Subscription after value emit", message: result });
});
