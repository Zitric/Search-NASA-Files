import React, { ChangeEvent } from 'react'
import styled from '@emotion/styled'
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Checkbox,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

type SearchInputProps = {
  query: string
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit?: () => void
  isImagesCheck: boolean
  setIsImagesCheck: (value: boolean) => void
  isAudioCheck: boolean
  setIsAudioCheck: (value: boolean) => void
}

export const SearchInput = ({
  query = '',
  handleInputChange,
  isImagesCheck,
  setIsImagesCheck,
  isAudioCheck,
  setIsAudioCheck,
}: SearchInputProps) => {
  const checkboxProps = {
    defaultChecked: true,
    size: 'lg',
    colorScheme: 'green',
  }

  return (
    <Wrapper>
      <InputGroup>
        <Input
          value={query}
          placeholder='Search'
          onChange={handleInputChange}
        />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <CheckboxGroup>
        <Checkbox
          {...checkboxProps}
          value={isImagesCheck ? 0 : 1}
          onChange={event => setIsImagesCheck(event.target.checked)}
        >
          <Text fontSize='2xl'>Images</Text>
        </Checkbox>
        <Checkbox
          {...checkboxProps}
          value={isAudioCheck ? 0 : 1}
          onChange={event => setIsAudioCheck(event.target.checked)}
        >
          <Text fontSize='2xl'>Audio</Text>
        </Checkbox>
      </CheckboxGroup>
    </Wrapper>
  )
}

const CheckboxGroup = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const Wrapper = styled('div')`
  width: 50%;
  min-width: 300px;
  padding-botton: 2rem;
  margin: 2rem;
  > div {
    margin-bottom: 2rem;
  }
`
