
export const Card1 = (props) => {
  return (
    <div>
        <div  className="bg-white grid justify-items-center h-44 shadow-lg  md:w-56 lg:w-[18rem] p-5 -mr-2  rounded-xl ">
              <img
                src={props.img} alt='shopping' style={{backgroundColor:props.bgimg}}
               // style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="bg-orange-100  rounded-full  p-4 "
              />
              <p className="mt-3">
                <span className="text-lg font-semibold">{props.performance}</span>
                
              </p>
              <p className="text-sm text-gray-400  mt-1">{props.sector}</p>
            </div> 
    </div>
  )
}
