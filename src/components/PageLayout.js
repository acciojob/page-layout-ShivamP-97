import React from "react";

// PageLayout component
const PageLayout = ({ header, footer, children }) => {
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  );
};

export default PageLayout;
