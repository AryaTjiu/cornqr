import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Qr from "../element/Qr";
import { faCarrot, faCrop, faCrown, faDownload, faLink, faSmile, faTowerBroadcast, faTowerCell, faTowerObservation, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import Link from "next/link";
import Frame1 from "./generator/Frame1";
import SwitchComponent from "./SwitchComponent";
import getLogoData from "@/dummy-data/generator/logo";

export default function Generator () {
    const urlInputRef = useRef();
    const canvasContainerRef = useRef();

    const [qrcodeValue, setQrcodeValue] = useState(null);
    const [dataUrl, setDataUrl] = useState(null);

    const [selectedFrame, setSelectedFrame] = useState(null);
    const [phraseValue, setPhraseValue] = useState("SCAN NOW");
    const [selectedLogo, setSelectedLogo] = useState(null);

    const [logoData, setLogoData] = useState(null);

    const downloadCodeURL = async () => {
        const canvas = await html2canvas(canvasContainerRef.current);
        const dataUrl = canvas.toDataURL("image/png");
        setDataUrl(dataUrl);
    }

    const handleDownload = () => {
        if(dataUrl && urlInputRef.current.value.length > 0) {
            console.log(dataUrl, urlInputRef.current.value.length)
            const a = document.createElement("a");
            a.href = dataUrl;
            a.download = "generated_image.png";
            a.click();
        }
    }

    useEffect(() => {
        downloadCodeURL();
    }, [qrcodeValue, selectedFrame, selectedLogo])

    useEffect(() => {
        console.log(getLogoData());
        setLogoData(getLogoData());
    }, [])

    return (
        <div className="my-10 m-0 md:mx-12 lg:mx-24 xl:mx-40 2xl:mx-96 md:border-2 border-slate-300 rounded-lg flex flex-col lg:flex-row md:hadow-2xl overflow-hidden">
            <div className="md:w-full lg:w-[60%] xl:w-[65%] 2xl:w-[70%] p-7 py-10">
                {/* <div className="w-full grid grid-cols-5">
                    <button className="bg-white flex items-center space-x-2 justify-center py-3 border hover:bg-slate-50 hover:text-yellow-400 duration-200">
                        <FontAwesomeIcon icon={faLink}/>
                        <span>
                            Link
                        </span>
                    </button>
                </div> */}
                <form className="mt-5 px-3">
                    {/* submit url */}
                    <div className="flex flex-col space-y-2">
                        <span className="text-lg font-bold">Insert text</span>
                        <input type="text" placeholder="https://insertlink.com or insert your text here" className="p-3 rounded-lg active:outline-none focus:outline focus:bg-neutral-50 duration-200" ref={urlInputRef} onChange={() => setQrcodeValue(urlInputRef.current.value)}></input>
                        <span className="text-xs text-slate-400">Your QR code will open this URL.</span>
                    </div>
                    <hr className="my-7"/>
                    {/* frames */}
                    <div className="bg-white">
                        <div className="flex p-5 text-yellow-400 items-center space-x-2 font-bold">
                            <FontAwesomeIcon icon={faCrop}/>
                            <span>
                                Frames
                            </span>
                        </div>
                        <div className="flex flex-col px-10 pb-10">
                            {/* frame */}
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-3">
                                <div className={`cursor-pointer w-full h-full p-2 border rounded-lg ${selectedFrame == null && "bg-yellow-400"}`} onClick={() => setSelectedFrame(null)}>
                                    <div className="h-full flex items-center justify-center text-2xl text-neutral-700">
                                        <FontAwesomeIcon icon={faX}/>
                                    </div>
                                </div> 
                                <div className={`cursor-pointer w-full h-full p-4 border rounded-lg ${selectedFrame == 1 && "bg-yellow-400"} flex items-center justify-center`} onClick={() => setSelectedFrame(1)}>
                                    <div className="p-[5px] bg-neutral-700 rounded-lg">
                                        <div className="p-4 py-4 bg-white rounded-md"></div>
                                    </div>
                                </div>
                                <div className={`cursor-pointer w-full h-full p-4 border rounded-lg ${selectedFrame == 2 && "bg-yellow-400"}`} onClick={() => setSelectedFrame(2)}>
                                    <div className="p-[5px] bg-neutral-700 rounded-lg">
                                        <div className="p-1 py-4 bg-white rounded-md"></div>
                                        <div className="py-2"></div>
                                    </div>
                                </div>
                                {/*                                 
                                <div className="w-full h-full p-2 border rounded-lg">
                                    <div className="w-[100%] bg-neutral-700 h-[6vh]"></div>
                                </div>
                                <div className="w-full h-full p-2 border rounded-lg">
                                    <div className="w-[100%] bg-neutral-700 h-[6vh]"></div>
                                </div>
                                <div className="w-full h-full p-2 border rounded-lg">
                                    <div className="w-[100%] bg-neutral-700 h-[6vh]"></div>
                                </div>
                                <div className="w-full h-full p-2 border rounded-lg">
                                    <div className="w-[100%] bg-neutral-700 h-[6vh]"></div>
                                </div>
                                <div className="w-full h-full p-2 border rounded-lg">
                                    <div className="w-[100%] bg-neutral-700 h-[6vh]"></div>
                                </div>
                                <div className="w-full h-full p-2 border rounded-lg">
                                    <div className="w-[100%] bg-neutral-700 h-[6vh]"></div>
                                </div> */}
                            </div>
                            {/* frame phrase */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                                <div className="flex flex-col space-y-2">
                                    <label for="phrase" className="font-thin">Frame Phrase</label>
                                    <input type="text" value={phraseValue && phraseValue} onChange={(e) => setPhraseValue(e.target.value)} id="phrase" className="border rounded-lg p-3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* logo */}
                    <div className="bg-white mt-10">
                        <div className="flex p-5 text-yellow-400 items-center space-x-2 font-bold">
                            <FontAwesomeIcon icon={faCarrot}/>
                            <span>
                                Logo
                            </span>
                        </div>
                        <div className="flex flex-col px-10 pb-10">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-3">
                                <div className={`cursor-pointer w-full h-full p-2 border rounded-lg ${selectedLogo == null && "bg-yellow-400"}`} onClick={() => setSelectedLogo(null)}>
                                    <div className="h-full flex items-center justify-center text-2xl text-neutral-700">
                                        <FontAwesomeIcon icon={faX}/>
                                    </div>
                                </div> 
                                {
                                    logoData && 
                                    logoData.map(e => {
                                        return (
                                            <div className={`cursor-pointer w-full h-full p-4 border rounded-lg ${selectedLogo == e.name && "bg-yellow-400"} flex items-center justify-center`} onClick={() => setSelectedLogo(e.name)}>
                                                <div className="h-full flex items-center justify-center">
                                                    <img width="48" height="48" src={`/img/icon/${e.name}.png`} alt={e.name}/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="md:w-fulllg:w-[40%] xl:w-[35%] 2xl:w-[30%] bg-white md:border-l-2 border-slate-300 p-10 py-16">
                <div className="flex flex-col space-y-10">
                    <div className="mx-auto md:w-[45%] lg:w-full p-2" ref={canvasContainerRef}>
                        { qrcodeValue?
                            <SwitchComponent qrcodeValue={qrcodeValue} phraseValue={phraseValue} selectedFrame={selectedFrame} selectedLogo={selectedLogo}/>
                            : <Qr/> 
                        }
                    </div>
                    <button className={`w-full bg-neutral-200 py-3 space-x-2 ${qrcodeValue && "bg-yellow-400  hover:bg-orange-400 duration-200"}`} onClick={handleDownload}>
                        <FontAwesomeIcon icon={faDownload}/>
                        <span>
                            Download PNG
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}