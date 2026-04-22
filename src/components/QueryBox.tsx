import { useRecoilValue } from "recoil";
import { ChatBubble } from "./ChatBubble";
import { isAIResultLoading, isHistoryLoading, messages } from "../atoms";
import { useRef } from "react";
import { ChatBubbleLoading } from "./ChatBubbleLoading";
import { useEffect } from "react";
import { ThreeDot } from "react-loading-indicators";

export const QueryBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const allMessages = useRecoilValue(messages);
  const isLoading = useRecoilValue(isAIResultLoading);
  const isLoadingChatHistory = useRecoilValue(isHistoryLoading);

  useEffect(() => {
    const scrollToNewMessage = () => {
      // If loading, scroll to the loading bubble with offset for navbar
      if (isLoading && loadingRef.current) {
        loadingRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // This ensures it scrolls to the top of the element
        });
      } else if (lastMessageRef.current) {
        // Scroll to the start of the last message instead of bottom
        lastMessageRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // This shows the top of the message
        });
      }
    };

    // Only scroll when there are messages
    if (allMessages.length > 0) {
      scrollToNewMessage();
    }
  }, [allMessages.length, isLoading]); // Changed dependency to allMessages.length

  return (
    <div className="flex flex-col gap-2 p-2 w-full">
      {!isLoadingChatHistory ? (
        <>
          <ChatBubble text="hey" variant="Bot" />
          {allMessages.map(({ content, sentBy, isHistory }, index) => (
            <ChatBubble
              key={index}
              text={content}
              variant={sentBy}
              isActive={!isHistory}
              ref={index === allMessages.length - 1 ? lastMessageRef : null}
            />
          ))}

          {isLoading && (
            <div ref={loadingRef}>
              <ChatBubbleLoading />
            </div>
          )}

          <div ref={containerRef} />
        </>
      ) : (
        <div className="flex justify-center items-center translate-y-48">
          <ThreeDot variant="brick-stack" color="#5c8dda" size="large" text="" textColor="#ffffff" />
        </div>
      )}
    </div>
  );
};