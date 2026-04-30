export const DocumentCardSkeleton = () => {
  return (
    <div className="w-80 h-62 border border-gray-300/30 rounded-lg p-4 animate-pulse">
      <div className="h-40 bg-gray-700/50 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-700/50 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-700/50 rounded w-1/2"></div>
    </div>
  );
};

export const ChatMessageSkeleton = () => {
  return (
    <div className="flex gap-2 p-4 animate-pulse">
      <div className="w-8 h-8 bg-gray-700/50 rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700/50 rounded w-1/2"></div>
      </div>
    </div>
  );
};
