import { map } from "lodash";
import { Children, memo, ReactElement, ReactNode } from "react";

interface IShow {
  children?: ReactElement | Array<ReactElement>;
}
interface IShowTrue {
  isTrue: boolean;
  children?: ReactNode;
}
interface IShowElse {
  render?: ReactNode;
  children?: ReactNode;
}
const BaseShow = (props: IShow) => {
  let when: ReactNode | undefined;
  let otherwise: ReactNode | undefined;

  Children.forEach(props.children, (children) => {
    if (children?.props.isTrue === undefined) {
      otherwise = children;
    } else if (!when && children.props.isTrue === true) {
      when = children;
    }
  });

  return when || otherwise;
};

const When = ({ isTrue, children }: IShowTrue) => isTrue && children;
const Else = ({ render, children }: IShowElse) => render || children;
const Show = Object.assign(memo(BaseShow), {
  When: memo(When),
  Else: memo(Else),
});

interface IEach<T> {
  render: (item: T, index: number) => ReactElement;
  of?: Array<T>;
}
const Each = <T = unknown>({ render, of }: IEach<T>) => Children.toArray(map(of, render));

export { Each, Show };
