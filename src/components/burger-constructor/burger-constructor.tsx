import { FC, useMemo } from 'react';
import { TConstructorIngredient } from '@utils-types';
import { BurgerConstructorUI } from '@ui';
import { useSelector } from 'react-redux';
import { RootState } from 'src/services/store';

export const BurgerConstructor: FC = () => {
  const constructor = useSelector((state: RootState) => state.constructor);

  const constructorItems = constructor.constructorItems;
  const orderRequest = constructor.orderRequest;
  const orderModalData = constructor.orderModalData;

  const onOrderClick = () => {
    if (!constructorItems.bun || orderRequest) return;
  };

  const price = useMemo(
    () =>
      (constructorItems.bun ? constructorItems.bun.price * 2 : 0) +
      constructorItems.ingredients.reduce(
        (s: number, v: TConstructorIngredient) => s + v.price,
        0
      ),
    [constructorItems]
  );

  return (
    <BurgerConstructorUI
      price={price}
      orderRequest={orderRequest}
      constructorItems={constructorItems}
      orderModalData={orderModalData}
      onOrderClick={onOrderClick}
      onClose={() => {}}
    />
  );
};
