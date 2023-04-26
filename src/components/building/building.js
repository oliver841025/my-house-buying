import classes from './building.module.scss';

const Building = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <p>
          A<span>棟</span>
        </p>
        <p>
          B<span>棟</span>
        </p>
        <p>
          C<span>棟</span>
        </p>
        <p>
          D<span>棟</span>
        </p>
        <span className={classes.disabled}>
          E<span>棟</span>
        </span>
      </section>
    </>
  );
};

export default Building;
