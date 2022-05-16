import React, { useState } from "react";
import { Modal } from "../modals/baseModal";
import { post } from "../../utils/api";

export const AddQuote = () => {
	const [isModalOpen, showModal] = useState(false);
	const [newQuote, setNewQuote] = useState({ content: "", author: "" });

	const onCancel = () => {
		setNewQuote({ content: "", author: "" });
		showModal(false);
	};

	const isEmpty = (data) => {
		const filtered = Object.values(data).filter((value) => {
			if (!value || value === "") {
				return false;
			}

			return true;
		});

		return filtered.length !== Object.keys(data).length;
	};

	const onAdd = async (e) => {
		e.preventDefault();
		if (isEmpty(newQuote)) {
			alert("empty values");
			return;
		}

		await post("api/create", newQuote)
			.then(() => {
				showModal(false);
				setNewQuote({ content: '', author: ''}); 
			})
			.catch((e) => {
				alert("an error occurred");
				console.error(e);
			});
	};

	return (
		<React.Fragment>
			<button id="add-quote" className="w-32 rounded-3xl bg-cyan-400 text-white font-bebas border p-2" onClick={() => showModal(true)}>
				Add Quote
			</button>
			<Modal show={isModalOpen}>
				<form>
					<div>
						<label>Quote</label>
						<input
							value={newQuote.content}
							onChange={(e) => {
								const quote = { content: e.target.value };
								setNewQuote((data) => ({ ...data, ...quote }));
							}}
						></input>
					</div>
					<div>
						<label>Author</label>
						<input
							value={newQuote.author}
							onChange={(e) => {
								const author = { author: e.target.value };
								setNewQuote((data) => ({ ...data, ...author }));
							}}
						></input>
					</div>
					<button type="submit" onClick={onAdd}>
						Add
					</button>
					<button type="button" onClick={onCancel}>
						Cancel
					</button>
				</form>
			</Modal>
		</React.Fragment>
	);
};
