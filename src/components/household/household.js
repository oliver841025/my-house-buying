import classes from './household.module.scss';

const Household = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.selection}>
        <p>
          A<span>戶</span>
        </p>
        <div>NT$8,170,000</div>
      </div>
      <div className={classes.selection}>
        <p>
          B<span>戶</span>
        </p>
        <div>NT$8,170,000</div>
      </div>
      <div className={classes.selection}>
        <p>
          C<span>戶</span>
        </p>
        <div>NT$8,170,000</div>
      </div>
      <div className={classes.selection}>
        <p>
          D<span>戶</span>
        </p>
        <div>NT$8,170,000</div>
      </div>
    </section>
  );
};

export default Household;
