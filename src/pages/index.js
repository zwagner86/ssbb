import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import frank from '../assets/images/frank-pic.jpg'
import tom from '../assets/images/tom-pic.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "South Side Bleacher Bros";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Listen to the Podcast</h2>
                            </header>
                            <p>Here you can listen to our podcast episodes using the Spotify player.  It will always be up to date with the latest episode.  If you like what you hear, make sure to follow us.</p>
                        </div>
                        <div className="col-6">
                            <iframe src="https://open.spotify.com/embed-podcast/show/4CKoWscYTgLtOfx9OCH5nv" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </section>

                {false && <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>We&apos;ve Got You Covered</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>}

                <section id="three" className="main style2 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Our Hosts</h2>
                            </header>
                            <p>Meet our hosts, Frank and Tom.  They might not be much to look at, but they sure do have a lot to say.</p>
                        </div>

                        <div className="col-6">
                            <span className="image fit"><img src={frank} alt="" /></span>
                            <h3>Frank</h3>
                            <p>Can randomly be seen on Beer Money broadcasts.  A multiple fantasy football league champion.  Don&apos;t hesitate to reach out for some advice on your team.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={tom} alt="" /></span>
                            <h3>Tom</h3>
                            <p>A lawyer by day who has invoked the &quot;Ain&apos;t no laws when you&apos;re drinking the Claws&quot; defense on multiple occasions.  Always has an opinion on NFL player&apos;s legal matters.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
