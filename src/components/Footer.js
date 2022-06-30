import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="hidden md:block"
        style={{
          background:
            "linear-gradient(149.33deg, #395C4D 0.87%, #132D1F 94.27%)",
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 pt-10">
          <div className="text-white">
            <div className="text-3xl font-bold">Хаяг байршил:</div>
            <div>
              109-2, 13th microregion, Narnii zam, 25th khoroo, Улаанбаатар
              13374
            </div>
          </div>
          <div className="flex">
            <svg
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.1386 36.6968C34.974 36.6968 38.8938 32.6633 38.8938 27.6877C38.8938 22.7122 34.974 18.6787 30.1386 18.6787C25.3032 18.6787 21.3833 22.7122 21.3833 27.6877C21.3833 32.6633 25.3032 36.6968 30.1386 36.6968Z"
                fill="#EDFF81"
              />
              <path
                d="M32.7652 13.2733C36.1499 13.2733 38.8938 10.4499 38.8938 6.96697C38.8938 3.48408 36.1499 0.660645 32.7652 0.660645C29.3804 0.660645 26.6365 3.48408 26.6365 6.96697C26.6365 10.4499 29.3804 13.2733 32.7652 13.2733Z"
                fill="white"
              />
              <path
                d="M10.054 36.6427C13.4388 36.6427 16.1827 33.8192 16.1827 30.3363C16.1827 26.8535 13.4388 24.03 10.054 24.03C6.6692 24.03 3.92529 26.8535 3.92529 30.3363C3.92529 33.8192 6.6692 36.6427 10.054 36.6427Z"
                fill="white"
              />
              <path
                d="M12.6281 18.6787C17.4635 18.6787 21.3833 14.6452 21.3833 9.66968C21.3833 4.69413 17.4635 0.660645 12.6281 0.660645C7.79267 0.660645 3.8728 4.69413 3.8728 9.66968C3.8728 14.6452 7.79267 18.6787 12.6281 18.6787Z"
                fill="#EDFF81"
              />
            </svg>
            <div className="pl-4  text-3xl font-bold text-white font-sans">
              Sealjet
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 pb-10">
          <div className="h-[200px] lg:h-[300px] flex flex-col items-center justify-center text-white">
            <img
              src="/img/footer.png"
              alt=""
              className="w-[300px] h-[150px] object-cover lg:w-[403px] lg:h-[227px]"
            />
          </div>
          <div>
            <iframe
              title="Sealjet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.2072017296773!2d106.93330889252444!3d47.90901857385925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693fe35a7e1d9%3A0x9216d2241acc9e8c!2sSealjet%20Mongolia!5e0!3m2!1sen!2smn!4v1656399655470!5m2!1sen!2smn"
              className="w-[300px] h-[150px] object-cover lg:w-[403px] lg:h-[227px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-start gap-20 max-w-7xl mx-auto pb-10 px-4">
          <div className="text-[#A2BDAA] cursor-pointer hover:text-white">
            <svg
              width={40}
              height={41}
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => window.open("https://www.facebook.com/", "_blank")}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5ZM20 10.5C25.5 10.5 30 15 30 20.5C30 25.5 26.375 29.75 21.375 30.5V23.375H23.75L24.25 20.5H21.5V18.625C21.5 17.875 21.875 17.125 23.125 17.125H24.375V14.625C24.375 14.625 23.25 14.375 22.125 14.375C19.875 14.375 18.375 15.75 18.375 18.25V20.5H15.875V23.375H18.375V30.375C13.625 29.625 10 25.5 10 20.5C10 15 14.5 10.5 20 10.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-[#A2BDAA] cursor-pointer hover:text-white">
            <svg
              width={40}
              height={41}
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => window.open("https://twitter.com/", "_blank")}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5ZM27.625 14.875C28.5 14.75 29.25 14.625 30 14.25C29.5 15.125 28.75 15.875 27.875 16.375C28.125 22.25 23.875 28.625 16.25 28.625C14 28.625 11.875 27.875 10 26.75C12.125 27 14.375 26.375 15.875 25.25C14 25.25 12.5 24 12 22.375C12.625 22.5 13.25 22.375 13.875 22.25C12 21.75 10.625 20 10.625 18.125C11.25 18.375 11.875 18.625 12.5 18.625C10.75 17.375 10.125 15 11.25 13.125C13.375 15.625 16.375 17.25 19.75 17.375C19.125 14.875 21.125 12.375 23.75 12.375C24.875 12.375 26 12.875 26.75 13.625C27.75 13.375 28.625 13.125 29.375 12.625C29.125 13.625 28.5 14.375 27.625 14.875Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-[#A2BDAA] cursor-pointer hover:text-white">
            <svg
              width={40}
              height={41}
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                window.open("https://www.instagram.com/", "_blank")
              }
            >
              <path
                d="M20 24C18.125 24 16.5 22.5 16.5 20.5C16.5 18.625 18 17 20 17C21.875 17 23.5 18.5 23.5 20.5C23.5 22.375 21.875 24 20 24Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.25 12H15.75C14.75 12.125 14.25 12.25 13.875 12.375C13.375 12.5 13 12.75 12.625 13.125C12.3283 13.4217 12.1881 13.7185 12.0186 14.0771C11.9739 14.1717 11.9271 14.2707 11.875 14.375C11.8557 14.433 11.8333 14.494 11.8094 14.5594C11.6786 14.9167 11.5 15.4047 11.5 16.25V24.75C11.625 25.75 11.75 26.25 11.875 26.625C12 27.125 12.25 27.5 12.625 27.875C12.9217 28.1717 13.2185 28.3119 13.5771 28.4814C13.6717 28.5261 13.7706 28.5728 13.875 28.625C13.933 28.6443 13.994 28.6667 14.0594 28.6906C14.4167 28.8214 14.9047 29 15.75 29H24.25C25.25 28.875 25.75 28.75 26.125 28.625C26.625 28.5 27 28.25 27.375 27.875C27.6717 27.5783 27.8119 27.2815 27.9814 26.9229C28.0261 26.8283 28.0728 26.7293 28.125 26.625C28.1443 26.567 28.1667 26.506 28.1906 26.4406C28.3214 26.0833 28.5 25.5953 28.5 24.75V16.25C28.375 15.25 28.25 14.75 28.125 14.375C28 13.875 27.75 13.5 27.375 13.125C27.0783 12.8283 26.7815 12.6881 26.4229 12.5186C26.3284 12.474 26.2292 12.4271 26.125 12.375C26.067 12.3557 26.006 12.3333 25.9406 12.3094C25.5833 12.1786 25.0953 12 24.25 12ZM20 15.125C17 15.125 14.625 17.5 14.625 20.5C14.625 23.5 17 25.875 20 25.875C23 25.875 25.375 23.5 25.375 20.5C25.375 17.5 23 15.125 20 15.125ZM26.75 15C26.75 15.6904 26.1904 16.25 25.5 16.25C24.8096 16.25 24.25 15.6904 24.25 15C24.25 14.3096 24.8096 13.75 25.5 13.75C26.1904 13.75 26.75 14.3096 26.75 15Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 20.5C0 9.45431 8.95431 0.5 20 0.5C31.0457 0.5 40 9.45431 40 20.5C40 31.5457 31.0457 40.5 20 40.5C8.95431 40.5 0 31.5457 0 20.5ZM15.75 10.125H24.25C25.375 10.25 26.125 10.375 26.75 10.625C27.5 11 28 11.25 28.625 11.875C29.25 12.5 29.625 13.125 29.875 13.75C30.125 14.375 30.375 15.125 30.375 16.25V24.75C30.25 25.875 30.125 26.625 29.875 27.25C29.5 28 29.25 28.5 28.625 29.125C28 29.75 27.375 30.125 26.75 30.375C26.125 30.625 25.375 30.875 24.25 30.875H15.75C14.625 30.75 13.875 30.625 13.25 30.375C12.5 30 12 29.75 11.375 29.125C10.75 28.5 10.375 27.875 10.125 27.25C9.875 26.625 9.625 25.875 9.625 24.75V16.25C9.75 15.125 9.875 14.375 10.125 13.75C10.5 13 10.75 12.5 11.375 11.875C12 11.25 12.625 10.875 13.25 10.625C13.875 10.375 14.625 10.125 15.75 10.125Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative w-full text-center bg-white pt-6 pb-2 border-t md:hidden">
        <div className="flex flex-row items-center justify-between mx-4">
          <div className="p-2 bg-[#395C4D] w-[100px] rounded-2xl flex items-center justify-center">
            <img src="/img/logo.png" alt="" className="text-center" />
          </div>
          <div className="pl-10">
            <div className="font-bold">Холбоо барих</div>
            <div>+976 9999-1111</div>
            <div>info@sealjet.mn</div>
          </div>
        </div>
        <div className="pt-4 text-xs">
          {"© 2010-" + new Date().getFullYear() + " Seal Jet ХХК."}
          <div>Оюуны өмчийг хуулиар хамгаалсан болно.</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
