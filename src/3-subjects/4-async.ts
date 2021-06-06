import { AsyncSubject } from "rxjs";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Subject");

/**
 * @name BehaviorSubject
 *
 * It only emits the last value and only after completion.
 */
const subscriber = new AsyncSubject<string>();

subscriber.next("A");
subscriber.next("B");
subscriber.next("C");

/**
 * TODO: SB01
 *
 * The first entry will not receive any observers.
 */
subscriber.subscribe((result) => {
  logger.debug({ title: "SB01", message: result });
});

/**
 * SB01 should now emits the value "C".
 */
setTimeout(() => {
  subscriber.complete();
}, 1000);
