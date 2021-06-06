import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Encapsulation");

let users: Promise<User>;
let users$: Observable<User>;

/**
 * TODO: Multiple Values
 */

/**
 * @name Promise
 *
 * Promises don't solve multiple values.
 */
users = new Promise((resolve) => {
  resolve(USERS[0]); // Resolved
  resolve(USERS[1]); // Not Resolved
});

/**
 * @name Observable
 *
 * Observables solve multiple values.
 */
users$ = new Observable((observable) => {
  observable.next(USERS[0]); // Resolved
  observable.next(USERS[1]); // Resolved
});

users.then((result) => {
  logger.debug({ mode: "promise", message: result.name });
});
users$.subscribe((result) => {
  logger.debug({ mode: "observable", message: result.name });
});
