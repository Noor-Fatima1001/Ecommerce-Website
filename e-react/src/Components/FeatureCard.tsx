import React from 'react'
interface propsType{
    title:string;
    icon:React.ReactNode;
}
const FeatureCard:React.FC<propsType> = ({title,icon}) => {
  return (
    <div className='flex items-center gap-4 bg-transparent'>
        <div className="bg-transparent border w-[50px] h-[50px] text-yellow-500 text-[24px] grid place-items-center rounded-full">{icon}</div>
        <div>
            <h3 className='text-yellow-500 font-medium text-xl '>{title}</h3>
            <p className='text-gray-500 text-[14px]'>Loream, ipsum dolor.</p>
        </div>
      
    </div>
  );
};

export default FeatureCard;
