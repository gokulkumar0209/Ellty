import clsx from "clsx";
import React from "react";

const CustomCheckbox = ({ disabled, checked, onChange }) => {
	return (
		<label
			className={clsx(
				"relative inline-block",
				!disabled && "hover:cursor-pointer",
				disabled && "cursor-not-allowed"
			)}
		>
			<input
				type="checkbox"
				className="absolute hidden"
				checked={checked}
				onChange={onChange}
				disabled={disabled}
			/>
			<span
				className={clsx(
					"w-[25px] h-[25px] absolute -left-[25px] -top-[12.5px] text-center rounded-[6px] transition-colors group",
					checked
						? disabled
							? "bg-white border-[#BDBDBD] border-[1px]"
							: "hover:bg-[#2469F6] bg-[#5087F8]"
						: "bg-white border-[#BDBDBD] border-[1px]"
				)}
			>
				<span
					className={clsx(
						"text-[#FFFFFF] transition-colors ",
						"flex h-full w-full items-center justify-center",
						checked && !disabled && "text-[#FFFFFF]",
						checked && disabled && "text-[#c5c5c5] group-hover:text-[#878787]",
						!checked && "hidden"
					)}
				>
					✓
				</span>
			</span>
		</label>
	);
};

export default CustomCheckbox;
