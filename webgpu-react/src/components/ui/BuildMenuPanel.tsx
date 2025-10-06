import React, { useMemo, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { HouseFill, Flower1, Hammer, ShieldFill } from "react-bootstrap-icons";

/**
 * BuildMenuPanel
 *
 * A bottom-docked build menu for games. Shows a row of rounded tabs with icons.
 * Selecting a tab slides a content panel up from the bottom of the parent container.
 * Tabs are always visible and move up with the panel when opened.
 */

export type BuildMenuTab = {
  key: string;
  icon?: React.ReactNode;
  label?: string;
  content?: React.ReactNode;
  disabled?: boolean;
};

export type BuildMenuPanelProps = {
  tabs?: BuildMenuTab[];
  initialActiveKey?: string | null;
  onTabChange?: (nextKey: string | null) => void;
  panelHeight?: number; // height of the CONTENT area beneath the tabs (px)
  className?: string;
};

export default function BuildMenuPanel({
  tabs,
  initialActiveKey = null,
  onTabChange,
  panelHeight = 150,
  className,
}: BuildMenuPanelProps) {
  const defaultTabs = useMemo<BuildMenuTab[]>(
    () => [
      { key: "home", icon: <HouseFill />, label: "Home" },
      { key: "grow", icon: <Flower1 />, label: "Grow" },
      { key: "build", icon: <Hammer />, label: "Build" },
      { key: "defend", icon: <ShieldFill />, label: "Defend" },
    ],
    []
  );

  const _tabs = tabs?.length ? tabs : defaultTabs;
  const [activeKey, setActiveKey] = useState<string | null>(initialActiveKey);

  const toggle = (key: string) => {
    const next = activeKey === key ? null : key;
    setActiveKey(next);
    onTabChange?.(next);
  };

  // Visual constants
  const TAB_H = 48; // px height of the tab bar
  const buttonWidth = 44;
  const buttonHeight = 44;
  const buttonMargin = 2.5;

  return (
    <>
      <style>{`
        .tabButton:hover
        {
            height: ${buttonHeight + 4}px;
        }
      `}</style>
      <div
        className={className}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none", // canvas can still receive events except over our UI
          zIndex: 10,
        }}
      >
        {/* DOCK: contains tabs + sliding content. We slide the whole dock by panelHeight when closed, so tabs remain visible. */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: panelHeight + TAB_H,
            transform: activeKey
              ? "translateY(0)"
              : `translateY(${panelHeight}px)`,
            transition: "transform 220ms ease",
            display: "flex",
            flexDirection: "column",
            pointerEvents: "auto",
          }}
        >
          {/* Tabs Row - always visible, attached to top of the dock */}
          <div
            style={{
              height: TAB_H,
              display: "flex",
              justifyContent: "start",
              alignItems: "flex-end",
              gap: 8,
              padding: "0 12px",
              paddingLeft: "100px",
              // background: "rgba(0,0,0,0.65)",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              // boxShadow: "0 -4px 12px rgba(0,0,0,.35)",
            }}
          >
            <ButtonGroup>
              {_tabs.map((t) => {
                const selected = activeKey === t.key;
                return (
                  <Button
                    className="tabButton"
                    key={t.key}
                    onClick={() => !t.disabled && toggle(t.key)}
                    variant={selected ? "warning" : "dark"}
                    disabled={t.disabled}
                    style={{
                      borderTop: "solid white 4px",
                      borderLeft: "solid white 4px",
                      borderRight: "solid white 4px",
                      borderRadius: "0px 0px 0px 0px",
                      width: buttonWidth,
                      height: buttonHeight,
                      margin: `0px ${buttonMargin}px`,
                      display: "grid",
                      placeItems: "center",
                      boxShadow: selected
                        ? "0 0 0 2px rgba(0,0,0,.5) inset, 0 4px 10px rgba(0,0,0,.35)"
                        : "0 2px 6px rgba(0,0,0,.35)",
                    }}
                    aria-label={t.label}
                    title={t.label}
                  >
                    <span style={{ fontSize: 15, lineHeight: 0 }}>
                      {t.icon}
                    </span>
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>

          {/* Panel Content - only interactive when open */}
          <Card
            // bg="dark"
            text="light"
            style={{
              height: panelHeight,
              borderRadius: 0,
              margin: 0,
              boxShadow: activeKey ? "0 -6px 18px rgba(0,0,0,.45)" : "none",
              pointerEvents: activeKey ? "auto" : "none",
              backgroundColor: "rgba(46, 44, 44, 0.51)",
              borderTop: "solid white 4px",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                gap: 12,
                alignItems: "stretch",
                justifyContent: "flex-start",
                padding: 12,
              }}
            >
              {activeKey ? (
                _tabs.find((t) => t.key === activeKey)?.content ?? (
                  <div style={{ opacity: 0.8, fontSize: 14 }}>
                    <p style={{ marginBottom: 8 }}>
                      Add your build buttons here for the <b>{activeKey}</b>{" "}
                      tab.
                    </p>
                    <p style={{ margin: 0 }}>
                      This area is fully customizable.
                    </p>
                  </div>
                )
              ) : (
                <div style={{ opacity: 0.65 }}>
                  Choose a tab to open the menu.
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
