import React from "react";

const Footer = () => {
  return (
    <div>
      <iframe
        title="Sealjet"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1337.2072017296773!2d106.93330889252444!3d47.90901857385925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693fe35a7e1d9%3A0x9216d2241acc9e8c!2sSealjet%20Mongolia!5e0!3m2!1sen!2smn!4v1656399655470!5m2!1sen!2smn"
        width="100%"
        height={300}
        className="pt-4"
      />
      <div className="relative w-full text-center bg-white pt-6 pb-2 border-t">
        <div className="flex flex-row items-center justify-center mx-4">
          <div className="p-2 bg-[#395C4D] w-[100px] rounded-2xl flex items-center justify-center">
            <img src="/img/logo.png" alt="" className="text-center" />
          </div>
          <div className="pl-10">
            <div className="font-bold">Холбоо барих</div>
            <div>+976 9999-1111</div>
            <div>info@sealjet.mn</div>
          </div>
        </div>
        <div className="px-4 pt-2">
          Сальникний үйлвэрлэлийн шийдлээр Монгол улсын зах зээлд тэргүүлэх. Мөн
          дотоодын зах зээлд дараахь үйлдвэрлэл-үйлчилгээг шинээр нэвтрүүлхээр
          зорьж ажиллаж байна.
        </div>
        <div className="pt-2 text-xs">
          {"© 2010-" + new Date().getFullYear() + " Seal Jet ХХК."}
          <div>Оюуны өмчийг хуулиар хамгаалсан болно.</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
