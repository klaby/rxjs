import { Observable } from "rxjs";
import { User, USERS } from "../__mock__/users.mock";
import { createLog } from "../__utils__/log";

const TIME = 5000;

const { log, info, debug } = createLog("Share");

let users: Promise<User>;
let users$: Observable<User>;

/**
 * TODO: Share
 *
 *  P-S - Promise start
 *  P-E - Promise emit
 *
 *  O-S - Observable start
 *  O-E - Observable emit
 *
 *  🟢
 * [P-S] Started
 *  ⬇️
 * [O-S] Started end [P-E] Emitted after @TIME ms
 *  ⬇️
 * [O-E] Emitted after @TIME ms
 *  🔴
 */

/**
 * @name Promise
 *
 * Promises are shared.
 *
 * It maintains a shared state, where the resolved value is immediately
 * displayed in the then call, not respecting the defined timeout value.
 *
 * The block is executed only once.
 *
 * @MULTICAST
 */
users = new Promise((resolve) => {
  log("p", info("Promise started..."));
  setTimeout(() => resolve(USERS[0]), TIME);
});

/**
 * @name Observable
 *
 * Observables may or may not be shared.
 *
 * The result is always started and displayed.
 *
 * The block is executed whenever there is an inscription.
 *
 * @MULTICAST (Only using "share" operator)
 * @UNICAST
 */
users$ = new Observable((observable) => {
  log("o", info("Observable started..."));
  setTimeout(() => observable.next(USERS[0]), TIME);
});

const resolveAll = (): void => {
  /**
   * Promise subscribe
   *
   * When executing the resolveAll function, this registration instantly
   * will display the value because the promise was resolved at creation
   * time.
   */
  users.then((result) => {
    log("p", "Emit:", result.name);
  });

  /**
   * Observable subscribe
   *
   * When executing the resolveAll function, this inscription will start
   * observable and only after the specified @TIME ms will it display the
   * result.
   */
  users$.subscribe((result) => {
    log("o", "Emit:.", result.name);
  });
};

setTimeout(() => {
  console.log(debug("\nTimeout"));
  resolveAll();
}, TIME);
