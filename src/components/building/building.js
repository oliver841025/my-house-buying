import classes from './building.module.scss';

const Building = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div>A棟</div>
        <div>B棟</div>
        <div>C棟</div>
        <div>D棟</div>
        <div>E棟</div>
      </section>
    </>
  );
};

export default Building;
