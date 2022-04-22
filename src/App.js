import './App.less';
import Header from './components/Header';
import Footer from './components/Footer';
import { Component } from 'react';
import ScrollTopBtn from './components/ScrollTopBtn';
import AppRoute from './app/route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
        </Header>

        <AppRoute {...this.props} />

        <Footer>
        </Footer>

        <ScrollTopBtn></ScrollTopBtn>
      </div>
    );
  }
}

export default App;
