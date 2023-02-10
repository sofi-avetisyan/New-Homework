import './App.css';
import { useState } from 'react';
import { 
  Image, 
  Box, 
  Button, 
  Text,
  Input
} from '@chakra-ui/react'
import Slider from './components/Slider';
import RegisterForm from './components/RegisterForm';
const images=[
  "https://cdn.shopify.com/s/files/1/0451/7488/2457/files/Flow-Dark-17_1600x.jpg?v=1613774140",
  "https://cdn.motor1.com/images/mgl/qkobJz/240:0:1439:1080/fuell-fllow-concept---left-side-with-veldt-helmet.webp",
  "https://www.roadracingworld.com/wp-content/uploads/2022/11/FUELL-Fllow-Concept-Exterior-6_1669063304-e1669064182697.jpg",
  "https://inspgr.id/app/uploads/2019/04/design-fuell-motorcycle-feature.jpg",
  "https://cdn.shopify.com/s/files/1/0451/7488/2457/products/FUELLFlowExterior4_1_5000x.jpg?v=1664825240",
  "https://design-milk.com/images/2022/11/FUELL-Fllow-Concept-Studio.jpg"
  
]

function App() {

  const [activeImage, setActiveImage] = useState(images[0])

  const onNext=()=> {
    const activeImageIndex= images.indexOf(activeImage)

  
    const nextActiveImageIndex = activeImageIndex + 1
    const nextActiveImage = images [nextActiveImageIndex]

    if(activeImageIndex === images.length-1){
      setActiveImage(images[0])
    }else{
      setActiveImage(nextActiveImage)
    }
    // console.log(activeImageIndex);
  }

  const onPrev=()=> {
    const activeImageIndex=images.indexOf(activeImage)
    const prevActiveImageIndex = activeImageIndex - 1
    const prevActiveImage = images[prevActiveImageIndex]

    if(activeImageIndex === 0){
      return setActiveImage(images[images.length-1])
    }
    setActiveImage(prevActiveImage)
  }

  const activeImageIndex = () => {
    const activeImgIndex=images.indexOf(activeImage)
    return activeImgIndex
  }


  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
      >
        <Box
        width="50%"
        height="100vh"
        pl="100px"
        pt="200px"
        
        >
         <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         
         >
          <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          >
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
               <Button
              border="none"
              backgroundColor="white"
              fontSize="20px"
              width="30px"
              height="30px"
              onClick={onPrev}
              >&#60;</Button>
               <Image
                width="600px"
                height="380px"
                src={activeImage}/>
               <Button
                border="none"
                backgroundColor="white"
                fontSize="20px"
                width="30px"
                height="30px"
                onClick={onNext}
                >&#62;</Button>


            </Box>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="max-content"
            height="110px"
            margin="0 156px"
          >
            {
              images.map((img, index)=> <Image 
              onMouseOver={e => setActiveImage(e.target.src)}
              key={index}
              src={img}
              style={{border: index===activeImageIndex() ? "2px solid black" : "2px solid white"}}
              width="60px"
              height="60px"
              margin="2px"
              ></Image>)
            }
          </Box>
          </Box>
         </Box> 
        </Box>
        <RegisterForm/>
      </Box>
    </>
  );
}

export default App;
