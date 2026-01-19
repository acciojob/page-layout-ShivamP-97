import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout"; // Make sure this path is correct

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout
        header={<h1>My Website Header</h1>}
        footer={<p>© 2023 My Website</p>}
      >
        <p>Welcome to my website. Here is the main content!</p>
      </PageLayout>
    </div>
  );
};

export default App;
