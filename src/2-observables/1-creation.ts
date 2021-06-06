import { Observable } from "rxjs";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Creation");

/**
 * TODO: 01 - Create Observable
 *
 * @Observable Represents the idea of an invokable collection of future
 * values or events.
 */
const observable$ = new Observable<string>((subscribe) => {
  logger.debug({ title: "Observable started" });

  let count = 0;
  /**
   * TODO: 02 - Attach values
   *
   * Dispatches values to subscribers.
   */
  setInterval(() => subscribe.next(`A ${count++}`), 1000);

  /**
   * TODO: 03 - Error throw
   *
   * When an error is thrown the observable is terminated and stops
   * sending values.
   *
   * The stream is interrupted, but the block of code is still running
   */
  // subscribe.error(new Error("Failed"));
  // subscribe.next("B 1");
  // console.log(debug("After error..."));

  /**
   * TODO: 04 - Notify user when complete
   *
   * Notify the observer that the observable has terminated.
   *
   * Used when observable is finite.
   */
  setTimeout(() => subscribe.complete(), 5000);
});

/**
 * TODO: 05 - Subscribe on chanel
 *
 * The signature represents a disposable object, Generally the execution
 * of Observable.
 *
 * The subscription receives 3 callbacks or an object literal.
 *
 * @callback next -> Value emitted by observable.
 * @callback error -> Error emitted by observable.
 * @callback complete -> Notify if observable has been terminated!
 * There are finite and infinite observables.
 */
const subscription1 = observable$.subscribe({
  next: (next) => {
    logger.debug({ title: "S1 Next", message: next });
  },
  error: (error) => {
    logger.debug({ title: "S1 Error", message: error });
    return error;
  },
  complete: () => {
    logger.debug({ title: "S1 Complete", message: "Completed" });
  },
});

const subscription2 = observable$.subscribe({
  next: (next) => {
    logger.debug({ title: "S2 Next", message: next });
  },
  error: (error) => {
    logger.debug({ title: "S2 Error", message: error });
    return error;
  },
  complete: () => {
    logger.debug({ title: "S2 Complete", message: "Completed" });
  },
});

/**
 * TODO: 06 Unsubscribe
 *
 * The unsubscribe method discards the previously created unobservable
 * signature.
 *
 * In this example, the finalization method in line 44 will not even be
 * executed, because the finalization will occur earlier for "subscription1".
 *
 * The execution of "subscription2" will continue until it is complete.
 */
setTimeout(() => subscription1.unsubscribe(), 4000);
