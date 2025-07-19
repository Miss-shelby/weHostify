import React from 'react'

const Button = ({bgColor,textColor,type,icon,title,onClick,extraClass}) => {
 return (
		<button 
        
			className={`${bgColor} ${textColor} font-sans  lg:text-lg lg:font-[400]  
            font-medium  py-3 text-base justify-between flex items-center lg:px-7 px-5 rounded-full ${extraClass}`}
			type={type}
			onClick={onClick}>
				{icon && <span className="pr-2">{icon}</span>}
				{title}
		</button>
	)
}

export default Button