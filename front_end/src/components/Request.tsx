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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useUser } from './UserState';
import { useNavigate } from 'react-router-dom';

const RequestModal = ({ id, quantity }) => {
  // 控制爱心按钮状态
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  // 控制弹窗
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [request, setRequest] = useState({
    quantity: 0,
    message: ''
  })
  const {fetchClubId} = useUser();

  const handleMakeRequest = async e => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/items/${id}/requests/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...request, by: fetchClubId()}),
    });
    if (response.ok) {
      onClose();
      navigate(`/items/${id}`);
    }
  }
  console.log(request);
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
            <form onSubmit={handleMakeRequest}>
              <NumberInput
                value={request.quantity}
                onChange={(_, value) => setRequest({...request, quantity: value})}
                min={1}
                max={quantity} // CHANGE
                mb={3}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {/* 输入请求消息 */}
              <Textarea
                placeholder="Enter your message"
                value={request.message}
                onChange={e => setRequest({...request, message: e.target.value})}
                mb={3}
              />
              <Button colorScheme="blue" mr={3} type='submit'>
                Submit Request
              </Button>
              <Button variant="ghost" onClick={onClose}>Cancel</Button>
            </form>
            {/* 输入请求数量 */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default RequestModal;
