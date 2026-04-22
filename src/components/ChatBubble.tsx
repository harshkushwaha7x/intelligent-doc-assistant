import { AnimatedAIResult } from "./AnimatedAIResult";
import { RobotIcon } from "./icons/RobotIcon";
import { forwardRef } from "react";

interface ChatBubbleProps {
  variant: "User" | "Bot";
  text: string;
  isActive?: boolean;
}

const ChatBubbleStyles = {
  User: " bg-[#191919] text-white",
  sender: " bg-[#191919] text-white ",
};

export const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className={`flex flex-col py-1 ${
        props.variant === "User" ? "self-end" : "self-start"
      } max-w-[600px] w-fit`}
    >
      {props.variant === "User" ? (
        <div
          className={`${
            ChatBubbleStyles[props.variant]
          } border border-gray-500/20 px-4 py-2 rounded-lg shadow-md text-sm font-primary max-w-[30vw] break-words`}
        >
          {props.text}
        </div>
      ) : (
        <div className="flex gap-2 items-start">
          <div className="relative flex-shrink-0 mt-1">
            <RobotIcon />
          </div>
          <div
            className={`border border-gray-500/20 text-white bg-[#191919] px-4 py-2 rounded-lg shadow-md text-sm font-primary max-w-[70vw] sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[30vw] break-words`}
          >
            {props.isActive ? (
              <AnimatedAIResult result={props.text} />
            ) : (
              // For non-active messages, also preserve formatting
              <div className="leading-relaxed whitespace-pre-line">
                {props.text}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

ChatBubble.displayName = 'ChatBubble';