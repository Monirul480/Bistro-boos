import img from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Card = () => {
  return (
    <>
    <SectionTitle
    heading={"CHEF RECOMMENDS"}
    subHeading={"Should Try"}
    ></SectionTitle>
      <div className="grid grid-cols-3 my-8 gpa-4">
        <div className="h-[541px] text-center bg-[#F3F3F3] space-y-6 w-[410px]">
          <img className=" h-[300px]" src={img} alt="" />
          <h1>Caeser Salad</h1>
          <p className="px-12">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="btn btn-outline btn-warning">add to cart</button>
        </div>
        <div className="h-[541px] text-center bg-[#F3F3F3] space-y-6 w-[410px]">
          <img className=" h-[300px]" src={img} alt="" />
          <h1>Caeser Salad</h1>
          <p className="px-12">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="btn btn-outline btn-warning">add to cart</button>
        </div>
        <div className="h-[541px] text-center bg-[#F3F3F3] space-y-6 w-[410px]">
          <img className=" h-[300px]" src={img} alt="" />
          <h1>Caeser Salad</h1>
          <p className="px-12">
            Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
          </p>
          <button className="btn btn-outline btn-warning">add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
