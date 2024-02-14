export const PLUS = 'PLUS';
export const MINUS = 'MINUS';
export const DECLARE = 'DECLARE';
export const RESET = 'RESET';

export function plus(productFee, shippingFee){
  return {
    type: PLUS,
    payload: {
      productFee,
      shippingFee
    }
  }
}

export function minus(productFee, shippingFee){
  return {
    type: MINUS,
    payload: {
      productFee,
      shippingFee
    }
  }
}

export function declare(productFee, shippingFee){
  return {
    type: DECLARE,
    payload: {
      productFee,
      shippingFee
    }
  }
}

export function reset(){
  return {
    type: RESET
  }
}

