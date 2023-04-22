import classes from './parking.module.scss';

const Parking = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.selection}>
        <div>必選車位 +</div>
      </div>
      <div className={classes.selection}>
        <div>必選車位 +</div>
      </div>
      <div className={classes.selection}>
        <div>必選車位 +</div>
      </div>
      <div className={classes.selection}>
        <div>加購車位 +</div>
      </div>
    </section>
  );
};

export default Parking;
