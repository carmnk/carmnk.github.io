import * as React from "react";

export const useCombinedRefs = <T = any>(...refs: React.MutableRefObject<T | undefined>[]) => {
  const TargetRef: React.MutableRefObject<T | undefined> = React.useRef<T>();

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") {
        (ref as any)(TargetRef.current);
      }
      ref.current = TargetRef.current;
    });
  }, [refs]);
  return TargetRef;
};

export const isRefValid = <T = any>(ref: React.MutableRefObject<T | undefined>): ref is React.MutableRefObject<T> => {
  if (ref !== null && ref !== undefined) if (ref.current !== null && ref.current !== undefined) return true;
  return false;
};
