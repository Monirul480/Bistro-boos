import Banner from "../Banner/Banner";
import BistroBoosSection from "../BistroBoosSection/BistroBoosSection";
import CallUs from "../CallUs/CallUs";
import Card from "../Card/Card";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopulerMenue/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBoosSection></BistroBoosSection>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Card></Card>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;