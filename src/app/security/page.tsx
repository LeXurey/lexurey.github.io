"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Lock, Shield, Eye, Zap, FileCheck, Search, GitBranch, Bot, X, RotateCw } from "lucide-react";

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
  const [captchaAnswer, setCaptchaAnswer] = useState<number[]>([]); // support multiple choice
  const [isLoading, setIsLoading] = useState(false);
  const [userSelection, setUserSelection] = useState<number[]>([]); // support multiple choice
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // new

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
        setUserSelection([]); // reset user selection
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
        setCaptchaAnswer([0, 1]); 
        setUserSelection([]);
        setShowResult(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      setShowCaptchaExpanded(false);
    }
  };

  const handleCaptchaRefresh = async () => {
    setIsLoading(true);
    try {
      const apiUrl = 'https://illusioncaptcha.onrender.com/test/images_with_question';
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
      const imagesWithPrefix = data.images.map((base64String: string) => `data:image/png;base64,${base64String}`);
      setCaptchaImages(imagesWithPrefix);
      setCaptchaQuestion(data.question);
      setCaptchaAnswer(data.answer);
      setUserSelection([]);
      setShowResult(false);
    } catch (error) {
      const fallbackImages = [
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvZyAxPC90ZXh0Pjwvc3ZnPg==',
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhdCAxPC90ZXh0Pjwvc3ZnPg==',
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRvZyAyPC90ZXh0Pjwvc3ZnPg=='
      ];
      setCaptchaImages(fallbackImages);
      setCaptchaQuestion('Which one is a Dog?');
      setCaptchaAnswer([0, 1]);
      setUserSelection([]);
      setShowResult(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageClick = (index: number) => {
    if (showResult) return; // answer submitted, cannot be selected again
    if (userSelection.includes(index)) {
      setUserSelection(userSelection.filter(i => i !== index));
    } else if (userSelection.length < (Array.isArray(captchaAnswer) ? captchaAnswer.length : 1)) {
      setUserSelection([...userSelection, index]);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
    if (Array.isArray(captchaAnswer) && captchaAnswer.length === 2) {
      // multiple choice, order doesn't matter
      const sortedUser = [...userSelection].sort();
      const sortedAnswer = [...captchaAnswer].sort();
      setIsCorrect(
        sortedUser.length === 2 &&
        sortedUser[0] === sortedAnswer[0] &&
        sortedUser[1] === sortedAnswer[1]
      );
    } else {
      // single choice
      setIsCorrect(userSelection[0] === captchaAnswer[0]);
    }
  };

  return (
    <PageWrapper>
      <div className="flex flex-col min-h-screen">
        {/* CAPTCHA System Section */}
        <section
          ref={captchaReveal.ref}
          className={`py-8 sm:py-16 px-4 bg-brand-teal/5 dark:bg-brand-navy/10 scroll-reveal ${
            captchaReveal.isVisible ? "visible" : ""
          }`}
        >
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-brand-navy dark:text-brand-teal">
                {t.security.captcha.title}
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
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
                <div className="p-4 sm:p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-brand-teal/50 transition-all duration-400 scale-in-center">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-brand-teal" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-2xl font-bold text-brand-navy dark:text-brand-teal truncate">
                          IllusionCAPTCHA
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground truncate">
                          {t.security.captcha.demo}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <button
                        onClick={handleCaptchaClick}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex-shrink-0"
                        title="关闭"
                      >
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-brand-navy dark:text-brand-teal" />
                      </button>
                      <button
                        onClick={handleCaptchaRefresh}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-brand-teal/20 transition-colors flex-shrink-0"
                        title="刷新验证码"
                      >
                        <RotateCw className="w-5 h-5 sm:w-6 sm:h-6 text-brand-navy dark:text-brand-teal" />
                      </button>
                    </div>
                  </div>
                  <div className="min-h-[400px] flex items-center justify-center">
                    {isLoading ? (
                      <div className="text-center">
                        <div className="w-24 h-24 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4 animate-spin">
                          <Eye className="w-12 h-12 text-brand-teal" />
                        </div>
                        <p className="text-lg text-muted-foreground">
                          {t.security.captcha.loading}
                        </p>
                      </div>
                    ) : captchaImages.length > 0 ? (
                      <div className="w-full">
                        <h4 className="text-lg font-semibold text-brand-navy dark:text-brand-teal mb-6 text-center">
                          {captchaQuestion}
                        </h4>
                        <div className="w-full flex justify-center">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-4 md:gap-y-6">
                            {captchaImages.map((image, index) => (
                              <div
                                key={index}
                                className={`w-40 h-40 md:w-48 md:h-48 bg-white rounded-lg shadow-md overflow-hidden border transition-all duration-200 cursor-pointer relative ${
                                  userSelection.includes(index)
                                    ? 'border-4 border-brand-teal bg-brand-teal/10 ring-2 ring-brand-teal/40'
                                    : 'border border-gray-200 dark:border-gray-700 hover:border-brand-teal/50'
                                }`}
                                onClick={() => handleImageClick(index)}
                                style={{ margin: 0, padding: 0 }}
                              >
                                <img
                                  src={image}
                                  alt={`CAPTCHA Image ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                {userSelection.includes(index) && (
                                  <>
                                    <div className="absolute inset-0 bg-brand-teal/30 opacity-60 pointer-events-none rounded-lg"></div>
                                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
                                      <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                        {!showResult && (
                          <div className="mt-8 text-center">
                            <button
                              onClick={handleSubmit}
                              disabled={userSelection.length !== (Array.isArray(captchaAnswer) ? captchaAnswer.length : 1)}
                              className="px-6 py-2 rounded bg-brand-teal text-white font-semibold disabled:opacity-50"
                            >
                              {t.security.captcha.submit || '提交'}
                            </button>
                            <p className="text-sm text-muted-foreground mt-2">
                              {Array.isArray(captchaAnswer) && captchaAnswer.length === 2
                                ? t.security.captcha.selectMulti.replace('{n}', String(captchaAnswer.length)) || `请选择${captchaAnswer.length}个图片后提交`
                                : t.security.captcha.selectSingle || '选择正确图片后提交'}
                            </p>
                          </div>
                        )}
                        {showResult && (
                          <div className="mt-8 text-center">
                            {isCorrect ? (
                              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <div className="flex items-center justify-center mb-2">
                                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                  <h5 className="text-lg font-semibold text-green-800 dark:text-green-200">
                                    {t.security.captcha.correct || '恭喜你！'}
                                  </h5>
                                </div>
                                <p className="text-green-700 dark:text-green-300">
                                  {t.security.captcha.correctDesc || '你现在可以访问受保护页面'}
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
                                    {t.security.captcha.incorrect || '答案错误'}
                                  </h5>
                                </div>
                                <p className="text-red-700 dark:text-red-300">
                                  {t.security.captcha.incorrectDesc || '请重试或刷新获取新挑战'}
                                </p>
                              </div>
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
                          {t.security.captcha.clickToLoad}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* News Banner */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-navy rounded-2xl p-4 sm:p-8 text-white shadow-lg">
              <div className="text-center">
                <p className="text-lg sm:text-xl font-semibold">
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
