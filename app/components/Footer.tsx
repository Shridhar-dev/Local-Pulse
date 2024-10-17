import { NextPage } from 'next'

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
  <div className='bg-[#1d1d1d] w-full h-screen text-[#f5f1eb]'>
        <div className='w-full h-4/5 border'>
        <div className='w-full h-4/5 border'>
                <div className='h-full w-3/5 border p-20'>
                    <h3 className='text-4xl'>No Question is too crazy.Ask them seven days a week.</h3>
                </div>
                <div  className='h-full w-2/5'>

                </div>
        </div>

        </div>
  </div>)
}

export default Footer