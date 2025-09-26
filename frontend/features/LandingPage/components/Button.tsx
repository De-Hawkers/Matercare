import Link from "next/link";

const Button = ({text,link,color,bg}:{text:string,link:string,color:string,bg:string}) => {
    return ( 
        <Link
        href={link}
        style={{
            color: color,
            background: bg,
        }}
        className={` w-full py-2 px-5 rounded-sm text-center flex items-center justify-center font-semibold capitalize  `}
        >
            {text}
        </Link>
     );
}
 
export default Button;