import React from "react";

const MobileCat = () => {
  return (
    <div className="fixed bg-white flex flex-nowrap scrollbar w-full text-gray-900 mt-[58px] pl-2 pr-2 pt-4 gap-11 cursor-default sm:hidden">
      <div className="font-semibold">Ангилал1</div>
      <div>Ангилал2</div>
      <div>Ангилал3</div>
      <div>Ангилал4</div>
      <div>Ангилал5</div>
      <div>Ангилал6</div>
      <div>Ангилал7</div>
      <div>Ангилал8</div>
    </div>
  );
};

export default React.memo(MobileCat);
