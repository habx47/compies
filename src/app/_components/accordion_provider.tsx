import React, { ReactNode } from "react";

type ItemValue = `item-${number}`;

type Content = {
  itemValue: ItemValue;
  isDisplayed: boolean;
};

type AccordionContext = {
  content: Content;
  displayContent: (value: ItemValue) => void;
};

export const AccordionContext = React.createContext<
  AccordionContext | undefined
>(undefined);

function AccordionProvider({ children }: { children: ReactNode }): ReactNode {
  const [content, setContent] = React.useState<Content>({
    itemValue: "item-1",
    isDisplayed: true,
  });

  function displayContent(value: ItemValue) {
    if (content.itemValue === value) {
      setContent({
        ...content,
        isDisplayed: !content.isDisplayed,
      });
    } else {
      setContent({
        itemValue: value,
        isDisplayed: true,
      });
    }
  }

  return (
    <AccordionContext.Provider value={{ content, displayContent }}>
      {children}
    </AccordionContext.Provider>
  );
}

export default AccordionProvider;
