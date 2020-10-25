import React, {useState} from 'react'
import { styled } from '../stitches.config'
import { ChevronDown } from 'react-feather'
import { useCombobox, useMultipleSelection } from 'downshift'

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
            <ChevronDown />
          </ComboboxButton>
        </Combobox>
      </ComboboxWrapper>
      <div style={menuWrapperStyles} {...getMenuProps()}>
        {isOpen && getFilteredItems(items).length > 0 && (
          <Menu>
            {getFilteredItems(items).map((item, index) => (
              <MenuItem
                data-focused={highlightedIndex === index ? true : undefined}  
                key={`${item.id}${index}`}
                {...getItemProps({item, index})}
              >
                {item.name}
              </MenuItem>
            ))}
          </Menu>
        )}
      </div>
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
  paddingY: '$2',
  boxShadow: '$smallest',
  '&:focus-within': {
    outline: '-webkit-focus-ring-color auto 1px'
  }
})

const Combobox = styled('div',{
  marginLeft: '5px',
  display: 'flex',
  flexWrap: 'nowrap',
  flexGrow:1,
})

const ComboboxButton = styled('button',{
  flexGrow:0,
  marginX: '$1',
  backgroundColor: 'inherit',
  border: 'none',
  outline: 'none'
})

const ComboboxInput = styled('input',{
  flexGrow:1,
  border: 'none',
  outline: 'none'
})

const SelectedItem = styled('span', {
  display: 'flex',
  paddingX: '$2',
  alignItems: 'center',
  marginLeft: '$2',
  backgroundColor: '$surface',
  borderRadius: 4,
  flexGrow:0,
  outline: 'none'
})

const SelectedItemIcon = styled('span',{
  cursor: 'pointer',
  marginLeft: '$1',
})

const Menu = styled('ul',{
  maxHeight: 240,
  overflowY: 'auto',
  width: '100%',
  background: 'inherit',
  listStyle: 'none',
  padding: 0,
  boxShadow: '$smallest',
  paddingY: '$2',
})

const MenuItem = styled('li',{
  display: 'flex',
  paddingY: '$3',
  paddingX: '$6',
  color: 'inherit',
  textDecoration: 'inherit',
  '&[data-focused]':{
    backgroundColor: '$surface'
  },
  '&:focus': {
    outline: 'none',
    border: 'none'
  }
})


const menuWrapperStyles = {
  margin: 0,
  borderTop: 0,
  position: 'absolute',
  top: 60,
  left: 0,
  right: 0,
  zIndex: 1000,
  padding: 0,
}
