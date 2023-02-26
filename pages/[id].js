import axios from "axios"
import Description from './Components/Description';
import Navbar from "./Components/Navbar";
import {Box} from "@chakra-ui/react"
export async function getServerSideProps(context) {
    let id=context.params.id
  const res=await axios.get(`http://localhost:8080/movie/${id}`);
  return {
    props: {
      data:res.data
    }
  }
}
const MovieDescription = ({data}) => {
    
  return (
    <Box bg='#000'>
        <Navbar />
   <Description data={data} />
    </Box>
  )
}

export default MovieDescription