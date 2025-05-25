import Marquee from '@/components/ui/marquee'

import techStacks from './techStacksData'

const TechStacks = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl'>
      <Marquee className='[--duration:20s]' pauseOnHover>
        {techStacks.map(({ icon: Icon, name }) => (
          <div key={name} className='flex items-center gap-2 flex-col'>
            <Icon className='size-12 md:max-lg:size-8' />
            <p>{name}</p>
          </div>
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--card-background)]'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--card-background)]'></div>
    </div>
  )
}

export default TechStacks
