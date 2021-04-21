import { createLogger, transports, format } from 'winston';
const { combine, timestamp, printf, colorize, metadata } = format;

export const logger = createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A'
    }),
    colorize({
      all: true
    }),
    metadata({
      fillExcept: ['level', 'message', 'timestamp']
    }),
    printf(({ metadata, level, message, timestamp }) => {
      let metadataMessage = '';
      if (Object.keys(metadata).length) {
        metadataMessage = `\r\n${JSON.stringify(metadata, null, 1)}`
      }
      return `${timestamp} ${level}: ${message}${metadataMessage}`;
    }),
  ),
  transports: [
    new transports.Console({
      level: 'silly'
    })
  ],
  exitOnError: false
});