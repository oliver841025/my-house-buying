import classes from './household.module.scss';

const Household = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.selection}>
        <div>A戶</div>
        <div>NT$8,170,000</div>
      </div>
      <div className={classes.selection}>
        <div>A戶</div>
        <div>NT$8,170,000</div>
      </div>
      <div className={classes.selection}>
        <div>A戶</div>
        <div>NT$8,170,000</div>
      </div>
      <div className={classes.selection}>
        <div>A戶</div>
        <div>NT$8,170,000</div>
      </div>
    </section>
  );
};

export default Household;
