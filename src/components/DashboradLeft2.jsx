import React from "react";

const DashboradLeft2 = () => {
  return (
    <div className="w-full border border-gray-200 border-b-2">
      <div className="flex flex-row justify-between w-[800px] h-[175px] pl-[100px] py-[30px]">
        <div className="flex flex-col h-full justify-between text-[#5D5D5D] text-[15px]">
          <p>Skills Required</p>
          <div className="w-[60px] h-6 p-0.5 border-2 rounded-md border-gray-300 flex flex-row">
            <img
              src="https://s3-alpha-sig.figma.com/img/a057/18e5/8cef2281a092b562908b4c6c49b90170?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOCrkOT~mVKoMo0lX6BvO3HBZAyumj8o5E-rRhrgIhy3jBNbej0zdsUmjVz3lJdTeh5W4GBatzEu4BMCFHeY2o8PTwltt6stxNWLTJEhZLkz9XfOuXBZfzvc73igGbqXSEE2cmSaZw-hrG-C6kc-j9Nuy3rUMUSLnNt6WQ~5yuTz~J026z7o7~-5Z~v24ZJUO2r346dRZ94HRFP9KJJunt1eShfM9Aok~GEmsWybUp-yF4hDjxs79rEsGN3xP7xDNWFFXNwfC0~w7q2nBfp5M1lhBK-jo2A0UDCzopY2TmPU0kyCj49yoyAyBM2xu6ALjZC9Z36enTOtbFnlI1j57A__"
              alt="figma"
              width={16}
              height={16}
            />
            <p className="text-[12px] flex items-center">Figma</p>
          </div>
          <div className="w-[120px] h-6 p-0.5 border-2 rounded-md border-gray-300 flex flex-row">
            <img
              src="https://s3-alpha-sig.figma.com/img/2a9e/347a/670a5f99deb267ece6bbca706e140b2e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SbtxqtUW5D~Le83Zm4EHsIg-u6DTtR7~e0uDrMx~zp4KkoEk81147TNQh-LF9VCQrL56Lf8lkZq~NCtBCQd6xMNOeEMQ84xSE2eJSg0d7QJt24Eyv9jrIcOGxc4MvlC3PM4F~gy7P7U8kS~xwZda96bI0LilLcJSYMbldmgRTzSb8e1uo0BVQvYN-wMHNgszwQOfGT6clVh-XRw6fdDRfs0yXyr~XJGPgdNwVME-4cdHiV9GjDl6b7ICx~hClkoOfmtg~gmyQprRjKsPG8SqseLib~q3Q5spTvdokB~3lMYoub1rjLPlwkt0n-cTb~5ZyAbtB1D2mp26UNCVU0ObWQ__"
              alt="figma"
              width={16}
              height={16}
            />
            <p className="text-[12px] pl-1 flex items-center">
              Adobe Illustrator
            </p>
          </div>
          <div className="w-[80px] h-6 p-0.5 border-2 rounded-md border-gray-300 flex flex-row">
            <img
              src="https://s3-alpha-sig.figma.com/img/5193/29bf/3209900f02282f5bf4650dc4e0e5e138?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kukk3M2xErA7m-hIOrvFVvnGa31jb4F5Coufo9CxaNGkQyWXycOYfBRNooiltShWa2PbrgRxR4~uLV2quuMfCXB3WAoocLA2kQrZXCVePIm3qG9cAXiAt~2ktFUb79v6xdOQMtRMUjZq7SEvpPb1RqSxLIw3dQXMEVoGVRSwDq3OFiVRFqhdMEsRcEB0zBDfwwQRed0RhNfgv42bMCzIX89ffwNGTdnBDCG7V0BZYZsOM8pKYmwl--eENbiDy~R9KeSb59dCSD80nU0eBhaq3t9ukT835Uh2Rena0--5jkK5zueuZ8etipqbj~6s4BJVawKPjca2XdIt7geIPXArZg__"
              alt="figma"
              width={16}
              height={16}
            />
            <p className="pl-1 text-[12px] flex items-center">Adobe xd</p>
          </div>
        </div>
        <div className="">
          <p className="text-[#5D5D5D] text-[15px]">Preffered Language</p>
          <div className="text-[16px] font-semibold">English</div>
        </div>
        <div>
          <div className="text-[#5D5D5D] text-[15px]">Type</div>
          <div className="text-[16px] font-semibold">Full Time</div>
        </div>
        <div>
          <div className="text-[#5D5D5D] text-[15px]">Years of Experience</div>
          <div className="text-[16px] font-semibold">3 years of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default DashboradLeft2;
