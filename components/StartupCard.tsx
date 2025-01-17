import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const { _createdAt, views, image, author: { _id: authorId, name }, title, category, id } = post
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup_card_date'>
          {formatDate(_createdAt)}
        </p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary' />
          <span>{views}</span>
        </div>
      </div>
      <div className='flex-between mt-5 gap-5'>
        <div className='flex-1'>
          <Link href={`/user/${authorId}`}>
            <p className='text-medium-16 line-clamp-1'>{name}</p>
          </Link>
          <Link href={`/startups/${id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link  href={`/user/${authorId}`}>
            <Image src='https://placehold.co/600x400' alt='placeholder' width={48} height={48} className='rounded-full'/>
        </Link>
      </div>
    </li>
  )
}

export default StartupCard
