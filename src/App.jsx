import { useEffect, useRef, useState } from "react";
import ParticlesBg from "./components/ParticlesBg";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: "Asia/Almaty",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (loading) return;
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".bento-card");

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--mouse-alpha", "0.11");
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.setProperty("--mouse-alpha", "0");
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [loading]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Particles background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80">
        <ParticlesBg />
      </div>

      {/* Bento Grid Application Container */}
      <div
        className={`main-content relative min-h-dvh w-[95dvw] sm:w-xl lg:w-5xl xl:w-7xl mx-auto lg:flex lg:items-center`}
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 1.2s ease-out",
        }}
      >
        <div
          ref={containerRef}
          className={`flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 py-24`}
        >
          <div className="flex flex-col gap-4">
            <div className="h-42 grid grid-cols-6 sm:grid-cols-5 gap-4">
              <div className="col-span-3 sm:col-span-2 h-full flex">
                <div className="bento-card overflow-hidden cursor-pointer flex transition-all duration-300 hover:scale-[1.01] bg-slate-800/50 backdrop-blur-[4px] rounded-4xl flex-1 relative">
                  <div className="flex-1 flex flex-col gap-6 p-6 relative z-10">
                    <div className="flex gap-6">
                      <div className="bg-slate-700 p-3 rounded-2xl h-fit w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e3e3e3"
                        >
                          <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                        </svg>
                      </div>

                      <div className="text-slate-400 text-sm flex items-center">
                        <h1 className="items-center">Astana, KZ</h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="text-xl font-bold text-white">{time}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 h-full flex">
                <div className="bento-card overflow-hidden cursor-pointer flex transition-all duration-300 hover:scale-[1.01] bg-slate-800/50 backdrop-blur-[4px] rounded-4xl flex-1 relative">
                  <div className="flex-1 flex flex-col justify-center items-center relative z-10">
                    <div className="text-white text-center text-lg font-semibold">
                      Doing nothing is the devil's game
                    </div>
                    <div className="mt-2 text-slate-400 text-sm">
                      — Kama the Bullet
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bento-card relative overflow-hidden cursor-pointer flex transition-all duration-300 hover:scale-[1.01] bg-slate-800/50 backdrop-blur-[4px] rounded-4xl flex-1">
              <div className="flex-1 flex flex-col gap-6 p-8 relative z-10">
                <div className="grow flex flex-col gap-6">
                  <div className="flex gap-6 h-fit items-center">
                    <img
                      src="logo.png"
                      alt="logo"
                      height="128"
                      width="128"
                      className="bg-slate-700 rounded-full h-20 w-20 object-cover"
                    />

                    <div className="space-y-1">
                      <div className="text-white text-2xl font-medium flex gap-3 items-center">
                        Bishimbay Bekarys
                        <img
                          src="verify.png"
                          alt="verify"
                          height="48"
                          width="48"
                          className="h-5 w-5 object-cover"
                        />
                      </div>
                      <div className="text-sm font-medium text-slate-500">
                        @ka15err
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-500">
                    Hi there, I'm a 21-year-old developer from Kazakhstan. I'm
                    passionate about building cool stuff with code and I'm
                    always looking for new challenges.
                    <br />
                    <br />
                    If you're interested in connecting or collaborating — feel
                    free to reach out!
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <a
                    href="https://t.me/ka15err"
                    target="_blank"
                    className="bg-slate-800 rounded-2xl h-12 w-12 flex items-center justify-center hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-slate-400"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.0943 7.14643C17.6874 6.93123 17.9818 6.85378 18.1449 6.82608C18.1461 6.87823 18.1449 6.92051 18.1422 6.94825C17.9096 9.39217 16.8906 15.4048 16.3672 18.2026C16.2447 18.8578 16.1507 19.1697 15.5179 18.798C15.1014 18.5532 14.7245 18.2452 14.3207 17.9805C12.9961 17.1121 11.1 15.8189 11.2557 15.8967C9.95162 15.0373 10.4975 14.5111 11.2255 13.8093C11.3434 13.6957 11.466 13.5775 11.5863 13.4525C11.64 13.3967 11.9027 13.1524 12.2731 12.8081C13.4612 11.7035 15.7571 9.56903 15.8151 9.32202C15.8246 9.2815 15.8334 9.13045 15.7436 9.05068C15.6539 8.97092 15.5215 8.9982 15.4259 9.01989C15.2904 9.05064 13.1326 10.4769 8.95243 13.2986C8.33994 13.7192 7.78517 13.9242 7.28811 13.9134L7.29256 13.9156C6.63781 13.6847 5.9849 13.4859 5.32855 13.286C4.89736 13.1546 4.46469 13.0228 4.02904 12.8812C3.92249 12.8466 3.81853 12.8137 3.72083 12.783C8.24781 10.8109 11.263 9.51243 12.7739 8.884C14.9684 7.97124 16.2701 7.44551 17.0943 7.14643ZM19.5169 5.21806C19.2635 5.01244 18.985 4.91807 18.7915 4.87185C18.5917 4.82412 18.4018 4.80876 18.2578 4.8113C17.7814 4.81969 17.2697 4.95518 16.4121 5.26637C15.5373 5.58382 14.193 6.12763 12.0058 7.03736C10.4638 7.67874 7.39388 9.00115 2.80365 11.001C2.40046 11.1622 2.03086 11.3451 1.73884 11.5619C1.46919 11.7622 1.09173 12.1205 1.02268 12.6714C0.970519 13.0874 1.09182 13.4714 1.33782 13.7738C1.55198 14.037 1.82635 14.1969 2.03529 14.2981C2.34545 14.4483 2.76276 14.5791 3.12952 14.6941C3.70264 14.8737 4.27444 15.0572 4.84879 15.233C6.62691 15.7773 8.09066 16.2253 9.7012 17.2866C10.8825 18.0651 12.041 18.8775 13.2243 19.6531C13.6559 19.936 14.0593 20.2607 14.5049 20.5224C14.9916 20.8084 15.6104 21.0692 16.3636 20.9998C17.5019 20.8951 18.0941 19.8479 18.3331 18.5703C18.8552 15.7796 19.8909 9.68351 20.1332 7.13774C20.1648 6.80544 20.1278 6.433 20.097 6.25318C20.0653 6.068 19.9684 5.58448 19.5169 5.21806Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/b15h1mba1?utm_source=qr"
                    target="_blank"
                    className="bg-slate-800 rounded-2xl h-12 w-12 flex items-center justify-center hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-slate-400"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/%D0%B1%D0%B5%D0%BA%D0%B0%D1%80%D1%8B%D1%81-%D0%B1%D0%B8%D1%88%D0%B8%D0%BC%D0%B1%D0%B0%D0%B9-a92579349/"
                    target="_blank"
                    className="bg-slate-800 rounded-2xl h-12 w-12 flex items-center justify-center hover:scale-110"
                  >
                    <svg
                      class="fill-slate-400"
                      width="20px"
                      height="20px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 382 382"
                    >
                      <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/kLot2005"
                    target="_blank"
                    className="bg-slate-800 rounded-2xl h-12 w-12 flex items-center justify-center hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-slate-400"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden cursor-pointer flex transition-all duration-300 hover:scale-[1.01] bg-slate-800/50 backdrop-blur-[4px] rounded-4xl h-64">
              <div className="flex-1 flex flex-col justify-between p-6 relative z-10">
                <div className="flex gap-4">
                  <div className="bg-slate-700 p-3 rounded-2xl h-fit w-fit flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#e3e3e3"
                    >
                      <path d="M160-240v-480 510-30Zm12.31 60Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21H362q14.46 0 27.81 5.62 13.34 5.61 23.19 15.46L471.92-700h315.77Q818-700 839-679q21 21 21 51.31v160.38q0 12.77-8.62 21.39-8.61 8.61-21.38 8.61t-21.38-8.61q-8.62-8.62-8.62-21.39v-160.38q0-5.39-3.46-8.85t-8.85-3.46H447.38l-80-80H172.31q-5.39 0-8.85 3.46t-3.46 8.85v455.38q0 5.39 3.46 8.85t8.85 3.46h179.23q12.77 0 21.38 8.62 8.62 8.61 8.62 21.38t-8.62 21.38q-8.61 8.62-21.38 8.62H172.31Zm381.46-30 65.92 65.92q8.93 8.93 8.93 20.89t-8.93 21.27q-8.92 9.3-21.19 9.11-12.27-.19-21.19-9.11l-82.77-82.77q-10.85-10.85-10.85-25.31 0-14.46 10.85-25.31l82.77-82.77q8.92-8.92 21-9.11 12.08-.19 21.38 9.11 8.93 8.93 8.93 21.08 0 12.15-8.93 21.08L553.77-210Zm261.69 0-65.92-65.92q-8.92-8.93-8.92-20.89t8.92-21.27q8.92-9.3 21.19-9.11 12.27.19 21.19 9.11l82.77 82.77q10.85 10.85 10.85 25.31 0 14.46-10.85 25.31l-82.77 82.77q-8.92 8.92-21 9.11-12.07.19-21.38-9.11-8.92-8.93-8.92-21.08 0-12.15 8.92-21.08L815.46-210Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="relative overflow-hidden cursor-pointer flex transition-all duration-300 hover:scale-[1.01] bg-slate-800/50 backdrop-blur-[4px] rounded-4xl h-64 col-span-2"></div>

              <div className="relative overflow-hidden cursor-pointer flex transition-all duration-300 hover:scale-[1.01] bg-slate-800/50 backdrop-blur-[4px] rounded-4xl h-64 group"></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`absolute bottom-4 w-full text-center text-slate-600`}>
          Copyright © 2025{" "}
          <a href="https://keshe.dev" className={`text-slate-500`}>
            keshe.dev
          </a>
          . All rights reserved.
        </div>
      </div>
    </>
  );
}

export default App;
