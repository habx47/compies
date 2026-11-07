"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../../../lib/helpers";

type Tab = `tab${number}`;
type TabAction = {
  type: Tab;
  value: Tab;
};

type TabContextType = {
  tab: Tab;
  dispatch: React.ActionDispatch<[action: TabAction]>;
};
const TabContext = React.createContext<TabContextType | undefined>(undefined);

function reducer(_tab: Tab, action: TabAction) {
  switch (action.type) {
    default: {
      return action.value;
    }
  }
}

function Tabs({ children }: { children: ReactNode }): ReactNode {
  const [tab, dispatch] = React.useReducer(reducer, "tab1");

  React.useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      const activeElement = document.activeElement as HTMLElement | null;
      if (!activeElement) return;
      const parent = activeElement.parentElement;

      const navigationMap: Record<string, Element | null | undefined> = {
        ArrowLeft: activeElement.previousElementSibling,
        ArrowRight: activeElement.nextElementSibling,
        Home: parent?.firstElementChild,
        End: parent?.lastElementChild,
      };

      if (event.code in navigationMap) {
        event.preventDefault();
        const targetElement = navigationMap[event.code] as HTMLElement | null;

        if (targetElement) {
          targetElement.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <TabContext.Provider value={{ tab, dispatch }}>
      <Wrapper>{children}</Wrapper>
    </TabContext.Provider>
  );
}

function useTab() {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used withiin a <Tab /> provider");
  }

  return context;
}

function List({ children }: { children: ReactNode }): ReactNode {
  return (
    <TabList role="tablist" tabIndex={0}>
      {children}
    </TabList>
  );
}

function Trigger({
  value,
  children,
}: {
  value: Tab;
  children: ReactNode;
}): ReactNode {
  const { tab, dispatch } = useTab();
  return (
    <Button
      onFocus={() => {
        if (value === tab) {
          return;
        }
        dispatch({
          type: value,
          value: value,
        });
      }}
      role="tab"
      aria-selected={tab === value}
      aria-controls={value}
      tabIndex={value === tab ? 0 : -1}
      $value={value}
      $tab={tab}
    >
      {children}
    </Button>
  );
}

function Content({
  value,
  children,
}: {
  value: Tab;
  children: ReactNode;
}): ReactNode {
  const { tab } = useTab();
  return (
    <TabContent
      $value={value}
      $tab={tab}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={value}
    >
      {children}
    </TabContent>
  );
}

const Wrapper = styled.div`
  width: 350px;
  max-width: 100%;
  border: 1px solid ${COLORS.dark};
  border-radius: 6px;
`;

const TabList = styled.div`
  display: flex;
  outline: none;
`;

const Button = styled.button<{ $value: Tab; $tab: Tab }>`
  border: none;
  background: transparent;
  padding: 12px 18px;
  border-bottom: ${(props) =>
    Object.is(props.$tab, props.$value) ? "1px solid currentColor" : "none"};

  ${TabList} & {
    flex: 1;
  }
`;

const TabContent = styled.div<{ $value: Tab; $tab: Tab }>`
  border-top: 1px solid ${COLORS.dark};
  padding: 16px;
  display: ${(props) =>
    Object.is(props.$tab, props.$value) ? "revert" : "none"};
`;

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
