import { format } from "date-fns";
import { Blog as blogType } from "../../../app/utils/types/types";

function Blog({blog}:{blog:blogType}) {
 
  return (
    <div className="flex flex-col gap-4 my-10 px-4">
      <img src={blog?.image} loading="lazy"  alt={blog?.title} />
      <h3>{blog?.title}</h3>
      <h5>{format(blog.updated_at, "MMMM dd, yyyy")}</h5>
      <p
          dangerouslySetInnerHTML={{ __html: blog.description }}
          className="  "
        />
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
        tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim Magna, sed diam nonumy
        eirmod tempor invidunt ut lab ore et dolore magna aliquyam erat.
        consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim Magna, sed diam nonumy eirmod
        tempor invidunt ut lab ore et dolore magna aliquyam erat. sed diam the
        Demo Label. Avero eos et accusam justo duo dolores. At vero eos et
        accusam duodolores et ea rebum. Lorem to ipsum dolor sit amet conse
        ctuere colorado secrets Resorts and Spas offer adults. Fusce ornare mi
        vel risus porttitor dignissim dummy text here. Lorem Ipsum is simply
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p> */}
    </div>
  );
}

export default Blog;
