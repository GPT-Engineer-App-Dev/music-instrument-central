import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useCart } from "../hooks/useCart";
import { useParams } from "react-router-dom";

const products = {
  guitars: [
    { id: 1, name: "Guitar 1", description: "Description of Guitar 1", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Guitar 2", description: "Description of Guitar 2", image: "https://via.placeholder.com/300" },
  ],
  keyboards: [
    { id: 1, name: "Keyboard 1", description: "Description of Keyboard 1", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Keyboard 2", description: "Description of Keyboard 2", image: "https://via.placeholder.com/300" },
  ],
  drums: [
    { id: 1, name: "Drum 1", description: "Description of Drum 1", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Drum 2", description: "Description of Drum 2", image: "https://via.placeholder.com/300" },
  ],
};

const Category = () => {
  const { categoryName } = useParams();
  const categoryProducts = products[categoryName] || [];

  const { addToCart } = useCart();

  return (
    <Container maxW="container.xl" p={8}>
      <Heading size="xl" textAlign="center" mb={8}>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</Heading>
      <Flex wrap="wrap" justifyContent="center" spacing={8}>
        {categoryProducts.map(product => (
          <Box key={product.id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading size="md">{product.name}</Heading>
              <Text mt={4}>{product.description}</Text>
              <Button mt={4} colorScheme="teal" onClick={() => addToCart(product)}>Add to Cart</Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Category;