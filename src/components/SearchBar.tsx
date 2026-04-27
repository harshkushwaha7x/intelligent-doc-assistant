import { useState, useCallback, memo } from "react"
import { SearchIcon } from "./icons/SearchIcon";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAIResultLoading, isHistoryLoading, messages } from "../atoms";
import { useParams } from "react-router-dom";
import { documentService } from "../services/documentService";
import { authService } from "../services/authService";

const AISearchComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const setIsLoading = useSetRecoilState(isAIResultLoading)
    const setMessages = useSetRecoilState(messages)
    const isLoadingChatHistory = useRecoilValue(isHistoryLoading)
    const params = useParams()
    
    const handleInputQuery = useCallback(async () => {
        if (!inputValue || inputValue.trim().length < 1) {
            return
        }
        
        const input = inputValue.trim()
        setMessages(prev => [...prev, { content: input, sentBy: 'User' }])
        
        try {
            setIsLoading(true)
            const response = await documentService.queryDocument(params.id || '', input);
            
            // Clear input field after successful query
            setInputValue("");
            
            setIsLoading(false)
            setMessages(prev => [...prev, { content: response.response, sentBy: 'Bot' }])
        }
        catch (e) {
            // Reset loading state when query fails
            setIsLoading(false)
        }
    }, [inputValue, params.id, setIsLoading, setMessages])

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleInputQuery();
        }
    }, [handleInputQuery])
    
    if (!isLoadingChatHistory)
        return (
            <div className="w-[90vw] shadow-2xl md:w-[50vw] min-h-[3rem] md:min-h-[5rem] rounded-2xl bg-[#191919] font-primary border border-gray-500/20 flex flex-col p-2 md:p-4">
                <label htmlFor="query-input" className="sr-only">
                    Ask your PDF
                </label>
                <textarea
                    id="query-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    aria-label="Query input for PDF"
                    className="bg-[#191919] text-white w-full font-primary p-2 resize-none flex-grow outline-none
                     font-medium text-sm md:text-md placeholder:text-white/40
                    transition-colors duration-200 focus:ring-2 focus:ring-blue-500 rounded-2xl"
                    placeholder="Ask your PDF... (Press Enter to send)"
                ></textarea>
                
                <div className="w-full flex justify-end items-center mt-2 p-2">
                    <button
                        onClick={handleInputQuery}
                        aria-label="Send query"
                        className="border cursor-pointer border-white bg-white border-opacity-40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-50 transition focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <SearchIcon classname="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>
        )
}