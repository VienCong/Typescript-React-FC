import { ChangeEvent, FocusEvent } from 'react';

export const App1 = () => {
  const onchangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('onchangeEvent::', e);
    console.log('onchangeEvent.target::', e.target.value);
  };

  const onBlurEvent = (e: FocusEvent<HTMLInputElement>) => {
    console.log('onBlurEvent::', e);
    console.log('onBlurEvent:target::', e.target.value);
  };
  return (
    <div>
      <input onChange={onchangeEvent} onBlur={onBlurEvent} />
    </div>
  );
};
