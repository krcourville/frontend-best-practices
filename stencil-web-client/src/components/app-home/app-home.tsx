import { Component, h, Fragment } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <Fragment>
        <h2>Demonstrations</h2>
        <ol>
          <li>
            <a href="./flakey-api">Flakey API Handling</a>
          </li>
        </ol>
      </Fragment>
    );
  }
}
