import { Link } from "react-router-dom";

type CategoryCardType={
    category:{
        name:string;
        image:string 
    }
}
const CategoryCard = ({category}:CategoryCardType) => {
    return (
        <Link to="/category/1" className="flex flex-col bg-gray-200 hover:bg-black text:black hover:text-white transition-all ease-in-out">
          <img src={category.image} alt="" />
          <p className="text-center font-semibold px-8 py-4 ">
            {category.name}
          </p>
        </Link>
      );
}

export default CategoryCard