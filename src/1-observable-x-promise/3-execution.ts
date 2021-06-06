import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Execution");

let users: Promise<User>;
let users$: Observable<User>;

/**
 * TODO: Execution
 */

/**
 * @name Promise
 *
 * Promises execute immediately.
 *
 * @EAGER
 */
users = new Promise((resolve) => {
  /**
   * Promise is executed and resolved at creation time.
   */
  logger.debug({ mode: "promise", title: "Promise executed..." });
  resolve(USERS[0]);
});

/**
 * @name Observable
 *
 * Observables run on demand.
 *
 * @LAZY
 */
users$ = new Observable((observable) => {
  /**
   * The observable is performed only when the consumers.
   */
  logger.debug({ mode: "observable", title: "Observable executed..." });
  observable.next(USERS[0]);
});
