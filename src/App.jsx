import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import LayoutEditor from './components/LayoutEditor';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-2xl font-bold mb-4">Email Builder</h1>
          <LayoutEditor />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
