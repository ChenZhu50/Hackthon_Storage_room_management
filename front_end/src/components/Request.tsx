import { useState } from 'react';
import {
  Flex,
  IconButton,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Input,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const RequestModal = () => {
  // 控制爱心按钮状态
  const [liked, setLiked] = useState(false);

  // 控制弹窗
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quantity, setQuantity] = useState(""); // 存储用户输入的数量
  const [message, setMessage] = useState(""); // 存储用户输入的消息

  return (
    <Box  p={6} borderRadius="md"  maxW="500px" position="relative">
      {/* 主要内容 */}
      <Flex gap={3} mt={4}>
        {/* 可点击的爱心按钮 */}
        {/* <IconButton
          aria-label="Like"
          icon={liked ? <FaHeart /> : <FaRegHeart />} // 切换填充/空心图标
          color={liked ? "red.500" : "gray.500"} // 选中时红色，否则灰色
          bg="transparent" // 让按钮背景透明，没有方框
          _hover={{ color: liked ? "red.600" : "gray.600" }} // 悬停时颜色加深
          fontSize="24px" // 让图标更大
          onClick={() => setLiked(!liked)} // 点击切换状态
        /> */}

        {/* Request 按钮，点击打开弹窗 */}
        <Button colorScheme="blue" onClick={onOpen} ml={-20} alignSelf="flex-end">
          Request
        </Button>
      </Flex>

      {/* 弹出窗口 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Request Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* 输入请求数量 */}
            <Input
              placeholder="Enter quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              mb={3}
            />
            {/* 输入请求消息 */}
            <Textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {
              console.log(`Requesting ${quantity} items with message: ${message}`);
              onClose();
            }}>
              Submit Request
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RequestModal;
