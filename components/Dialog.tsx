import React from "react";
import { styled } from '../stitches.config'
import { useOverlay, OverlayProps, usePreventScroll, useModal } from "@react-aria/overlays";
import { useDialog } from "@react-aria/dialog";
import { FocusScope } from "@react-aria/focus";

type ModalDialogProps = OverlayProps &
  Parameters<typeof useDialog>[0] & {
    children: React.ReactNode;
  };

function ModalDialog(props: ModalDialogProps) {
  let { children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = React.useRef<HTMLDivElement>(null);
  let { overlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <Container>
      <Overlay />
      <FocusScope contain restoreFocus autoFocus>
        <Dialog
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          {children}
        </Dialog>
      </FocusScope>
    </Container>
  );
}

const Container = styled('div', ({
  zIndex: 1000,
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'auto',
}))


const Overlay = styled('div', ({
  backgroundColor: '$text',
  opacity: '0.85',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}))

const Dialog = styled('div', ({
  zIndex: 1000,
  width: '50vw',
  backgroundColor: '$background',
  outline: 'none',
  borderRadius: 12,
}))

export { ModalDialog };
