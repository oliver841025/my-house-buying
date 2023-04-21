import classes from './information.module.scss';

const Information = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <section className={classes.top_section}>
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

        <section className={classes.middle_section}>
          <div>背山</div>
          <div>面水</div>
          <div>高樓層</div>
        </section>

        <section className={classes.bottom_section}>
          <div>A棟</div>
          <div>B棟</div>
          <div>C棟</div>
          <div>D棟</div>
          <div>E棟</div>
        </section>
        <div className={classes.detail_button}>+ 詳細</div>
      </div>
    </>
  );
};

export default Information;
