import React, { Component } from "react";
import BookListProvider from "./Contexts/BookContext";
import Navbar from "./Component/Navbar";
import Booklists from "./Component/Booklists";
import BookForm from "./Component/BookFrom";
import Example01 from "./Component/Example1";
import Example02 from "./Component/Example2";
import Example03 from "./Component/Example3";
import Example04 from "./Component/Example4";
import Example05 from "./Component/Example5";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookListProvider>
          <Navbar />
          <BookForm />
          <Booklists />
        
          <h4>Example 1: </h4>
          <Example01 />
          <h4>Example 2: </h4>
          <Example02 />
          <h4>Example 3: </h4>
          <Example03 />
          <h4>Example 4: </h4>
          <Example04 />
          <h4>Example 5: </h4>
          <Example05 />
        </BookListProvider>
      </div>
    );
  }
}

export default App;
