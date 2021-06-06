import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { User, USERS } from "../__mock__/users.mock";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Share");

const TIME = 4000;

let users$: Observable<User>;

/**
 * TODO: Share
 *
 * By default observables are @UNICAST, to get similar behavior to promises
 * use the "share" operator.
 */

users$ = new Observable((observable) => {
  logger.debug({ title: "Observable started..." });
  setTimeout(() => observable.next(USERS[0]), TIME);
});

const subscribe = (): void => {
  users$.subscribe((result) => {
    logger.debug({ message: result.name });
  });
};

/**
 * @name UNICAST
 *
 *  🟢
 * [O-S] Started
 *  ⬇️
 * [O-S] Started
 *  ⬇️
 * [O-S] Started
 *  ⬇️
 * [O-E] Emitted after @TIME ms
 *  ⬇️
 * [O-E] Emitted after @TIME ms
 *  ⬇️
 * [O-E] Emitted after @TIME ms
 *  🔴
 */

/**
 * When you register, you will always start observable and display
 * the result.
 */
// subscribe();
// subscribe();
// subscribe();

/**
 * @name MULTICAST
 *
 *  🟢
 * [O-S] Started
 *  ⬇️
 * All [O-E] Emitted after @TIME ms
 *  🔴
 */
users$ = users$.pipe(share());

/**
 * When subscribing to observable, the result will be issued immediately after
 * the call, as the "share" operator created a shared state.
 */
// subscribe();
// subscribe();
// subscribe();
