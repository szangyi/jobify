import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Landing() {
    return (
        <>
            <Wrapper>
                <nav>
                    <Logo />
                </nav>
                <div className="container page">
                    <div className="info">
                        <h1>
                            Job <span>Tracking</span> App
                        </h1>
                        <p>
                            I'm baby tousled pug try-hard small batch deep v
                            iPhone prism direct trade. Kombucha hexagon hashtag
                            artisan lumbersexual. Kickstarter butcher wolf
                            vaporware squid vegan gastropub irony hexagon
                            chicharrones post-ironic normcore lyft kale chips.
                            Activated charcoal jawn jianbing vibecession banh mi
                            occupy umami echo park man braid four loko cloud
                            bread raw denim gastropub. Woke bicycle rights
                            intelligentsia PBR&B DSA grailed unicorn. Bruh
                            gorpcore pitchfork dreamcatcher shaman.
                        </p>
                        <Link to="/register" className="btn register-link">
                            Register
                        </Link>
                        <Link to="/login" className="btn">
                            Login / Demo User
                        </Link>
                    </div>
                    <img src={main} alt="job hunt" className="img main-img" />
                </div>
            </Wrapper>
        </>
    );
}

export default Landing;
