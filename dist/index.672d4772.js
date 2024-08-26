const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("h1", {
        id: "child1"
    }, "I'm an h1 tag"),
    React.createElement("h2", {
        id: "child2"
    }, "I'm an h2 tag")
]);
// Assuming there is a DOM element with id 'root' to render the React elements into
const root = ReactDOM.render(parent, document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.672d4772.js.map
