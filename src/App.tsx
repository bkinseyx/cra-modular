import React from 'react';

interface AppProps {
  appName: string;
  appData: {};
}

export interface AppComponentProps {
  appData: {};
}

const capitalize = (s: string): string => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const App: React.FC<AppProps> = ({ appName, appData }) => {
  if (!appName) {
    return <div>No App Name</div>;
  }
  const AppComponent = React.lazy(() =>
    import(`./apps/${appName}/${capitalize(appName)}.tsx`),
  );
  return (
    <div>
      this is app name: {appName}
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppComponent appData={appData} />
      </React.Suspense>
    </div>
  );
};
export default App;
