import React, { useEffect, useState } from "react";
import PhoneForm from "./PhoneForm";
import { initialData } from "./initialData";
import PhoneList from "./PhoneList";

declare var confirm: (question: string) => boolean;

const PhoneBook: React.FC = () => {
	const [list, setList] = useState<Array<IList>>(initialData);
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("list") || "[]") as IList[];
		setList(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem("list", JSON.stringify(list));
	}, [list]);

	//TODO: here need to make reset inputs

	const addHandler = (
		name: string,
		surname: string,
		age: string,
		tel: string,
		mail: string
	) => {
		const newList = {
			name: name,
			surname: surname,
			age: age,
			tel: tel,
			mail: mail,
		};

		setList((prev) => [newList, ...prev]);

		alert(`Successfully added ${name}!`);
	};
	// TODO: usually i use id...
	const filteredList = list.filter((item) =>
		item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
	);

	const removeHandler = (name: string) => {
		let shouldRemove = confirm(`You are sure want to delete ${name} ?`);
		if (shouldRemove) {
			setList((prev) => prev.filter((list) => list.name !== name));
			alert(`Successfully deleted ${name}!`);
		}
	};
	const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	return (
		<React.Fragment>
			<div className='search search--filter'>
				<input
					type='text'
					value={search}
					onChange={changeSearch}
					className='input search__input'
					placeholder='Search...'
				/>
			</div>

			<PhoneForm onAdd={addHandler} search={search} />
			<PhoneList list={filteredList} onRemove={removeHandler} />
		</React.Fragment>
	);
};

export default PhoneBook;
