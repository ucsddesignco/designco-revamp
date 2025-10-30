'use client';

import { useState, useEffect, useCallback } from 'react';
import { Col } from 'react-grid-system';
import { Role } from '@/components/ApplyPage/PositionComponent/utils';
import Image from 'next/image';
const spacer1 = '8px';
const spacer2 = '16px';
const spacer3 = '24px';

export default function Position(props: Role) {
  const [hideSidePanel, setHideSidePanel] = useState(true);

  const handleScroll = () => {
    // Enable/disable document page from scrolling
    if (typeof document !== 'undefined') {
      document.body.style.overflow = hideSidePanel ? 'hidden' : 'scroll';
    }
  };

  const handlePanel = () => {
    // Show and hide panel
    setHideSidePanel(!hideSidePanel);

    // Reset panel scroll position to the top
    if (typeof document !== 'undefined') {
      const panels = document.getElementsByClassName('panel');
      for (let i = 0; i < panels.length; i++) {
        (panels[i] as HTMLElement).scrollTop = 0;
      }
    }

    handleScroll();
  };

  // Enables HTML styling for text input from roles.js
  const htmlDecode = (input: string) => {
    if (typeof document === 'undefined') return input;
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue || '';
  };

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        if (!hideSidePanel) {
          setHideSidePanel(true);
          if (typeof document !== 'undefined') {
            document.body.style.overflow = 'scroll';
          }
        }
      }
    },
    [hideSidePanel]
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', escFunction, false);
      console.log(props);

      return () => {
        document.removeEventListener('keydown', escFunction, false);
      };
    }
  }, [escFunction, props]);

  return (
    <div>
      <Col className="roles" style={{ marginBottom: spacer2 }}>
        <a onClick={handlePanel}>
          <span>
            {props.team} Team – {props.position}
          </span>
        </a>
        <a onClick={handlePanel}>
          <Image
            src="/images/Apply/arrow.svg"
            alt="arrow"
            width="250"
            height="250"
          />
        </a>
      </Col>

      {/* Background brightness */}
      <div
        className={
          hideSidePanel
            ? 'panel-darken panel-darken-close'
            : 'panel-darken panel-darken-open'
        }
        onClick={handlePanel}
      ></div>

      {/* Side panel */}
      <div
        className={
          hideSidePanel
            ? 'panel-wrap panel-wrap-close'
            : 'panel-wrap panel-wrap-open'
        }
      >
        <div className="panel">
          <div className="panelNav">
            <span className="x" onClick={handlePanel}></span>
          </div>
          <div className="panel-content-container">
            <h1 style={{ marginBottom: spacer3 }}>
              {props.team} Team – {props.position}
            </h1>
            <p style={{ marginBottom: spacer3 }}>{props.description}</p>
            <a
              className="apply-v2"
              href="https://docs.google.com/forms/d/e/1FAIpQLScn2ySA1EJqUEZUIRCyMeuOkgT0gN1kMeYhHIW8DdyWl34Jsg/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Apply
            </a>
            <h2 style={{ marginBottom: spacer2 }}>You Will Be</h2>
            <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
              <p
                style={{ marginBottom: spacer1 }}
                dangerouslySetInnerHTML={{
                  __html: htmlDecode(props.duty)
                }}
              />
            </div>

            <h2 style={{ marginBottom: spacer2 }}>
              Other General Responsibilites
            </h2>
            <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
              <p
                style={{ marginBottom: spacer1 }}
                dangerouslySetInnerHTML={{
                  __html: htmlDecode(props.general)
                }}
              />
            </div>

            <h2 style={{ marginBottom: spacer2 }}>What You Can Offer</h2>
            <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
              <p
                style={{ marginBottom: spacer1 }}
                dangerouslySetInnerHTML={{
                  __html: htmlDecode(props.offer)
                }}
              />
            </div>

            <h2 style={{ marginBottom: spacer2 }}>Extra Credit For</h2>
            <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
              <p
                style={{ marginBottom: spacer1 }}
                dangerouslySetInnerHTML={{
                  __html: htmlDecode(props.ec)
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
