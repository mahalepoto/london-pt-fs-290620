import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Form from "./components/Form";
import Content from "./components/Content";
import Footer from "./components/Footer";

/**
 * Exercises:
 *
 * 1. Create a Navigation component, import and use it here.
 * 2. Create a Header component, import and use it here.
 * 3. Create a Form component, import and use it here.
 * 4. Create a Content component, import and use it here.
 * 5. Create a Footer component, import and use it here.
 *
 * NOTE: Layout for each component is up to you.
 */

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Form></Form>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
