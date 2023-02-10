import { 
    Image, 
    Box, 
    Button, 
    Text,
    Input
  } from '@chakra-ui/react'
  import { useForm } from "react-hook-form";
  import { useRef, useState } from 'react';
//   import { useState } from 'react';

  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emails=[]

export default function RegisterForm(){

    const { register, handleSubmit,  formState: { errors } } = useForm();
    // const [chak]
    const ref=useRef(null)

    const onSubmit = (email) => {

        if(ref.current.checked){
            const emailJSONData=localStorage.getItem("emails")
            const emailsData=JSON.parse(emailJSONData)
            const emails=emailsData ? emailsData :  []
            emails.push(email)
            const emailJSONnData=JSON.stringify(emails)
            localStorage.setItem('emails', emailJSONnData)
        }
        // console.log("aa");
        
    }

    return (
        <Box
          width="50%"
          height="100vh"
          pt="200px"
          pr="200px"
        >
         <Image 
         width='170px'
          src='https://cdn.shopify.com/s/files/1/0451/7488/2457/files/FUELL_LOGO_Mini_410x.png?v=1613766535'
          />
          <Text as="h1"
          fontSize="30px"
          mb="50px"
          >
          FUELL Fllow: Ride Into the Future
          </Text>
          <Text as="p"
          fontSize="16px"
          >
          Combining minimalist elegance with a true urban range of 
          150+ miles, the acceleration of a superbike, 
          and a convenient 50L of built-in storage.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            mt="30px"
            width="100%"
            height="30px"
            outline="none"
            placeholder='rudolf@tcf.team'
            {...register("email", 
            {required:"Email  is required", pattern:{
              value: emailPattern, 
              message:"Wrong Email Format"
            }})}
            />
            {
            errors?.email?.message && ( <Text
              color={"red"}
              fontSize="12px"
              >
                {
                  errors?.email?.message
                }
              </Text>)
          }
         
          <Box
          display="flex"
          mb="20px"
          >
            <Input
            type={"checkbox"}
            ref={ref}
            />
            <Text>
            Receive a newsletter about weekly updated products
            </Text>
          </Box>
          <Button
          type='submit'
          width="100%"
          height="50px"
          bgColor="rgb(32, 104, 85)"
          color="white"
          fontWeight="bolder"
          fontSize="15px"
          border="none"
          >
            Subscribe

          </Button>
          </form>
        </Box>
    )
}