import {ReactNode} from "react";
import {Accordion} from "radix-ui";
import styles from "./AccordionPrimitive.module.css"

interface AccordionItemPropTypes {
    headerText: string,
    descriptionText: string,
}

export interface AccordionPrimitivePropTypes {
    triggerIcon: ReactNode
    accordionItems: AccordionItemPropTypes[];
    colorScheme: string,
}

export default function AccordionPrimitive(
    {triggerIcon, accordionItems, colorScheme}: AccordionPrimitivePropTypes
): ReactNode {
    return (
        <Accordion.Root type="multiple" className={`${styles.accordionRoot} ${colorScheme}`}>

            {
                accordionItems.map((accordionItem, i) => {
                    return (
                        <Accordion.Item key={i}
                                        value={`item-${i}`
                                        }
                                        className={`${styles.accordionItem} ${colorScheme} boldN`
                                        }>

                            <Accordion.Header className={`${styles.accordionHeader} ${colorScheme}`}>
                                <Accordion.Trigger className={`${styles.accordionTrigger} boldN ${colorScheme}`
                                }>
                                    <>
                                        {accordionItem.headerText}

                                        {triggerIcon}
                                    </>
                                </Accordion.Trigger>
                            </Accordion.Header>

                            <Accordion.Content className={`${styles.accordionContent} ${colorScheme}`}>
                                <div>
                                    {accordionItem.descriptionText}
                                </div>
                            </Accordion.Content>
                        </Accordion.Item>
                    )
                })
            }
        </Accordion.Root>
    )
}
