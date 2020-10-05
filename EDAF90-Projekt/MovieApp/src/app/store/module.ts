import { NgModule } from '@angular/core';
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from '@angular-redux/store';

// Redux ecosystem stuff.
import { FluxStandardAction } from 'flux-standard-action';
// import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable-es6-compat';

// The top-level reducers and epics that make up our app's logic.
import { RootEpics } from './epics';
import { AppState, initialAppState } from './model';
import { rootReducer } from './reducers';

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    const epicMiddleware = createEpicMiddleware<
      FluxStandardAction<any, any>,
      FluxStandardAction<any, any>,
      AppState
    >();

    store.configureStore(
      rootReducer,
      initialAppState(),
      [epicMiddleware],
      // configure store typings conflict with devTools typings
      (devTools.isEnabled() ? [devTools.enhancer()] : []) as any,
    );

    epicMiddleware.run(rootEpics.createEpics());
  }
}
