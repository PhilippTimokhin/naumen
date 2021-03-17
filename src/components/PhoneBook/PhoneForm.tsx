import React, { useState } from "react";

interface PhoneFormProps {
	onAdd(
		name: string,
		surname: string,
		age: string,
		tel: string,
		mail: string
	): void;
	search: string;
}

const PhoneForm: React.FC<PhoneFormProps> = ({ onAdd }) => {
	const [name, setName] = useState<string>("");
	const [surname, setSurname] = useState<string>("");
	const [mail, setMail] = useState<string>("");
	const [tel, setTel] = useState<string>("");
	const [age, setAge] = useState<string>("");

	const enabled =
		name.length > 0 &&
		surname.length > 0 &&
		mail.length > 0 &&
		tel.length > 0 &&
		age.length > 0;

	// change events...
	const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};
	const changeSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSurname(event.target.value);
	};
	const changeMail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMail(event.target.value);
	};

	const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAge(event.target.value);
	};

	const changeTel = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTel(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
		event.preventDefault();
		onAdd(name, surname, age, tel, mail);
	};

	return (
		<React.Fragment>
			<form className='form form--wrapper'>
				<label htmlFor='Name' className='label form__label'>
					Name
				</label>
				<input
					type='text'
					name='name'
					value={name}
					onChange={changeName}
					className='input form__input'
					placeholder='Enter your name'
				/>
				<label htmlFor='Surname' className='label form__label'>
					Surname
				</label>
				<input
					type='text'
					name='surnname'
					value={surname}
					onChange={changeSurname}
					className='input form__input'
					placeholder='Enter your surname'
				/>
				<label htmlFor='Age' className='label form__label'>
					Age
				</label>
				<input
					type='text'
					name='age'
					value={age}
					onChange={changeAge}
					className='input form__input'
					placeholder='Enter your age'
				/>
				<label htmlFor='Telephone Number' className='label form__label'>
					Telephone Number
				</label>
				<input
					type='text'
					name='telephone number'
					value={tel}
					onChange={changeTel}
					className='input form__input'
					placeholder='Enter your telephone number'
				/>
				<label htmlFor='Mail' className='label form__label'>
					Mail
				</label>
				<input
					required
					type='text'
					name='mail'
					value={mail}
					onChange={changeMail}
					className='input form__input'
					placeholder='Enter your mail'
				/>
				<button
					className='button form__button'
					disabled={!enabled}
					onClick={handleSubmit}>
					Add Contact
				</button>
			</form>
		</React.Fragment>
	);
};

export default PhoneForm;
