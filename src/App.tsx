import './App.css';
import styled from 'styled-components';
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Header} from "./layout/header/Header";
import {AsideProfile} from "./layout/asides/asideProfile/AsideProfile";
import {Footer} from "./layout/footer/Footer";
import {AsideNav} from "./layout/asides/asideNav/AsideNav";
import {Main} from "./layout/sections/main/Main";
import {Services} from "./layout/sections/services/Services";
import {Prices} from "./layout/sections/prices/Prices";
import {Education} from "./layout/sections/education/Education";
import {WorkHistory} from "./layout/sections/workHistory/WorkHistory";
import {Blog} from "./layout/sections/blog/Blog";
import {Contact} from "./layout/sections/contact/Contact";
import {Map} from "./layout/sections/map/Map";
import {Reviews} from "./layout/sections/recommendations/Reviews";
import React from "react";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";


function App() {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1439;

    React.useEffect(() => {
        const handleWindowsResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowsResize);
        return () => window.removeEventListener('resize', handleWindowsResize);
    }, []);

    return (
        <div className="App">
            <StyledApp>
                {width > breakpoint ? <AsideNav/> : ''}
                {width < breakpoint ? <Header/> : <AsideProfile/>}
                <ContentWrap>
                    <Main/>
                    <Services/>
                    <Prices/>
                    <Reviews/>
                    <Education/>
                    <WorkHistory/>
                    <Portfolio/>
                    <Blog/>
                    <Contact/>
                    <Map/>
                </ContentWrap>
                <Footer/>
            </StyledApp>
            <GoTopBtn/>
        </div>
    );
}

export default App;

const StyledApp = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas: 
          'header header header'
          'profile content nav'
          'footer footer footer';
`

const ContentWrap = styled.div`
  max-width: 1030px;
  overflow-x: hidden;
  grid-area: content;
`