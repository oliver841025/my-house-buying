import Building from '../building/building';
import Detail from '../detail/detail';
import Floor from '../floor/floor';
import Household from '../household/household';
import Location from '../location/location';
import Parking from '../parking/parking';
import classes from './information.module.scss';
import Image from 'next/image';

import structure_1 from '../../../public/structure_1.png';
import structure_2 from '../../../public/structure_2.png';
import structure_3 from '../../../public/structure_3.png';
import structure_4 from '../../../public/structure_4.png';
import ground_1 from '../../../public/ground_1.png';
import ground_2 from '../../../public/ground_2.png';
import ground_3 from '../../../public/ground_3.png';
import ground_4 from '../../../public/ground_4.png';
import ground_5 from '../../../public/ground_5.png';
import heart from '../../../public/heart.png';
import airplane from '../../../public/airplane.png';
import DetailHousehold from '../detail_household/detail_household';
import LocationRoom from '../location_room/location_room';
import { useState } from 'react';
import { useEffect } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

const Information = () => {
  const size = useWindowSize();

  return (
    <div className={classes.basic_wrapper}>
      <div className={classes.wrapper}>
        <Detail />
        <Location />
        <Building />
        <p className={classes.detail_button}>
          <span>+</span> 詳細
        </p>
      </div>

      <div className={classes.wrapper}>
        {size.width < 1024 && (
          <div className={classes.image_wrapper}>
            <Image
              src={structure_1}
              alt="structure_1"
              className={classes.image}
            />
            <Image
              src={structure_2}
              alt="structure_2"
              className={classes.image}
            />
            <Image
              src={structure_3}
              alt="structure_3"
              className={classes.image}
            />
            <Image
              src={structure_4}
              alt="structure_4"
              className={classes.image}
            />
          </div>
        )}
        <Location />
        <Floor />
        <p className={classes.detail_button}>
          <span>+</span> 詳細
        </p>
      </div>

      <div className={classes.wrapper}>
        {size.width < 1024 && (
          <div className={classes.image_wrapper}>
            <Image src={ground_1} alt="ground_1" className={classes.image} />
            <Image src={ground_2} alt="ground_2" className={classes.image} />
            <Image src={ground_3} alt="ground_3" className={classes.image} />
            <Image src={ground_4} alt="ground_4" className={classes.image} />
            <Image src={ground_5} alt="ground_5" className={classes.image} />
          </div>
        )}
        <DetailHousehold />
        <LocationRoom />
        <Household />
        <p className={classes.detail_button}>
          <span>+</span> 詳細
        </p>
      </div>

      <div className={classes.wrapper}>
        <Parking />
      </div>

      <div className={classes.wrapper}>
        <div className={classes.contact_desc}>
          推薦設計風格,實際設計價格將有專人將跟你聯絡。
        </div>
        <div className={classes.selection}>新增設計風格 +</div>
      </div>

      <div className={classes.share_wrapper}>
        <div className={classes.share_desc}>
          仍在考慮？先加入願望清單，或分享給至親好友
        </div>
        <Image src={heart} alt="heart" className={classes.heart} />
        <Image src={airplane} alt="airplane" className={classes.airplane} />
      </div>
      <div className={classes.next_btn}>下一步</div>
    </div>
  );
};

export default Information;
