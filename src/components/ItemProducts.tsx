import { useRouter } from 'next/router'
import { FC } from 'react'

export interface ItemProductsProps {
  selected?: number
  isSelected: boolean
  name: string
  link?: string
}

const ItemProducts: FC<ItemProductsProps> = ({ name, isSelected, link }) => {
  const { push } = useRouter()

  return (
    <div
      onClick={() => link && push(link)}
      className={` animation hover:scale-110 cursor-none sm:cursor-pointer z-20 ${
        isSelected
          ? `scale-110 active ${name} hover:scale-[1.2]`
          : 'brightness-[.4] hover:brightness-[0.7]'
      }`}
    >
      <img
        src={`/box/box-${isSelected ? name : `${name}-surpresa`}.png`}
        className=' max-w-[70vw] sm:max-w-[18rem]  md:max-w-[24rem] w-[90%] pointer-events-none cursor-none select-none'
        alt={name}
      />
    </div>
  )
}

export default ItemProducts
