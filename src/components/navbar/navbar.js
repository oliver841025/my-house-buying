import classes from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.left_block}>
        <div>logo</div>
      </section>
      <section className={classes.right_block}>
        <div>建案詳情</div>
        <div>avatar</div>
      </section>
    </div>
  );
};

export default Navbar;
