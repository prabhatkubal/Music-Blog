import React from "react";
import "./NavBar.css";
import MusicLogo from "../../images/music.png";

const NavBar = () => {
	return (
		<nav className="Nav-container">
			<div className="Nav-bar-top">
				<span className="Nav-welcome">Welcome to Music Blog Template</span>
				<ul className="nav-top-btn">
					<li>
						<div className="nav-top-lr nav-top-login">
							<i class="fas fa-lock"></i>
							<span>LOGIN</span>
						</div>
						<div className="nav-top-lr nav-top-register">
							<i class="fas fa-user"></i>
							<span>REGISTER</span>
						</div>
					</li>
					<li className="nav-top-btn-li">
						<div className="nav-top-bnt-li nav-top-facebook">
							<i class="fab fa-facebook-f"></i>
						</div>
						<div className="nav-top-bnt-li nav-top-twitter">
							<i class="fab fa-twitter"></i>
						</div>
						<div className="nav-top-bnt-li nav-top-google">
							<i class="fab fa-google"></i>
						</div>
						<div className="nav-top-bnt-li nav-top-youtube">
							<i class="fab fa-youtube"></i>
						</div>
						<div className="nav-top-bnt-li nav-top-search">
							<i class="fas fa-search"></i>
						</div>
					</li>
				</ul>
			</div>
			<div className="Nav-main">
				<div className="logo">
					<img src={MusicLogo} alt="" />
				</div>
				<ul className="nav-main-ul">
					<li className="Nav-main-links">
						<span>HOME //</span>
					</li>
					<li className="Nav-main-links">
						<span>ARTIST //</span>
					</li>
					<li className="Nav-main-links">
						<span>ALBUMS //</span>
					</li>
					<li className="Nav-main-links">
						<span>NEWS //</span>
					</li>
					<li className="Nav-main-links">
						<span>EVENTS //</span>
					</li>
					<li className="Nav-main-links">
						<span>PAGES //</span>
					</li>
					<li className="Nav-main-links">
						<span>CONTACT US //</span>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
