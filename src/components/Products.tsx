import React from 'react'
import ItemProducts, { ItemProductsProps } from './ItemProducts'

const Products = () => {
  const intialDate: ItemProductsProps[] = [
    {
      isSelected: false,
      name: 'nosferatu',
    },
    {
      isSelected: false,
      name: 'frankenstein',
    },
    {
      isSelected: false,
      name: 'mumia',
    },
  ]

  const sales = [1]

  return (
    <div id='products' className='flex justify-center items-center py-10'>
      <div className='flex flex-col sm:flex-row max-w-screen-xl  justify-evenly'>
        <div className='flex flex-col items-start gap-2 sm:w-5/12 p-4'>
          <h2 className='text-[#EB1B28] font-bold text-6xl playfair mb-2'>
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className='text-white avenir text-justify'>
            Estamos trazendo de volta à vida personagens do horror clássico para
            colecionadores e apaixonados. A Coleção Spooky preza pelos detalhes
            da sua concepção à finalização. O colecionador terá em suas mãos uma
            obra exclusiva, limitada e realista. São personagens icônicos que
            marcaram época, cada um à sua maneira. Eles estão presentes no
            cinema, livros, séries e no imaginário mundial.
          </p>
        </div>
        <div className='flex flex-col items-center pt-4 sm:pt-0 justify-center'>
          {intialDate.map(({ name }, index) => (
            <ItemProducts
              isSelected={sales.includes(index + 1)}
              name={name}
              selected={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Products
