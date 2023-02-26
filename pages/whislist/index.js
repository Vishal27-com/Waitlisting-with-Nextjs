import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
  } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'

const Whislist = () => {
    const [data,setData]=useState([])
    const getMovieFromWhislist=async ()=>{
        const res=await axios.get(`http://localhost:8080/whislist`);
         setData(res.data)
    }
    const removeFromWhislist=async (id)=>{
        try {
            await axios.delete(`http://localhost:8080/whislist/${id}`)
            getMovieFromWhislist();
            alert("Removed");
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
   getMovieFromWhislist()
    },[])
  return (
    <Box bg='#000' minHeight='100vh'>
      <Navbar />
    <TableContainer>
    <Table variant='simple' color='skyblue' fontWeight='600'>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Title</Th>
          <Th>Runtime</Th>
          <Th>Director</Th>
          <Th>Remove</Th>
        </Tr>
      </Thead>
      <Tbody>
{
    data.map((item)=>
        <Tr  key={item.id}>
          <Td>{item?.id}</Td>
          <Td>{item?.Title}</Td>
          <Td>{item?.Runtime}</Td>
          <Td>{item?.Director}</Td>
          <Td><Button variant='solid' colorScheme='red' onClick={()=>removeFromWhislist(item?.id)}>Remove</Button></Td>
        </Tr>
    )
}        
        </Tbody>
    </Table>
  </TableContainer>
 
    </Box>
  )
}

export default Whislist