import QRCode from "react-qr-code"
import Frame1 from "./generator/Frame1";
import Frame2 from "./generator/Frame2";
import Frame0 from "./generator/Frame0";
import { useState } from "react";
import getLogoData from "@/dummy-data/generator/logo";

export default function SwitchComponent({selectedFrame, phraseValue, qrcodeValue, selectedLogo}) {
    const logoData = getLogoData();
    const dataLogo = logoData.find(e => e.name === selectedLogo);

    switch (selectedFrame) {
        case null :
            return <Frame0 qrcodeValue={qrcodeValue} dataLogo={dataLogo}/>
        case 1 : 
            return <Frame1 qrcodeValue={qrcodeValue} dataLogo={dataLogo}/>
        case 2 : 
            return <Frame2 qrcodeValue={qrcodeValue} phraseValue={phraseValue} dataLogo={dataLogo}/>
        default:
            return null;
    }
}