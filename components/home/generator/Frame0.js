import QRCode from "react-qr-code"

export default function Frame0 ({qrcodeValue, dataLogo}) {
    return (
        <div className="relative">
            {dataLogo && 
                <div className="absolute left-0 right-0 top-0 bottom-0 m-auto p-2 bg-white rounded-full w-[60px] h-[60px] flex justify-center items-center">
                    <img src={`/img/icon/${dataLogo.name}.png`} className="w-[60px] height-[60px]"/>
                </div>
            }
            <QRCode value={qrcodeValue} className="w-full h-fit"/>
        </div>
    )
}