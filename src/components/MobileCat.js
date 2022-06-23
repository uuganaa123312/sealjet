import React from "react";

const MobileCat = () => {
  return (
    <div className="fixed bg-white flex flex-nowrap scrollbar w-full text-gray-900 mt-[58px] pl-4 pt-4 pb-4 cursor-default sm:hidden">
      <div className="pr-4 font-semibold">Ангилал1</div>
      <div className="pr-4">Ангилал2</div>
      <div className="pr-4">Ангилал3</div>
      <div className="pr-4">Ангилал4</div>
      <div className="pr-4">Ангилал5</div>
      <div className="pr-4">Ангилал6</div>
      <div className="pr-4">Ангилал7</div>
      <div className="pr-4">Ангилал8</div>
    </div>
  );
};

export default React.memo(MobileCat);
