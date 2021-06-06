import {
  bgCyan,
  bgMagenta,
  white,
  magentaBright,
  yellowBright,
  redBright,
  cyanBright,
  whiteBright,
} from "chalk";

type Mode = "observable" | "promise";
type DebugProps = {
  mode?: Mode;
  title?: string;
  message?: string;
  out?: any[];
};

const { log } = console;

const print = (message: string): void => {
  log(`
-----------------------------------
> ${message.toUpperCase()}
-----------------------------------
`);
};

export class Logger {
  private mode: Mode;

  constructor(private readonly resource: string) {
    this.mode = "observable";
    print(this.resource);
  }

  private header(message: string): this {
    const schema: Record<Mode, string> = {
      promise: `\n${bgCyan(white.bold("   Promise  "))}  ${whiteBright.bold(
        message
      )}\n`,
      observable: `\n${bgMagenta(
        white.bold(" Observable ")
      )}  ${whiteBright.bold(message)}\n`,
    };

    log(schema[this.mode]);

    return this;
  }

  private emitter(message: string): void {
    const value = ` > Emitted: ${whiteBright.bold(message)}`;

    const schema: Record<Mode, string> = {
      promise: cyanBright(value),
      observable: magentaBright(value),
    };

    log(schema[this.mode]);
  }

  private ln(message: string): void {
    log("\n", message, "\n");
  }

  public warn(message: string): void {
    this.ln(yellowBright(message));
  }

  public error(message: string): void {
    this.ln(redBright(message));
  }

  public debug({ mode, title, message, out }: DebugProps): void {
    this.mode = mode || this.mode;

    this.header(title || "");

    if (message) {
      this.emitter(message);
    }

    if (out) {
      log(...out);
    }
  }
}
