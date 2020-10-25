import React, {useState} from 'react'
import { styled } from '../stitches.config'
import {useCombobox, useMultipleSelection} from 'downshift'

type Item = {
  name: string,
  id: string
}

type SearchboxProp = {
  items: Item[]
  initialSelectedItems?: Item[]
}

export const Searchbox: React.FC<SearchboxProp> = ({items, initialSelectedItems = []}) => {
  const [inputValue, setInputValue] = useState('')
  
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({ initialSelectedItems })
  
  const getFilteredItems = (items: Item[]) => {
    return items.filter(
      (item) =>
        selectedItems.indexOf(item) < 0 &&
        item.name.toLowerCase().startsWith(inputValue.toLowerCase()),
    )
  }
    
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({inputValue, type, selectedItem}) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem as any)
            selectItem(null)
          }

          break
        default:
          break
      }
    },
  })
  return (
    <Wrapper>
      <ComboboxWrapper>
        {selectedItems.map((selectedItem, index) => (
          <SelectedItem 
            key={`selected-item-${index}`}
            {...getSelectedItemProps({selectedItem, index})}
          >
            {selectedItem.name}
            <SelectedItemIcon
              onClick={() => removeSelectedItem(selectedItem)}
            >
              &#10005;
            </SelectedItemIcon>
          </SelectedItem>
        ))}
        <Combobox {...getComboboxProps()}>
          <ComboboxInput
            {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
          />
          <ComboboxButton {...getToggleButtonProps()} aria-label={'toggle menu'}>
            &#8595;
          </ComboboxButton>
        </Combobox>
      </ComboboxWrapper>
      <ul style={menuStyles} {...getMenuProps()}>
        {isOpen && getFilteredItems(items).map((item, index) => {
          return (
            <li
              style={
                highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
              }
              key={`${item.id}${index}`}
              {...getItemProps({item, index})}
            >
              {item.name}
            </li>
          )
          })}
      </ul>
    </Wrapper>
  )
}

export default Searchbox

const Wrapper = styled('div',{
  position: 'relative'
})

const ComboboxWrapper = styled('div',{
  display: 'flex',
  width: '100%',
  flexWrap: 'nowrap',
  height: 40,
  paddingY: '$1'
})

const Combobox = styled('div',{
  marginLeft: '5px',
  display: 'flex',
  flexWrap: 'nowrap',
  flexGrow:1,
})

const ComboboxButton = styled('button',{
  flexGrow:0,
})

const ComboboxInput = styled('input',{
  flexGrow:1,
})

const SelectedItem = styled('span', {
  display: 'flex',
  paddingX: '$2',
  alignItems: 'center',
  marginLeft: '$2',
  backgroundColor: 'aliceblue',
  borderRadius: 4,
  flexGrow:0,
})

const SelectedItemIcon = styled('span',{
  cursor: 'pointer',
  marginLeft: '$1',
})

const menuStyles = {
  maxHeight: '180px',
  overflowY: 'auto',
  width: '135px',
  margin: 0,
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  top: 40,
  left: 0,
  zIndex: 1000,
  listStyle: 'none',
  padding: 0,
}
