export  default  function DateSlider({date,day,active}){
  return (
    <div className={`${active?"bg-[#111111]":"bg-[#191818]"} rounded-2xl pl-8 pr-8 pt-4 pb-4   w-fit h-fit`}>
     <h2 className="font-newfont text-4xl mb-2">{date}</h2>
     <h1 className="font-newfont ">{day}</h1>
     {active&&<div className="h-2 w-2 rounded-full bg-blue-600 mt-2 ml-2"></div>}
    </div>
  );
}