import React, { Suspense, lazy, useEffect } from 'react';
import './RugzHome.css';
import "./Footer.css";
import './ImageGR.css';
import '../Components/site.css';
import Footer from '../Components/Footer';

import RugzHomeClouds from '../Components/RugzHomeClouds';
import RugzHomeBoatScene from '../Components/RugzHomeBoatScene';
import RugzHomeBottomOfTheOcean from '../Components/RugzHomeBottomOfTheOcean';

const RugzHomeShowroom = lazy(() => import('../Components/RugzHomeShowRoom'));
const RugzHomeShowroomDesc = lazy(() => import('../Components/RugzHomeShowRoomDesc'));
const RugzHomeFaqs = lazy(() => import('../Components/RugzHomeFaqs'));
const RugzHomeCrypto = lazy(() => import('../Components/Crypto'));

const RugzSplashPage = lazy(() => import('../Components/RugzHomeSpashPage'));
const RugzHomeGoMintTrailer = lazy(() => import('../Components/RugzHomeGoMintTrailer'));

export default function RugzHome() {
  useEffect(() => {
    // Add a unique class to the body when this page is active
    document.body.classList.add('home-active');

    // Clean up when the component unmounts
    return () => {
      document.body.classList.remove('home-active');
    };
  }, []);

  return (
    <main className="text-dark position-relative d-flex-row">
      <h1 className="text-center pt-3 fw-bold">
        <span className="text-white">the notorious</span>{' '}
        <span className="text-danger ">RUGs</span>
      </h1>
      <Suspense fallback={<div>Loading components, please wait...</div>}>
        <RugzHomeClouds />
        <RugzHomeBoatScene />
        <RugzHomeBottomOfTheOcean />
        <RugzHomeShowroom />
        <RugzHomeShowroomDesc />
        <RugzHomeFaqs />
        <RugzHomeCrypto />
        <RugzSplashPage />
        <RugzHomeGoMintTrailer />
      </Suspense>
      <Footer />
    </main>
  );
}
