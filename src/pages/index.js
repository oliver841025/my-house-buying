import Information from '@/components/information/information';
import Image from 'next/image';
import house_1 from '../../public/house_1.png';
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={classes.image_wrapper}>
        <Image src={house_1} alt="house_1" className={classes.image} />
        <Image src={house_1} alt="house_1" className={classes.image} />
      </div>
      <Information />
    </>
  );
}
