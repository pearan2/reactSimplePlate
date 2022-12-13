import { ReactNode, useEffect } from "react";
import { createRoot, Root } from "react-dom/client";
import { useLocation } from "react-router-dom";

/// 알맞게 변경해야함. 지금은 selector 밖에 못쓰지만,
/// alert 과 dialog 도 사용가능하도록 해야함.

type RootKey = "lxSelectorContainer" | "lxSelectorBackgroundContainer";

const rendereds = new Map<string, boolean>();
const roots = new Map<string, Root>();

const useRoot = () => {
  const location = useLocation();

  const keys: RootKey[] = [
    "lxSelectorContainer",
    "lxSelectorBackgroundContainer",
  ];

  const init = () => {
    keys.map(appendBodyToContainer);
  };

  const appendBodyToContainer = (id: string) => {
    const body = document.body;
    const overlayContainer = document.createElement("div");
    overlayContainer.id = id;
    overlayContainer.style.position = "absolute";
    overlayContainer.style.top = "0px";
    overlayContainer.style.left = "0px";
    overlayContainer.style.width = "100%";
    body.appendChild(overlayContainer);
    const newRoot = createRoot(overlayContainer);
    rendereds.set(id, false);
    roots.set(id, newRoot);
  };

  const clearAllChildren = () => {
    roots.forEach((root, key) => {
      if (rendereds.get(key)) {
        rendereds.set(key, false);
        root.unmount();
      }
    });
    init();
  };

  const render = (key: RootKey, child: ReactNode) => {
    rendereds.set(key, true);
    return roots.get(key)!.render(child);
  };

  useEffect(() => {
    const timer = setTimeout(clearAllChildren);
    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return {
    init,
    clearAllChildren,
    render,
  };
};

export default useRoot;
