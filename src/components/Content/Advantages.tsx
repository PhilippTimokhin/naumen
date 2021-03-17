import React from "react";
import Search from "../../advantages/search.png";
import Add from "../../advantages/add.png";
import Delete from "../../advantages/delete.png";

const Advantages = () => {
	const advantages = [
		{
			icon: Search,
			title: "First advantage",
			subtitle: "You can easily search contacts at any time",
		},
		{
			icon: Add,
			title: "Second advantage",
			subtitle: "You can easily add contacts at any time",
		},
		{
			icon: Delete,
			title: "Third advantage",
			subtitle: "You can easily delete contacts at any time",
		},
	];
	return (
		<React.Fragment>
			<section className='advantages advantages--wrapper'>
				{advantages.map((adv) => (
					<div className='advantages-inner advatnages-inner--wrapper'>
						<div className='icon advantages__icon'>
							<img
								src={adv.icon}
								alt=''
								className='icon__first cssanimation hu__hu__ sequence'
								key={adv.icon}
							/>
						</div>
						<div className='title advantages__title'>
							<span className='title__text'>{adv.title}</span>
						</div>
						<div className='subtitle advantages__subtitle'>
							<span className='subtitle__text'>{adv.subtitle}</span>
						</div>
					</div>
				))}{" "}
			</section>
		</React.Fragment>
	);
};

export default Advantages;
