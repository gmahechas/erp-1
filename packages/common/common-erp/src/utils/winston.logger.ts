import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf, colorize, metadata } = format;

const logger = createLogger({
  level: 'silly',
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    metadata({
      fillExcept: ['level', 'message', 'timestamp']
    }),
    printf(info => {
      const { level, message, metadata, timestamp } = info;
      let metadataMessage = '';
      if (Object.keys(metadata).length) {
        metadataMessage = `\r\n${JSON.stringify(metadata, null, 1)}`
      }
      return `${timestamp} [${level}]: ${message}${metadataMessage}`;
    }),
    colorize({
      all: true
    })
  ),
  transports: [
    new transports.Console()
  ],
  exitOnError: false
});

console.error = (message: any, metadata: any[]) => logger.error(message, metadata);
console.warn = (message: any, metadata: any[]) => logger.warn(message, metadata);
console.info = (message: any, metadata: any[]) => logger.info(message, metadata);
console.debug = (message: any, metadata: any[]) => logger.debug(message, metadata);

export { logger as winstonLogger };