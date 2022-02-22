import Footer from "components/Footer";
import Header from "components/Header";
import MainWrapper from "components/MainWrapper";
import NavBar from "components/NavBar";
import styled from "styled-components";

function VideoDetailPresenter({

}){
    return (
        <>
        <Header />
        <NavBar/>
        <MainWrapper>
        VideoDetail
        <div>
            영상 세부<br />
            {/* <iframe
            width="765"
            height="480"
            src="https://www.youtube.com/embed/RvVDINtIeNo"
            title="YouTube video player"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture">
            </iframe> */}
            <iframe
            width="765"
            height="480"
            src="https://www.youtube.com/embed/RvVDINtIeNo"
            title="YouTube video player"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture">
            </iframe>
        </div>
        </MainWrapper>
        <Footer />
        </>
    );
}

export default VideoDetailPresenter;