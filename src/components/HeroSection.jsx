import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [roleText, setRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "Frontend Specialist",
    "AI Systems Engineer",
    "Creative Web Craft",
  ];

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];
      if (isDeleting) {
        setRoleText(currentRole.substring(0, roleText.length - 1));
      } else {
        setRoleText(currentRole.substring(0, roleText.length + 1));
      }

      if (!isDeleting && roleText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && roleText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 40 : 90);
    return () => clearTimeout(timer);
  }, [roleText, isDeleting, loopNum]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 max-w-6xl mx-auto w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Info & Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-slate-100/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-700"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for freelance & full-time work</span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Hi, I&apos;m Bishimbay Bekarys
            </h1>

            {/* Serif Subtitle with Typewriter Cursor */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif text-slate-800 font-semibold h-10 sm:h-12 flex items-center">
              <span>{roleText}</span>
              <span className="w-0.5 h-8 bg-slate-900 ml-1 animate-pulse"></span>
            </div>
          </motion.div>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            I create beautiful, functional, and user-centered digital
            experiences. With strong expertise in web engineering, modern
            frameworks, and AI systems, I bring ideas to life through clean code
            and thoughtful design.
          </motion.p>

          {/* Metadata Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 pt-1"
          >
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs">
              <svg className="w-3.5 h-3.5 fill-slate-700" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Based in Astana, KZ</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-xs">
              <svg className="w-3.5 h-3.5 fill-slate-700" viewBox="0 0 24 24">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
              <span>Available Now</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://t.me/ka15err"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors shadow-md shadow-slate-900/20 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <span>Hire Me</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-sm px-6 py-3 rounded-full transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span>Explore Work</span>
            </motion.a>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            variants={itemVariants}
            className="pt-4 border-b border-slate-200"
          ></motion.div>

          {/* Social Links Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 text-sm text-slate-600 font-medium"
          >
            <span>Follow me:</span>
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/kLot2005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                </svg>
              </motion.a>

              {/* Telegram */}
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/ka15err"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.108 7.617C5.4 5.768 8.262 4.55 9.694 3.961c4.088-1.682 4.938-1.974 5.492-1.984.68-.011.86.551.804 1.137-.221 2.302-1.18 7.887-1.668 10.465-.43 2.277-1.958 1.292-3.338.397-1.296-.84-2.028-1.362-3.286-2.182-1.453-.947-.511-1.467.317-2.318.217-.223 3.984-3.61 4.057-3.918.06-.256-.167-.333-.373-.286-.13.029-2.2 1.382-6.21 4.058-.588.399-1.12.593-1.597.583-.66-.014-2.26-.583-3.88-1.492-.097-.277.399-.53 1.096-.804z"></path>
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/%D0%B1%D0%B5%D0%BA%D0%B0%D1%80%D1%8B%D1%81-%D0%B1%D0%B8%D1%88%D0%B8%D0%BC%D0%B1%D0%B0%D0%B9-a92579349/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 382 382">
                  <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/b15h1mba1?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.905 5.42863 19.434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 2D Pixel Art Kirito Developer Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-3 shadow-xl shadow-slate-200/60 overflow-hidden group cursor-pointer space-y-3"
          >
            {/* Image Container */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
              <img
                src="developer-anime.png"
                alt="Kirito SAO 2D Pixel Art - Bekarys Developer at work"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 [image-rendering:pixelated]"
              />
            </div>

            {/* Clean Editorial Footer Badge */}
            <div className="px-2.5 py-1 flex items-center justify-between text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-slate-900">
                  Bishimbay Bekarys
                </span>
              </div>
              <span className="font-mono text-slate-400">@ka15err</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
