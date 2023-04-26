import classes from './navbar.module.scss';
import Image from 'next/image';
import avatar from '../../../public/avatar.png';

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.left_block}>
        <div>logo</div>
      </section>
      <section className={classes.right_block}>
        <div>建案詳情</div>
        <Image src={avatar} alt="avatar" className={classes.image}/>
      </section>
    </div>
  );
};

export default Navbar;
