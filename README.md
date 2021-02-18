### Introduction

Redux is a popular data store for JavaScript and React applications. It follows a central principle that data binding should flow in one direction and should be stored as a single source of truth. Redux gained popularity because of the simplicity of the design concept and the relatively small implementation.

Redux operates according to a few concepts. First, the store is a single object with fields for each selection of data. You update the data by dispatching an action that says how the data should change. You then interpret actions and update the data using reducers. Reducers are functions that apply actions to data and return a new state, instead of mutating the previous state.

In small applications, you may not need a global data store. You can use a mix of local state and context to manage state. But as your application scales, you may encounter situations where it would be valuable to store information centrally so that it will persist across routes and components. In that situation, Redux will give you a standard way to store and retrieve data in an organized manner.

In this tutorial, you’ll use Redux in a React application by building a bird watching test application. Users will be able to add birds they have seen and increment a bird each time they see it again. You’ll build a single data store, and you’ll create actions and reducers to update the store. You’ll then pull data into your components and dispatch new changes to update the data.