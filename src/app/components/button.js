
export default function Button(props) {
    return (
        <button
            className={`rounded-md p-2 w-20 cursor-pointer my-2
            ${props.buttonText == 'add' && ' text-white bg-amber-400 hover:bg-amber-600  '} 
            ${props.buttonText == 'update' && ' text-black bg-yellow-200 hover:bg-yellow-400 '} 
            ${props.className && props.className } 
            `}

         onClick={props.onClick}   
        > {props.buttonText}</button >
    )
}
