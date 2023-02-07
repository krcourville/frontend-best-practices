import log from 'loglevel';
import { createStore } from "@stencil/store";

const { state, set } = createStore({
  logEntries: []
});

export interface LogStoreOptions {
  maxEntries?: number;
}

function apply(log: log.Logger, options: LogStoreOptions = {}) {
  const originalFactory = log.methodFactory;
  const maxEntries = options.maxEntries ?? 1000;

  log.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName);

    return function (message, ...data) {
      set('logEntries', [
        {
          message,
          data
        },
        ...state.logEntries.slice(0, maxEntries)
      ])
      rawMethod(message, ...data);
    }
  }
}

function clearLogEntries() {
  set('logEntries', []);
}

export const logstore = {
  state,
  apply,
  clearLogEntries
}
