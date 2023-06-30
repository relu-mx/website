import {JSX} from "react";


export default function Bubble(props: {color: "sender" | "receiver", content: string}) {


    return (
        <span className={`${props.color === "receiver" ? "bg-gray-800 items-end": "bg-blue-400"} text-center  py-4 px-8  rounded-xl `}>
            {props.content}
        </span>
    )
}