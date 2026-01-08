'use client';

import { Row, Col } from 'react-grid-system';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const spacer2 = '30px';
const spacer3 = '24px';

export default function ApplyHero() {
  return (
    <div className="innerContainer">
      <Row align="center" gutterWidth={64}>
        <Col md={6}>
          <Image
            src="/images/Apply/board.gif"
            alt="board gif"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            unoptimized
          />
        </Col>
        <Col md={6} className="apply-hero-text">
          <h1 style={{ marginBottom: spacer2, lineHeight: '1' }}>
            So many boards, here&apos;s why you should choose ours.
          </h1>
          <p style={{ marginBottom: spacer3 }}>
            Applications open until Sunday, January 18th at 11:59PM
          </p>
          <Button
            onClick={() => {
              document
                .getElementById('roles')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            text="View Open Roles"
            link="/apply#roles"
            ariaLabel="Learn more about Design Co's history, board and more!"
            hasShadow
          />
        </Col>
      </Row>
    </div>
  );
}
