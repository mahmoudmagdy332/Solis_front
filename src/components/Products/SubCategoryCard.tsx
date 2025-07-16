import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { sub_category } from "../../app/utils/types/types";

function SubCategoryCard({ subCategory }: { subCategory: sub_category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/sub-category/${subCategory.id}/${subCategory.name}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col  bg-gray-200 hover:bg-black text:black hover:text-white transition-all ease-in-out"
    >
      <div className="relative overflow-hidden h-72">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 300 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-72 w-full bg-gray-200 absolute left-0 top-0 z-10  flex p-5 flex-col items-center text-center text-black justify-center "
        >
          {/* {subCategory.list.map((item,idx)=>(
               <div className={`text-center flex justify-center w-full text-sm py-1 ${idx!==0&&'border-t border-gray-500'}`}>{item}</div>
            ))} */}

          {subCategory.features && (
            <p
              dangerouslySetInnerHTML={{ __html: subCategory.features }}
              className="sub_features"
            />
          )}
        </motion.div>

        <motion.div className="image-container absolute left-0 top-0 z-0 w-full transition-all delay-700">
          <img
            src={subCategory.image}
            alt=""
            className="h-72 w-full object-cover transition-all ease-in-out"
          />
        </motion.div>
      </div>

      <p className="text-center font-semibold px-8 py-4 ">{subCategory.name}</p>
    </Link>
  );
}

export default SubCategoryCard;
