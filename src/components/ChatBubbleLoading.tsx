import { RobotIcon } from "./icons/RobotIcon";

export const ChatBubbleLoading = () => {
  return (
    <div className="flex gap-2 items-start">
      <div className="relative">
        <RobotIcon />
      </div>
      <div
        className="text-white bg-[#191919] px-4 py-2 rounded-lg shadow-md text-sm font-primary 
                   animate-pulse break-words whitespace-pre-wrap 
                   h-[4rem] w-[80%] sm:w-[60%] md:w-[50%] lg:w-[70%]"
      >
      </div>
    </div>
  );
};
