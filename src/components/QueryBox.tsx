import { useRecoilValue } from "recoil";
import { ChatBubble } from "./ChatBubble";
import { isAIResultLoading, isHistoryLoading, messages } from "../atoms";
import { useRef, useEffect, useMemo } from "react";
import { ChatBubbleLoading } from "./ChatBubbleLoading";
import { ThreeDot } from "react-loading-indicators";

export const QueryBox = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const allMessages = useRecoilValue(messages);
  const isLoading = useRecoilValue(isAIResultLoading);
  const isLoadingChatHistory = useRecoilValue(isHistoryLoading);

  const messagesLength = useMemo(() => allMessages.length, [allMessages.length]);

  useEffect(() => {
    const scrollToNewMessage = () => {
      if (isLoading && loadingRef.current) {
        loadingRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    if (messagesLength > 0) {
      scrollToNewMessage();
    }
  }, [messagesLength, isLoading]);

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