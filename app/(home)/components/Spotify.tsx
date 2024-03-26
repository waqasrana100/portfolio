'use client';
import { PinContainer } from '@/components/ui/3d-pin';
import { Spotlight } from '@/components/ui/spotlight';
import { useState } from 'react';
import Image from 'next/image';


interface SpotifyTrack {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
}

const Spotify = () => {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);


  return (
    <div className='sm:h-[70vh] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative'>
      <Spotlight className='-top-40 left-0 md:left-60 md:-top-20' />
      <div className=' p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0'>
        <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
          Latest Trainings:
        </h1>
        <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
          Try pressing or hovering over it :)
        </p>
        <div className='h-[30rem] w-full flex items-center justify-center'>
          <PinContainer
            title='<Support welcomed, learn more @ my channel! <3 />'
            href='https://www.youtube.com/@codewithedraak'
          >
            <div className='flex basis-full flex-col p-1 sm:p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] sm:w-[20rem] h-[20rem] relative'>
            <Image src="/images/yt.svg" alt="ytsvg" width={27} height={27} />
              <h3 className='max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100'>
                {track?.title ?? 'Code With Edraak'}
              </h3>
              <div className='text-base !m-0 !p-0 font-normal'>
                <span className='text-slate-500 '>{track?.artist ?? 'Rana Waqas'}</span>
              </div>
              {true ? (
                <Image
                  className='flex flex-1 w-full rounded-lg mt-4'
                  src="/images/image.png"
                  alt='spotify-image'
                  loading='lazy'
                />
              ) : (
                <>
                <div className=' flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-600 to-yellow-300' />
                </>
              )}
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
