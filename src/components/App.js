import { useEffect, useState } from 'react';
import '../App.css';

function App() {

  const element = document.documentElement
  const [theme, setTheme] = useState("system");
  const options = [
    {
      icon:"sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    }
  ];

  useEffect(() => {
    switch (theme) {
      
      case "dark":
        element.classList.add("dark")
        localStorage.setItem('theme', 'dark')
        break;

        case "light":
          element.classList.remove("dark")
          localStorage.setItem("theme", "light")
          break;

          case "system":
            element.classList.add("system")
            localStorage.setItem("theme", "system")
            break;

            default:
              localStorage.remove("theme")
              break;
    }
  }, [theme])

  return (
  <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
    <div className="bg-slate-200 dark:text-gray-100 dark:bg-slate-900 duration-100">
          <div className="fixed top-5 right-10 duration-100 dark:bg-slate-700 bg-gray-100 rounded ">
          {
            options?.map(opt => (
            <button
              key={opt.text} 
              onClick={() => setTheme(opt.text)}
              className={`w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600  
              ${theme === opt.text && 'text-sky-900'}`}>
               <ion-icon name={opt.icon}></ion-icon>
            </button>
            ))
          }
      </div>
      </div>
    </section>
  );
}

export default App;
