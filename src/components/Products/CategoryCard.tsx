import { Link } from "react-router-dom";
import { category } from "../../app/utils/types/types";


const CategoryCard = ({category}:{category:category}) => {
    return (
        <Link to={`/category/${category.id}/${category.name}`} className="flex flex-col h-72 bg-gray-200 hover:bg-black text:black hover:text-white transition-all ease-in-out">
          <img src={category.image} className=" h-64 w-11/12 object-cover" alt="" />
          <p className="text-center font-semibold px-8 py-4 ">
            {category.name}
          </p>
        </Link>
      );
}

export default CategoryCard