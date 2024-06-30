import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ProjectCard = ({title,des,src,gitUrl,webUrl}) => {
  return (
    <div className='w-full px-4 xl:px-6 h-auto xl:py-6 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 border border-[#2f37b3]'>
    <div className='w-full h-[80%] overflow-hidden rounded-lg'>
        <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt='src'/>
    </div>
    <div className='w-full mt-5 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
            <h3 className='text-designColor uppercase font-bold'>{title}</h3>
            <div className='flex gap-2'>
                <a href={gitUrl} target="_blank" rel="noopener noreferrer" className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-200 hover:text-designColor duration-300 cursor-pointer hover:bg-[#FF6347] hover:opacity-70 '>
                <GitHubIcon />
                </a>
                <a href={webUrl} target="_blank" rel="noopener noreferrer" className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-200 hover:text-designColor duration-300 cursor-pointer hover:bg-[#FF6347] hover:opacity-70 '>
                <LanguageIcon/>
                </a>
            </div>
        </div>
        <div>
            <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>
                {des}
            </p>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard
