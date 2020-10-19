import React from "react";
import { styled } from '../stitches.config'

import { useMenu, useMenuItem } from "@react-aria/menu";
import { AriaMenuProps } from "@react-types/menu";
import { Node } from "@react-types/shared";
import { Item } from "@react-stately/collections";
import { useTreeState, TreeState } from "@react-stately/tree";
import { useFocus } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";

function Menu<T extends object>(props: AriaMenuProps<T>) {
  let state = useTreeState({ ...props, selectionMode: "none" });
  let ref = React.useRef<HTMLUListElement>(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <StyledList {...menuProps} ref={ref}>
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          onAction={props.onAction}
        />
      ))}
    </StyledList>
  );
}

interface MenuItemProps<T> {
  item: Node<T>;
  state: TreeState<T>;
  onAction?: (key: React.Key) => void;
}

export function MenuItem<T>({ item, state, onAction }: MenuItemProps<T>) {
  // Get props for the menu item element
  let ref = React.useRef<HTMLLIElement>(null);
  let { menuItemProps } = useMenuItem(
    {
      key: item.key,
      onAction
      //isDisabled: item.isDisabled,
    },
    state,
    ref
  );

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  let [isFocused, setFocused] = React.useState(false);
  let { focusProps } = useFocus({ onFocusChange: setFocused });

  return (
    <StyledItem
      {...mergeProps(menuItemProps, focusProps)}
      data-focused={isFocused ? true : undefined}
      ref={ref}
    >
      {item.rendered}
    </StyledItem>
  );
}

const StyledList = styled('ul', ({
  paddingY: '$2',
}))

const StyledItem = styled('li', ({
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
}))

export { Menu, Item };
