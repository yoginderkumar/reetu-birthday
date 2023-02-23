import React from "react";
import Lottie from "react-lottie";
import { Modal } from "antd";
import FileSaver from "file-saver";

import ReetuJeena from "./assets/reetu_jeena.png";
import PartyFlags from "./assets/party_flags.jpeg";
import giftOneAnimation from "./assets/gift_one.json";
import giftTwoAnimation from "./assets/gift_two.json";
import balloonAnimation from "./assets/red_balloon.json";
import confettiAnimation from "./assets/confetti_day.json";
import birthdayAnimation from "./assets/birthday_json.json";
import partyPopperAnimation from "./assets/party_popper.json";

import "./App.css";

const defaultBirthdayOptions = {
  loop: true,
  autoplay: true,
  animationData: birthdayAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultGiftOneOptions = {
  loop: false,
  autoplay: false,
  animationData: giftOneAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultBalloonOneOptions = {
  loop: true,
  autoplay: true,
  animationData: balloonAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultGifTwoOptions = {
  loop: false,
  autoplay: true,
  animationData: giftTwoAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultConfettiOptions = {
  loop: true,
  autoplay: true,
  animationData: confettiAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultPartyPopperOptions = {
  loop: true,
  autoplay: true,
  animationData: partyPopperAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function App() {
  const [isGiftPaused, setIsGiftPaused] = React.useState(true);
  const [isGiftTwoPaused, setIsGiftTwoPaused] = React.useState(true);
  const [isGiftModalOpened, setIsGiftModalOpened] = React.useState(false);
  const [isGiftTwoModalOpened, setIsGiftTwoModalOpened] = React.useState(false);

  const giftOne = React.useRef(null);
  const giftTwo = React.useRef(null);
  const confetti = React.useRef(null);
  const birthday = React.useRef(null);
  const balloonTwo = React.useRef(null);
  const balloonFour = React.useRef(null);
  const partyPopper = React.useRef(null);
  const balloonThree = React.useRef(null);
  const videoRef = React.useRef(null);

  const onClickGiftOne = () => {
    setIsGiftPaused(false);
    setIsGiftModalOpened(true);
  };

  const onClickGiftTwo = () => {
    setIsGiftTwoPaused(false);
    setIsGiftTwoModalOpened(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
    setTimeout(() => {
      setIsGiftTwoPaused(true);
    }, 1000);
  };

  const onCloseModal = () => {
    setIsGiftPaused(true);
    setIsGiftModalOpened(false);
  };

  const onCloseSecondModal = () => {
    setIsGiftTwoPaused(true);
    setIsGiftTwoModalOpened(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  const onDownloadIshiGift = () => {
    FileSaver.saveAs(ReetuJeena, "Reetu-By-Ishi.jpeg");
  };

  const onDownloadNikhilGift = () => {
    FileSaver.saveAs(
      "https://res.cloudinary.com/dseqoks5e/video/upload/v1677177243/letter_imo3bq.mp4",
      "Reetu-By-Nikhil.mp4"
    );
  };

  return (
    <>
      <img
        src={PartyFlags}
        alt="Flags"
        className="absolute"
        style={{ top: 0, width: "100%" }}
      />
      <div className="App">
        <div className="absolute lg:top-0 xs:top-[120px] mt-8 text-[32px]">
          <h1>Happy Birthday</h1>
          <h1>Dr. Reetu Jeena</h1>
        </div>
        <div className="balloonThree md:block xs:hidden" ref={balloonThree}>
          <Lottie options={defaultBalloonOneOptions} />
        </div>
        <div className="balloonFour md:block xs:hidden" ref={balloonFour}>
          <Lottie options={defaultBalloonOneOptions} />
        </div>
        <div className="balloon md:block top-0 xs:hidden">
          <Lottie options={defaultBalloonOneOptions} />
        </div>
        <div className="balloonTwo md:block xs:hidden" ref={balloonTwo}>
          <Lottie options={defaultBalloonOneOptions} />
        </div>
        <div
          className="birthday md:w-[400px] xs:w-[260px]"
          style={{
            position: "relative",
            paddingBottom: 40,
            zIndex: 1,
          }}
          ref={birthday}
        >
          <Lottie
            options={defaultBirthdayOptions}
            isStopped={false}
            isPaused={false}
          />
          <div
            className="giftOne md:w-[340px] xs:w-[240px] md:left-[-160px] xs:left-[-120px]"
            ref={giftOne}
            onClick={onClickGiftOne}
            style={{
              position: "absolute",
              cursor: "pointer",
              bottom: 0,
            }}
          >
            <Lottie
              options={defaultGiftOneOptions}
              isStopped={isGiftPaused}
              isPaused={isGiftPaused}
            />
          </div>
          <div
            className="giftTwo md:w-[220px] xs:w-[140px] md:bottom-[60px] xs:bottom-[40px] md:left-[-210px] xs:right-[-80px]"
            ref={giftTwo}
            onClick={onClickGiftTwo}
            style={{
              position: "absolute",
              cursor: "pointer",
              zIndex: 0,
            }}
          >
            <Lottie
              options={defaultGifTwoOptions}
              isStopped={isGiftTwoPaused}
              isPaused={isGiftTwoPaused}
            />
          </div>
        </div>
        <div
          ref={confetti}
          className="confetti"
          style={{ position: "absolute", width: 400, zIndex: 0 }}
        >
          <Lottie options={defaultConfettiOptions} />
        </div>
        <div
          ref={partyPopper}
          className="partyPopper"
          style={{ position: "absolute", width: 400, bottom: 0, right: 0 }}
        >
          <Lottie options={defaultPartyPopperOptions} />
        </div>
        <Modal
          title="Gift By Ishi"
          open={isGiftModalOpened}
          onOk={onDownloadIshiGift}
          onCancel={onCloseModal}
          okText="Download"
          okButtonProps={{ type: "default" }}
        >
          <div className="flex items-center justify-center">
            <img src={ReetuJeena} height={400} width={300} alt="By Ishika" />
          </div>
        </Modal>
        <Modal
          title="Gift By Nikhil"
          open={isGiftTwoModalOpened}
          onOk={onDownloadNikhilGift}
          onCancel={onCloseSecondModal}
          okText="Download"
          okButtonProps={{ type: "default" }}
        >
          <div className="flex items-center justify-center">
            <video
              ref={videoRef}
              style={{
                width: 300,
                height: 400,
              }}
              controls
              onPlay={isGiftTwoModalOpened}
              src={
                "https://res.cloudinary.com/dseqoks5e/video/upload/v1677177243/letter_imo3bq.mp4"
              }
              autoPlay
            />
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
