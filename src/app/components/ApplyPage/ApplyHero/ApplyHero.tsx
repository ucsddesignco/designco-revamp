'use client';

import { Row, Col } from 'react-grid-system';
import Image from 'next/image';
import Button from '@/components/Button/Button';

const spacer2 = '16px';
const spacer3 = '24px';

export default function ApplyHero() {
  return (
    <div className="innerContainer">
      <Row>
        <Col md={6}>
          <h1 style={{ marginBottom: spacer2 }}>
            So many boards, here&apos;s why you should choose ours.
          </h1>
          <p style={{ marginBottom: spacer3 }}>
            Applications open until Sunday, January 19th at 11:59PM
          </p>
          <Button
            text="View Open Roles"
            link="/apply#roles"
            ariaLabel="Learn more about Design Co's history, board and more!"
            hasShadow
          />
        </Col>
        <Col md={6}>
          <Image
            src="/images/Apply/board.gif"
            alt="board gif"
            width={600}
            height={600}
          />
        </Col>
      </Row>
    </div>
  );
}
