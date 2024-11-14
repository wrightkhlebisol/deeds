interface TooltipProps {
  text: string;
  style?: string;
}

export default function Tooltip({ text, style }: TooltipProps) {
  if (style === null || style === undefined) { 
    style = '-top-10 -left-3/4';
  }
  return (
    // <div className=" z-10   bg-gray-800   -top-10 -left-1/2   transition-opacity">
    //   {text}
    // </div>
    <div className={`absolute invisible group-hover:visible opacity-0 z-10 group-hover:opacity-100 transition duration-300 bg-red-600 w-32 text-white text-xs p-2 py-1 rounded-lg shadow-lg -translate-x-1/2 ${style}`}>
{text}          </div>
  )
}