import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Fontend Best Practices</h1>
          <nav>
            <a href="/">Home</a>
          </nav>
        </header>

        <main class="container">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/flakey-api" component="app-flakey-api" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
