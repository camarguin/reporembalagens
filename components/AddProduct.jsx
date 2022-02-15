import React, { useState, useEffect } from 'react';
import {
  Text, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Button,
  FormErrorMessage, FormHelperText, Select, Input, Stack, Progress
} from '@chakra-ui/react';
import { imageUpload } from '../utils/imageUpload';
import { postData } from '../utils/fetchData';

const AddProduct = ({ isOpen, onClose }) => {
  const toast = useToast()
  const [urlImg, setUrlImg] = useState('')
  const [uploaded, setUploaded] = useState(false)
  const [progressBar, setProgressBar] = useState(0)
  const initialState = {
    name: '',
    description: '',
    cod: '',
    image: '',
    category: '',
    home: false,
    stock: 1,
  }
  const [product, setProduct] = useState(initialState)
  const { name, description, cod, image, category } = product

  //update the progressBar
  useEffect(() => {
    if (uploaded === true) setProgressBar(100)
    else setProgressBar(0)
  }, [uploaded])

  const handleImageUpload = async (e) => {
    const formData = new FormData()
    const file = e.target.files[0]
    if (file.size > 1024 * 1024) {
      return (
        e.target.value = null,
        toast({
          title: 'Imagem muito grande',
          description: "Tamanho de imagem maior que 1mb, por favor tente novamente com uma imagem menor que 1mb",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      )
    }
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      return (
        e.target.value = null,
        toast({
          title: 'Formato não aceito',
          description: "Imagem deve ser png ou jpeg",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      )
    }
    const urlImage = imageUpload(file).then(res => setProduct({ ...product, image: res.data.url }), setUploaded(true))
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleReset = () => {
    setUploaded(false)
    setUrlImg('')
    setProduct(initialState)
    return onClose()
  }

  const handleSubmit = async () => {
    if (name === '' || description === '' || cod === '' || image === '' || category === '') {
      return toast({
        title: 'Insira os dados',
        description: "Os dados precisam ser inseridos",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    } else
      postData('product', product).then(res => {
        return toast({
          title: 'Produto adicionado',
          description: "Produto foi adicionado com sucesso",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
    setUploaded(false)
    setUrlImg('')
    setProduct(initialState)
    return onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignItems="center">Adicionar Produto</ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <FormControl isRequired>
            <Stack spacing="1">
              <FormLabel htmlFor='name'>Nome</FormLabel>
              <Input id='name' name='name' type='text' value={name} onChange={handleChangeInput} />
              <FormLabel htmlFor='description'>Descrição</FormLabel>
              <Input id='description' name='description' type='text' value={description} onChange={handleChangeInput} />
              <FormLabel htmlFor='cod'>Código</FormLabel>
              <Input id='cod' name='cod' type='text' value={cod} onChange={handleChangeInput} />
              <FormLabel htmlFor='category'>Categoria</FormLabel>
              <Select id='category' name='category' placeholder='Selecione a categoria' value={category} onChange={handleChangeInput}>
                <option value="descartavel">Descartável</option>
                <option value="acessoriosacougue">Acessórios para açougue</option>
                <option value="aluminio">Alumínio</option>
                <option value="condimentos">Condimento</option>
                <option value="filmpvc">Film PVC</option>
                <option value="fitas">Fitas</option>
                <option value="galvanotek">Galvanotek</option>
                <option value="isopor">Isopor</option>
                <option value="limpeza">Limpeza</option>
                <option value="luvasmascarastoucas">Luvas/Máscaras/Toucas</option>
                <option value="mundial">Mundial</option>
                <option value="papel">Papel</option>
                <option value="plastico">Plástico</option>
                <option value="pleion">Pleion</option>
                <option value="sacolas">Sacolas</option>
                <option value="sacoslixo">Sacos de Lixo</option>
                <option value="sacosplasticos">Sacos de Plástico</option>
                <option value="starret">Starrett</option>
                <option value="suporteacessorios">Suporte acessórios</option>
              </Select>
              <FormLabel htmlFor='image'>Imagem</FormLabel>
              <Input
                id='image'
                type="file"
                onChange={handleImageUpload}
                accept="image/png, image/jpeg"
                border="none"
                padding="2px 0px"
                _focus={{ outline: "none" }} />
              <Progress hasStripe value={progressBar} />
            </Stack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" mr={2} onClick={handleSubmit} disabled={!uploaded}>
            Adicionar Produto
          </Button>
          <Button variant="ghost" onClick={handleReset}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProduct;