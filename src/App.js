import './App.css';
import Header from './components/Header';
import HomeBanner from './components/HomeLayouts/HomeBanner';
import HomeWhatWeDo from './components/HomeLayouts/HomeWhatWeDo';
import HomeSuccess from './components/HomeLayouts/HomeSuccess';
import HomeTeam from './components/HomeLayouts/HomeTeam';
import HomePeopleTalk from './components/HomeLayouts/HomePeopleTalk';
import HomeProjects from "./components/HomeLayouts/HomeProjects";
import HomeSubscribe from './components/HomeLayouts/HomeSubscribe';
import Footer from './components/Footer';
import { Component } from 'react';
import ScrollTopBtn from './components/ScrollTopBtn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
        </Header>

        <HomeBanner>
        </HomeBanner>

        <HomeWhatWeDo>
        </HomeWhatWeDo>

        <HomeSuccess>
        </HomeSuccess>

        <HomeTeam>
        </HomeTeam>

        <HomePeopleTalk>
        </HomePeopleTalk>

        <HomeProjects>
        </HomeProjects>

        <HomeSubscribe>
        </HomeSubscribe>

        <Footer>
        </Footer>

        <ScrollTopBtn></ScrollTopBtn>
      </div>

    );
  }
}

export default App;
