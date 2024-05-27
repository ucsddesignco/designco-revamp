/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

import './SliderArrow.scss';

type SliderArrowProps = {
  disabled: boolean;
  left?: boolean;
  onClick: (_e: any) => void;
};

// TODO: replace svg with react svg element

export default function SliderArrow({
  disabled,
  left,
  onClick
}: SliderArrowProps) {
  const disabledClass = disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={e => onClick(e)}
      className={`arrow ${left ? 'arrow--left' : 'arrow--right'} ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}
