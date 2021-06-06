import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { createLog } from "../__utils__/log";

const { log } = createLog("Encapsulation");

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

// users.then((result) => log("p", result));
// users$.subscribe((result) => log("o", result));
