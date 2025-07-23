import Paginations from "../Paginations/Paginations";
import SearchInput from "../SearchInput/SearchInput";
import HomePage from "@/pages/HomePage/HomePage";

export default function Home() {
  return (
    <div>
   <HomePage/>
      <SearchInput />
      <Paginations/>
    </div>
  )
}
