import classes from './location_room.module.scss';

const LocationRoom = () => {
  return (
    <>
      <section className={classes.wrapper}>
        <div>邊間</div>
        <div>大坪數</div>
        <div>近電梯</div>
      </section>
    </>
  );
};

export default LocationRoom;
