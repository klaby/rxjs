import { Subject } from "rxjs";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Subject");

/**
 * @name Subject
 *
 * Subjects is a type of multicast observable.
 *
 * @MULTICAST
 * @ASYNC
 */
const subscriber = new Subject<string>();

/**
 * Subject follows the logical callback table returning on default creation
 * of an Observable.
 *
 * The difference from Subject to a normal Observable is that it is multicast.
 */
subscriber.next("A");
subscriber.next("B");

/**
 * In this example of enrollment, the values A and B will not be shown because
 * emitted happened before enrollment.
 */
subscriber.subscribe({
  next: (result) => {
    logger.debug({ message: result });
  },
  error: (error) => {
    logger.error(error);
  },
  complete: () => {
    logger.debug({ message: "Completed" });
  },
});

/**
 * Values C and D will be displayed because values will be posted after
 * registration.
 */
subscriber.next("C");

setTimeout(() => {
  subscriber.next("D");
}, 3000);
