import React from "react";
import logo from "../../icons/phone.svg";

const Footer: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<footer className='footer footer--wrapper'>
				<div className='logo footer__logo'>
					<img src={logo} alt='logo' className='logo__image' />
					<a href='/' className='logo__link'>
						NAUMEN
					</a>
				</div>
				<div className='menu footer__menu'>
					<ul className='menu__item'>
						<li className='menu__list'>
							<a href='/phonebook' className='menu__link'>
								Phone-Book
							</a>
						</li>
						<li className='menu__list'>
							<a href='/' className='menu__link'>
								How it works ?
							</a>
						</li>
					</ul>
				</div>
				<div className='copy footer__copy'>
					<span className='copy__text'>
						Made with &#128154; by Philipp Timokhin
					</span>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
