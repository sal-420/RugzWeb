import React, { Suspense, lazy } from 'react';
import './RugzHome.css';
// import "./Footer.css";
import './ImageGR.css';

const RugzHomeClouds = lazy(() => import('../Components/RugzHomeClouds'));
const RugzHomeBoatScene = lazy(() => import('../Components/RugzHomeBoatScene'));
const RugzHomeBottomOfTheOcean = lazy(() => import('../Components/RugzHomeBottomOfTheOcean'));
const RugzHomeShowroom = lazy(() => import('../Components/RugzHomeShowRoom'));
const RugzHomeShowroomDesc = lazy(() => import('../Components/RugzHomeShowRoomDesc'));
const RugzHomeFaqs = lazy(() => import('../Components/RugzHomeFaqs'));
const RugzHomeCrypto = lazy(() => import('../Components/Crypto'));
const RugzSplashPage = lazy(() => import('../Components/RugzHomeSpashPage'));
const RugzHomeGoMintTrailer = lazy(() => import('../Components/RugzHomeGoMintTrailer'));

export default function RugzHome() {
  return (
    <main className="text-dark position-relative d-flex-row">
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
    </main>
  );
}
