1. When and why do we need Lazy() component.
ans- Lazy() component is used when we need to import our component dynamically.it will not load the code for component untill that component is invoked. 
it helps us in "chunking", by this we can reduce the size of our "index.js" file(which is made by bundler in production code).
so ehat happens is when we use React.lazy() to import a component and that componet will not be rendered untill it is called.and that componet will have a new (diffrent) bundle.

