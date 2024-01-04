import QRCode from "react-qr-code"

export default function Frame2 ({qrcodeValue, phraseValue, dataLogo}) {
    return (
        <div className="p-3 bg-black rounded-xl space-y-2">
            <div className="p-2 bg-white rounded-xl relative">
                {dataLogo && 
                    <div className="absolute left-0 right-0 top-0 bottom-0 m-auto p-2 bg-white rounded-full w-[46px] h-[46px] flex justify-center items-center">
                        <img src={`/img/icon/${dataLogo.name}.png`} className="w-[46px] height-[46px]"/>
                    </div>
                }
                <QRCode value={qrcodeValue && qrcodeValue} className="w-full h-fit"/>
            </div>
            <div className="text-center py-2 text-3xl text-white">
                {phraseValue && phraseValue}
            </div>
        </div>
    )
}