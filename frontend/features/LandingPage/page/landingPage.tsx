import ImageComp from "../../../components/Image";
import Button from "../components/Button";
import Language from "../components/Language";

const LandingPage = () => {
    return ( 
        <div className="w-full flex flex-col items-center justify-center  ">
            <div className="w-full sm:w-[500px] p-2 flex flex-col gap-4 items-center justify-center  ">
                <ImageComp src={"/pregnant-woman.png"} />
                {/* Intro Text */}
                <div className="">
                    <h2 className="text-center text-2xl font-bold ">
                        Welcome to MotherHood <br />
                        Journey
                    </h2>
                    <p className="text-center text-base text-medium  ">
                        Your companion for a healthy pregnancy and beyond.
                        Choose your preferred language to get started.
                    </p>
                </div>
                <Language />
                <div className="w-full flex flex-col gap-4 items-center justify-center ">
                    <Button 
                    text="sign up"
                    link="/signup"
                    color="white"
                    bg="#4ade80"
                    />
                    <Button 
                    text="log in"
                    link="/login"
                    color="#86efac"
                    bg="#dcfce7"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;