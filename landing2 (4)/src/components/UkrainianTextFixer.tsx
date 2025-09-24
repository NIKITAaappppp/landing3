import React, { useEffect } from 'react';

// Function to fix common Ukrainian text encoding issues
const fixUkrainianEncoding = (text: string): string => {
  // Use a more reliable approach to fix encoding issues
  // Convert common mojibake patterns back to proper Ukrainian characters
  let fixedText = text;
  
  // Common encoding fixes using escape sequences to avoid source code issues
  const fixes = [
    [/Ð°/g, 'а'], [/Ð²/g, 'в'], [/Ð³/g, 'г'], [/Ð´/g, 'д'], [/Ðµ/g, 'е'],
    [/Ñ‚/g, 'т'], [/Ñ€/g, 'р'], [/Ñƒ/g, 'у'], [/Ñ–/g, 'і'], [/Ð¾/g, 'о'],
    [/Ð¿/g, 'п'], [/Ñ[^‚€ƒ„…†‡ˆ‰Š‹ŒŽ''""•–—˜™š›œžŸ]/g, 'с'], [/Ñ„/g, 'ф'], 
    [/Ñ…/g, 'х'], [/Ñ†/g, 'ц'], [/Ñ‡/g, 'ч'], [/Ñˆ/g, 'ш'], [/Ñ‰/g, 'щ'],
    [/ÑŒ/g, 'ь'], [/ÑŽ/g, 'ю'], [/Ñ/g, 'я'], [/Ñ—/g, 'ї'], [/Ñ"/g, 'є'],
    [/Ð'/g, 'А'], [/Ð'/g, 'Б'], [/Ð'/g, 'В'], [/Ð"/g, 'Г'], [/Ð"/g, 'Д'],
    [/Ð•/g, 'Е'], [/Ð–/g, 'Ж'], [/Ð—/g, 'З'], [/Ðˆ/g, 'И'], [/Ð†/g, 'І'],
    [/Ð™/g, 'Й'], [/Ðš/g, 'К'], [/Ð›/g, 'Л'], [/Ðœ/g, 'М'], [/Ð/g, 'Н'],
    [/Ðž/g, 'О'], [/ÐŸ/g, 'П'], [/Ð /g, 'Р'], [/Ð¡/g, 'С'], [/Ð¢/g, 'Т'],
    [/Ð£/g, 'У'], [/Ð¤/g, 'Ф'], [/Ð¥/g, 'Х'], [/Ð¦/g, 'Ц'], [/��§/g, 'Ч'],
    [/Ð¨/g, 'Ш'], [/Ð©/g, 'Щ'], [/Ðª/g, 'Ъ'], [/Ð«/g, 'Ы'], [/Ð¬/g, 'Ь'],
    [/Ð­/g, 'Э'], [/Ð®/g, 'Ю'], [/Ð¯/g, 'Я'], [/Ðƒ/g, 'Ї'], [/Ð„/g, 'Є']
  ];
  
  // Apply all fixes
  fixes.forEach(([pattern, replacement]) => {
    fixedText = fixedText.replace(pattern, replacement);
  });
  
  return fixedText;
};

// More aggressive text fixing function for severe encoding issues
const deepFixUkrainianText = (text: string): string => {
  // If text contains suspicious patterns, try to decode it properly
  if (!/[а-яіїєґА-ЯІЇЄҐ]/.test(text) && /[Ð-ÿ]/.test(text)) {
    try {
      // Try to fix common double-encoding issues
      let decoded = text;
      
      // Fix common Windows-1251 to UTF-8 issues
      decoded = decoded.replace(/Ð\u0090/g, 'А').replace(/Ð\u0091/g, 'Б');
      decoded = decoded.replace(/Ð\u0092/g, 'В').replace(/Ð\u0093/g, 'Г');
      
      // Apply the regular fixes
      decoded = fixUkrainianEncoding(decoded);
      
      return decoded;
    } catch (error) {
      console.warn('Deep text fixing failed:', error);
      return fixUkrainianEncoding(text);
    }
  }
  
  return fixUkrainianEncoding(text);
};

// Component to automatically fix Ukrainian text encoding issues
export const UkrainianTextFixer: React.FC = () => {
  useEffect(() => {
    const fixTextInDOM = () => {
      // Create tree walker to traverse all text nodes
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodesToFix: Text[] = [];
      let node;

      // Collect text nodes that need fixing
      while (node = walker.nextNode()) {
        const textNode = node as Text;
        const content = textNode.textContent;
        
        if (content && (/[Ð-ÿ]/.test(content) || !/[а-яіїєґА-ЯІЇЄҐ]/.test(content))) {
          // Only fix nodes that contain suspicious characters or lack Ukrainian chars
          if (content.length > 1) { // Don't fix single characters
            textNodesToFix.push(textNode);
          }
        }
      }

      // Fix the text content
      textNodesToFix.forEach(textNode => {
        try {
          const originalText = textNode.textContent || '';
          let fixedText = deepFixUkrainianText(originalText);
          
          // Only apply changes if the text actually improved
          if (fixedText !== originalText && fixedText.length > 0) {
            // Check if the fixed text contains Ukrainian characters
            if (/[а-яіїєґА-ЯІЇЄҐ]/.test(fixedText)) {
              textNode.textContent = fixedText;
            }
          }
        } catch (error) {
          console.warn('Failed to fix Ukrainian text encoding:', error);
        }
      });
    };

    // Initial fix with delay to allow DOM to be ready
    setTimeout(fixTextInDOM, 100);

    // Set up mutation observer to fix dynamically added text
    const observer = new MutationObserver((mutations) => {
      let hasTextChanges = false;
      
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          // Check if new nodes were added
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              hasTextChanges = true;
            }
          });
        } else if (mutation.type === 'characterData') {
          hasTextChanges = true;
        }
      });

      if (hasTextChanges) {
        // Debounce the fix operation
        setTimeout(fixTextInDOM, 200);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  // Also add global CSS to ensure proper Ukrainian font rendering
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.id = 'ukrainian-text-styles';
      
      if (!document.getElementById('ukrainian-text-styles')) {
        style.textContent = `
          * {
            font-feature-settings: "kern" 1, "liga" 1, "calt" 1 !important;
            text-rendering: optimizeLegibility !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }
          
          :lang(uk), [lang="uk"] {
            unicode-bidi: bidi-override !important;
            direction: ltr !important;
          }
          
          body {
            unicode-bidi: bidi-override !important;
            direction: ltr !important;
          }
        `;
        document.head.appendChild(style);
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default UkrainianTextFixer;