import Container from "@/components/common/container";
import React from "react";
import { directusClient } from "@/lib/directus_client";
import {  readItems } from '@directus/sdk';

const fetchData = () => {
  return directusClient.request(
    readItems('Startups', {
      fields: ['id', {in: ['*']}]
    })
  )
};


const Detailpage = async() => {
  const result = await fetchData()
  console.log(result)
  return (
    <Container>
      <h1>name</h1>
    </Container>
  )
};

export default Detailpage;
