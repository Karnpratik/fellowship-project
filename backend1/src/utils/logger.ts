import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({filename:"logs/info.log",level:"info"}),
    new winston.transports.File({filename:"logs/error.log",level:"error"}),
  ],
});
