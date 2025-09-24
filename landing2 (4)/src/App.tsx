import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock,
  Smartphone,
  Wifi,
  Send,
  ArrowRight,
  Play,
  Star,
  Menu,
  X,
  CheckCircle,
  DollarSign,
  Users,
  Target,
  ChevronUp,
} from "lucide-react";
import UkrainianTextFixer from "./components/UkrainianTextFixer";

// Ensure proper encoding for Ukrainian text
if (typeof window !== "undefined") {
  document.documentElement.lang = "uk";
  document.documentElement.setAttribute("dir", "ltr");

  if (
    document.head &&
    !document.querySelector("meta[charset]")
  ) {
    const charset = document.createElement("meta");
    charset.setAttribute("charset", "UTF-8");
    document.head.appendChild(charset);
  }

  // Ensure proper text rendering
  document.body.style.textRendering = "optimizeLegibility";
  document.body.style.webkitFontSmoothing = "antialiased";
  document.body.style.mozOsxFontSmoothing = "grayscale";
}

const TELEGRAM_BOT_URL = "https://t.me/your_bot_username";

// Function to ensure proper Ukrainian text encoding
const ensureUkrainianText = (text: string): string => {
  // This function ensures that Ukrainian text is properly displayed
  // by checking for common encoding issues and fixing them
  return text
    .replace(/Ð°/g, "а")
    .replace(/Ð²/g, "в")
    .replace(/Ð³/g, "г")
    .replace(/Ð´/g, "д")
    .replace(/Ðµ/g, "е")
    .replace(/Ñ‚/g, "т")
    .replace(/Ñ€/g, "р")
    .replace(/Ñƒ/g, "у")
    .replace(/Ñ–/g, "і")
    .replace(/Ð¾/g, "о")
    .replace(/Ð¿/g, "п")
    .replace(/Ñ/g, "с")
    .replace(/Ñ„/g, "ф")
    .replace(/Ñ…/g, "х")
    .replace(/Ñ†/g, "ц")
    .replace(/Ñ‡/g, "ч")
    .replace(/Ñˆ/g, "ш")
    .replace(/Ñ‰/g, "щ")
    .replace(/ÑŒ/g, "ь")
    .replace(/ÑŽ/g, "ю")
    .replace(/Ñ/g, "я")
    .replace(/Ñ—/g, "ї")
    .replace(/Ñ"/g, "є")
    .replace(/Ð'/g, "А")
    .replace(/Ð'/g, "Б")
    .replace(/Ð'/g, "В")
    .replace(/Ð"/g, "Г")
    .replace(/Ð"/g, "Д")
    .replace(/Ð•/g, "Е")
    .replace(/Ð–/g, "Ж")
    .replace(/Ð—/g, "З")
    .replace(/Ðˆ/g, "И")
    .replace(/Ð†/g, "І")
    .replace(/Ð™/g, "Й")
    .replace(/Ðš/g, "К")
    .replace(/Ð›/g, "Л")
    .replace(/Ðœ/g, "М")
    .replace(/Ð/g, "Н")
    .replace(/Ðž/g, "О")
    .replace(/ÐŸ/g, "П")
    .replace(/Ð /g, "Р")
    .replace(/Ð¡/g, "С")
    .replace(/Ð¢/g, "Т")
    .replace(/Ð£/g, "У")
    .replace(/Ð¤/g, "Ф")
    .replace(/Ð¥/g, "Х")
    .replace(/Ð¦/g, "Ц")
    .replace(/Ð§/g, "Ч")
    .replace(/Ð¨/g, "Ш")
    .replace(/Ð©/g, "Щ")
    .replace(/Ðª/g, "Ъ")
    .replace(/Ð«/g, "Ы")
    .replace(/Ð¬/g, "Ь")
    .replace(/Ð­/g, "Э")
    .replace(/Ð®/g, "Ю")
    .replace(/Ð¯/g, "Я")
    .replace(/Ðƒ/g, "Ї")
    .replace(/Ð„/g, "Є");
};

// Component to ensure proper Ukrainian text rendering
const UkrainianText: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}> = ({ children, className = "", as: Component = "span" }) => {
  const styleProps: React.CSSProperties = {
    fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  return (
    <Component
      className={className}
      style={styleProps}
      lang="uk"
    >
      {children}
    </Component>
  );
};

// Custom SVG Icons
const TelegramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.13-.31-1.09-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
  </svg>
);

const CryptoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M12 2L13.09 7.26L20 4L16.74 8.91L22 10L16.74 11.09L20 16L13.09 12.74L12 18L10.91 12.74L4 16L7.26 11.09L2 10L7.26 8.91L4 4L10.91 7.26L12 2Z" />
  </svg>
);

const ShimmerButton = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  disabled,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 group";
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-emerald-600 via-emerald-500 to-yellow-500 text-white shadow-2xl shadow-emerald-500/25",
    secondary:
      "bg-gradient-to-r from-gray-800 to-gray-700 text-white border border-emerald-500/30",
    telegram:
      "bg-gradient-to-r from-emerald-600 via-emerald-500 to-yellow-500 text-white shadow-2xl shadow-emerald-500/25",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>

      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-emerald-400/10 transform -skew-x-12 group-hover:animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
    </button>
  );
};

const FeatureIcon = ({ icon: Icon, title, className = "" }) => (
  <div
    className={`flex flex-col sm:flex-row items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-yellow-900/20 border border-emerald-500/20 backdrop-blur-sm ${className}`}
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 flex items-center justify-center shadow-lg">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    </div>
    <span className="text-sm sm:text-base text-center sm:text-left">
      {title}
    </span>
  </div>
);

// Scroll to Top Button Component
const ScrollToTopButton = ({ show, onClick }) => (
  <div
    className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
      show
        ? "translate-y-0 opacity-100 scale-100"
        : "translate-y-4 opacity-0 scale-95 pointer-events-none"
    }`}
  >
    <button
      onClick={onClick}
      className="group relative w-14 h-14 bg-gradient-to-r from-emerald-600 via-emerald-500 to-yellow-500 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out rounded-full"></div>

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <ChevronUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
      </div>

      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 animate-pulse opacity-30"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
    </button>
  </div>
);

interface TestimonialType {
  id: number;
  name: string;
  text: string;
  videoId: string;
  rating: number;
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Олексій М.",
    text: "Отримав усі необхідні знання в трейдингу. Курс структурований і зрозумілий",
    videoId: "k4RRi_ntQc8",
    rating: 5,
  },
  {
    id: 2,
    name: "Марія К.",
    text: "За 3 місяці збільшила доходи в 5 разів. Неймовірні результати!",
    videoId: "jfKfPfyJRdk",
    rating: 5,
  },
  {
    id: 3,
    name: "Дмитро Л.",
    text: "Навчився заробляти стабільно. Більше не боюся торгувати",
    videoId: "sTLjdifH3Ys",
    rating: 5,
  },
  {
    id: 4,
    name: "Анна С.",
    text: "Тепер трейдинг мій основний дохід. Дякую за якісне навчання",
    videoId: "vTTzwJsHpU8",
    rating: 5,
  },
  {
    id: 5,
    name: "Віктор П.",
    text: "Курс перевершив усі мої очікування. Рекомендую всім",
    videoId: "uVFR9LWXhaw",
    rating: 5,
  },
].map((testimonial) => ({
  ...testimonial,
  name: ensureUkrainianText(testimonial.name),
  text: ensureUkrainianText(testimonial.text),
}));

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "privacy" | "terms"
  >("home");

  // Fix Ukrainian text encoding on component mount
  useEffect(() => {
    // Ensure document encoding is correct
    if (typeof window !== "undefined") {
      document.documentElement.lang = "uk";
      document.documentElement.setAttribute("dir", "ltr");

      // Apply Ukrainian text styling to body
      const bodyStyle = document.body.style;
      bodyStyle.fontFeatureSettings =
        '"kern" 1, "liga" 1, "calt" 1';
      bodyStyle.textRendering = "optimizeLegibility";
      bodyStyle.webkitFontSmoothing = "antialiased";
      bodyStyle.mozOsxFontSmoothing = "grayscale";

      // Function to fix text encoding recursively
      const fixUkrainianTextInDOM = () => {
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null,
        );

        let node;
        const nodesToFix: Text[] = [];

        // Collect all text nodes that need fixing
        while ((node = walker.nextNode())) {
          if (
            node.textContent &&
            /[Ð-ÿ]/.test(node.textContent)
          ) {
            nodesToFix.push(node as Text);
          }
        }

        // Fix the collected nodes
        nodesToFix.forEach((textNode) => {
          try {
            const fixedText = ensureUkrainianText(
              textNode.textContent || "",
            );
            if (fixedText !== textNode.textContent) {
              textNode.textContent = fixedText;
            }
          } catch (error) {
            console.warn(
              "Failed to fix Ukrainian text:",
              error,
            );
          }
        });
      };

      // Fix text immediately
      fixUkrainianTextInDOM();

      // Set up a mutation observer to fix text as it's added
      const observer = new MutationObserver((mutations) => {
        let hasTextChanges = false;
        mutations.forEach((mutation) => {
          if (
            mutation.type === "childList" &&
            mutation.addedNodes.length > 0
          ) {
            hasTextChanges = true;
          }
          if (mutation.type === "characterData") {
            hasTextChanges = true;
          }
        });

        if (hasTextChanges) {
          setTimeout(fixUkrainianTextInDOM, 100);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });

      // Cleanup observer on unmount
      return () => observer.disconnect();
    }
  }, [currentPage]);

  // Additional Ukrainian text display improvements
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Force UTF-8 in browser
      try {
        document.characterSet = "UTF-8";
      } catch (e) {
        // Fallback for older browsers
        console.log("Character set setting not supported");
      }

      // Ensure proper text direction and language
      document.dir = "ltr";
      document.lang = "uk";

      // Apply font fallbacks for Ukrainian characters
      const fontStyle = document.createElement("style");
      fontStyle.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Segoe UI Emoji', 'Noto Color Emoji' !important;
        }
      `;

      if (
        !document.head.querySelector(
          "style[data-ukrainian-fix]",
        )
      ) {
        fontStyle.setAttribute("data-ukrainian-fix", "true");
        document.head.appendChild(fontStyle);
      }
    }
  }, []);

  const [currentTestimonial, setCurrentTestimonial] =
    useState(0);
  const [progress, setProgress] = useState(72);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCarouselPlaying, setIsCarouselPlaying] =
    useState(true);
  const [carouselDirection, setCarouselDirection] = useState<
    "next" | "prev"
  >("next");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Progress bar animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 0.3;
        return newProgress > 85 ? 70 : newProgress;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Carousel autoplay
  useEffect(() => {
    if (!isCarouselPlaying || currentPage !== "home") return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => {
        const next = (prev + 1) % testimonials.length;
        setCarouselDirection("next");
        return next;
      });
    }, 5000); // Auto advance every 5 seconds

    return () => clearInterval(interval);
  }, [isCarouselPlaying, currentPage]);

  // Smooth navigation functions
  const nextTestimonial = () => {
    setCarouselDirection("next");
    setCurrentTestimonial((prev) => {
      if (prev === testimonials.length - 1) return prev; // Stop at last item
      return prev + 1;
    });
    setIsCarouselPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsCarouselPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setCarouselDirection("prev");
    setCurrentTestimonial((prev) => {
      if (prev === 0) return prev; // Stop at first item
      return prev - 1;
    });
    setIsCarouselPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsCarouselPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCarouselDirection(
      index > currentTestimonial ? "next" : "prev",
    );
    setCurrentTestimonial(index);
    setIsCarouselPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsCarouselPlaying(true), 10000);
  };

  const openYouTubeVideo = (videoId: string) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToCenter = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop =
        elementRect.top + window.pageYOffset;
      const middle =
        absoluteElementTop -
        window.innerHeight / 2 +
        elementRect.height / 2;
      window.scrollTo({ top: middle, behavior: "smooth" });
    }
  };

  if (currentPage === "privacy") {
    return (
      <>
        <UkrainianTextFixer />
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/3 to-yellow-400/3 rounded-full blur-2xl animate-ping opacity-70"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-16 left-16 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-300"></div>
            <div className="absolute top-32 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-24 left-32 w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 right-16 w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-1500"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl relative z-10">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="relative inline-block">
                <UkrainianText
                  as="h1"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-transparent bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text animate-pulse leading-tight"
                >
                  Політика конфіденційності
                </UkrainianText>

                {/* Animated Underline */}
                <div className="relative mx-auto w-48 sm:w-56 lg:w-64 h-1 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-yellow-400/10 to-emerald-400/10 blur-2xl rounded-3xl animate-pulse -z-10"></div>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-900/30 to-yellow-900/30 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-sm"></div>
                <p className="text-emerald-300 text-sm sm:text-base">
                  Дата підтвердження: 20/05/2024
                </p>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-emerald-900/20 to-yellow-900/20 rounded-3xl p-6 sm:p-8 border border-emerald-500/20 backdrop-blur-sm shadow-xl">
                <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-center">
                  Швидка навігація
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    "Що включає в себе ця Політ��ка",
                    "Які дані ми збираємо, вико��истовуємо та надаємо",
                    "Згода на використання персональних даних",
                    "Використання файлів cookie",
                    "Обробка персональних даних",
                    "Захист персональних даних",
                    "Права Користувачів",
                    "Зміни політики",
                  ].map((item, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        scrollToCenter(`section-${index + 1}`)
                      }
                      className="group block p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer w-full"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-xl">
                          <div className="w-full h-full flex items-center justify-center rounded-full">
                            <span className="text-white text-sm font-semibold leading-none">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <span className="text-emerald-400 group-hover:text-yellow-400 transition-colors duration-300 text-sm leading-tight">
                          {item}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "Що включає в себе ця Політика",
                  content:
                    "Дана Політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію при використанні наших послуг.",
                  icon: "🔐",
                },
                {
                  title:
                    "Які дані ми збираємо, використовуємо та надаємо",
                  content:
                    "Ми збираємо інформацію, яку ви надаєте нам добровільно, включаючи ім'я, email адресу та іншу контактну інформацію.",
                  icon: "📊",
                },
                {
                  title:
                    "Зг��да на використання персональних даних",
                  content:
                    "Використовуючи наш сайт, ви даєте згоду н�� збір та використання вашої інформації відповідно до даної п��літики.",
                  icon: "✅",
                },
                {
                  title: "Використання файлів cookie",
                  content:
                    "Ми використовуємо cookies для покращення роботи сайту та надання персоналізованого досвіду.",
                  icon: "🍪",
                },
                {
                  title: "Обробка персональних даних",
                  content:
                    "Ваші персональні дані обробляються виключно для надання запитуваних послуг.",
                  icon: "⚙️",
                },
                {
                  title: "Захис�� персональних даних",
                  content:
                    "Ми застосовуємо сучасні методи захисту інформації для забезпечення безпеки ваших даних.",
                  icon: "🛡️",
                },
                {
                  title: "Права Користувачів",
                  content:
                    "Ви маєте право на доступ, зміну та видалення ваших персональних даних.",
                  icon: "👤",
                },
                {
                  title: "Зміни політики",
                  content:
                    "Ми залишаємо за собою право вносити зміни до даної політики. Оновлення будуть опубліковані на цій сторінці.",
                  icon: "📝",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  id={`section-${index + 1}`}
                  className="group bg-gradient-to-br from-emerald-900/10 to-yellow-900/10 rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-500/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/40"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-emerald-600 to-yellow-600 rounded-full flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        {section.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text">
                        {section.title}
                      </h2>

                      <div className="relative bg-black/20 rounded-2xl p-4 sm:p-6 border border-emerald-500/10">
                        <UkrainianText
                          as="p"
                          className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg"
                        >
                          {section.content}
                        </UkrainianText>

                        {/* Decorative Elements */}
                        <div className="absolute top-2 right-2 w-3 h-3 bg-emerald-400/40 rounded-full animate-pulse shadow-sm"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping delay-500 shadow-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Number */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-emerald-500/40 to-yellow-500/40 rounded-full flex items-center justify-center border border-emerald-500/50 shadow-xl backdrop-blur-sm">
                    <span className="text-emerald-100 text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 sm:mt-20 text-center">
              <div className="bg-gradient-to-br from-emerald-900/20 to-yellow-900/20 rounded-3xl p-8 sm:p-12 border border-emerald-500/30 backdrop-blur-sm shadow-2xl">
                <div className="max-w-2xl mx-auto">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text mb-4">
                      Дякуємо за довіру!
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Ваша конфіденційність - наш пріоритет. Ми
                      завжди дбаємо про безпеку ваших даних.
                    </p>
                  </div>

                  <ShimmerButton
                    onClick={() => setCurrentPage("home")}
                    className="px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5" />
                      <span>
                        Повернутися на головну сторінку
                      </span>
                    </div>
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <ScrollToTopButton
            show={showScrollTop}
            onClick={scrollToTop}
          />
        </div>
      </>
    );
  }

  if (currentPage === "terms") {
    return (
      <>
        <UkrainianTextFixer />
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/3 to-yellow-400/3 rounded-full blur-2xl animate-ping opacity-70"></div>
          </div>

          {/* Floating Legal Icons */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute top-16 left-16 text-emerald-400 animate-pulse">
              ⚖️
            </div>
            <div className="absolute top-32 right-24 text-yellow-400 animate-bounce delay-300">
              📋
            </div>
            <div className="absolute bottom-24 left-32 text-emerald-300 animate-pulse delay-700">
              📜
            </div>
            <div className="absolute bottom-40 right-16 text-yellow-300 animate-bounce delay-1500">
              🤝
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl relative z-10">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="relative inline-block">
                <UkrainianText
                  as="h1"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 text-transparent bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text animate-pulse leading-tight"
                >
                  УМОВИ КОРИСТУВАННЯ
                </UkrainianText>

                {/* Animated Underline */}
                <div className="relative mx-auto w-56 sm:w-64 lg:w-72 h-1 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] animate-[slide_2s_ease-in-out_infinite] rounded-full"></div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-yellow-400/10 to-emerald-400/10 blur-2xl rounded-3xl animate-pulse -z-10"></div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-900/30 to-yellow-900/30 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-300 text-xs sm:text-sm">
                    Останнє оновлення: 2024
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-900/30 to-emerald-900/30 rounded-full border border-yellow-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-yellow-300 text-xs sm:text-sm">
                    Юридично обов'язкові
                  </span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mb-12 sm:mb-16">
              <div className="bg-gradient-to-br from-yellow-900/20 to-emerald-900/20 rounded-3xl p-6 sm:p-8 border border-yellow-500/30 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    ⚠️
                  </div>
                  <h2 className="text-xl sm:text-2xl text-transparent bg-gradient-to-r from-yellow-400 to-emerald-400 bg-clip-text">
                    Важливо прочитати
                  </h2>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Використовуючи наші послуги, ви автоматично
                  погоджуєтеся з цими умовами. Будь ласка,
                  уважно ознайомтеся з усіма пунктами перед
                  початком навчання.
                </p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "ОСНОВНІ ПОЛОЖЕННЯ",
                  content:
                    "Дані Умови користування регулюють відносини між користувачем та нашою компанією при використанні наших послуг та продуктів.",
                  icon: "📋",
                  gradient: "from-emerald-600 to-emerald-400",
                },
                {
                  title: "ПОСЛУГИ КОМПАНІЇ",
                  content:
                    "Компанія надає навчальні матеріали з трейдингу, консультації та доступ до торгових інструментів.",
                  icon: "🎓",
                  gradient: "from-yellow-600 to-yellow-400",
                },
                {
                  title: "ОБО��'ЯЗКИ КОРИСТУВАЧА",
                  content:
                    "Користувач зобов'язується використовувати послуги згідно з їх призначенням та не порушувати права третіх осіб.",
                  icon: "👤",
                  gradient: "from-emerald-500 to-yellow-500",
                },
                {
                  title: "ІНТЕЛЕКТУАЛЬНА ВЛАСНІСТЬ",
                  content:
                    "Усі матеріали, представлені на сайті, є інтелектуальною власністю компанії.",
                  icon: "💎",
                  gradient: "from-yellow-600 to-emerald-600",
                },
                {
                  title: "ВІДМОВА ВІД ВІДПОВІДАЛЬНОСТІ",
                  content:
                    "Компанія не несе відповідальності за збитки, що виникли в результаті торгових операцій користувача.",
                  icon: "⚖️",
                  gradient: "from-emerald-600 to-yellow-400",
                },
                {
                  title: "КОНФІДЕНЦІЙНІСТЬ",
                  content:
                    "Обробка персональних даних здійснюється відповідно до політики конфіденційності.",
                  icon: "🔒",
                  gradient: "from-yellow-500 to-emerald-500",
                },
                {
                  title: "ЗМІНИ УМОВ",
                  content:
                    "Компанія має право вносити зміни до даних умов з повідомлення�� користувачів.",
                  icon: "📝",
                  gradient: "from-emerald-500 to-yellow-600",
                },
                {
                  title: "КОНТАКТНА ІНФОРМАЦІЯ",
                  content:
                    "З усіх питань звертайтеся: support@tradeclub.ua",
                  icon: "📞",
                  gradient: "from-yellow-600 to-emerald-500",
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-emerald-900/10 to-yellow-900/10 rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-500/20 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/40"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r ${section.gradient} rounded-full flex items-center justify-center text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                      >
                        {section.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4 sm:mb-6">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${section.gradient} rounded-full flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform duration-200 shadow-lg`}
                        >
                          {index + 1}
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text">
                          {section.title}
                        </h2>
                      </div>

                      <div className="relative bg-black/30 rounded-2xl p-4 sm:p-6 border border-emerald-500/10 backdrop-blur-sm">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                          {section.content}
                        </p>

                        {/* Decorative corner elements */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-400/30 rounded-full animate-ping delay-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-full border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Contact & CTA Section */}
            <div className="mt-16 sm:mt-20">
              <div className="bg-gradient-to-br from-emerald-900/20 to-yellow-900/20 rounded-3xl p-8 sm:p-12 border border-emerald-500/30 backdrop-blur-sm shadow-2xl">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="mb-8">
                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text mb-4">
                      Готові почати навчання?
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6">
                      Прийнявши ці умови, ви отримуєте доступ до
                      найкращих навчальних матеріалів з
                      трейдингу
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <ShimmerButton
                      onClick={() => setCurrentPage("home")}
                      className="px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg"
                    >
                      <div className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5" />
                        <span>Повернутися на головну</span>
                      </div>
                    </ShimmerButton>

                    <ShimmerButton
                      onClick={() => setCurrentPage("privacy")}
                      variant="secondary"
                      className="px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span>Політика конфіденційності</span>
                      </div>
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <p className="text-gray-400 text-xs sm:text-sm">
                  © 2024 ТОВ "Т��ЕЙДКЛАБ". Усі права захищені.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  Юридична адреса: Україна, м. Київ | Email:
                  legal@tradeclub.ua
                </p>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <ScrollToTopButton
            show={showScrollTop}
            onClick={scrollToTop}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <UkrainianTextFixer />
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div
            className="absolute inset-0 opacity-10 sm:opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1650959828226-f9d53a7c1f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHRyYWRpbmclMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzU4NjQ5ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <UkrainianText
                  as="h1"
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                >
                  <span className="text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text block">
                    Почни заробляти
                  </span>
                  <span className="text-white block mt-2">
                    з безкоштовним навчанням на валютних парах
                  </span>
                </UkrainianText>

                <UkrainianText
                  as="p"
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                >
                  Хочеш освоїти трейдинг? Почни з безкоштовних
                  уроків
                </UkrainianText>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
                  <FeatureIcon
                    icon={TrendingUp}
                    title="З пов��ого нуля"
                  />
                  <FeatureIcon
                    icon={Clock}
                    title="Від 1 години в день"
                  />
                  <FeatureIcon
                    icon={Smartphone}
                    title="Лише телефон"
                  />
                  <FeatureIcon
                    icon={Wifi}
                    title="І доступ в інтернет"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="relative mb-6 sm:mb-8">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-emerald-500/20">
                    <img
                      src="https://images.unsplash.com/photo-1649503116494-b07b8f561c21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3NtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg2NDk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Trading Expert"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-900/40 to-yellow-900/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-lg shadow-2xl">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <p className="text-emerald-300 text-sm sm:text-base">
                        Ваш безкоштовний доступ:
                      </p>
                    </div>

                    <ShimmerButton
                      onClick={() =>
                        window.open(TELEGRAM_BOT_URL, "_blank")
                      }
                      variant="telegram"
                      className="w-full py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <TelegramIcon />
                        <span>Почати навчання</span>
                      </div>
                    </ShimmerButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <UkrainianText
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 lg:mb-20 text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text max-w-4xl mx-auto leading-tight"
            >
              НА НАВЧАННІ ВИ ДІЗНАЄТЕСЯ:
            </UkrainianText>

            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <div className="relative inline-block">
                  {/* Center Expert Image */}
                  <div className="relative z-10">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl shadow-emerald-500/30">
                      <img
                        src="https://images.unsplash.com/photo-1649503116494-b07b8f561c21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3NtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg2NDk4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Expert"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Mobile Benefits Grid */}
                  <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden max-w-2xl mx-auto">
                    {[
                      {
                        icon: Target,
                        text: "Основи технічного аналізу",
                      },
                      {
                        icon: DollarSign,
                        text: "Управління ризиками",
                      },
                      {
                        icon: Users,
                        text: "Психологія трейдингу",
                      },
                      {
                        icon: CryptoIcon,
                        text: "Торгові стратегії",
                      },
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-emerald-800/90 to-yellow-800/90 rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-emerald-500/40 shadow-lg"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-emerald-500 to-yellow-500 flex items-center justify-center">
                            <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <p className="text-sm sm:text-base text-white">
                            {benefit.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Benefits with Lines */}
                  <div className="absolute inset-0 hidden lg:block">
                    {/* Top Left */}
                    <div className="absolute top-4 left-0 transform -translate-x-full -translate-x-8">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-emerald-800/90 to-yellow-800/90 rounded-xl p-4 backdrop-blur-sm border border-emerald-500/40 shadow-lg">
                          <div className="flex items-center gap-3">
                            <Target className="w-6 h-6 text-emerald-400" />
                            <p className="text-sm text-white whitespace-nowrap">
                              Основи технічного аналізу
                            </p>
                          </div>
                        </div>
                        <svg
                          width="120"
                          height="2"
                          className="text-emerald-500"
                        >
                          <defs>
                            <linearGradient
                              id="gradient1"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#10b981"
                              />
                              <stop
                                offset="100%"
                                stopColor="#f59e0b"
                              />
                            </linearGradient>
                          </defs>
                          <line
                            x1="0"
                            y1="1"
                            x2="120"
                            y2="1"
                            stroke="url(#gradient1)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Top Right */}
                    <div className="absolute top-4 right-0 transform translate-x-full translate-x-8">
                      <div className="flex items-center gap-4">
                        <svg
                          width="120"
                          height="2"
                          className="text-emerald-500"
                        >
                          <defs>
                            <linearGradient
                              id="gradient2"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#f59e0b"
                              />
                              <stop
                                offset="100%"
                                stopColor="#10b981"
                              />
                            </linearGradient>
                          </defs>
                          <line
                            x1="0"
                            y1="1"
                            x2="120"
                            y2="1"
                            stroke="url(#gradient2)"
                            strokeWidth="2"
                          />
                        </svg>
                        <div className="bg-gradient-to-r from-yellow-800/90 to-emerald-800/90 rounded-xl p-4 backdrop-blur-sm border border-yellow-500/40 shadow-lg">
                          <div className="flex items-center gap-3">
                            <DollarSign className="w-6 h-6 text-yellow-400" />
                            <p className="text-sm text-white whitespace-nowrap">
                              Управління ризиками
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Left */}
                    <div className="absolute bottom-4 left-0 transform -translate-x-full -translate-x-8">
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-emerald-800/90 to-yellow-800/90 rounded-xl p-4 backdrop-blur-sm border border-emerald-500/40 shadow-lg">
                          <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-emerald-400" />
                            <p className="text-sm text-white whitespace-nowrap">
                              Психологія трейдингу
                            </p>
                          </div>
                        </div>
                        <svg
                          width="120"
                          height="2"
                          className="text-emerald-500"
                        >
                          <defs>
                            <linearGradient
                              id="gradient3"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#10b981"
                              />
                              <stop
                                offset="100%"
                                stopColor="#f59e0b"
                              />
                            </linearGradient>
                          </defs>
                          <line
                            x1="0"
                            y1="1"
                            x2="120"
                            y2="1"
                            stroke="url(#gradient3)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Right */}
                    <div className="absolute bottom-4 right-0 transform translate-x-full translate-x-8">
                      <div className="flex items-center gap-4">
                        <svg
                          width="120"
                          height="2"
                          className="text-emerald-500"
                        >
                          <defs>
                            <linearGradient
                              id="gradient4"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#f59e0b"
                              />
                              <stop
                                offset="100%"
                                stopColor="#10b981"
                              />
                            </linearGradient>
                          </defs>
                          <line
                            x1="0"
                            y1="1"
                            x2="120"
                            y2="1"
                            stroke="url(#gradient4)"
                            strokeWidth="2"
                          />
                        </svg>
                        <div className="bg-gradient-to-r from-yellow-800/90 to-emerald-800/90 rounded-xl p-4 backdrop-blur-sm border border-yellow-500/40 shadow-lg">
                          <div className="flex items-center gap-3">
                            <CryptoIcon />
                            <p className="text-sm text-white whitespace-nowrap">
                              Торгові стратегії
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 sm:mt-12">
                  <ShimmerButton
                    onClick={() =>
                      window.open(TELEGRAM_BOT_URL, "_blank")
                    }
                    variant="telegram"
                    className="py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-lg"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <TelegramIcon />
                      <span>Зайняти місце</span>
                    </div>
                  </ShimmerButton>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 sm:mt-8 max-w-sm sm:max-w-md mx-auto">
                  <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                    <span>Зареєстровано</span>
                    <span>{progress.toFixed(0)}%</span>
                  </div>
                  <div className="relative h-3 sm:h-4 bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full transition-all duration-1000 ease-out shadow-lg"
                      style={{
                        width: `${Math.round(progress)}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] animate-[slide_3s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reasons Section */}
            <div className="mt-16 sm:mt-20 lg:mt-24 relative overflow-hidden">
              {/* Background Glow Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/3 to-yellow-400/3 rounded-full blur-2xl animate-ping opacity-70"></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-16 left-16 w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-32 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-ping delay-700"></div>
                <div className="absolute bottom-24 left-32 w-2 h-2 bg-emerald-300 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-40 right-16 w-2 h-2 bg-yellow-300 rounded-full animate-bounce delay-1500"></div>
              </div>

              {/* Enhanced Title - Perfectly Centered */}
              <div className="relative text-center mb-12 sm:mb-16 lg:mb-20">
                <div className="relative inline-block max-w-6xl mx-auto">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 bg-clip-text leading-tight relative z-10 animate-pulse px-4">
                    Вам обов'язково потрібно пройти навчання
                    якщо:
                  </h3>

                  {/* Animated Underline - Centered */}
                  <div className="relative mx-auto w-40 sm:w-48 lg:w-56 h-1 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full"></div>

                  {/* Glow Effect Behind Title */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-yellow-400/10 to-emerald-400/10 blur-2xl rounded-3xl animate-pulse -z-10"></div>
                </div>
              </div>

              {/* Enhanced Cards Grid - Equal Heights and Perfect Alignment */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16 sm:mb-20 lg:mb-24 relative z-10 max-w-7xl mx-auto">
                {[
                  {
                    image:
                      "https://images.unsplash.com/photo-1580403983523-332a83e13ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWNjZXNzZnVsJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc1ODY0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    text: "Ви шукаєте основне або додаткове джерело доходу, якому потрібно приділяти від години в день",
                    gradient: "from-emerald-600 to-emerald-400",
                    number: "01",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1580403983523-332a83e13ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWNjZXNzZnVsJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc1ODY0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    text: "Не знаєте з чого почати та потребуєте допомоги і підтримки професіоналів",
                    gradient: "from-yellow-600 to-yellow-400",
                    number: "02",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1580403983523-332a83e13ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXh1cnklMjBzdWNjZXNzZnVsJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc1ODY0OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    text: "Маєте вільний час і бажання вивчити найперспективнішу професію 2025 року",
                    gradient: "from-emerald-500 to-yellow-500",
                    number: "03",
                  },
                ].map((reason, index) => (
                  <div
                    key={index}
                    className="group relative h-full flex flex-col"
                    style={{
                      animationDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Card Background with Animated Border */}
                    <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-1 overflow-hidden backdrop-blur-sm h-full flex flex-col">
                      {/* Animated Border Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-50 rounded-3xl blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out rounded-3xl"></div>

                      {/* Inner Card */}
                      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl p-6 sm:p-8 backdrop-blur-sm transform group-hover:scale-[1.02] transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gray-900/90 group-hover:to-gray-800/70 h-full flex flex-col">
                        {/* Number Badge */}
                        <div className="absolute -top-4 -right-4 z-20">
                          <div
                            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${reason.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                          >
                            <span className="text-white text-lg sm:text-xl font-bold">
                              {reason.number}
                            </span>
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-full animate-ping opacity-20`}
                            ></div>
                          </div>
                        </div>

                        {/* Image with Enhanced Effects */}
                        <div className="relative overflow-hidden rounded-2xl mb-6 sm:mb-8 group-hover:shadow-2xl transition-all duration-500">
                          <div className="relative aspect-[4/5] overflow-hidden">
                            <img
                              src={reason.image}
                              alt={`Reason ${index + 1}`}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Multiple Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${reason.gradient.replace("from-", "from-").replace("to-", "to-")}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            ></div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                              <div
                                className={`w-3 h-3 bg-gradient-to-r ${reason.gradient} rounded-full animate-pulse`}
                              ></div>
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                              <div
                                className={`w-4 h-4 bg-gradient-to-r ${reason.gradient} rounded-full animate-bounce`}
                              ></div>
                            </div>

                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                          </div>

                          {/* Image Border Glow */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-30 blur-xl rounded-2xl transition-opacity duration-500 -z-10`}
                          ></div>
                        </div>

                        {/* Enhanced Text - Flex grow to fill space */}
                        <div className="text-center space-y-4 flex-grow flex flex-col justify-center">
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed px-2 group-hover:text-white transition-colors duration-300 relative z-10">
                            {reason.text}
                          </p>

                          {/* Animated Text Underline */}
                          <div
                            className={`mx-auto w-0 group-hover:w-24 h-0.5 bg-gradient-to-r ${reason.gradient} transition-all duration-500 rounded-full`}
                          ></div>
                        </div>

                        {/* Corner Decorations */}
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div
                            className={`w-6 h-6 border-l-2 border-t-2 border-gradient-to-r ${reason.gradient.replace("from-", "border-").replace(" to-", "")}`}
                          ></div>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div
                            className={`w-6 h-6 border-r-2 border-b-2 border-gradient-to-r ${reason.gradient.replace("from-", "border-").replace(" to-", "")}`}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* External Card Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-20 blur-3xl rounded-3xl transition-opacity duration-500 -z-10`}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Enhanced Success Story - Perfectly Centered */}
              <div className="relative max-w-6xl mx-auto">
                {/* Background for Success Story */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 via-yellow-900/10 to-emerald-900/10 rounded-3xl blur-xl"></div>

                <div className="relative bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-3xl p-8 sm:p-10 lg:p-12 border border-emerald-500/20 backdrop-blur-sm">
                  {/* Success Story Title - Centered */}
                  <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-4">
                      💰{" "}
                      <span className="text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text">
                        Історія успіху
                      </span>{" "}
                      💰
                    </h4>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 mx-auto rounded-full animate-pulse"></div>
                  </div>

                  {/* Main Story Content - Perfect Grid Alignment */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center max-w-5xl mx-auto">
                    {/* Before Placeholder - Circular */}
                    <div className="lg:col-span-2 text-center w-full">
                      <div className="relative mb-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                        {/* Circular Placeholder */}
                        <div className="relative w-full h-full rounded-full border-4 border-gray-500 shadow-2xl bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 flex items-center justify-center overflow-hidden">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-800/50 rounded-full"></div>

                          {/* Central Icon */}
                          <div className="relative z-10 flex flex-col items-center justify-center text-gray-300">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                              <div className="text-2xl sm:text-3xl lg:text-4xl">
                                👷‍♂️
                              </div>
                            </div>
                            <span className="text-xs sm:text-sm lg:text-base text-gray-400 px-2 text-center">
                              Звичайна робота
                            </span>
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute top-6 left-6 w-3 h-3 bg-gray-400/30 rounded-full"></div>
                          <div className="absolute top-8 right-8 w-2 h-2 bg-gray-400/40 rounded-full"></div>
                          <div className="absolute bottom-6 left-8 w-4 h-4 bg-gray-400/20 rounded-full"></div>
                          <div className="absolute bottom-8 right-6 w-2 h-2 bg-gray-400/30 rounded-full"></div>

                          {/* Subtle Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-full"></div>
                        </div>

                        {/* Simple Badge */}
                        <div className="absolute -bottom-3 -right-3 bg-gray-700 text-white text-sm px-4 py-2 rounded-full border-2 border-gray-500 shadow-lg">
                          ДО
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-base sm:text-lg text-gray-400 max-w-xs mx-auto leading-relaxed">
                          За 5 років я пройшов шлях від роботи в
                          доставці
                        </p>
                        <div className="w-16 h-0.5 bg-gray-500 mx-auto rounded-full"></div>
                      </div>
                    </div>

                    {/* Arrow - Perfect Center */}
                    <div className="lg:col-span-1 flex justify-center">
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                          <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white" />
                        </div>

                        {/* Transformation Text */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span className="text-sm sm:text-base text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text font-medium">
                            ТРАНСФОРМАЦІЯ
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* After Image - Simplified and Large */}
                    <div className="lg:col-span-2 text-center w-full">
                      <div className="relative mb-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                        {/* Simple Round Image */}
                        <div className="relative rounded-full border-4 border-emerald-500 shadow-2xl shadow-emerald-500/30 bg-gradient-to-br from-emerald-600 via-emerald-500 to-yellow-500 flex items-center justify-center w-full h-full">
                          {/* Success Content */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/60 to-yellow-400/60 rounded-full"></div>

                          {/* Central Icon */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-2 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                              <div className="text-2xl sm:text-3xl lg:text-4xl">
                                💰
                              </div>
                            </div>
                            <span className="text-xs sm:text-sm lg:text-base text-white/90 px-2 text-center font-medium">
                              Успішний трейдер
                            </span>
                          </div>

                          {/* Decorative Gradient Dots */}
                          <div className="absolute top-6 left-8 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                          <div className="absolute top-12 right-10 w-2 h-2 bg-yellow-300/60 rounded-full animate-bounce delay-200"></div>
                          <div className="absolute bottom-6 left-6 w-4 h-4 bg-emerald-300/50 rounded-full animate-ping delay-400"></div>
                          <div className="absolute bottom-12 right-8 w-2 h-2 bg-white/50 rounded-full animate-pulse delay-600"></div>

                          {/* Subtle Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent rounded-full"></div>

                          {/* Simple Success Indicators */}
                          <div className="absolute top-4 right-4 text-2xl">
                            ✨
                          </div>
                          <div className="absolute bottom-4 left-4 text-2xl">
                            💎
                          </div>
                        </div>

                        {/* Simple Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-full blur-2xl -z-10"></div>

                        {/* Success Badge */}
                        <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-emerald-600 to-yellow-600 text-white text-sm px-4 py-2 rounded-full border-2 border-emerald-400 shadow-lg">
                          ПІСЛЯ
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-base sm:text-lg text-gray-400 max-w-xs mx-auto leading-relaxed">
                          До стабільного доходу в трейдингу та
                          найбільшого ком'юніті трейдерів в
                          Україні
                        </p>
                        <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-500 to-yellow-500 mx-auto rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Success Stats - Centered */}
                  <div className="mt-12 sm:mt-16 text-center">
                    <div className="inline-flex items-center gap-6 sm:gap-8 px-8 py-4 bg-gradient-to-r from-emerald-900/20 to-yellow-900/20 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-emerald-300 text-sm sm:text-base">
                          5+ років досвіду
                        </span>
                      </div>
                      <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-yellow-500 rounded-full"></div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                        <span className="text-yellow-300 text-sm sm:text-base">
                          1000+ учнів
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Animations Styles */}
              <style jsx>{`
                @keyframes slideUnderline {
                  0% {
                    transform: translateX(-100%);
                  }
                  50% {
                    transform: translateX(0%);
                  }
                  100% {
                    transform: translateX(100%);
                  }
                }
              `}</style>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <UkrainianText
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12 sm:mb-16 text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text"
            >
              ВІДГУКИ НАШИХ УЧНІВ:
            </UkrainianText>

            <div className="relative max-w-5xl mx-auto">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900/10 to-yellow-900/10 border border-emerald-500/20 backdrop-blur-sm shadow-2xl">
                <div
                  className="flex transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(-${Math.round(currentTestimonial * 100)}%)`,
                    willChange: "transform",
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 p-4 sm:p-6 lg:p-8"
                    >
                      <div className="bg-gradient-to-br from-emerald-900/40 to-yellow-900/40 rounded-3xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-emerald-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                        {/* Video Placeholder */}
                        <div
                          className="relative aspect-video mb-6 sm:mb-8 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                          onClick={() =>
                            openYouTubeVideo(
                              testimonial.videoId,
                            )
                          }
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-yellow-500/10"></div>

                          {/* YouTube Thumbnail Simulation */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-4 left-4 w-8 h-8 bg-emerald-500/30 rounded-full animate-pulse"></div>
                            <div className="absolute top-8 right-8 w-6 h-6 bg-yellow-500/30 rounded-full animate-bounce delay-300"></div>
                            <div className="absolute bottom-6 left-8 w-4 h-4 bg-emerald-400/30 rounded-full animate-ping delay-700"></div>
                          </div>

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-125 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-500">
                                <Play
                                  className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                                  fill="currentColor"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full animate-ping opacity-30 group-hover:from-red-500 group-hover:to-red-400"></div>
                            </div>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                          {/* YouTube Logo and Video Info */}
                          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2 px-2 py-1 bg-black/70 rounded-lg">
                              <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                                <Play
                                  className="w-2 h-2 text-white"
                                  fill="currentColor"
                                />
                              </div>
                              <span className="text-xs text-white">
                                YouTube
                              </span>
                            </div>
                          </div>

                          {/* Click to Watch Text */}
                          <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="flex items-center gap-1">
                              <Play className="w-3 h-3" />
                              Натисніть для перегляду
                            </span>
                          </div>

                          {/* Video Duration Simulation */}
                          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {Math.floor(Math.random() * 3) + 2}:
                            {Math.floor(Math.random() * 60)
                              .toString()
                              .padStart(2, "0")}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-4 sm:space-y-6">
                          {/* Name with animated underline */}
                          <div className="relative inline-block">
                            <UkrainianText
                              as="h3"
                              className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text relative z-10"
                            >
                              {testimonial.name}
                            </UkrainianText>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                          </div>

                          {/* Quote */}
                          <div className="relative">
                            <div className="absolute -top-2 -left-2 text-4xl text-emerald-500/30 leading-none">
                              "
                            </div>
                            <UkrainianText
                              as="p"
                              className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed px-4 relative z-10 italic"
                            >
                              {testimonial.text}
                            </UkrainianText>
                            <div className="absolute -bottom-2 -right-2 text-4xl text-yellow-500/30 leading-none rotate-180">
                              "
                            </div>
                          </div>

                          {/* Stars */}
                          <div className="flex justify-center gap-1 sm:gap-2">
                            {[...Array(testimonial.rating)].map(
                              (_, i) => (
                                <div
                                  key={i}
                                  className="relative"
                                >
                                  <Star
                                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                                    style={{
                                      animationDelay: `${i * 100}ms`,
                                      animation:
                                        currentTestimonial ===
                                        index
                                          ? "starGlow 2s ease-in-out infinite"
                                          : "none",
                                    }}
                                  />
                                </div>
                              ),
                            )}
                          </div>

                          {/* Testimonial Number */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 rounded-full border border-emerald-500/30">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-xs sm:text-sm text-emerald-300">
                              Відгук #{testimonial.id}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows on larger screens */}
                <div className="hidden md:block">
                  <button
                    onClick={prevTestimonial}
                    disabled={currentTestimonial === 0}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-600 to-yellow-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    disabled={
                      currentTestimonial ===
                      testimonials.length - 1
                    }
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-600 to-yellow-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation & Dots Indicator */}
              <div className="mt-6 sm:mt-8 space-y-4">
                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 sm:gap-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setCurrentTestimonial(index)
                      }
                      className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-gradient-to-r from-emerald-500 to-yellow-500 scale-125"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    >
                      {index === currentTestimonial && (
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full animate-ping opacity-30"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex justify-center gap-3 sm:gap-4 md:hidden">
                  <ShimmerButton
                    onClick={prevTestimonial}
                    variant="secondary"
                    className={`p-3 sm:p-4 rounded-full transition-all duration-300 ${
                      currentTestimonial === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={currentTestimonial === 0}
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </ShimmerButton>

                  <div className="flex items-center px-4 py-2 bg-gradient-to-r from-emerald-900/20 to-yellow-900/20 rounded-full border border-emerald-500/30">
                    <span className="text-sm text-emerald-300">
                      {currentTestimonial + 1} /{" "}
                      {testimonials.length}
                    </span>
                  </div>

                  <ShimmerButton
                    onClick={nextTestimonial}
                    variant="secondary"
                    className={`p-3 sm:p-4 rounded-full transition-all duration-300 ${
                      currentTestimonial ===
                      testimonials.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={
                      currentTestimonial ===
                      testimonials.length - 1
                    }
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </ShimmerButton>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 sm:mt-6">
                <div className="max-w-xs mx-auto">
                  <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${Math.round(((currentTestimonial + 1) / testimonials.length) * 100)}%`,
                      }}
                    >
                      <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bonus Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <UkrainianText
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text"
                >
                  Ще на навчанні ви отримаєте бонус:
                </UkrainianText>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-yellow-500 mx-auto rounded-full"></div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/10 to-yellow-900/10 rounded-3xl p-6 sm:p-8 lg:p-12 border border-emerald-500/20 backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
                  {/* Left Content */}
                  <div className="flex-1 text-center lg:text-left max-w-2xl">
                    <div className="relative overflow-hidden rounded-3xl mb-6 sm:mb-8 max-w-xs sm:max-w-sm mx-auto lg:mx-0 lg:max-w-md shadow-2xl shadow-emerald-500/20">
                      <img
                        src="https://images.unsplash.com/photo-1672575007490-8b4764e43e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwc3VycHJpc2UlMjBnb2xkZW58ZW58MXx8fHwxNzU4NjQ5ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Bonus Gift"
                        className="w-full aspect-[4/5] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full animate-bounce"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-yellow-500 to-emerald-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
                        Доступ до ком'юніті трейдерів і всього
                        за декілька дій ви зрозумієте як почати
                        заробляти тисячі доларів у цьому
                        напрямку
                      </p>

                      {/* Bonus features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
                        <div className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span>Особистий наставник</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span>Закритий чат</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span>Ексклюзивні сигнали</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-300">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span>24/7 підтримка</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - CTA */}
                  <div className="flex-shrink-0 text-center">
                    <div className="bg-gradient-to-br from-emerald-900/20 to-yellow-900/20 rounded-3xl p-6 sm:p-8 border border-emerald-500/30 backdrop-blur-sm">
                      <div className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-yellow-500/20 border border-emerald-500/30 mb-3">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                          <span className="text-emerald-300 text-xs sm:text-sm">
                            Обмежена пропозиція
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Приєднуйтесь зараз і отримайте
                          <br />
                          <span className="text-transparent bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text">
                            усі бонуси безкоштовно!
                          </span>
                        </p>
                      </div>

                      <ShimmerButton
                        onClick={() =>
                          window.open(
                            TELEGRAM_BOT_URL,
                            "_blank",
                          )
                        }
                        variant="telegram"
                        className="w-full py-6 sm:py-8 lg:py-10 px-8 sm:px-12 lg:px-16 text-xl sm:text-2xl lg:text-3xl min-w-[280px] sm:min-w-[320px]"
                      >
                        <div className="flex items-center justify-center gap-4 sm:gap-5">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                            <TelegramIcon />
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="leading-tight">
                              Почати
                            </span>
                            <span className="text-xs sm:text-sm lg:text-base opacity-90 leading-tight">
                              прямо зараз
                            </span>
                          </div>
                        </div>
                      </ShimmerButton>

                      <p className="text-xs text-gray-500 mt-3 sm:mt-4">
                        Натискаючи кнопку, ви отримуєте миттєвий
                        доступ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Warning */}
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-black"></div>

          {/* Red Glow Effects */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-400/5 rounded-full blur-2xl animate-ping opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Warning Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 text-red-500 animate-pulse">
              ⚠
            </div>
            <div className="absolute top-16 right-16 text-red-400 animate-bounce delay-300">
              ⚠
            </div>
            <div className="absolute bottom-12 left-16 text-red-500 animate-pulse delay-700">
              ⚠
            </div>
            <div className="absolute bottom-8 right-8 text-red-400 animate-ping delay-1000">
              ⚠
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Main Warning Box */}
              <div className="relative bg-gradient-to-br from-red-900/30 via-gray-900/50 to-red-800/20 rounded-3xl border-2 border-red-500/30 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-400/20 rounded-3xl blur-sm animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent transform -skew-x-12 translate-x-[-200%] animate-[shimmer_3s_ease-in-out_infinite]"></div>

                {/* Content */}
                <div className="relative z-10 p-8 sm:p-10 lg:p-12 text-center">
                  {/* Warning Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-6 sm:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 rounded-full animate-ping opacity-30"></div>
                    <div className="relative text-3xl sm:text-4xl lg:text-5xl">
                      ⚠️
                    </div>
                  </div>

                  {/* Title with Multiple Effects */}
                  <div className="relative mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-2 text-transparent bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text animate-pulse">
                      ПОПЕРЕДЖЕННЯ ПРО РИЗИКИ
                    </h2>

                    {/* Underline Effect */}
                    <div className="relative mx-auto w-32 sm:w-40 lg:w-48 h-1 bg-gradient-to-r from-red-600 via-red-400 to-red-600 rounded-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300 to-transparent animate-pulse rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-100%] animate-[slide_2s_ease-in-out_infinite] rounded-full"></div>
                    </div>
                  </div>

                  {/* Warning Text */}
                  <div className="relative bg-black/30 rounded-2xl p-6 sm:p-8 border border-red-500/20 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-red-800/10 rounded-2xl"></div>

                    <p className="relative text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
                      <span className="text-red-300">
                        Торгівля на фінансових ринках пов'язана
                        з високим ризиком
                      </span>{" "}
                      і може призвести до
                      <span className="text-red-400 animate-pulse">
                        {" "}
                        втрати всіх інвестованих коштів
                      </span>
                      . Минулі результати не гарантують
                      майбутнього прибутку.
                      <span className="text-red-300">
                        Інвестуйте лише ті кошти, втрату яких ви
                        можете собі дозволити
                      </span>
                      . Будь ласка, уважно вивчіть усі ризики,
                      пов'язані з торгівлею, перед початком
                      інвестування.
                    </p>

                    {/* Risk Level Indicators */}
                    <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm text-red-300">
                          ВИСОКИЙ РИЗИК
                        </span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-6 sm:w-3 sm:h-8 bg-gradient-to-t from-red-600 to-red-400 rounded-sm animate-pulse"
                              style={{
                                animationDelay: `${i * 200}ms`,
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Warning Strip */}
                  <div className="mt-6 sm:mt-8 relative">
                    <div className="bg-gradient-to-r from-red-800/40 via-red-600/40 to-red-800/40 rounded-xl p-3 sm:p-4 border border-red-500/30">
                      <div className="flex items-center justify-center gap-3 sm:gap-4">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                        <span className="text-red-200 text-xs sm:text-sm uppercase tracking-wide">
                          Інвестиції можуть призвести до втрат
                        </span>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-ping delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-400/50 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-400/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-400/50 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-400/50 rounded-br-lg"></div>
              </div>
            </div>
          </div>

          {/* Additional CSS for custom animations */}
          <style jsx>{`
            @keyframes shimmer {
              0% {
                transform: translateX(-200%) skewX(-12deg);
              }
              100% {
                transform: translateX(200%) skewX(-12deg);
              }
            }
          `}</style>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="text-center md:text-left">
                <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <p>ТОВ "ТРЕЙДКЛАБ"</p>
                  <p>Email: info@tradeclub.ua</p>
                  <p>Поддержка: support@tradeclub.ua</p>
                  <p className="text-xs sm:text-sm">
                    © 2024 Усі права захищені
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end">
                <ShimmerButton
                  onClick={() => setCurrentPage("privacy")}
                  variant="secondary"
                  className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm"
                >
                  Політика конфіденційності
                </ShimmerButton>
                <ShimmerButton
                  onClick={() => setCurrentPage("terms")}
                  variant="secondary"
                  className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm"
                >
                  Умови користування
                </ShimmerButton>
              </div>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }

          @keyframes starGlow {
            0%,
            100% {
              filter: drop-shadow(
                0 0 3px rgba(251, 191, 36, 0.3)
              );
              transform: scale(1);
            }
            50% {
              filter: drop-shadow(
                0 0 8px rgba(251, 191, 36, 0.8)
              );
              transform: scale(1.1);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .carousel-item {
            animation: fadeInUp 0.6s ease-out;
          }
        `}</style>

        {/* Scroll to Top Button */}
        <ScrollToTopButton
          show={showScrollTop}
          onClick={scrollToTop}
        />
      </div>
    </>
  );
}