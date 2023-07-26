### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router is a popular library in React that provides routing capabilities for single-page applications. Its main purpose is to enable navigation and rendering of different components based on the current URL or user interactions, without the need for a full page refresh. Essentially it allows us to forgo the request-response cycle from browser to server.

- What is a single page application?

  An SPA is a type of web application that operates within a single web page and dynamically updates the content as the user interacts with the application, without the need to load entirely new pages from the server. The initial HTML, CSS, and JavaScript resources are loaded when the application is first accessed, and subsequent interactions or data fetching are handled asynchronously using JavaScript.

- What are some differences between client side and server side routing?

  **Client-Side Routing**:
  -Responsible for handling navigation on the client-side
  -Does not require full page reloads, resulting in smoother experience
  -Faster performance after initial load
  -Better offline support due to caching data on client-side

  **Server-Side Routing**:
  -Handled by the server, with each navigation resulting in full page reloads.
  -Potentially slower user experience due to reloading entire pages from the server
  -Limited offline support

- What are two ways of handling redirects with React Router? When would you use each?

  **Declarative Redirects**:
  Achieved using the '<Redirect>' component provided by React Router. This method involves specifying the redirection destination within the component tree. When the '<Redirect>' component is rendered, it automatically navigates the user to the specified URL. These are best used when the redirection condition is based on a specific state or prop within the component, or used within a <Switch> for 404-like cases.

  **Programmatic Redirects**:
  This involves using the history object provided by React Router to navigate to a different route programmatically. The 'history' object allows you to control the navigation through various methods like 'push', 'replace', and 'goBack'. These redirects are more suitable when the redirection logic depends on certain events, user interactions, or application state changes. For example, you might redirect a user after they submit a form or after a certain action is completed. 

- What are two different ways to handle page-not-found user experiences using React Router? 

  You can define a catch-all route at the end of your route configuration that matches any undefined routes. This catch-all route should point to a default or fallback component that will be displayed when the user accesses a non-existent route. This can either be a redirect to a desired page, or a custom 404 page to display to the users. 


- How do you grab URL parameters from within a component using React Router?

  Using the 'useParams' hook. 

- What is context in React? When would you use it?

  In React, context is a feature that allows data to be passed through the component tree without having to pass props manually at every level. It provides a way to share state or data between components that are not directly connected in the component hierarchy.

  Context is useful in scenarios where you have data or state that needs to be shared between multiple components that are not directly related in the component tree. It can help avoid prop drilling (passing props down multiple levels), making the code cleaner and more maintainable. Some common use cases for context include:

    Theming: Sharing theme-related data (colors, fonts, etc.) throughout the application.
    Authentication: Providing authentication information (user data, login/logout functions) to multiple components.
    Language localization: Sharing the selected language across the application.
    Global state management: Sharing application-wide state (e.g., shopping cart items) without using a state management library like Redux.

- Describe some differences between class-based components and function
  components in React.

  Class-based components are created using ES6 classes and extend the 'React.Component' class, and define the 'render' method to return JSX, so the syntax is quite different. State management is also different in that class-based components use 'this.state' to manage state, with 'this' often having to be bound prior to state manipulation to ensure the proper context. Class based components also have access to lifecycle methods like 'componentDidMount' and 'componentWillUnmount' to allow oyou to perform actions at specific point in the component's lifecycle. Functionaly components have 'useEffect' to achieve the same results. Class-based components are also much more verbose compared to functional components. 

- What are some of the problems that hooks were designed to solve?

  Firstly, hooks have done wonders for the simplification of otherwise complex class-based components, where code maintenance and debugging were more challenging. They made the management of component lifecycle methods much more straight forward and manipulatable. There was once an inability to reuse stateful logic, but hooks have allowed for the inheritance of such logic with much less abstraction. Hooks have greatly improved the readability of code, like eliminating the 'wrapper hell'. 