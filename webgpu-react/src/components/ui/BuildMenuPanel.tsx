import { CursorQuery } from "@/interfaces/CursorQuery";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button, ButtonGroup, Card, Stack } from "react-bootstrap";
import { HouseFill, Flower1, Hammer, ShieldFill } from "react-bootstrap-icons";
import { CursorKind } from "./CustomCursor";

/**
 * BuildMenuPanel
 *
 * A bottom-docked build menu for games. Shows a row of rounded tabs with icons.
 * Selecting a tab slides a content panel up from the bottom of the parent container.
 * Tabs are always visible and move up with the panel when opened.
 */

export type BuildMenuButton = {
  key: string;
  icon?: React.ReactNode;
  label?: string;
  description?: string;
  disabled?: boolean;
  fontSize?: number;
  onClick?: () => void;
};

export type BuildMenuTab = {
  key: string;
  icon?: React.ReactNode;
  label?: string;
  content?: React.ReactNode;
  disabled?: boolean;
  hotkey?: string;
};

export type BuildMenuPanelProps = {
  setCursorOverUI: (value: React.SetStateAction<boolean>) => void;
  setCursorMode: (value: React.SetStateAction<CursorKind>) => void;
  tabs?: BuildMenuTab[];
  initialActiveKey?: string | null;
  onTabChange?: (nextKey: string | null) => void;
  panelHeight?: number; // height of the CONTENT area beneath the tabs (px)
  className?: string;
  children?: React.ReactNode;
  closeOnOutsideClick?: boolean; // closes panel when clicking outside the dock
  closeOnEscape?: boolean; // closes panel on Escape key
  hotkey?: string;
};

export default function BuildMenuPanel({
  setCursorOverUI,
  setCursorMode,
  tabs,
  initialActiveKey = null,
  onTabChange,
  panelHeight = 150,
  className,
  children,
  closeOnEscape = true,
  closeOnOutsideClick = true,
  hotkey = "b",
}: BuildMenuPanelProps) {
  const imgStyle: React.CSSProperties = {
    imageRendering: "pixelated",
    pointerEvents: "none",
    aspectRatio: "initial",
    width: "100%",
  };

  const buildButtonStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    background: "none",
    backgroundColor: "none",
    borderRadius: "0px",
    border: "solid 4px white",
    padding: 12,
    boxShadow: "none",
    cursor: "none",
  };

  const terraformButtons = useMemo<BuildMenuButton[]>(
    () => [
      {
        key: "terrain",
        icon: <img src="./icons/icon_paintbrush.png" style={imgStyle} />,
        label: "Terrain",
        description: "Raise/Lower/Level the height of the terrain",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "fluid",
        icon: <img src="./icons/icon_paintbrush.png" style={imgStyle} />,
        label: "Fluid",
        description: "Add or remove fluid.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "antifluid",
        icon: <img src="./icons/icon_paintbrush.png" style={imgStyle} />,
        label: "Anti-Fluid",
        description: "Add or remove anti-fluid.",
        onClick: () => {
          closePanel();
        },
      },
    ],
    []
  );

  const groundUnitsButtons = useMemo<BuildMenuButton[]>(
    () => [
      {
        key: "shooter",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Shooter",
        description: "A basic short range projectile tower.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "cryo",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Cryo",
        description: "A special tower than can flash freeze fluid in place.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "beam",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Beam",
        description:
          "A tower that uses concentrated solar rays to evaporate fluid.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "electro",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Electro",
        description:
          "An electric based tower that shocks the fluid surface speeding up evaporation in an area.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "neutralizer",
        icon: <img src="./sprites/sprayer.png" style={imgStyle} />,
        label: "Neutralizer",
        description:
          "An tower that sprays anit-fluid that destroies fluid on contact.",
        onClick: () => {
          closePanel();
        },
      },
    ],
    []
  );

  const specialUnitsButtons = useMemo<BuildMenuButton[]>(
    () => [
      {
        key: "terraformer",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Terraformer",
        description: "A special tower than can raise/lower the terrain height.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "packer",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Packer",
        description:
          "A preventative tower than can temporarily soak up small amount of fluid.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "repulsor",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Repulsor",
        description: "A tower that creates fields to push back fluid.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "alarm",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Alarm",
        description:
          "An tower that sounds an alarm when fluid gets in a detection radius.",
        onClick: () => {
          closePanel();
        },
      },
    ],
    []
  );

  const econUnitsButtons = useMemo<BuildMenuButton[]>(
    () => [
      {
        key: "solarPanel",
        icon: <img src="./sprites/solar_panel.png" style={imgStyle} />,
        label: "Solar Panel",
        description: "Generates energy in the sun.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "biomassBurner",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Biomass Burner",
        fontSize: 14,
        description: "Burns biomass to generate small amounts of power.",
        onClick: () => {
          closePanel();
        },
      },
    ],
    []
  );

  const infrastructureUnitButtons = useMemo<BuildMenuButton[]>(
    () => [
      {
        key: "connector",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Connector",
        description:
          "A multi-purpose connection node used to transfer power and resources a short.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "longConnector",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Long Connector",
        fontSize: 14,
        description:
          "A multi-purpose connection node used to transfer power and resources a far distance.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "farmer",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Farmer",
        description:
          "An automated farming plot used to generate biomass resources. Requires light to operate.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "light",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Light",
        description:
          "A powered light source that requires a large amount of energy to operate.",
        onClick: () => {
          closePanel();
        },
      },
      {
        key: "battery",
        icon: <img src="./sprites/shooter.png" style={imgStyle} />,
        label: "Battery",
        description: "A way to store electric power.",
        onClick: () => {
          closePanel();
        },
      },
    ],
    []
  );

  const getBuildButtons = (buttons: BuildMenuButton[]) => {
    return (
      <div className="d-flex w-100 justify-content-center align-items-top gap-3">
        {buttons.map((btn) => (
          <div
            key={`${btn.key}-build-group`}
            style={{
              width: buildButtonStyle.width,
              display: "grid",
              placeItems: "center",
            }}
          >
            <Button
              key={`${btn.key}-build-button`}
              disabled={btn.disabled}
              // title={btn.label}
              style={buildButtonStyle}
              onClick={btn.onClick}
              onMouseEnter={() => {
                if (!btn.disabled) {
                  setHotbarTitle(btn.label ?? null);
                  setHotbarLabel(btn.description ?? null);
                  setCursorMode("link");
                }
              }}
              onMouseLeave={() => {
                if (!btn.disabled) {
                  setHotbarTitle(null);
                  setHotbarLabel(null);
                  setCursorMode("default");
                }
              }}
            >
              {btn.icon}
            </Button>
            <p
              key={`${btn.key}-build-button-label`}
              style={{
                textAlign: "center",
                fontSize: btn.fontSize ?? 16,
                whiteSpace: "nowrap",
              }}
            >
              {btn.label}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const defaultTabs = useMemo<BuildMenuTab[]>(
    () => [
      {
        key: "terraform",
        icon: <img src="./icons/icon_paintbrush.png" style={imgStyle} />,
        label: "Terraform",
        hotkey: "1",
        content: getBuildButtons(terraformButtons),
      },
      {
        key: "econ",
        icon: <img src="./icons/icon_coin.png" style={imgStyle} />,
        label: "Economy",
        hotkey: "2",
        content: getBuildButtons(econUnitsButtons),
      },
      {
        key: "infrastructure",
        icon: <img src="./icons/icon_power.png" style={imgStyle} />,
        label: "Infrastructure",
        hotkey: "3",
        content: getBuildButtons(infrastructureUnitButtons),
      },
      {
        key: "groundUnits",
        icon: <img src="./icons/icon_shield.png" style={imgStyle} />,
        label: "Ground Units",
        hotkey: "4",
        content: getBuildButtons(groundUnitsButtons),
      },
      {
        key: "specialUnits",
        icon: <img src="./icons/icon_shield.png" style={imgStyle} />,
        label: "Special Units",
        hotkey: "5",
        content: getBuildButtons(specialUnitsButtons),
      },
    ],
    []
  );

  const _tabs = tabs?.length ? tabs : defaultTabs;
  const [activeKey, setActiveKey] = useState<string | null>(initialActiveKey);
  const [lastKey, setLastKey] = useState<string | null>(initialActiveKey);
  const [hoverKey, setHoverKey] = useState<string | null>(initialActiveKey);
  const dockRef = useRef<HTMLDivElement | null>(null);

  const [hoverButtonKey, setHoverButtonKey] = useState<string | null>(null);
  const [hotbarTitle, setHotbarTitle] = useState<string | null>(null);
  const [hotbarLabel, setHotbarLabel] = useState<string | null>(null);

  const toggle = (key: string) => {
    const next = activeKey === key ? null : key;
    setActiveKey(next);
    onTabChange?.(next);
    if (next != null) setLastKey(next);
  };

  const openLastKey = () => {
    if (lastKey != null) toggle(lastKey);
    else toggle(_tabs[0].key);
  };

  const closePanel = () => {
    setActiveKey(null);
    onTabChange?.(null);
  };

  // Visual constants
  const TAB_H = 48; // px height of the tab bar
  const buttonWidth = 44;
  const buttonHeight = 44;
  const buttonMargin = 2.5;

  const tabStyle: React.CSSProperties = {
    borderTop: "solid white 4px",
    borderLeft: "solid white 4px",
    borderRight: "solid white 4px",
    borderBottom: "none",
    borderRadius: "0px 0px 0px 0px",
    width: buttonWidth,
    height: buttonHeight,
    margin: `0px ${buttonMargin}px`,
    backgroundColor: "rgba(0,0,0,.35)",
    background: "none",
    display: "inline-flex",
    alignItems: "flex-start",
    padding: "4px",
    transition: "ease-in-out 250ms",
    cursor: "none",
  };

  const selectedTabStyle = { ...tabStyle, height: buttonHeight * 2 };
  const hoverTabStyle = { ...tabStyle, height: buttonHeight * 1.5 };

  // Close on click outside (capture phase so game canvas stopPropagation won't block it)
  useEffect(() => {
    if (!closeOnOutsideClick) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!activeKey) return; // already closed
      const target = e.target as Node | null;
      if (!target) return;
      const host = dockRef.current;
      if (!host) return;
      if (!host.contains(target)) {
        setActiveKey(null);
        onTabChange?.(null);
      }
    };
    window.addEventListener("pointerdown", onPointerDown, true);
    return () => window.removeEventListener("pointerdown", onPointerDown, true);
  }, [activeKey, closeOnOutsideClick, onTabChange]);

  // Close on Escape
  useEffect(() => {
    // if (!closeOnEscape) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeKey) {
        closePanel();
      } else if (e.key === hotkey) {
        if (!activeKey) openLastKey();
        else if (activeKey) closePanel();
      } else {
        _tabs.forEach((tab) => {
          if (e.key == tab.hotkey) toggle(tab.key);
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeKey, closeOnEscape, onTabChange]);

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
          cursor: "none",
        }}
      >
        {/* DOCK: contains tabs + sliding content. We slide the whole dock by panelHeight when closed, so tabs remain visible. */}
        <div
          ref={dockRef}
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
            pointerEvents: "none",
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
            <ButtonGroup
              style={{
                display: "inline-flex",
                alignItems: "flex-end",
                pointerEvents: "auto",
              }}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setCursorOverUI(true)}
              onMouseLeave={() => setCursorOverUI(false)}
            >
              {_tabs.map((t) => {
                const selected = activeKey === t.key;
                const hovered = hoverKey === t.key;
                return (
                  <Button
                    className="tabButton"
                    key={t.key}
                    onClick={() => !t.disabled && toggle(t.key)}
                    onMouseEnter={() => {
                      !t.disabled && setHoverKey(t.key);
                      setCursorMode("link");
                      setHotbarTitle(t.label ?? null);
                    }}
                    onMouseLeave={() => {
                      !t.disabled && setHoverKey(null);
                      setCursorMode("default");
                      setHotbarTitle(null);
                    }}
                    // variant={selected ? "warning" : "dark"}
                    disabled={t.disabled}
                    style={
                      selected
                        ? selectedTabStyle
                        : hovered
                        ? hoverTabStyle
                        : tabStyle
                    }
                    aria-label={t.label}
                    // title={t.label}
                  >
                    {t.icon}
                    {/* <span style={{ fontSize: 20, lineHeight: 0 }}>
                      {t.icon}
                    </span> */}
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
            onMouseEnter={() => setCursorOverUI(true)}
            onMouseLeave={() => setCursorOverUI(false)}
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
              {activeKey
                ? _tabs.find((t) => t.key === activeKey)?.content ?? (
                    <div style={{ opacity: 0.8, fontSize: 14 }}>
                      <p style={{ marginBottom: 8 }}>
                        Add your build buttons here for the <b>{activeKey}</b>
                        tab.
                      </p>
                      <p style={{ margin: 0 }}>
                        This area is fully customizable.
                      </p>
                    </div>
                  )
                : _tabs.find((t) => t.key === lastKey)?.content ?? (
                    <div style={{ opacity: 0.8, fontSize: 14 }}>
                      <p style={{ marginBottom: 8 }}>
                        Add your build buttons here for the <b>{activeKey}</b>{" "}
                        tab.
                      </p>
                      <p style={{ margin: 0 }}>
                        This area is fully customizable.
                      </p>
                    </div>
                  )}
            </Card.Body>
          </Card>
          <div style={{ position: "relative", bottom: panelHeight }}>
            {children}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <p>{hotbarTitle}</p>
              <p>{hotbarLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
