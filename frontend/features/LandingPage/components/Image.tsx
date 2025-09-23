import Image from "next/image";

const ImageComp = ({src}:{src:string}) => {
    return ( 
        <Image alt={src} src={src} width={500} height={500} className="object-cover rounded-sm w-full sm:w-[500px] h-[250px] " />
     );
}
 
export default ImageComp;