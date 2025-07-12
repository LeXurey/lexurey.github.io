"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Lock, Shield, Eye, Zap, FileCheck, Search, GitBranch, Bot } from "lucide-react";

export default function SecurityPage() {
  const { t } = useLanguage();

  const contentReveal = useScrollReveal();
  const captchaReveal = useScrollReveal();
  const [showTryMe, setShowTryMe] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const [showCaptchaExpanded, setShowCaptchaExpanded] = useState(false);
  const [hasBeenExpanded, setHasBeenExpanded] = useState(false);
  const [captchaImages, setCaptchaImages] = useState<string[]>([]);
  const [captchaQuestion, setCaptchaQuestion] = useState<string>('');
  const [captchaAnswer, setCaptchaAnswer] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [userSelection, setUserSelection] = useState<number>(-1);
  const [showResult, setShowResult] = useState(false);

  // Handle animation and "Try me" text
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTryMe(true);
      // Animation ends after 3 seconds (bounce-six duration)
      setTimeout(() => {
        setAnimationEnded(true);
      }, 500);
    }, 500); // Start after 500ms

    return () => clearTimeout(timer);
  }, []);

  const handleCaptchaClick = async () => {
    if (!showCaptchaExpanded) {
      setIsLoading(true);
      try {
        const apiUrl = 'https://illusioncaptcha.onrender.com/test/images_with_question';
        console.log('Loading CAPTCHA from:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to load CAPTCHA: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('CAPTCHA data received:', data);
        
        // Convert base64 strings to data URLs
        const imagesWithPrefix = data.images.map((base64String: string) => 
          `data:image/png;base64,${base64String}`
        );
        
        console.log('Images processed:', imagesWithPrefix.length);
        
        setCaptchaImages(imagesWithPrefix);
        setCaptchaQuestion(data.question);
        setCaptchaAnswer(data.answer);
        setUserSelection(-1);
        setShowResult(false);
        setShowCaptchaExpanded(true);
        setHasBeenExpanded(true);
      } catch (error) {
        console.error('Failed to load CAPTCHA:', error);
        // Use fallback demo images on error
        const fallbackImages = [
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvZyAxPC90ZXh0Pjwvc3ZnPg==',
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhdCAxPC90ZXh0Pjwvc3ZnPg==',
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvZyAyPC90ZXh0Pjwvc3ZnPg=='
        ];
        setCaptchaImages(fallbackImages);
        setCaptchaQuestion('Which one is a Dog?');
        setCaptchaAnswer(0);
        setUserSelection(-1);
        setShowResult(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      setShowCaptchaExpanded(false);
    }
  };

  const handleImageClick = (index: number) => {
    setUserSelection(index);
    setShowResult(true);
  };

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* CAPTCHA System Section */}
        <section
          ref={captchaReveal.ref}
          className={`py-16 px-4 bg-brand-teal/5 dark:bg-brand-navy/10 scroll-reveal ${
            captchaReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                {t.security.captcha.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.security.captcha.description}
              </p>
            </div>

            {/* Features Grid or Expanded Captcha */}
            {!showCaptchaExpanded ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {t.security.captcha.features.map((feature, index) => {
                  // Define icons for each feature
                  const icons = [
                    <Eye key="eye" className="w-6 h-6 text-brand-teal" />, // IllusionCAPTCHA
                    <Zap key="zap" className="w-6 h-6 text-brand-teal" />, // Penetration Testing
                    <FileCheck key="filecheck" className="w-6 h-6 text-brand-teal" />, // Smart Contract Auditing
                    <Search key="search" className="w-6 h-6 text-brand-teal" />, // Security Assessment
                    <GitBranch key="gitbranch" className="w-6 h-6 text-brand-teal" />, // CI/CD Integration
                    <Bot key="bot" className="w-6 h-6 text-brand-teal" />, // AI-powered Bot Detection
                  ];
                  
                  return (
                    <div
                      key={index}
                                          className={`group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-brand-teal/50 relative ${
                      index === 0 && !hasBeenExpanded ? 'animate-bounce-six' : ''
                    } ${index === 0 ? 'cursor-pointer' : ''}`}
                      onClick={index === 0 ? handleCaptchaClick : undefined}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 bg-brand-teal/10 rounded-lg flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                          {icons[index]}
                        </div>
                      </div>
                      <h3 className="font-semibold text-brand-navy dark:text-brand-teal text-center">
                        {feature}
                      </h3>
                      {index === 0 && showTryMe && (
                        <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                          animationEnded 
                            ? 'bg-brand-teal/30 text-brand-teal/70 group-hover:bg-brand-teal group-hover:text-white' 
                            : 'bg-brand-teal text-white'
                        }`}>
                          Try me!
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mb-12 animate-in slide-in-from-top-2 duration-400">
                <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-brand-teal/50 transition-all duration-400 scale-in-center">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center">
                        <Eye className="w-8 h-8 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-teal">
                          IllusionCAPTCHA
                        </h3>
                        <p className="text-muted-foreground">
                          Interactive Demo
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleCaptchaClick}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="min-h-[400px] flex items-center justify-center">
                    {isLoading ? (
                      <div className="text-center">
                        <div className="w-24 h-24 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 animate-spin">
                          <Eye className="w-12 h-12 text-brand-teal" />
                        </div>
                        <p className="text-lg text-muted-foreground">
                          Loading CAPTCHA images...
                        </p>
                      </div>
                    ) : captchaImages.length > 0 ? (
                      <div className="w-full">
                        <h4 className="text-lg font-semibold text-brand-navy dark:text-brand-teal mb-6 text-center">
                          {captchaQuestion}
                        </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {captchaImages.map((image, index) => (
                            <div key={index} className="flex flex-col items-center">
                              <div 
                                className={`w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden border transition-all duration-200 cursor-pointer ${
                                  userSelection === index 
                                    ? index === captchaAnswer 
                                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                                      : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-brand-teal/50'
                                }`}
                                onClick={() => handleImageClick(index)}
                              >
                                <img 
                                  src={image} 
                                  alt={`CAPTCHA Image ${index + 1}`}
                                  className="w-full h-auto object-cover"
                                />
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">
                                Option {index + 1}
                              </p>
                            </div>
                          ))}
                        </div>
                        {showResult ? (
                          <div className="mt-8 text-center">
                            {userSelection === captchaAnswer ? (
                              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <div className="flex items-center justify-center mb-2">
                                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <h5 className="text-lg font-semibold text-green-800 dark:text-green-200">
                                    Congratulations!
                                  </h5>
                                </div>
                                <p className="text-green-700 dark:text-green-300">
                                  We can now go to the protected pages
                                </p>
                              </div>
                            ) : (
                              <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                                <div className="flex items-center justify-center mb-2">
                                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </div>
                                  <h5 className="text-lg font-semibold text-red-800 dark:text-red-200">
                                    Incorrect Answer
                                  </h5>
                                </div>
                                <p className="text-red-700 dark:text-red-300">
                                  Please try again or refresh for a new challenge
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="mt-8 text-center">
                            <p className="text-sm text-muted-foreground">
                              Select the correct image to proceed
                            </p>
                            {captchaAnswer !== -1 && (
                              <p className="text-xs text-muted-foreground mt-2">
                                (Answer: Option {captchaAnswer + 1})
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center">
                        <div className="w-24 h-24 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                          <Eye className="w-12 h-12 text-brand-teal" />
                        </div>
                        <p className="text-lg text-muted-foreground">
                          Click to load CAPTCHA images
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* News Banner */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-navy rounded-2xl p-8 text-white shadow-lg">
              <div className="text-center">
                <p className="text-xl font-semibold">
                  {t.security.captcha.news}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Stay Tuned Section */}
        {/*<section
          ref={contentReveal.ref}
          className={`py-16 px-4 bg-background scroll-reveal ${
            contentReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-brand-navy dark:text-brand-teal">
                {t.security.stayTuned.title}
              </h2>

              <div className="p-8 rounded-lg border bg-card text-card-foreground hover:shadow-lg hover:border-brand-teal/50 transition-all duration-200 mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-brand-teal/10 rounded-full">
                    <Lock className="w-8 h-8 text-brand-teal" />
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t.security.stayTuned.description}
                </p>
                <div className="p-6 bg-muted/30 rounded-lg">
                  <p className="font-medium text-brand-navy dark:text-brand-teal mb-4">
                    {t.security.stayTuned.comingSoon}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        
      </div>
    </PageWrapper>
  );
}
