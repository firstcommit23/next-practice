import HeadInfo from '../components/HeadInfo'
import Image from 'next/image'
import introduceStyles from '../styles/Introduce.module.css'
import Link from 'next/link'

const introduce = ({photos}) => {
    return (
        <div>
            <HeadInfo title="introduce" />
            <h1>저를 소개합니다!</h1>
            <ul className={introduceStyles.introduce}>
                        {photos.map(photo=> (
                            <li key={photo.id}>
                                <Link href={`/introduce/${photo.id}`}>
                                    <a>
                                        <Image 
                                        src={photo.thumbnailUrl}
                                        width={100}
                                        height={100}
                                        alt={photo.title} 
                                        />
                                        <span>{photo.title}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
            </ul>
        </div>
    )
}

export default introduce

export const getStaticProps = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
    const photos = await res.json();

    return {
        props: {
            photos
        }
    }
}