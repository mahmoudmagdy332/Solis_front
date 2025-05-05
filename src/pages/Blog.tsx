import { useLanguageSelector } from "../app/slices/languageSlice";
import AllBloges from "../components/blog/AllBloges"
import Hero from "../components/blog/Hero"

const Blog = () => {
  const { translations } = useLanguageSelector((state) => state.LanguageReducer);
  return (
    <div>
         <Hero  title={translations.Blogs}/>
         <AllBloges/>
    </div>
  )
}

export default Blog