import React, { useEffect, useMemo, useState } from "react";
import { Modal, Button } from "react-bootstrap";

type Hotkey = string | string[];
type Size = "sm" | "lg" | "xl";

export interface HotkeyModalProps {
  title?: string;
  children?: React.ReactNode;

  /** Key(s) that open the modal. Matches e.key or e.code. Default: "Escape" */
  openKey?: Hotkey;

  /** If provided, custom predicate to decide open. Receives the KeyboardEvent. */
  openWhen?: (e: KeyboardEvent) => boolean;

  /** Ignore hotkey while typing in inputs/textarea/contentEditable. Default: true */
  disableWhileTyping?: boolean;

  /** Start open? Default: false */
  initialShow?: boolean;

  /** Modal props */
  size?: Size;
  centered?: boolean;
  backdrop?: true | false | "static";
  keyboard?: boolean; // allow ESC to close when open (default true)

  /** Callbacks */
  onShow?: () => void;
  onHide?: () => void;

  /** Optional custom footer; if omitted, a Close button is shown */
  footer?: React.ReactNode;
}

function isEditableTarget(t: EventTarget | null) {
  const el = t as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName?.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    (el as HTMLElement).isContentEditable ||
    tag === "select"
  );
}

function matchesHotkey(e: KeyboardEvent, hotkey: Hotkey | undefined) {
  if (!hotkey) return false;
  const list = Array.isArray(hotkey) ? hotkey : [hotkey];
  const key = e.key.toLowerCase();
  const code = e.code.toLowerCase();
  return list.some((k) => {
    const target = k.toLowerCase();
    return key === target || code === target;
  });
}

export default function HotkeyModal({
  title = "Menu",
  children,
  openKey = "Escape",
  openWhen,
  disableWhileTyping = true,
  initialShow = false,
  size,
  centered = true,
  backdrop = true,
  keyboard = true,
  onShow,
  onHide,
  footer,
}: HotkeyModalProps) {
  const [show, setShow] = useState<boolean>(initialShow);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.repeat) return; // avoid auto-repeat spam
      if (disableWhileTyping && isEditableTarget(e.target)) return;

      const shouldOpen = openWhen ? openWhen(e) : matchesHotkey(e, openKey);

      if (shouldOpen) {
        e.preventDefault();
        setShow(true);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [openKey, openWhen, disableWhileTyping]);

  useEffect(() => {
    if (show) onShow?.();
  }, [show, onShow]);

  const close = () => {
    setShow(false);
    onHide?.();
  };

  const maxVh = 80;

  return (
    <>
      <Modal
        show={show}
        onHide={close}
        size={size}
        centered={centered}
        backdrop={backdrop}
        keyboard={keyboard}
        contentClassName="clamped-modal-content"
      >
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body className="clamped-modal-body">{children}</Modal.Body>
        <Modal.Footer>
          {footer ?? (
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      {/* Inline scoped styles */}
      <style>{`
        .clamped-modal-content {
          /* Clamp whole card to ~80% of viewport height */
          max-height: ${maxVh}vh;
          /* Use dvh for mobile browser UI chrome correctness */
          max-height: min(${maxVh}vh, ${maxVh}dvh);
          display: flex;            /* make header/body/footer a column */
          flex-direction: column;
        }
        .clamped-modal-body {
          overflow-y: auto;         /* scroll INSIDE the body */
          /* Allow the body to take remaining space between header & footer */
          flex: 1 1 auto;
          /* Optional: smooth scrolling */
          overscroll-behavior: contain;
        }
      `}</style>
    </>
  );
}
