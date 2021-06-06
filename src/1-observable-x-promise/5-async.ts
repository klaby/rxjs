import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { createLog } from "../__utils__/log";

const { log } = createLog("Async");

let users: Promise<User>;
let users$: Observable<User>;

/**
 * TODO: Async
 */

/**
 * @name Promise
 *
 * Promises are always asynchronous.
 *
 * @ASYNC
 */
users = new Promise((resolve) => {
  resolve(USERS[0]);
});

/**
 * @name Observable
 *
 * Observables can be synchronous and asynchronous.
 *
 * @SYNC
 * @ASYNC
 */
users$ = new Observable((observable) => {
  observable.next(USERS[0]);
});

const resolveAll = (): void => {
  users.then((result) => {
    log("p", "Emit:", result.name);
  });

  users$.subscribe((result) => {
    log("o", "Emit:", result.name);
  });
};

/**
 * Promise    - Async
 * Observable - Sync
 *
 *  🟢
 * [O-E] Emitted
 *  ⬇️
 * [P-E] Emitted
 *  🔴
 *
 * Even though the promise call happens before observable, the observable result
 * is emitted first synchronously.
 */
// resolveAll();

/**
 * Promise    - Async
 * Observable - Async
 *
 *  🟢
 * [P-E] Emitted
 *  ⬇️
 * [O-E] Emitted
 *  🔴
 *
 * In this example the observable outputs the value after 500ms asynchronously.
 */
users$ = new Observable((observable) => {
  setTimeout(() => observable.next(USERS[0]), 500);
});

// resolveAll();
