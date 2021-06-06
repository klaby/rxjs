import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Encapsulation");

let users: Promise<User>;
let users$: Observable<User>;

/**
 * TODO: Encapsulation
 *
 * Encapsulation example.
 */

// Promise
users = new Promise((resolve) => {
  resolve(USERS[0]);
});

// Observable
users$ = new Observable((observable) => {
  observable.next(USERS[0]);
});

users.then((result) => {
  logger.debug({ mode: "promise", message: result.name });
});
users$.subscribe((result) => {
  logger.debug({ mode: "observable", message: result.name });
});
