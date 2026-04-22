import { motion } from "motion/react";

export const AnimatedAIResult = ({ result = "" }: { result?: string }) => {
    // Enhanced text processing to handle different formatting patterns
    const processText = (text: string) => {
      // Split by double newlines first (paragraphs)
      const paragraphs = text.split('\n\n');
      
      return paragraphs.map((paragraph, paragraphIndex) => {
        // Split each paragraph by single newlines
        const lines = paragraph.split('\n');
        
        return lines.map((line, lineIndex) => {
          // Check if line is a bullet point or special formatting
          const isBulletPoint = line.trim().startsWith('*') || 
                               line.trim().startsWith('-') || 
                               line.trim().startsWith('•') ||
                               /^\d+\./.test(line.trim()); // numbered lists
          
          const isHeading = line.trim().startsWith('**') && line.trim().endsWith('**');
          const isSubHeading = line.trim().startsWith('#');
          
          return {
            text: line,
            type: isHeading ? 'heading' : 
                  isSubHeading ? 'subheading' : 
                  isBulletPoint ? 'bullet' : 'normal',
            paragraphIndex,
            lineIndex,
            isEmpty: line.trim() === ''
          };
        });
      }).flat();
    };
  
    const processedLines = processText(result);
    let charIndex = 0;
  
    return (
      <div className="leading-relaxed space-y-2">
        {processedLines.map((lineData, index) => {
          // Skip empty lines but preserve spacing
          if (lineData.isEmpty) {
            return <div key={index} className="h-2" />;
          }
  
          const characters = lineData.text.split("");
          const startCharIndex = charIndex;
          charIndex += characters.length;
  
          // Different styling based on line type
          const getLineClasses = () => {
            switch (lineData.type) {
              case 'heading':
                return "font-bold text-lg mb-2 mt-3";
              case 'subheading':
                return "font-semibold text-base mb-1 mt-2";
              case 'bullet':
                return "ml-4 mb-1";
              default:
                return "mb-1";
            }
          };
  
          return (
            <motion.div
              key={index}
              className={getLineClasses()}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: startCharIndex * 0.01,
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              {characters.map((char, charIdx) => (
                <motion.span
                  key={`${index}-${charIdx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: (startCharIndex + charIdx) * 0.01,
                    duration: 0.1,
                    ease: "easeOut"
                  }}
                  className="inline"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          );
        })}
      </div>
    );
  };
  