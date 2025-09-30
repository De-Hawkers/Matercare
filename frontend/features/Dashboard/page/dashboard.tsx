import { Calendar } from "lucide-react";
import HealthTip from "../component/HealthTip";
import Visit from "../component/Visit";

const Dashboard = () => {
  return (
    <div className="p-3">
      <div className=" w-full grid grid-cols-1 xl:[grid-template-columns:repeat(3,minmax(320px,350px))] items-center justify-center gap-3 ">
        <HealthTip />
        <Visit
          icon={<Calendar />}
          title={"September 20, 2025"}
          desc={
            "Regular checkup completed. Baby’s heartbeat strong at 140 bpm. Weight gain on track. Next ultrasound scheduled."
          }
          header={"Previous Visit"}
          completed={true}
        />
        <Visit
          icon={<Calendar />}
          title={"October 15, 2025 at 2:00 PM"}
          location={"City General Hospital. Maternity Wing"}
          header={"Next Visit"}
          completed={true}
        />
      </div>
    </div>
  );
};

export default Dashboard;
