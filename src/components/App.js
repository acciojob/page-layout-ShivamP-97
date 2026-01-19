import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout
        header={<h1>My Website Header</h1>}
        footer={<p>© 2023 My Website. All rights reserved.</p>}
      >
        <p>Welcome to my website</p>
      </PageLayout>
    </div>
  );
};

export default App;
