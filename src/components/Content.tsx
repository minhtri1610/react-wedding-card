import React, { Suspense, lazy } from 'react';
import useLadiLazyload from '../hooks/useLadiLazyload';
import useLadiAnimation from '../hooks/useLadiAnimation';
import LazyLoadSection from './LazyLoadSection';

const Section1 = lazy(() => import('./Sections/Section1'));
const Section2 = lazy(() => import('./Sections/Section2'));
const Section3 = lazy(() => import('./Sections/Section3'));
const Section4 = lazy(() => import('./Sections/Section4'));
const Section5 = lazy(() => import('./Sections/Section5'));
const Section6 = lazy(() => import('./Sections/Section6'));
const Section7 = lazy(() => import('./Sections/Section7'));
const Section8 = lazy(() => import('./Sections/Section8'));
const Section9 = lazy(() => import('./Sections/Section9'));
const SectionPopup = lazy(() => import('./Sections/SectionPopup'));

export default function Content() {
    useLadiLazyload();
    useLadiAnimation();

    return (
        <div className='ladi-wraper'>
            <Suspense fallback={<div className="loading-placeholder" style={{ height: '100vh' }} />}>
                <Section1 />
            </Suspense>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section2 />
                </Suspense>
            </LazyLoadSection>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section3 />
                </Suspense>
            </LazyLoadSection>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section4 />
                </Suspense>
            </LazyLoadSection>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section5 />
                </Suspense>
            </LazyLoadSection>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section6 />
                </Suspense>
            </LazyLoadSection>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section7 />
                </Suspense>
            </LazyLoadSection>

            <div id="SECTION8_WRAPPER">
                <LazyLoadSection offset="500px">
                    <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                        <Section8 />
                    </Suspense>
                </LazyLoadSection>
            </div>

            <LazyLoadSection offset="500px">
                <Suspense fallback={<div className="loading-placeholder" style={{ height: '200px' }} />}>
                    <Section9 />
                </Suspense>
            </LazyLoadSection>

            <Suspense fallback={null}>
                <SectionPopup />
            </Suspense>
        </div>
    )
}