import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { PlusIcon } from '@radix-ui/react-icons';
import './FAQAccordion.scss';
import { faq } from '@/components/ApplyPage/faqList';

type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <PlusIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div
      className="AccordionContentText"
      dangerouslySetInnerHTML={{ __html: String(children) }}
    />
  </Accordion.Content>
));

AccordionContent.displayName = 'AccordionContent';

export default function FAQAccordion() {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="multiple"
      defaultValue={faq.map(item => String(item.id))}
    >
      {faq.map(item => (
        <Accordion.Item
          className="AccordionItem"
          value={String(item.id)}
          key={item.id}
        >
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
