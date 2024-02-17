const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child1" },
    [React.createElement(
        "h1",
        { id: "heading", className: "h1" },
        "This is an h1 tag!"
      ),
      React.createElement(
        "h2",
        { id: "heading2", className: "h1" },
        "This is an h2 tag!"
      )]
  ),React.createElement(
    "div",
    { id: "child2" },
    [React.createElement(
        "h1",
        { id: "heading", className: "h1" },
        "This is an h1 tag!"
      ),
      React.createElement(
        "h2",
        { id: "heading2", className: "h1" },
        "This is an h2 tag!"
      )]
  )]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
