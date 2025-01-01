import clsx from "clsx";
import React, { useState, useEffect } from "react";
import CustomCheckbox from "../components/Checkbox";

function Home() {
	const [disabled, setDisabled] = useState(false);
	const [checked, setChecked] = useState([false, false, false, false]);
	const [allChecked, setAllChecked] = useState(false);

	const handleAllPages = () => {
		const newCheckedState = !allChecked;
		setChecked([
			newCheckedState,
			newCheckedState,
			newCheckedState,
			newCheckedState,
		]);
		setAllChecked(newCheckedState);
	};

	useEffect(() => {
		setAllChecked(checked.every((item) => item));
	}, [checked]);

	const handleChange = (index) => {
		const newCheckedState = [...checked];
		newCheckedState[index] = !newCheckedState[index];
		setChecked(newCheckedState);
	};

	return (
		<div
			className={clsx(
				"flex justify-center w-full",
				"font-montserrat text-[14px] leading-[18.2px] font-[400]"
			)}
		>
			<div
				className={clsx(
					"bg-[#FFFFFF] w-[370px] h-[326px] mt-[85px]",
					"py-[10px] rounded-[6px] border-[1px] border-[#EEEEEE]",
					"shadow-custom"
				)}
			>
				<div
					className={clsx(
						"h-[42px] py-[8px] pr-[15px] pl-[22px] ",
						"flex justify-between  items-center"
					)}
				>
					<p>All Pages</p>
					<CustomCheckbox
						disabled={disabled}
						checked={checked.every(Boolean)}
						onChange={handleAllPages}
					/>
				</div>
				<div className="py-[10px] px-[15px]">
					<div className=" w-[340px] h-[0.7px] bg-[#CDCDCD] " />
				</div>
				<div className="h-[164px]  flex flex-col justify-between">
					{["Page 1", "Page 2", "Page 3", "Page 4"].map((page, index) => (
						<div
							key={index}
							className={clsx(
								" flex justify-between items-center text-center ",
								"h-[42px] py-[8px] pr-[15px] pl-[22px]"
							)}
						>
							<p>{page}</p>
							<CustomCheckbox
								disabled={disabled}
								checked={checked[index]}
								onChange={() => handleChange(index)}
							/>
						</div>
					))}
				</div>
				<div className="py-[10px] px-[15px]">
					<div className="  h-[0.7px] bg-[#CDCDCD] " />
				</div>
				<div className=" h-[60px] w-full py-[10px] px-[15px] ">
					<button
						className={clsx(
							"w-full h-[40px] py-[10px] px-[20px] rounded-[4px]",
							"bg-[#FFCE22] hover:bg-[#FFD84D]",
							disabled && "cursor-not-allowed"
						)}
						onClick={() => setDisabled(true)}
						disabled={disabled}
					>
						<span className=" ">Done</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Home;
