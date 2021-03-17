import React from "react";
import Person from "../../icons/1.jpg";
import PersonTwo from "../../icons/2.jpg";
import PersonThree from "../../icons/3.jpg";

const Examples = () => {
	const examples = [
		{
			icon: Person,
			tel: "+7-922-222-12",
			name: "Mike",
			surname: "Hampton",
			age: 27,
			mail: "hampton@gmail.com",
		},
		{
			icon: PersonTwo,
			tel: "+7-900-142-53",
			name: "Ameli",
			surname: "Cruze",
			age: 23,
			mail: "cruze.ameli@gmail.com",
		},
		{
			icon: PersonThree,
			tel: "+7-912-422-65",
			name: "Santa",
			surname: "Botsyan",
			age: 32,
			mail: "botsyan.santa@gmail.com",
		},
	];
	return (
		<React.Fragment>
			<section className='examples examples--wrapper'>
				{examples.map((ex) => (
					<div className='examples-inner examples-inner--wrapper'>
						<div className='icon examples__icon'>
							<img
								src={ex.icon}
								alt=''
								className='icon__first cssanimation hu__hu__ sequence'
								key={ex.icon}
							/>
						</div>
						<div className='name examples__name'>
							<span className='name__text'>Name: {ex.name}</span>
						</div>
						<div className='surname examples__surname'>
							<span className='surname__text'>Surname: {ex.surname}</span>
						</div>
						<div className='age examples__age'>
							<span className='age__number'>Age: {ex.age}</span>
						</div>
						<div className='tel examples__tel'>
							<span className='tel__number'>Tel: {ex.tel}</span>
						</div>
						<div className='mail examples__mail'>
							<span className='mail__address'>Mail: {ex.mail}</span>
						</div>
					</div>
				))}{" "}
			</section>
		</React.Fragment>
	);
};

export default Examples;
