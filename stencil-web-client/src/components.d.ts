/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppFlakeyApi {
    }
    interface AppHome {
    }
    interface AppLogEntries {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppFlakeyApiElement extends Components.AppFlakeyApi, HTMLStencilElement {
    }
    var HTMLAppFlakeyApiElement: {
        prototype: HTMLAppFlakeyApiElement;
        new (): HTMLAppFlakeyApiElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppLogEntriesElement extends Components.AppLogEntries, HTMLStencilElement {
    }
    var HTMLAppLogEntriesElement: {
        prototype: HTMLAppLogEntriesElement;
        new (): HTMLAppLogEntriesElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-flakey-api": HTMLAppFlakeyApiElement;
        "app-home": HTMLAppHomeElement;
        "app-log-entries": HTMLAppLogEntriesElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppFlakeyApi {
    }
    interface AppHome {
    }
    interface AppLogEntries {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-flakey-api": AppFlakeyApi;
        "app-home": AppHome;
        "app-log-entries": AppLogEntries;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-flakey-api": LocalJSX.AppFlakeyApi & JSXBase.HTMLAttributes<HTMLAppFlakeyApiElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-log-entries": LocalJSX.AppLogEntries & JSXBase.HTMLAttributes<HTMLAppLogEntriesElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
