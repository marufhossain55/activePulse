import NavBar from '../shared/NavBar';
import About from './About';
import Banner from './Banner';
import Featured from './Featured';
import FeaturedClass from './FeaturedClass';
import Forum from './Forum';
import NewsLetter from './NewsLetter';
import Reviews from './Reviews';
import Team from './Team';

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
        <Featured />
        <About />
        {/* <FeaturedClass />
        <Reviews />
        <Forum /> */}
        <NewsLetter />
        <Team />
      </div>
    </div>
  );
};
export default Home;
