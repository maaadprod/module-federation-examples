import React, { useState } from "react";
import remoteComponent from "./utils/remoteComponent";


const RemoteButton = React.lazy(() => remoteComponent("app2/Button"));
const RemoteButton2 = React.lazy(() => remoteComponent("app3/Button2"));

const App = () => {
  const [show, setShow] = useState(false);
  return (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <button onClick={() => setShow(true)}>Load component dynamically</button>
    { show && <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
}<React.Suspense fallback="Loading Button 2">
      <RemoteButton2 />
    </React.Suspense>
  </div>
);
  }

export default App;
