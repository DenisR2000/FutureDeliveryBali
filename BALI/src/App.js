import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/pages/App.css'
import NavigationInHeader from './layouts/NavigationInHeader'
import NavigationInFooter from './layouts/NavigationInFooter';
import { useLayoutEffect } from 'react';
import { addClassForEachDevice } from './utils/device';
import { Suspense } from 'react';

function App() {

  useLayoutEffect(() => {
    addClassForEachDevice()
  }, [])

  return (
    <>
      <Suspense fallback={<h1>Loading ...</h1>}>
          <NavigationInHeader />
          <NavigationInFooter />
      </Suspense>
    </>
  );
}

export default App;
