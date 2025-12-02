import React, { useState, useEffect } from "react";
import {
  Gift,
  Star,
  Snowflake,
  Heart,
  Music,
  BookOpen,
  Smile,
  Camera,
  CheckCircle2,
  X,
  Wand2,
  RefreshCw,
  Trash2,
} from "lucide-react";

const AdventCalendar = () => {
  // --- АВТОМАТИЧНО ЗАРЕЖДАНЕ НА ДИЗАЙНА (TAILWIND) ---
  useEffect(() => {
    // Проверяваме дали вече не е зареден
    if (!document.getElementById("tailwind-script")) {
      const script = document.createElement("script");
      script.id = "tailwind-script";
      script.src = "https://cdn.tailwindcss.com";
      // Добавяме слушател, за да знаем кога е готов
      script.onload = () => console.log("Design loaded!");
      document.head.appendChild(script);
    }
  }, []);

  // --- ДАННИ ЗА МИСИИТЕ ---
  const missionPool = [
    {
      type: "creative",
      text: "Направете коледна украса от хартия за класната стая.",
      icon: <Star className="w-12 h-12 text-yellow-400" />,
    },
    {
      type: "kindness",
      text: "Кажи нещо мило на съученика, който седи отдясно на теб.",
      icon: <Heart className="w-12 h-12 text-red-500" />,
    },
    {
      type: "math",
      text: "Нарисувайте елха, използвайки само геометрични фигури (триъгълници, кръгове).",
      icon: <BookOpen className="w-12 h-12 text-green-600" />,
    },
    {
      type: "music",
      text: "Целият клас да изпее една коледна песен заедно.",
      icon: <Music className="w-12 h-12 text-blue-500" />,
    },
    {
      type: "gift",
      text: "Нарисувай тайно рисунка за някого от класа и му я остави на чина.",
      icon: <Gift className="w-12 h-12 text-purple-500" />,
    },
    {
      type: "story",
      text: "Измислете заедно приказка за снежен човек, който обича да яде сладолед.",
      icon: <BookOpen className="w-12 h-12 text-orange-500" />,
    },
    {
      type: "help",
      text: "Помогнете на госпожата да изчисти дъската или да подреди стаята.",
      icon: <CheckCircle2 className="w-12 h-12 text-green-500" />,
    },
    {
      type: "fun",
      text: "Направете най-смешната си физиономия за обща снимка на класа!",
      icon: <Camera className="w-12 h-12 text-gray-600" />,
    },
    {
      type: "riddle",
      text: "Отгатнете: 'Бял кожух наметна, всичко в миг светна. Що е то?' (Сняг)",
      icon: <Snowflake className="w-12 h-12 text-blue-300" />,
    },
    {
      type: "behavior",
      text: "Опитайте се днес никой да не се оплаква цял час!",
      icon: <Smile className="w-12 h-12 text-yellow-500" />,
    },
    {
      type: "family",
      text: "Направете картичка за вашите родители или баба и дядо.",
      icon: <Heart className="w-12 h-12 text-pink-500" />,
    },
    {
      type: "active",
      text: "Станете и направете 10 подскока, сякаш скачате в дълбок сняг.",
      icon: <Snowflake className="w-12 h-12 text-cyan-500" />,
    },
    {
      type: "reading",
      text: "Прочетете на глас любим откъс от приказка.",
      icon: <BookOpen className="w-12 h-12 text-indigo-500" />,
    },
    {
      type: "gratitude",
      text: "Напишете на листче едно нещо, за което сте благодарни тази година.",
      icon: <Star className="w-12 h-12 text-yellow-400" />,
    },
    {
      type: "fun",
      text: "Направете си 'рога' с ръце и се разходете из стаята като еленчета.",
      icon: <Smile className="w-12 h-12 text-brown-500" />,
    },
    {
      type: "tongue_twister",
      text: "Кой може да каже най-бързо: 'Шише със сок, шише без сок'?",
      icon: <Music className="w-12 h-12 text-purple-600" />,
    },
    {
      type: "clean",
      text: "Проверете дали под чина ви няма боклуци. Нека светне!",
      icon: <CheckCircle2 className="w-12 h-12 text-green-600" />,
    },
    {
      type: "art",
      text: "Опитайте да нарисувате снежинка със затворени очи.",
      icon: <Snowflake className="w-12 h-12 text-blue-400" />,
    },
    {
      type: "friendship",
      text: "Прегърнете най-добрия си приятел в класа (или дайте 'пет').",
      icon: <Heart className="w-12 h-12 text-red-600" />,
    },
    {
      type: "poll",
      text: "Гласувайте кой е най-хубавият коледен филм според вашия клас.",
      icon: <Camera className="w-12 h-12 text-gray-700" />,
    },
    {
      type: "write",
      text: "Напишете едно общо писмо от класа до Дядо Коледа.",
      icon: <BookOpen className="w-12 h-12 text-red-700" />,
    },
    {
      type: "math_fun",
      text: "Ако Дядо Коледа има 10 елена и 2 избягат, колко остават?",
      icon: <Star className="w-12 h-12 text-yellow-600" />,
    },
    {
      type: "wish",
      text: "Пожелайте си нещо хубаво за предстоящата ваканция.",
      icon: <Gift className="w-12 h-12 text-green-500" />,
    },
    {
      type: "elf",
      text: "Ходете на пръсти като джуджета, за да не събудите мечката!",
      icon: <Smile className="w-12 h-12 text-orange-400" />,
    },
    {
      type: "snowball",
      text: "Направете въображаем бой със снежни топки (без да се докосвате)!",
      icon: <Snowflake className="w-12 h-12 text-blue-200" />,
    },
    {
      type: "secret",
      text: "Шшшт! Опитайте се да мълчите 1 минута като замръзнали статуи.",
      icon: <CheckCircle2 className="w-12 h-12 text-gray-400" />,
    },
  ];

  // --- STATE ---
  const [completedDays, setCompletedDays] = useState(() => {
    try {
      const saved = localStorage.getItem("adventProgress");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [activeMissions, setActiveMissions] = useState({});
  const [openedDay, setOpenedDay] = useState(null);
  const [snowflakes, setSnowflakes] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Сняг (по-фин и плавен)
  useEffect(() => {
    const flakes = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 8 + 5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
      size: Math.random() * 10 + 5,
    }));
    setSnowflakes(flakes);
  }, []);

  // ЗАПАЗВАНЕ В ПАМЕТТА
  useEffect(() => {
    localStorage.setItem("adventProgress", JSON.stringify(completedDays));
  }, [completedDays]);

  const getRandomMission = () => {
    const randomIndex = Math.floor(Math.random() * missionPool.length);
    return missionPool[randomIndex];
  };

  const handleDayClick = (dayId) => {
    setOpenedDay(dayId);
    if (!activeMissions[dayId]) {
      setIsGenerating(true);
      setTimeout(() => {
        setActiveMissions((prev) => ({
          ...prev,
          [dayId]: getRandomMission(),
        }));
        setIsGenerating(false);
      }, 1200);
    }
  };

  const regenerateMission = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setActiveMissions((prev) => ({
        ...prev,
        [openedDay]: getRandomMission(),
      }));
      setIsGenerating(false);
    }, 800);
  };

  const closeMission = () => {
    setOpenedDay(null);
    setIsGenerating(false);
  };

  const markAsDone = (id) => {
    if (!completedDays.includes(id)) {
      setCompletedDays([...completedDays, id]);
    }
    closeMission();
  };

  const resetCalendar = () => {
    if (window.confirm("Сигурни ли сте, че искате да нулирате календара?")) {
      setCompletedDays([]);
      localStorage.removeItem("adventProgress");
    }
  };

  // --- SVG ILLUSTRATIONS ---
  const BeautifulTree = () => (
    <div className="absolute -z-0 bottom-0 left-[-20px] md:left-0 opacity-90 hidden sm:block pointer-events-none transform scale-90 md:scale-100 origin-bottom-left">
      <svg
        width="300"
        height="400"
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="100"
          cy="280"
          rx="80"
          ry="10"
          fill="black"
          fillOpacity="0.3"
          filter="blur(5px)"
        />
        <path d="M90 250 L110 250 L105 290 L95 290 Z" fill="#5D4037" />
        <path
          d="M30 250 L170 250 L100 160 Z"
          fill="#1B5E20"
          stroke="#0D4511"
          strokeWidth="2"
        />
        <path
          d="M30 250 Q100 260 170 250"
          fill="none"
          stroke="#0D4511"
          strokeWidth="1"
          opacity="0.5"
        />
        <path
          d="M45 190 L155 190 L100 110 Z"
          fill="#2E7D32"
          stroke="#1B5E20"
          strokeWidth="2"
        />
        <path
          d="M60 130 L140 130 L100 60 Z"
          fill="#43A047"
          stroke="#2E7D32"
          strokeWidth="2"
        />
        <path
          d="M75 80 L125 80 L100 20 Z"
          fill="#66BB6A"
          stroke="#43A047"
          strokeWidth="2"
        />
        <path
          d="M50 220 Q100 240 150 210"
          fill="none"
          stroke="#FDD835"
          strokeWidth="3"
          strokeDasharray="5 5"
          opacity="0.6"
        />
        <path
          d="M65 160 Q100 180 135 150"
          fill="none"
          stroke="#FDD835"
          strokeWidth="3"
          strokeDasharray="5 5"
          opacity="0.6"
        />
        <circle cx="50" cy="240" r="6" fill="#D32F2F" />
        <circle cx="150" cy="230" r="6" fill="#1976D2" />
        <circle cx="100" cy="200" r="7" fill="#FBC02D" />
        <circle cx="70" cy="180" r="6" fill="#E91E63" />
        <circle cx="130" cy="170" r="6" fill="#D32F2F" />
        <circle cx="100" cy="140" r="6" fill="#FFA000" />
        <circle cx="85" cy="100" r="5" fill="#1976D2" />
        <circle cx="115" cy="90" r="5" fill="#E91E63" />
        <path
          d="M100 10 L106 28 L125 28 L110 39 L116 57 L100 46 L84 57 L90 39 L75 28 L94 28 Z"
          fill="#FFD700"
          stroke="#FFA000"
          strokeWidth="1"
          className="animate-pulse"
        />
      </svg>
    </div>
  );

  const CozyFireplace = () => (
    <div className="relative mt-auto mx-auto w-full max-w-sm flex justify-center items-end">
      <svg
        width="340"
        height="200"
        viewBox="0 0 340 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="20" y="40" width="300" height="160" fill="#3E2723" rx="2" />
        <rect x="30" y="50" width="280" height="150" fill="#5D4037" />
        <path
          d="M30 70 H310 M30 90 H310 M30 110 H310 M30 130 H310 M30 150 H310"
          stroke="#3E2723"
          strokeWidth="2"
          opacity="0.5"
        />
        <path
          d="M60 50 V70 M120 50 V70 M180 50 V70 M240 50 V70"
          stroke="#3E2723"
          strokeWidth="2"
          opacity="0.5"
        />
        <path d="M80 200 V100 A 90 90 0 0 1 260 100 V200" fill="#1a1a1a" />
        <rect x="10" y="30" width="320" height="20" fill="#8D6E63" rx="2" />
        <rect x="0" y="20" width="340" height="15" fill="#5D4037" rx="3" />
        <g className="animate-pulse">
          <path d="M130 190 Q170 110 210 190" fill="#FF5722" opacity="0.8">
            <animate
              attributeName="d"
              values="M130 190 Q170 110 210 190; M135 190 Q170 100 205 190; M130 190 Q170 110 210 190"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M145 190 Q170 130 195 190" fill="#FFC107" opacity="0.9">
            <animate
              attributeName="d"
              values="M145 190 Q170 130 195 190; M150 190 Q170 120 190 190; M145 190 Q170 130 195 190"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        <circle cx="150" cy="190" r="10" fill="#3E2723" />
        <circle cx="190" cy="190" r="10" fill="#3E2723" />
        <rect
          x="140"
          y="180"
          width="60"
          height="10"
          fill="#4E342E"
          transform="rotate(-10 170 185)"
        />
        <path
          d="M60 35 L60 80 L75 80 A 5 5 0 0 0 75 70 L70 70 L70 35 Z"
          fill="#D32F2F"
          transform="rotate(-5 60 35)"
        />
        <rect
          x="60"
          y="35"
          width="10"
          height="5"
          fill="white"
          transform="rotate(-5 60 35)"
        />
        <path
          d="M280 35 L280 80 L265 80 A 5 5 0 0 0 265 70 L270 70 L270 35 Z"
          fill="#388E3C"
          transform="rotate(5 280 35)"
        />
        <rect
          x="270"
          y="35"
          width="10"
          height="5"
          fill="white"
          transform="rotate(5 280 35)"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#2c1810] overflow-x-hidden relative font-sans text-slate-100 flex flex-col items-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@400;700;900&display=swap');
        .font-heading { font-family: 'Pacifico', cursive; }
        .font-body { font-family: 'Nunito', sans-serif; }
        .ornament-shine { background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 20%, transparent 50%); }
        .box-ribbon-v { background: linear-gradient(to bottom, #FCD34D, #F59E0B); }
        .box-ribbon-h { background: linear-gradient(to right, #FCD34D, #F59E0B); }
        .wall-gradient { background: radial-gradient(circle at 50% 30%, #5d4037 0%, #3e2723 60%, #1a100c 100%); }
        @keyframes fall { to { transform: translateY(200px); } }
      `}</style>

      <div className="fixed inset-0 wall-gradient z-0"></div>

      {/* Прозорец */}
      <div className="absolute top-8 right-8 w-40 h-40 bg-[#1a237e] rounded-lg border-8 border-[#3E2723] shadow-inner overflow-hidden hidden lg:block z-0 group">
        <div className="absolute bottom-0 w-full h-10 bg-white/20 rounded-t-full blur-md"></div>
        <div className="absolute w-full h-[6px] bg-[#3E2723] top-1/2"></div>
        <div className="absolute h-full w-[6px] bg-[#3E2723] left-1/2"></div>
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-white"
            style={{
              left: `${flake.left}%`,
              top: `-20px`,
              fontSize: `${flake.size}px`,
              animation: `fall ${flake.animationDuration}s linear infinite`,
              opacity: flake.opacity,
            }}
          >
            ❄
          </div>
        ))}
        <div className="absolute top-2 left-2 w-3 h-3 bg-yellow-100 rounded-full blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-6 flex flex-col min-h-screen">
        <header className="text-center mb-10 mt-4 relative">
          <div className="inline-block relative z-10">
            <h1 className="font-heading text-5xl md:text-7xl text-[#FFD54F] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] py-2 px-4 rotate-[-2deg]">
              Коледен Календар
            </h1>
            <div className="absolute -top-6 -right-6 text-red-500 animate-bounce hidden md:block">
              <Gift size={40} />
            </div>
          </div>
          <p className="font-body text-xl text-orange-100 mt-2 font-bold drop-shadow-md">
            🎄 Всеки ден е вълшебство за 3-ти клас! 🎄
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 mx-auto w-full mb-20 relative z-20">
          {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => {
            const isCompleted = completedDays.includes(day);
            const is24 = day === 24;
            const type = day % 3;

            return (
              <div
                key={day}
                className="flex justify-center group"
                onClick={() => handleDayClick(day)}
              >
                {(type === 0 || is24) && (
                  <div
                    className={`relative w-28 h-28 cursor-pointer transition-transform duration-300 transform group-hover:scale-110 group-hover:-translate-y-2 rounded-lg shadow-2xl flex items-center justify-center ${
                      isCompleted
                        ? "bg-slate-700/80 saturate-0"
                        : is24
                        ? "bg-gradient-to-br from-red-600 to-red-800 ring-4 ring-yellow-400"
                        : "bg-gradient-to-br from-red-500 to-red-700"
                    }`}
                  >
                    <div className="absolute w-6 h-full box-ribbon-v left-1/2 -translate-x-1/2 shadow-sm"></div>
                    <div className="absolute h-6 w-full box-ribbon-h top-1/2 -translate-y-1/2 shadow-sm"></div>
                    <span className="font-heading text-4xl text-white relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                      {day}
                    </span>
                    <div className="absolute -top-1 -left-1 w-[calc(100%+8px)] h-6 bg-red-800/30 rounded-t-lg pointer-events-none"></div>
                    {isCompleted && (
                      <CheckCircle2
                        className="absolute top-1 right-1 text-green-400 bg-white rounded-full"
                        size={20}
                      />
                    )}
                  </div>
                )}
                {type === 1 && (
                  <div className="relative flex flex-col items-center -mt-2 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-1 h-8 bg-yellow-600/50 absolute -top-6"></div>
                    <div
                      className={`relative w-28 h-28 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-pointer border-4 border-green-800/30 flex items-center justify-center overflow-hidden ${
                        isCompleted
                          ? "bg-slate-700 grayscale"
                          : "bg-gradient-to-br from-green-500 to-green-800"
                      }`}
                    >
                      <div className="absolute inset-0 ornament-shine"></div>
                      <span className="font-heading text-4xl text-white drop-shadow-md relative z-10">
                        {day}
                      </span>
                      {isCompleted && (
                        <CheckCircle2
                          className="absolute bottom-2 text-green-300"
                          size={24}
                        />
                      )}
                    </div>
                    <div className="w-8 h-4 bg-yellow-500 rounded-t-md absolute -top-1 shadow-sm"></div>
                  </div>
                )}
                {type === 2 && (
                  <div className="relative flex flex-col items-center -mt-2 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-1 h-12 bg-gray-400/50 absolute -top-8"></div>
                    <div
                      className={`relative w-28 h-28 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-pointer border-4 border-indigo-900/30 flex items-center justify-center overflow-hidden ${
                        isCompleted
                          ? "bg-slate-700 grayscale"
                          : "bg-gradient-to-br from-indigo-500 to-purple-700"
                      }`}
                    >
                      <div className="absolute inset-0 ornament-shine"></div>
                      <div className="absolute w-full h-4 bg-yellow-400/20 rotate-12 top-10 blur-[1px]"></div>
                      <span className="font-heading text-4xl text-white drop-shadow-md relative z-10">
                        {day}
                      </span>
                      {isCompleted && (
                        <CheckCircle2
                          className="absolute bottom-2 text-green-300"
                          size={24}
                        />
                      )}
                    </div>
                    <div className="w-8 h-4 bg-gray-300 rounded-t-md absolute -top-1 shadow-sm"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-auto relative w-full h-64 flex justify-between items-end pointer-events-none z-0">
          <BeautifulTree />
          <div className="flex-grow flex justify-center pb-0">
            <CozyFireplace />
          </div>
          <div className="hidden sm:block opacity-90 transform scale-90 origin-bottom-right">
            <svg width="150" height="120" viewBox="0 0 150 120">
              <rect
                x="50"
                y="70"
                width="80"
                height="50"
                fill="#D32F2F"
                rx="2"
              />
              <rect x="70" y="70" width="40" height="50" fill="#B71C1C" />
              <rect x="0" y="40" width="60" height="80" fill="#1976D2" rx="2" />
              <rect x="25" y="40" width="10" height="80" fill="#64B5F6" />
              <rect
                x="60"
                y="30"
                width="50"
                height="40"
                fill="#388E3C"
                rx="2"
              />
              <rect x="60" y="45" width="50" height="10" fill="#81C784" />
            </svg>
          </div>
        </div>

        {/* Футър с бутон за нулиране */}
        <footer className="w-full text-center py-4 mt-8 border-t border-orange-900/30 relative z-20">
          <button
            onClick={resetCalendar}
            className="text-xs text-orange-900/40 hover:text-red-500 transition-colors flex items-center justify-center gap-1 mx-auto"
            title="Внимание: Това ще изтрие прогреса!"
          >
            <Trash2 size={12} /> Нулирай календара
          </button>
          <p className="text-[10px] text-orange-900/30 mt-1">
            © 2024 Класна стая
          </p>
        </footer>
      </div>

      {openedDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg perspective-1000">
            <div className="bg-[#fffbf0] rounded-2xl shadow-2xl overflow-hidden transform scale-100 border-8 border-red-700 relative">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-yellow-500 rounded-tl-xl z-10"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 border-yellow-500 rounded-tr-xl z-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-yellow-500 rounded-bl-xl z-10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-yellow-500 rounded-br-xl z-10"></div>

              <div className="p-8 md:p-10 relative z-0">
                <button
                  onClick={closeMission}
                  className="absolute top-4 right-4 bg-red-100 p-2 rounded-full text-red-600 hover:bg-red-200 transition-colors z-50"
                >
                  <X size={24} />
                </button>
                <div className="text-center font-body">
                  <div className="mb-6">
                    <span className="font-heading text-2xl text-red-700 block mb-1">
                      {openedDay} Декември
                    </span>
                    <div className="h-1 w-20 bg-red-200 mx-auto rounded-full"></div>
                  </div>
                  {isGenerating ? (
                    <div className="py-12 flex flex-col items-center justify-center min-h-[200px]">
                      <Wand2 className="w-16 h-16 text-yellow-500 animate-spin mb-4" />
                      <p className="text-xl text-slate-600 animate-pulse font-heading">
                        Магията се случва...
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                          <div className="relative p-6 bg-white rounded-full shadow-lg border-2 border-yellow-100">
                            {activeMissions[openedDay]?.icon || (
                              <Gift size={48} className="text-red-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mb-8 min-h-[80px] flex items-center justify-center">
                        <p className="text-2xl md:text-3xl font-heading text-slate-800 leading-normal">
                          {activeMissions[openedDay]?.text}
                        </p>
                      </div>
                      <button
                        onClick={() => markAsDone(openedDay)}
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center gap-3 text-lg"
                      >
                        <CheckCircle2 size={24} /> Готово!
                      </button>
                      <button
                        onClick={regenerateMission}
                        className="mt-4 text-slate-400 hover:text-red-500 text-sm font-semibold flex items-center justify-center gap-2 mx-auto transition-colors"
                      >
                        <RefreshCw size={14} /> Не ми харесва, дай друга
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventCalendar;
