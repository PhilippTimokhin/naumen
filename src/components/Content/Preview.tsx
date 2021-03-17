import React from "react";
import Prev from "../../advantages/preview.gif";

const Preview = () => {
	return (
		<React.Fragment>
			<section className='preview preview--wrapper'>
				<div className='gif preview__gif'>
					<img src={Prev} alt='' className='gif__elliot' />
				</div>
				<div className='descriptiopn preview__description'>
					<span className='description__text'>Below are some examples</span>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Preview;
