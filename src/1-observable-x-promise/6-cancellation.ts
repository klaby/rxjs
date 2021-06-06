import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Cancellation");

let unsubscribed: boolean = false;
let users$: Observable<User>;

/**
 * TODO: Cancellation
 */

/**
 * @name Promises
 *
 * Promises do not have a native form of cancellation. The result can be
 * obtained using libraries.
 */

/**
 * #
 * #
 */

/**
 * @name Observable
 *
 * Unsubscribe with observables.
 */
users$ = new Observable((observer) => {
  logger.debug({ mode: "observable", title: "Observable started..." });

  const interval = setInterval(() => {
    if (unsubscribed) {
      // Uncomment the error-busting cleanup function.
      logger.error("Memory Leak");
    }

    observer.next(USERS[0]);
  }, 1000);

  /**
   * @WARN
   *
   * If a wipe function is not provided it will cause memory leak problems
   * even if unsubscribe.
   */
  return () => clearInterval(interval);
});

const subscriber = users$.subscribe((result) => {
  logger.debug({ mode: "observable", message: result.name });
});

setTimeout(() => {
  logger.warn("Unsubscribe");
  subscriber.unsubscribe();
  unsubscribed = true;
}, 5000);
