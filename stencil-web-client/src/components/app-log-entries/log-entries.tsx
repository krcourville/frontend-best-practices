import { Component, h, Fragment } from '@stencil/core';
import { logstore } from '../../state/log-store';

@Component({
  tag: 'app-log-entries',
  shadow: true,
})
export class AppFlakeyApi {
  render() {
    return (
      <Fragment>
        <hgroup>
          <h3>Log Entries ({logstore.state.logEntries.length})</h3>
          <div>
            <small>
              <i>newest to oldest</i>
            </small>
            <div>
              <button type="button" onClick={() => logstore.clearLogEntries()}>
                Clear
              </button>
            </div>
          </div>
        </hgroup>
        <pre>
          {logstore.state.logEntries.map(entry => (
            <Fragment>
              <div>{entry.message}</div>
              {entry.data?.length > 0 && <div>{JSON.stringify(entry.data, null, 2)}</div>}
            </Fragment>
          ))}
        </pre>
      </Fragment>
    );
  }
}
