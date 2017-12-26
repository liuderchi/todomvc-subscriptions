// @flow
import * as React from 'react';
import Header from './Header';
import MainSection from './MainSection';

const App = () => (
  <div>
    <div className="todoapp">
      <Header />
      <MainSection />
    </div>

    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>
        Created by{' '}
        <a href="https://github.com/evenchange4/todomvc-subscriptions">
          Michael Hsu
        </a>
      </p>
    </footer>
  </div>
);

export default App;
