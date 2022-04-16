import { Component } from "react";
import HomeBanner from './HomeBanner';
import HomeWhatWeDo from './HomeWhatWeDo';
import HomeSuccess from './HomeSuccess';
import HomeTeam from './HomeTeam';
import HomePeopleTalk from './HomePeopleTalk';
import HomeProjects from "./HomeProjects";
import HomeSubscribe from './HomeSubscribe';

class Home extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default Home;