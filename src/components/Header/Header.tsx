import React from "react";

const Header: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<header className='header header--wrapper'>
				<div className='logo header__logo'>
					<a href='/' className='logo__link'>
						NAUMEN
					</a>
				</div>
				<nav className='navbar header__navbar'>
					<ul className='navbar__item'>
						<li className='navbar__list'>
							<a href='/phonebook' className='navbar__link'>
								Phone-Book
							</a>
						</li>
						<li className='navbar__list'>
							<a href='/' className='navbar__link'>
								How it works ?
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
