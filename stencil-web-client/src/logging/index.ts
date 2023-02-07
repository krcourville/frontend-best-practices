/**
 * Establish a logging facade that should work in browser and nodejs
 * Default log level for all loggers can be set by adding a local storage
 * value of LOG_LEVEL = 'trace' | 'debug' | 'info' | 'warn' | 'error'.
 * Default level is 'warn'
 */

import log from 'loglevel';
import prefix from 'loglevel-plugin-prefix';

import { logstore } from '../state/log-store';

let initialized = false;

const getLogger = (name: string | symbol) => {
  if (!initialized) {
    const config: prefix.LoglevelPluginPrefixOptions = {
      format: (level, name, timestamp) => `${timestamp} [${name}] ${level} -`
    };
    logstore.apply(log);
    prefix.reg(log);
    prefix.apply(log, config);
    initialized = true;
  }

  return log.getLogger(name);
}

export {
  getLogger
}
