import { CDN_URL } from "../Utils/constants";

const RestroCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines,avgRating }= resData?.info
    // console.log(resData.info);
  
    return (
      <div className="mx-4 mb-5 p-5 rounded-sm hover:border-black hover:shadow-xl" style={{ backgroundColor: "#EEEEEE" }}>
        <img className="rounded-lg w-[200px] h-[200px]" src= {CDN_URL+cloudinaryImageId} />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.slice(0,2).join(',')}</h4>
        <h4>Avg-Rating:{avgRating} Stars</h4>
        <h4>Avg ETA:{resData?.info?.sla?.slaString}</h4>
      </div>
    );
  };
  export default RestroCard