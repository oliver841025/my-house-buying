import classes from './detail.module.scss';

const Detail = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div>
          <p className={classes.number}>
            2600<span>萬</span>
          </p>
          <div className={classes.subscription}>總價起</div>
        </div>
        <div>
          <p className={classes.number}>
            26-52<span>坪</span>
          </p>
          <div className={classes.subscription}>坪數區間</div>
        </div>
        <div>
          <p className={classes.number}>
            18<span>樓</span>
          </p>
          <div className={classes.subscription}>樓層</div>
        </div>
      </section>
    </>
  );
};

export default Detail;
