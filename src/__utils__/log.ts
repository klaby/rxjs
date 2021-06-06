import {
  bgCyan,
  bgMagenta,
  cyan,
  cyanBright,
  magenta,
  white,
  yellowBright,
} from "chalk";

type Log = {
  log(mode: "p" | "o", ...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
};

const log = console.log;

export const createLog = (resource: string): Log => ({
  info: (...args: any[]): string => cyanBright(...args),

  debug: (...args: any[]): string => yellowBright(...args),

  log: (mode: "p" | "o", ...args: any[]): void => {
    log(
      mode === "p"
        ? cyan(`\n${bgCyan(white.bold(" Promise "))} => ${resource}\n`)
        : magenta(
            `\n${bgMagenta(white.bold(" Observable "))} => ${resource}\n`
          ),
      ...args
    );
  },
});
