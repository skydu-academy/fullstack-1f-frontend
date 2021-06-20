import React from 'react';
import '../Home/Home.css';




const Home = () => {
   
    return (
        <div className="header">
            <div className="sky">
                <img src="skydu.jpg" alt="" />
            </div>
            <div className="lonceng">
                <p5>3</p5>
                <img src="icons.jpg" alt="" />
            </div>
            <div className="head">
                <img src="Ellipse_head.jpg" alt="" />
            </div>
            <h4></h4>
            <div className="box"><p4>What’s on you mind, Paul?</p4></div>
            <h1></h1>
            <div className="kotak">
                <img src="Ellipse_bar.png" alt="" />
                <p7>Thomas Ben</p7><br />
                <p8>45 mins A go</p8><br />
                <p9>Being a father is sometimes my hardest but always my most rewarding job. Happy Father’s Day to all dads out there.</p9>
                {/* <img src="Like.png" alt="like" /> */}
            </div>
            <div className="box1">
                <img src="cewek.png" alt="" />
                <p11>Miranda Shaffer</p11><br />
                <p12>June 21, 12:45 pm</p12>
                <p13>Having fun while cooking and eating variety of foods with @Sarah</p13>
                <br />
                <br />
                <img src="gambar1.jpg" alt="" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="chat">
                    <img src="Ellipse1.png" alt="" />
                    <p17>Mary Jane Watson</p17>
                    <p18>Itu gimana cara masaknya gan?</p18>
                </div>
                <div className="chat1">
                    <img src="Ellipse3.png" alt="" />
                    <p19>Bibi May</p19>
                    <p20>Kayanya gampang deh.. cek dulu di youtube</p20>
                </div>
                <div className="chat2">
                    <img src="Ellipse2.png" alt="" />
                    <p21>Miles Morales</p21>
                    <p22> Ikutan dong, mau buat juga!</p22>
                </div>
                <div className="chat3">
                    <img src="cewek.png" alt="" />
                    <p23>Tulis Komentar Kamu</p23>
                    
                </div>

            </div>
        </div>
    )
}

export default Home
