import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { createLog } from "../__utils__/log";

const { log, info } = createLog("Execution");

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
  log("p", info("Promise executed..."));
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
  log("p", info("Observable executed..."));
  observable.next(USERS[0]);
});
