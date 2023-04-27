import Information from '@/components/information/information';
import Image from 'next/image';
import house_1 from '../../public/house_1.png';
import house_2 from '../../public/house_2.png';
import house_3 from '../../public/house_3.png';
import house_4 from '../../public/house_4.png';
import house_5 from '../../public/house_5.png';
import icon_logo from '../../public/icon_logo.png';
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Image src={icon_logo} alt="logo" className={classes.logo} />
      <div className={classes.basic_wrapper}>
        <div className={classes.image_wrapper}>
          <Image src={house_1} alt="house_1" className={classes.image} />
          <Image src={house_2} alt="house_2" className={classes.image} />
          <Image src={house_3} alt="house_3" className={classes.image} />
          <Image src={house_4} alt="house_4" className={classes.image} />
          <Image src={house_5} alt="house_5" className={classes.image} />
        </div>
        <Information />
      </div>
    </>
  );
}
