import { LightbulbIcon } from "lucide-react";

const HealthTip = () => {
    return ( 
        <div className=" w-full h-[184px] shadow text-white rounded-md flex flex-col gap-4 items-start justify-center p-3 bg-green-300 ">
            <div className="flex items-center justify-between gap-3 w-full ">
                <div className="flex gap-2 items-center justify-start ">
                    <LightbulbIcon className="text-yellow-300  " />
                    <p className="">
                        Health Tips
                    </p>
                </div>
                <button className=" cursor-pointer ">
                    Next
                </button>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center ">
                <h2 className=" font-semibold text-xl  ">
                    Stay Hydrated
                </h2>
                <p className="text-sm">
                    Drink at least 8-10 glasses of water daily to support your baby’s development.
                </p>
            </div>
        </div>
     );
}
 
export default HealthTip;