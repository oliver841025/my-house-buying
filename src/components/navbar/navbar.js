import classes from './navbar.module.scss';
import Image from 'next/image';
import avatar from '../../../public/avatar.png';
import icon_logo from '../../../public/icon_logo.png';

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.left_block}>
        {/* <Image src={icon_logo} alt="logo" className={classes.logo} /> */}
      </section>
      <section className={classes.right_block}>
        <div>建案詳情</div>
        <Image src={avatar} alt="avatar" className={classes.image} />
      </section>
    </div>
  );
};

export default Navbar;
