import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TypeStatusType} from "./tabMenu/TabMenu";
import work1 from '../../../assets/images/work1.webp'
import work2 from '../../../assets/images/work2.webp'
import work3 from '../../../assets/images/work3.webp'
import work4 from '../../../assets/images/work4.webp'
import work5 from '../../../assets/images/work5.webp'
import work6 from '../../../assets/images/work6.webp'
import work7 from '../../../assets/images/work7.webp'
import work8 from '../../../assets/images/work8.webp'
import work9 from '../../../assets/images/work9.webp'
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {S} from './Portfolio_Styles'
import {Container} from "../../../components/Container";
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ title: string, status: TypeStatusType }> = [
    {
        title: 'All categories',
        status: 'all'
    },
    {
        title: 'UI Design',
        status: 'ui'
    },
    {
        title: 'Web Templates',
        status: 'web'
    },
    {
        title: 'Logo',
        status: 'logo'
    },
    {
        title: 'Branding',
        status: 'branding'
    }
]

const worksData = [
    {src: work1, alt: "work1", type: "web", id: 1},
    {src: work2, alt: "work2", type: "ui", id: 2},
    {src: work3, alt: "work3", type: "logo", id: 3},
    {src: work4, alt: "work4", type: "branding", id: 4},
    {src: work5, alt: "work5", type: "ui", id: 5},
    {src: work6, alt: "work6", type: "branding", id: 6},
    {src: work7, alt: "work7", type: "ui", id: 7},
    {src: work8, alt: "work8", type: "web", id: 8},
    {src: work9, alt: "work9", type: "branding", id: 9},
]


export const Portfolio: React.FC = () => {
    const [currentFilterStatus, setcurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === 'ui') {
        filteredWorks = worksData.filter(work => work.type === 'ui')
    }

    if (currentFilterStatus === 'web') {
        filteredWorks = worksData.filter(work => work.type === 'web')
    }

    if (currentFilterStatus === 'logo') {
        filteredWorks = worksData.filter(work => work.type === 'logo')
    }

    if (currentFilterStatus === 'branding') {
        filteredWorks = worksData.filter(work => work.type === 'branding')
    }

    function changeFilterStatus(value: TypeStatusType) {
        setcurrentFilterStatus(value)
    }

    return (
        <S.Portfolio id={'portfolio'}>
            <Container>

                <SectionTitle>Portfolio</SectionTitle>
                <S.Description>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. lorem ipsum
                </S.Description>

                <TabMenu
                    currentFilterStatus={currentFilterStatus}
                    changeFilterStatus={changeFilterStatus}
                    tabsItems={tabsItems}
                />

                <S.WorksWrap>

                    <AnimatePresence>

                        {filteredWorks.map((item) => {
                            return (

                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={item.id}
                                >
                                    <S.ImageWrap>
                                        <img src={item.src} alt={item.alt}/>
                                        <Button aria-label={'Open work'}>
                                            <Icon iconId={'plus'}
                                                  viewBox={'0 0 52 52'}
                                                  width={'52'}
                                                  height={'52'}
                                            />
                                        </Button>
                                    </S.ImageWrap>
                                </motion.div>

                            )
                        })}

                    </AnimatePresence>

                </S.WorksWrap>
            </Container>
        </S.Portfolio>
    );
};

