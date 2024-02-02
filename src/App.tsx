import './App.css';
import styled from 'styled-components';
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {AsideCv} from "./layout/asides/asideCv/AsideCv";
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
import {MobileCv} from "./components/mobileCv/MobileCv";
import {MobileMenu} from "./components/mobileMenu/MobileMenu";


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
                {width > breakpoint && <AsideNav/>}
                {width > breakpoint && <AsideCv/>}
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
                    <Footer/>
                </ContentWrap>
                {width < breakpoint && <MobileMenu/>}
                {width < breakpoint && <MobileCv/>}
                <GoTopBtn/>
            </StyledApp>
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
  grid-template-rows: auto;
  grid-template-areas:'cv content nav';
`

const ContentWrap = styled.div`
  max-width: 1030px;
  overflow-x: hidden;
  grid-area: content;
`