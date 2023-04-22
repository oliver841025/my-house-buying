import classes from './detail.module.scss';

const Detail = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div>
          <div className={classes.number}>2600萬</div>
          <div>總價起</div>
        </div>
        <div>
          <div className={classes.number}>26-52坪</div>
          <div>坪數區間</div>
        </div>
        <div>
          <div className={classes.number}>18樓</div>
          <div>樓層</div>
        </div>
      </section>
    </>
  );
};

export default Detail;
