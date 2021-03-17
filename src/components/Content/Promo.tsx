import React from "react";
import icon from "../../icons/phone.svg";

const Promo = () => {
	return (
		<React.Fragment>
			<section className='promo promo--wrapper'>
				<div className='icon promo__icon'>
					<img src={icon} alt='icon' className='icon__image' />
				</div>
				<div className='title promo__title cssanimation hu__hu__ sequence'>
					<span className='title__text'>NAUMEN</span>
				</div>
				<div className='subtitle promo__subtitle'>
					<span className='subtitle__text'>Try to use a new Phone-Book</span>
				</div>
				<div className='button promo__button'>
					<a href='/phonebook' className='button__link'>
						GETTING STARTED
					</a>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Promo;
