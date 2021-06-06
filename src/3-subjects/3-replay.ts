import { ReplaySubject } from "rxjs";
import { Logger } from "../__utils__/log.util";

const logger = new Logger("Subject");

/**
 * @name ReplaySubject
 *
 * Receives a first args value for the size of the buffer.
 *
 * The subscriber receives the last values sent according to the defined
 * buffer size.
 *
 * @param bufferSize Buffer size that should be kept in memory.
 * @param time The time the data will be available.
 */
const subscriber = new ReplaySubject<string>(3);

subscriber.next("A");
subscriber.next("B");
subscriber.next("C");
subscriber.next("D");

/**
 * TODO: SB01
 *
 * In this example the observer will be "B", "C" and "D" values.
 *
 * When there is new data in the channel, it will receive the 3
 * values initially received plus the new values.
 */
subscriber.subscribe((result) => {
  logger.debug({ title: "First subscription", message: result });
});

/**
 * After sending the new data, the SB01 will receive "B","C","D","E"
 * and "F" values.
 */
subscriber.next("E");
subscriber.next("F");

/**
 * TODO: SB02
 *
 * In this example registration, the observer will be "D", "E"
 * and "F" values.
 */
subscriber.subscribe((result) => {
  logger.debug({ title: "Second subscription", message: result });
});
