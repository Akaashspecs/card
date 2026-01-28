import Image from "next/image";

    const SiliconeCloud = () => {
    return (
        <div  className=" min-h-screen bg-black pt-5">
            <div className="font-[family-name:var(--font-cursive)] relative z-30 px-5 text-center text-3xl text-amber-200 drop-shadow-[0_0_19px_rgba(236,72,153,1)] ">
                "Agar tum yeh dekh rahe ho mtlb tumko ye chota sa saathi mil gya hai ❤️"
            </div>
            <div className="-top-14 h-[300px] w-[300px] mx-auto rounded-full bg-radial from-amber-100 via-black  to-black flex justify-center items-center relative"> 
                <div className="absolute top-[150px] left-[147px] w-[20px] h-[20px] bg-black z-10"></div>
                   <Image src="/photo/silicone-cloud.png" alt="Silicone Cloud" className="relative z-20" width={130} height={130} />

            </div>

            
         
        </div>
    );
};

export default SiliconeCloud;