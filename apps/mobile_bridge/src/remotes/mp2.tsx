// ./src/remotes/Remote1App.tsx
import { forwardRef, type ComponentProps } from 'react';
import { createRemoteAppComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/runtime';
import { LoadingComponent, ErrorFallback } from '../components/RemoteComponents';
import type { AppProps } from '@mf-types/mobile_project2/export-app';

const RemoteApp = createRemoteAppComponent({
  loader: () => loadRemote('mobile_project2/export-app'),
  loading: <LoadingComponent />,
  fallback: ErrorFallback,
});

type BridgeProps = Partial<
  Pick<
    ComponentProps<typeof RemoteApp>,
    'style' | 'className' | 'loading' | 'fallback' | 'moduleName' | 'basename' | 'memoryRoute'
  >
>;

export const Mobile_project2App = forwardRef<
  HTMLDivElement,
  AppProps & BridgeProps
>((props, ref) => <RemoteApp {...props} ref={ref} />);