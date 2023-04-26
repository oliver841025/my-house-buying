import classes from './detail_household.module.scss';

const DetailHousehold = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div>
          <p className={classes.number}>
            26.7<span>萬</span>
          </p>
          <div className={classes.subscription}>單坪價格</div>
        </div>
        <div>
          <p className={classes.number}>
            26.7<span>坪</span>
          </p>
          <div className={classes.subscription}>含車位</div>
        </div>
        <div>
          <p className={classes.number}>
            23<span>%</span>
          </p>
          <div className={classes.subscription}>公設比</div>
        </div>
      </section>
    </>
  );
};

export default DetailHousehold;
