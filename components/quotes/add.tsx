import React, { useState } from "react";
import { post } from "../../utils/api";
import { useRouter } from 'next/router';

export const AddQuote = () => {
	const [newQuote, setNewQuote] = useState({ content: "", author: "" });
	const router = useRouter();

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
				router.push('/');
			})
			.catch((e) => {
				alert("an error occurred");
				console.error(e);
			});
	};

	return (
		<div className="bg-slate-50 h-screen flex justify-center items-center flex-col">
			<form className="block p-6 rounded-lg shadow-lg bg-white min-w-[50%] p-7 text-zinc-800">
				<div className="m-10 flex gap-2">
					<div className="hidden lg:block lg:w-3/5">
						<h1 className="text-lg">Guardian of the Quotes |</h1>
					</div>
					<div className="w-full">
					<div className="grid grid-rows-2 gap-5">
						<div className="mb-6">
							<label htmlFor="quote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Quote
							</label>
							<textarea
								id="quote"
								className="form-control
        block p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-slate-300 block w-full focus:outline-slate-300 dark:bg-gray-700 w-full"
								rows={2}
								value={newQuote.content}
								onChange={(e) => {
									const quote = { content: e.target.value };
									setNewQuote((data) => ({ ...data, ...quote }));
								}}
							></textarea>
						</div>
						<div className="mb-6">
							<label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								Author
							</label>
							<input
								id="author"
								className="p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-slate-300  block w-full dark:bg-gray-700"
								value={newQuote.author}
								onChange={(e) => {
									const author = { author: e.target.value };
									setNewQuote((data) => ({ ...data, ...author }));
								}}
							></input>
						</div>
					</div>
					<div className="mt-5 flex flex-wrap justify-end gap-2">
						<div>
							<a
								href="/"
								className="w-32 text-center inline-block px-6 py-2.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded-3xl shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Cancel
							</a>
						</div>
						<div>
							<button
								type="submit"
								onClick={onAdd}
								className="w-32 px-6 py-2.5 bg-cyan-400 text-white font-medium text-xs leading-tight uppercase rounded-3xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								Add
							</button>
						</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
