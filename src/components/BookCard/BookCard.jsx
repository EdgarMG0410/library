import Image from "next/image"

const BookCard = ({title, text, price, url}) => {
  return (
    <div className='flex flex-col w-full h-full shadow-2xl shadow-black'>
        <div className="flex m-auto w-[90%] h-3/5 skew-y-2 drop-shadow-2xl">
          <Image src={url} alt={url} width='400' height='400' className="drop-shadow-xl"/>
        </div>
        <div className="flex flex-col m-auto w-[90%] h-[40%]">
          <h2 className="text-2xl font-semibold italic pr-2 capitalize">{title}</h2>
          <p className="my-4 text-xs leading-normal pr-20">{text}</p>
          <h3 className="text-5xl italic font-thin">{price}</h3>
        </div>
    </div>
  )
}

export default BookCard