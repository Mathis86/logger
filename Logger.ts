import chalk from 'chalk'
import { DateTime } from 'luxon'

export default class Logger {
   static info(text: string) {
      this.consoleLog(text, "INFO")
   }

   static warn(text: string) {
      this.consoleLog(text, "WARN")
   }

   static error(text: string) {
      this.consoleLog(text, "ERROR")
   }

   private static consoleLog(text: string, level: 'INFO' | 'WARN' | 'ERROR') {
      let colorFn = (t: string) => t
      switch (level) {
         case "WARN": colorFn = chalk.yellow; break;
         case "ERROR": colorFn = (text: string) => chalk.red(chalk.bold(text)); break;
      }
      console.log(colorFn(`[${level}] ${DateTime.now().toFormat('yyyy-mm-dd HH:mm:ss')} > ${text}`))
   }
}