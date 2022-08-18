const fbTrack = {
  ADD_TO_CART: 'ADD_TO_CART',
  INITIATE_CHECKOUT: 'INITIATE_CHECKOUT',
  ADD_PAYMENT_INFO: 'ADD_PAYMENT_INFO',
  PURCHASE: 'PURCHASE'
}

const fireTrack = (action, payload) => {
  switch (action) {
    case 'ADD_TO_CART':
      console.log('fireTrack', 'AddToCart', {
        content_ids: payload.name,
        content_name: payload.name,
        content_type: payload.type,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        currency: "ARS",
        value: payload.price,
      })
      fbq('track', 'AddToCart', {
        content_ids: payload.name,
        content_name: payload.name,
        content_type: payload.type,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        currency: "ARS",
        value: payload.price,
      })
      break;
    case 'INITIATE_CHECKOUT':
      console.log('fireTrack', 'InitiateCheckout', {
        content_ids: payload.name,
        content_category: payload.category,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        num_items: 1,
        currency: "ARS",
        value: payload.price,
      })
      fbq('track', 'InitiateCheckout', {
        content_ids: payload.name,
        content_category: payload.category,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        num_items: 1,
        currency: "ARS",
        value: payload.price,
      })
      break;
    case 'ADD_PAYMENT_INFO':
      console.log('fireTrack', 'AddPaymentInfo', {
        content_ids: payload.name,
        content_category: payload.category,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        currency: "ARS",
        value: payload.price,
      })
      fbq('track', 'AddPaymentInfo', {
        content_ids: payload.name,
        content_category: payload.category,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        currency: "ARS",
        value: payload.price,
      })
      break;
    case 'PURCHASE':
      console.log('fireTrack', 'Purchase', {
        content_ids: payload.name,
        content_name: payload.name,
        content_type: payload.type,
        num_items: 1,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        currency: "ARS",
        value: payload.price,
      })
      fbq('track', 'Purchase', {
        content_ids: payload.name,
        content_name: payload.name,
        content_type: payload.type,
        num_items: 1,
        contents: [{ 'id': payload.name, 'quantity': 1 }],
        currency: "ARS",
        value: payload.price,
      })
      break;
    default:
      break;
  }
}
