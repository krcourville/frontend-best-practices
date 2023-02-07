import { Component, h, Fragment } from '@stencil/core';
import { ApiClient } from './api-client';
import { getLogger } from '../../logging';

const logger = getLogger('app-flakey-api.component');

const apiClient = new ApiClient();

@Component({
  tag: 'app-flakey-api',
  shadow: true,
})
export class AppFlakeyApi {
  apiDelayEl!: HTMLInputElement;
  clientTimeoutEl!: HTMLInputElement;
  responseCodeEl!: HTMLInputElement;

  onSubmit = async (evt: Event) => {
    evt.preventDefault();
    const request = {
      apiDelay: this.apiDelayEl.valueAsNumber,
      clientTimeout: this.clientTimeoutEl.valueAsNumber,
      responseCode: this.responseCodeEl.valueAsNumber,
    };
    logger.info('BEGIN: Request', request);
    try {
      const res = await apiClient.getFlakey(request);
      logger.info('RESPONSE', res);
    } catch (error) {
      logger.error('REQUEST ERROR', error);
    } finally {
      logger.info('END: Request');
    }
  };

  render() {
    return (
      <Fragment>
        <h2>Flakey Api Handling</h2>

        <h3>Demonstrates</h3>

        <ol>
          <li>API request timeout/abort</li>
          <li>API retry strategy using exponential</li>
        </ol>
        <h3>Why important?</h3>
        <p>
          API clients tend to await requests indefinitely by default, which provides for bad UX and
          may place unecessary load on web servers. We also do not want to hammer APIs with
          immediate retries and make the problem worse.
        </p>
        <h3>Improvements</h3>
        <ol>
          <li>Add "jitter" to the exponential back-off to further stagger the retry requests</li>
        </ol>
        <form action="#" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Call Flakey API</legend>
            <p>
              <label htmlFor="api-delay">API Delay (in ms)</label>
              <div>
                <input
                  type="number"
                  name="api-delay"
                  id="api-delay"
                  value="1000"
                  ref={el => (this.apiDelayEl = el as HTMLInputElement)}
                />
              </div>
            </p>
            <p>
              <label htmlFor="client-timeout">Client Timeout (in ms)</label>
              <div>
                <input
                  type="number"
                  name="client-timeout"
                  id="client-timeout"
                  value="5000"
                  ref={el => (this.clientTimeoutEl = el as HTMLInputElement)}
                />
              </div>
            </p>
            <p>
              <label htmlFor="response-code">HTTP Response Code</label>
              <div>
                <input
                  type="number"
                  name="response-code"
                  id="response-code"
                  value="200"
                  ref={el => (this.responseCodeEl = el as HTMLInputElement)}
                />
              </div>
            </p>
            <p>
              <button type="submit">Request</button>
            </p>
          </fieldset>
        </form>
        <app-log-entries></app-log-entries>
      </Fragment>
    );
  }
}
