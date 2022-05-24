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
      className={` animation hover:scale-110 cursor-none sm:cursor-pointer ${
        isSelected
          ? `scale-110 active ${name} hover:scale-[1.2]`
          : 'opacity-60 hover:opacity-70'
      }`}
    >
      <img
        src={`/box/box-${name}.png`}
        className=' max-w-[70vw] sm:max-w-[18rem]  md:max-w-[24rem] w-[90%] pointer-events-none cursor-none select-none '
        alt={name}
      />
    </div>
  )
}

export default ItemProducts
