import React from "react";

type PhoneListProps = {
	list: IList[];
	onRemove(name: string): void;
};
const PhoneList: React.FC<PhoneListProps> = ({ list, onRemove }) => {
	return (
		<React.Fragment>
			<section className='list list--wrapper'>
				{list.map((ex) => (
					<div className='list-inner list-inner--wrapper'>
						<div className='icon list__icon'>
							<img
								src='https://source.unsplash.com/900x1200/?person,portrait'
								alt=''
								className='icon__first cssanimation hu__hu__ sequence'
								key={ex.name}
							/>
						</div>
						<div className='name list__name'>
							<span className='name__text'>Name: {ex.name}</span>
						</div>
						<div className='surname list__surname'>
							<span className='surname__text'>Surname: {ex.surname}</span>
						</div>
						<div className='age list__age'>
							<span className='age__number'>Age: {ex.age}</span>
						</div>
						<div className='tel list__tel'>
							<span className='tel__number'>Tel: {ex.tel}</span>
						</div>
						<div className='mail list__mail'>
							<span className='mail__address'>Mail: {ex.mail}</span>
						</div>
						<button
							className='button list__button'
							onClick={() => onRemove(ex.name)}>
							Delete
						</button>
					</div>
				))}
			</section>
		</React.Fragment>
	);
};

export default PhoneList;
