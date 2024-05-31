import { Box, Button, Flex, Heading, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <Box p={8}>
      <Heading size="xl" mb={8}>Shopping Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <VStack spacing={4}>
          {cartItems.map(item => (
            <Flex key={item.id} w="100%" justifyContent="space-between" alignItems="center" borderWidth="1px" borderRadius="lg" p={4}>
              <Image src={item.image} alt={item.name} boxSize="100px" />
              <Box flex="1" ml={4}>
                <Heading size="md">{item.name}</Heading>
                <Text mt={2}>${item.price}</Text>
                <Flex mt={2} alignItems="center">
                  <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <Text mx={2}>{item.quantity}</Text>
                  <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                </Flex>
              </Box>
              <IconButton icon={<FaTrash />} aria-label="Remove" onClick={() => removeFromCart(item.id)} />
            </Flex>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Cart;